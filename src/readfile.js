import { cwd } from 'process';
import { readFileSync } from 'fs';
import { extname, resolve } from 'path';

const getFilePath = (fileName) => {
  const currentPath = cwd();
  return resolve(currentPath, fileName);
};

export const readFile = (fileName) => readFileSync(getFilePath(fileName), 'utf-8');

export const getExtName = (fileName) => extname(getFilePath(fileName));
