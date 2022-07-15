import _ from 'lodash';

const buildTree = (file1, file2) => {
  const keysObj1 = Object.keys(file1);
  const keysObj2 = Object.keys(file2);
  const sortCommonKeys = _.sortBy(_.union(keysObj1, keysObj2));

  const diffObj = sortCommonKeys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { key, status: 'children', value: buildTree(file1[key], file2[key]) };
    }
    if (!_.has(file1, key)) {
      return { key, status: 'added', value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { key, status: 'deleted', value: file1[key] };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        key, status: 'changed', value1: file1[key], value2: file2[key],
      };
    }
    return { key, status: 'notChanged', value: file1[key] };
  });

  return diffObj;
};

export default buildTree;
