import path from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const getFile = (fileName) => {
  const currentPath = cwd();
  const filePath = path.resolve(currentPath, fileName);
  const readFile = readFileSync(filePath, 'utf-8');
  const extName = path.extname(filePath);
  if (extName === '.json') {
    return JSON.parse(readFile);
  }
};
export default getFile;
