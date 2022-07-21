import parse from './parsers.js';
import buildTree from './buildTree.js';
import selectionFormat from './formates/index.js';
import { readFile, getFilePath, getTypeFile } from './readfile.js';

const genDiff = (fileName1, fileName2, format = 'stylish') => {
  const falePath1 = getFilePath(fileName1);
  const falePath2 = getFilePath(fileName2);

  const file1 = readFile(falePath1);
  const file2 = readFile(falePath2);

  const typeFile1 = getTypeFile(falePath1);
  const typeFile2 = getTypeFile(falePath2);

  const obj1 = parse(file1, typeFile1);
  const obj2 = parse(file2, typeFile2);

  const tree = buildTree(obj1, obj2);
  const result = selectionFormat(tree, format);
  return result;
};

export default genDiff;
