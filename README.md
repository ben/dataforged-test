# Dataforged Module Test

This is a project that has [Dataforged] as a dependency, and tries to build a Typescript project using it.
Currently it's set up to pull directly from the GitHub source, since there's no NPM package just yet.

## Test 1: Compiling with data

First note that `index.ts` imports the data from Dataforged.
Try compiling it by just typing `tsc`.
This compiles! Yay!

## Test 2: Running with data

Now let's run the result:

```
$ node ./build/index.js
node:internal/errors:464
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './dist' is not defined by "exports" in /Users/bstraub/Code/dataforged-test/node_modules/dataforged/package.json imported from /Users/bstraub/Code/dataforged-test/build/index.js
[...]
```

Oops.

# How to hack

Probably the easiest way to develop on dataforged using this as a test bed is to link your local dataforged into the node_modules directory:

```
$ ln -s /path/to/dataforged node_modules/dataforged
```

[Dataforged]: https://github.com/rsek/dataforged
