import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors())

// no typescript possui a chamada inferencia de tipo que não precisa definir o tipo inicialmente que ele tentara interpretar
// e definit o tipo, mas é sempre bom definir primeiro
function getUserName(): string {
  return "testUser"
}

app.use(routes);

const userName = getUserName();

app.listen(3001);