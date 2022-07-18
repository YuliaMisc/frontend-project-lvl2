import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const getFixturePath = (filename) => resolve(dirName, '..', '__fixtures__', filename);

test('file comparison json, format Stylish', () => {
  const expected = readFileSync(getFixturePath('resultStylish.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(result).toEqual(expected);
});

test('file comparison yaml, format Stylish', () => {
  const expected = readFileSync(getFixturePath('resultStylish.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml');
  expect(result).toEqual(expected);
});

test('file comparison json, format Plain', () => {
  const expected = readFileSync(getFixturePath('resultPlain.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain');
  expect(result).toEqual(expected);
});

test('file comparison yaml, format Plain', () => {
  const expected = readFileSync(getFixturePath('resultPlain.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain');
  expect(result).toEqual(expected);
});

test('file comparison json, format Json', () => {
  const expected = readFileSync(getFixturePath('resultJson.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json');
  expect(result).toEqual(expected);
});

test('file comparison yaml, format Json', () => {
  const expected = readFileSync(getFixturePath('resultJson.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json');
  expect(result).toEqual(expected);
});
