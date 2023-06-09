import express from 'express';
import cors from 'cors';

// Config
import { connect, environment } from './config';

// Routes
import routes from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', routes);

(async () => {
  await connect();

  app.listen(environment.PORT, () => {
    console.log(`Server started on port ${environment.PORT}!`);
  });
})();
