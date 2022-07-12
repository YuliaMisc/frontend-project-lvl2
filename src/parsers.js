import yaml from 'js-yaml';
import { getExtName, readFile } from './readfile.js';

const parsers = (path) => {
  const extName = getExtName(path);
  const file = readFile(path);

  if (extName === '.json') {
    return JSON.parse(file);
  }
  return yaml.load(file);
};

export default parsers;
