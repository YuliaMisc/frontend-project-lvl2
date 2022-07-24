import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const sortCommonKeys = _.sortBy(_.union(keysObj1, keysObj2));

  const diffObj = sortCommonKeys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, status: 'hasСhildren', children: buildTree(obj1[key], obj2[key]) };
    }
    if (!_.has(obj1, key)) {
      return { key, status: 'added', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { key, status: 'deleted', value: obj1[key] };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, status: 'changed', value1: obj1[key], value2: obj2[key],
      };
    }
    return { key, status: 'notChanged', value: obj1[key] };
  });

  return diffObj;
};

export default buildTree;
