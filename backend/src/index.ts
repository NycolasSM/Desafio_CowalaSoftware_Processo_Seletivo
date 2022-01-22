import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors())

function getUserName(): string {
  return "testUser"
}

app.use(routes);

const userName = getUserName();

app.listen(3001);