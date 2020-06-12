START=\n\033[0;35m >>>
STOP=\033[0m\n\n # No Color

#
# Rust WASM
#

test-rust:
	@printf "${START} 🦀 - ✅ Testing Rust code${STOP}"
	cd ./rust-wasm ; cargo test

test-wasm:
	@printf "${START} 🦀🕸️ - ✅ Testing RustWASM modul${STOP}"
	cd ./rust-wasm ; wasm-pack test --firefox

build-wasm:
	@printf "${START} 🦀🕸️  - 🏗️ Building Rust WASM modu${STOP}"
	cd ./rust-wasm ; wasm-pack build

#
# React
#

install-react:
	@printf "${START} ⚛️ - 📦 Installing React app dependencies${STOP}"
	cd ./react ; yarn install

test-react:
	@printf "${START} ⚛️ - ✅ Testing React app${STOP}"
	cd ./react ; yarn test

develop-react:
	@printf "${START} ⚛️ - ⚙️ Starting React app develop server${STOP}"
	cd ./react ; yarn start

build-react:
	@printf "${START} ⚛️ - 🏗️ Building React ap${STOP}"
	cd ./react ; yarn build

#
# General
#

test: test-rust test-wasm test-react

develop: build-wasm install-react develop-react

build: build-wasm install-react build-react

