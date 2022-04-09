# Dataforged Module Test

This is a project that has [Dataforged] as a dependency, and tries to build a Typescript project using it.
Currently it's set up to pull directly from the GitHub source, since there's no NPM package just yet.

# How to hack

Probably the easiest way to develop on dataforged using this as a test bed is to link your local dataforged into the node_modules directory:

```
$ ln -s /path/to/dataforged node_modules/dataforged
```

[Dataforged]: https://github.com/rsek/dataforged
