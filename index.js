import express from 'express';
import sql from 'mssql';
import { config } from './config.js';
import { routes } from './src/routes/allRoutes.js';
import cors from 'cors'

const app =express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*'
}));

sql.connect(config.sql)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

  routes(app)

  console.log(config.port)


app.listen(8080, ()=>{
  console.log(`server running on port 5000`)
})