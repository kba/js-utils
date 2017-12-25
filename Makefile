PATH := $(PWD)/node_modules/.bin:$(PATH)
MODULES = utils node-utils

# Reporter to use for tests
REPORTER = spec

# BEGIN-EVAL makefile-parser --make-help Makefile

help:
	@echo ""
	@echo "  Targets"
	@echo ""
	@echo "    test       Run all tests"
	@echo "    readme     Generate TOC and API docs in READMEs"
	@echo "    bootstrap  lerna bootstrap --hoist"
	@echo "    webpack    webpack"
	@echo "    watch      webpack -w"
	@echo "    link       npm link all modules for development"
	@echo "    publish    lerna publish"
	@echo ""
	@echo "  Variables"
	@echo ""
	@echo "    REPORTER  Reporter to use for tests"

# END-EVAL

# Run all tests
test:
	tap -R$(REPORTER) */*.test.js

# Generate TOC and API docs in READMEs
readme: utils node-utils
	shinclude -c xml -i README.md
	for i in $(MODULES);do cp README.md $i;done

# lerna bootstrap --hoist
bootstrap:
	lerna bootstrap --hoist

# webpack
webpack:
	cd utils; webpack

# webpack -w
watch:
	cd utils; webpack -w

# npm link all modules for development
link:
	for i in $(MODULES);do (cd $i; npm link) ;done

# lerna publish
publish: bootstrap webpack
	git diff-index --quiet HEAD -- || { echo "Uncomitted changes"; exit 1; }
	lerna publish
