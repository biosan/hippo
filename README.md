# Hippo 🦛

Hippo it's a not-so-useful web app that *"translates"* IPv6 addresses into a list of words and numbers that are *(not so)* easier to remember.

This project it's built using React and Rust (compiled to WebAssembly).

Styling is provided by [`marx`](https://github.com/mblode/marx) a classless CSS toolkit and [TailwindCSS](https://tailwindcss.com) for some small personalization.

> *NOTE:*
> Words came from word from the [heartsucker wordlist"](https://github.com/heartsucker/diceware).


## Why?

After playing some time with Rust I was in love, and I thought how cool it would be to use Rust for the front end.

Rust WASM tooling is complete and very easy to use, really beginner friendly.

So I decided to build a simple test web app, to try it and play around with [`create-react-app`]().

If you were looking for a reason why anyone would ever convert an IPv6 to a list of words, then I could not help you... It's a mystery even for me.


## Test and build locally

Only Rust code has some tests (one end-to-end test) at the moment.
I know I'm an horrible human being but this is a simple personal project and I'm very lazy.

On the brighter side all important commands for this project are available through a Makefile.

### Requirements

1. Rust stable toolchain and `cargo` installed

2. Install `npm` dependencies using:
    ```
    make install-react
    ```

### Test

```sh
make test-rust
make test-wasm      # Does nothing ATM
make test-react     # Does nothing ATM
```

### Development server for React

Start [`create-react-app`]() development server and auto-reload/compile

```sh
make develop-react
```

### Build

```sh
make build-wasm     # Compile Rust to WebAssembly
make build-react    # React production build
make build          # Build everything (also update `wasm` module in React project)
```


## License

This project is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).

