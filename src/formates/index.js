import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';
import formaterJson from './json.js';

const selectionFormat = (data, format) => {
  if (format === 'stylish') {
    return formaterStylish(data);
  }
  if (format === 'plain') {
    return formaterPlain(data);
  }
  if (format === 'json') {
    return formaterJson(data);
  }
  return `Sorry, this format ${format} is not supported ;(.`;
};

export default selectionFormat;
