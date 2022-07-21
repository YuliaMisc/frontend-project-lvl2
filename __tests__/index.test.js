import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const getFixturePath = (filename) => resolve(dirName, '..', '__fixtures__', filename);

const resultStylish = readFileSync(getFixturePath('resultStylish.txt'), 'utf-8');
const resultPlain = readFileSync(getFixturePath('resultPlain.txt'), 'utf-8');
const resultJson = readFileSync(getFixturePath('resultJson.txt'), 'utf-8');

test('file comparison json, format Stylish', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(result).toEqual(resultStylish);
});

test('file comparison yaml, format Stylish', () => {
  const result = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));
  expect(result).toEqual(resultStylish);
});

test('file comparison json, format Plain', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
  expect(result).toEqual(resultPlain);
});

test('file comparison yaml, format Plain', () => {
  const result = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain');
  expect(result).toEqual(resultPlain);
});

test('file comparison json, format Json', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');
  expect(result).toEqual(resultJson);
});

test('file comparison yaml, format Json', () => {
  const result = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json');
  expect(result).toEqual(resultJson);
});
