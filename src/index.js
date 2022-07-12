import parsers from './parsers.js';
import compareObj from './comparefile.js';

const genDiff = (fileName1, fileName2) => {
  const file1 = parsers(fileName1);
  const file2 = parsers(fileName2);

  const result = compareObj(file1, file2);
  return result;
};

export default genDiff;
