import _ from 'lodash';

const signs = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
};

const formatValue = (currentValue, replacer, depth) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }
  const currentIndent = replacer.repeat(depth + 1);
  const bracketIndent = replacer.repeat(depth);
  const lines = Object.entries(currentValue)
    .map(([key, val]) => `${currentIndent}${key}: ${formatValue(val, replacer, depth + 1)}`);

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const formaterStylish = (tree, replacer = '    ') => {
  const iter = (value, depth) => {
    const currentIndent = replacer.repeat(depth);
    const indentKey = currentIndent.slice(2);
    const bracketIndent = replacer.repeat(depth - 1);

    const getString = (coll, sing, val = coll.value) => `${indentKey}${sing} ${coll.key}: ${formatValue(val, replacer, depth)}`;

    const result = value.map((node) => {
      if (node.status === 'added') {
        return getString(node, signs.added);
      }
      if (node.status === 'deleted') {
        return getString(node, signs.deleted);
      }
      if (node.status === 'changed') {
        return [
          getString(node, signs.deleted, node.value1),
          getString(node, signs.added, node.value2),
        ].join('\n');
      }
      if (node.status === 'notChanged') {
        return getString(node, signs.unchanged);
      }
      if (node.status === 'children') {
        return `${currentIndent}${node.key}: ${iter(node.value, depth + 1)}`;
      }
      throw new Error(`${node.status} not defined, please check the correctness of the entered data`);
    });

    return [
      '{',
      ...result,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(tree, 1);
};

export default formaterStylish;
