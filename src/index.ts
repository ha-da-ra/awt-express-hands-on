import app from './app';
import { openConnection } from './database/open-connection';
import { createMockOwners } from './database/owners/owner-crud';

const port = process.env.PORT || 5000;


app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  openConnection();
  //createMockOwners();
  /* eslint-enable no-console */
});

