const express = require('express');
const routes = require('./controllers');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.JAWSDB || 3001;

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
});