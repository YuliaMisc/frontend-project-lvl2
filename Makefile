install:
	npm ci
gendiff:
	node bin/gendiff.js
lint:
	npx eslint 
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage --coverageProvider=v8