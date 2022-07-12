import _ from 'lodash';

const compareObj = (obj1, obj2) => {
  const keysObjFile1 = Object.keys(obj1);
  const keysObjFile2 = Object.keys(obj2);

  const commonKeys = _.union(keysObjFile1, keysObjFile2);
  const sortCommonKeys = _.sortBy(commonKeys);

  const arrayStrings = sortCommonKeys.reduce((acc, key) => {
    if (obj1[key] === obj2[key]) {
      acc.push(` ${key}: ${obj1[key]}`);
    } else if (!_.has(obj2, key)) {
      acc.push(`-${key}: ${obj1[key]}`);
    } else if (!_.has(obj1, key)) {
      acc.push(`+${key}: ${obj2[key]}`);
    } else if (obj1[key] !== obj2[key]) {
      acc.push(`-${key}: ${obj1[key]}`);
      acc.push(`+${key}: ${obj2[key]}`);
    }
    return acc;
  }, []);
  const result = `{\n${arrayStrings.join('\n')}\n}`;
  return result;
};

export default compareObj;
