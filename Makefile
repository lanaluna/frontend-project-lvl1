# Makefile
install: # инициализация
	npm ci

brain-games: # запуск
	node bin/brain-games.js

publish: # публикация пакета
	npm publish --dry-run

make lint: # линтер
	npx eslint .
