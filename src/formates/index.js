import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';

const selectionFormat = (data, format) => {
  if (format === 'stylish') {
    return formaterStylish(data);
  }
  return formaterPlain(data);
};

export default selectionFormat;
