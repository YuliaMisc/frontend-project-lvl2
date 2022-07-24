import { cwd } from 'process';
import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import selectionFormat from './formates/index.js';

const getFilePath = (fileName) => {
  const currentPath = cwd();
  return resolve(currentPath, fileName);
};

const readFile = (filePath) => readFileSync(filePath, 'utf-8');

const getExtensionFile = (falePath) => extname(falePath);

const genDiff = (fileName1, fileName2, format = 'stylish') => {
  const falePath1 = getFilePath(fileName1);
  const falePath2 = getFilePath(fileName2);

  const file1 = readFile(falePath1);
  const file2 = readFile(falePath2);

  const extensionFile1 = getExtensionFile(falePath1);
  const extensionFile2 = getExtensionFile(falePath2);

  const obj1 = parse(file1, extensionFile1);
  const obj2 = parse(file2, extensionFile2);

  const tree = buildTree(obj1, obj2);
  const result = selectionFormat(tree, format);
  return result;
};

export default genDiff;
