import express, { Router } from 'express';
import cors from 'cors';

// Config
import { environment, connect } from './config';

// Controllers
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', routes);

(async () => {
  await connect();

  app.listen(environment.PORT, () => {
    console.log(`Server started on port ${environment.PORT}!`);
  });
})();
