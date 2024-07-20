const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const circleRoutes = require('./src/routers/circle.router');
const gridRoutes = require('./src/routers/grid.router')
const sequelize = require('./src/config/database');
const villageRoutes = require('./src/routers/village.router')


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/circle',circleRoutes);
app.use('/api/v1/grid',gridRoutes);
app.use('/api/v1/village',villageRoutes);

const PORT = process.env.PORT || 3000;

const allowedOrigins = ['http://localhost:8100', 'http://192.168.1.111','http://183.82.109.39','http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.get("/",(req,res) =>{
    res.send("api started")
})


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});