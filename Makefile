serve: build
	python3 -m http.server 8000

watch:
	npn run watch

build:
	npm run build

install:
	npm install
