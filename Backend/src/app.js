const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

const residentRoutes = require('./routes/residentRoutes');
const houseRoutes = require('./routes/houseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', residentRoutes);
app.use('/api', houseRoutes);
app.use('/api', paymentRoutes);
app.use('/api', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(err => console.log(err));
