install:
	npm ci
make gendiff:
	node bin/gendiff.js
make lint:
	npx eslint