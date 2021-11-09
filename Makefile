
ifdef joshua_lange
DB_DATA=$(HOME)/Desktop
else
DB_DATA=..
endif

all: build export_data

# Run
build_charts:
	node build_charts .. ../charts

export_data:
	node export.js $(DB_DATA) ..

# Build
build: deps
	tsc --lib es2015,dom --esModuleInterop *.ts



# Dependencies
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

# Clean
clean:
	rm -rf .deps* node_modules
	find . -type f -name '*.js' -exec rm '{}' \;
