import parsers from './parsers.js';
import buildTree from './buildTree.js';
import selectionFormat from './formates/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1 = parsers(filePath1);
  const file2 = parsers(filePath2);

  const tree = buildTree(file1, file2);
  const result = selectionFormat(tree, format);
  return result;
};

export default genDiff;
