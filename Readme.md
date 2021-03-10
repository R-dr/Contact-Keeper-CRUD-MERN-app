## Another project filling in time until i can find an internship. Full Crud Mern stack app with authentication.

- This is really starting to make sense im starting to see this more and more like ruby in a way which makes things a lot easier.

## Finished product reflections

- i feel like i really should have seen the error in server.js before i tried to deploy... it was

```javascript
//Port
const PORT = process.env.port || 5000;
```

so heroku couldn't find the port to run the app on and constantly crashed over and over.

- some of the techniques i used here are probably a little out dated so i defiantly want to research Mongo db further mainly so i can figure out what this handy warning is and how to fix it

```
(node:25647) Warning: Accessing non-existent property 'MongoError' of module exports inside circular dependency
 Server started on 5000
 (node:25647) DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version.
```

- other than that i feel like im understanding Javascript a lot better and CSS as well as Styling overall, i've always struggled with that.

### App can be found [here](https://contact-keeper2000.herokuapp.com/)

and is responsive on mobile tablets and desktops.
