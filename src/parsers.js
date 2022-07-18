import yaml from 'js-yaml';
import { getExtName, readFile } from './readfile.js';

const parsers = (path) => {
  const extName = getExtName(path);
  const file = readFile(path);

  switch (extName) {
    case '.json':
      return JSON.parse(file);
    case '.yaml' || '.yml':
      return yaml.load(file);
    default:
      throw new Error('Invalid file extension! Try supported formats.');
  }
};

export default parsers;
