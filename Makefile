install:
	npm install
start:
	brain-games
publish:
	npm publish --dry-run
make lint:
	npx eslint .
