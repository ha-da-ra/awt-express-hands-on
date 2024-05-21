import app from './app';
import { openConnection } from './database/open-connection';

const port = process.env.PORT || 5000;


app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  openConnection();
  /* eslint-enable no-console */
});

