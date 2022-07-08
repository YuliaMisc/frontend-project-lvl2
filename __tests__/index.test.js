import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

test('flat file comparison json', () => {
  const expected = readFileSync(getFixturePath('result.txt'), 'utf-8');

  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(result).toEqual(expected);
});
