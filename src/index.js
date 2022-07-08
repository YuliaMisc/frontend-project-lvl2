import _ from 'lodash';
import getFile from './getfile.js';

const genDiff = (fileName1, fileName2) => {
  const file1 = getFile(fileName1);
  const file2 = getFile(fileName2);

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
