import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};

const formaterPlain = (value) => {
  const iter = (coll, parent) => coll.flatMap((node) => {
    const pahts = [...parent, node.key].join('.');
    if (node.status === 'added') {
      return `Property '${pahts}' was added with value: ${getValue(node.value)}`;
    }
    if (node.status === 'deleted') {
      return `Property '${pahts}' was removed`;
    }
    if (node.status === 'changed') {
      return `Property '${pahts}' was updated. From ${getValue(node.value1)} to ${getValue(node.value2)}`;
    }
    if (node.status === 'notChanged') {
      return [];
    }
    if (node.status === 'children') {
      return `${iter(node.value, [pahts]).join('\n')}`;
    }
    return undefined;
  });
  const result = iter(value, []);
  return result.join('\n');
};

export default formaterPlain;
