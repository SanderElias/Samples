# A Sample on hwo one could do language selection using the router.

in this sample The router is being used to pick a language out of a known list. 
there is the [language service](./src/app/lang.service.ts) that holds a list of known languages, and has a "pick" method to route to the a selected language. Whe it doesn't exists, it routes to an empty root, which will show the [selectLanguage component](./src/app/pick-lang/pick-lang.component.ts)

this is driven by an extra layer in the routes, as you can see in [app.lang.routes](./src/app/app.lang.routes.ts). This file adds a "top" layer, and imports the normal routes as lazy-loaded children
