serve:
	python3 -m http.server 8000

watch:
	npx tailwindcss -o output.css --minify --watch

build:
	npx tailwindcss -o output.css --minify

install:
	npm install
