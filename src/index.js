import _ from 'lodash';
import path from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const genDiff = (fileName1, fileName2) => {
  const currentPath = cwd();

  const findFile1 = readFileSync(
    path.resolve(currentPath, '__fixture__', fileName1)
  );
  const file1 = JSON.parse(findFile1);

  const findFile2 = readFileSync(
    path.resolve(currentPath, '__fixture__', fileName2)
  );
  const file2 = JSON.parse(findFile2);

  const keysObjFile1 = Object.keys(file1);
  const keysObjFile2 = Object.keys(file2);

  const commonKeys = _.union(keysObjFile1, keysObjFile2);
  const sortCommonKeys = _.sortBy(commonKeys);

  const arrayStrings = sortCommonKeys.reduce((acc, key) => {
    if (file1[key] === file2[key]) {
      acc.push(` ${key}: ${file1[key]}`);
    } else if (!Object.hasOwn(file2, key)) {
      acc.push(`-${key}: ${file1[key]}`);
    } else if (!Object.hasOwn(file1, key)) {
      acc.push(`+${key}: ${file2[key]}`);
    } else if (file1[key] !== file2[key]) {
      acc.push(`-${key}: ${file1[key]}`);
      acc.push(`+${key}: ${file2[key]}`);
    }
    return acc;
  }, []);

  const result = `{\n${arrayStrings.join('\n')}\n}`;
  return result;
};

export default genDiff;
