import yaml from 'js-yaml';

const parse = (string, type) => {
  switch (type) {
    case '.json':
      return JSON.parse(string);
    case '.yaml' || '.yml':
      return yaml.load(string);
    default:
      throw new Error('Invalid file extension! Try supported formats.');
  }
};

export default parse;
