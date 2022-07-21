import { cwd } from 'process';
import { readFileSync } from 'fs';
import { extname, resolve } from 'path';

export const getFilePath = (fileName) => {
  const currentPath = cwd();
  return resolve(currentPath, fileName);
};

export const readFile = (filePath) => readFileSync(filePath, 'utf-8');

export const getTypeFile = (falePath) => extname(falePath);
