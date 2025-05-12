# Signals, Best practices

## Talk description:
In this talk I will zoom in on signals, and how to use them in a best practice way. I created a small CRUD app that is entirely driven by signals. It does not only follow best practices around signals, but also around how to properly use CRUD operations, and how to do inter-component communication using signals. 
In the end it shows how you can use signals to create a clean and performant app, that is easy to maintain and extend.



In this folder, is the code I used for my "signals, best practices" talk at the DAG 2025 may meetup.
The code is a simple CRUD app, with a few extra features. It is not meant to be a full-fledged app, but rather a demonstration of how to use signals and best practices in a real-world scenario.
The app is built using the following technologies:
- json-server: a fake REST API for testing and prototyping


I'm using a few utilities from my `@se-ng/signal-utils` package, which you can install with: `npm i @se-ng/signal-utils`.
The code is also in this repo in [this folder](../../../projects/se-ng/signal-utils/)

The sample itself is a simple CRUD app, that lists some contacts, and allows you to add, edit and delete them.

