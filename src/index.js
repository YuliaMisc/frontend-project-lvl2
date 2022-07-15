import parsers from './parsers.js';
import buildTree from './buildTree.js';
import formaterStylish from './formates/stylish.js';

const genDiff = (fileName1, fileName2, format = 'stylish') => {
  const file1 = parsers(fileName1);
  const file2 = parsers(fileName2);

  const tree = buildTree(file1, file2);
  if (format === 'stylish') {
    return formaterStylish(tree);
  }
  return 1;
};

export default genDiff;
