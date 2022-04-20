# Swapi

This is a helper project to be able to use the [Star Wars API](https://swapi.co/) in my Angular samples.
It fetches the entirety of SWAPI and caches this into indexedDB by utilizing [idb-keyval](https://github.com/jakearchibald/idb-keyval) from Jake Archibald.
This library's source is available on [Sanders Samples repo.](https://github.com/SanderElias/Samples/tree/master/projects/se-ng/swapi)

> # Note!
> From version 1.0.0 on, this library is distributed as `partial-Ivy` and > so only compatible with Angular 12+

to use the library do:

```bash
yarn add @se-ng/swapi idb-keyval
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# Peer depedencies

- idb-keyval > V5.0.0
- rxjs > V7.0.0
