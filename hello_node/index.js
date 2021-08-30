const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/')); // za serviranje statične angular aplikacije

//import routes
const routes = require('./routes.js');

//register the route
routes(app);

app.listen(port, ()=> {
    console.log(`Hello rest servis na portu: ${port}`);
});
