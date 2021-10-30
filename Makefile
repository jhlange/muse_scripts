
charts: deps
	tsc --lib es2015,dom --esModuleInterop *.ts

deps: .deps.node .deps.typescript .deps.npm-packages

.deps.typescript:
	brew install typescript
	touch .deps.typescript

.deps.node:
	brew install node
	touch .deps.node

.deps.npm-packages:
	npm install
	touch .deps.npm-packages

clean:
	rm -rf .deps* node_modules
	find . -type f -name '*.js' -exec rm '{}' \;