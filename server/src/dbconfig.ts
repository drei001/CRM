import { createConnection } from 'typeorm';
import { Lead } from './entities/Lead';
import { Call } from './entities/Call';
import createData from './fake';
const dbConfig = async () => {
  try {
    const connection = await createConnection({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'acilociloc',
      database: 'CRM',
      entities: [Lead, Call],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    });
    // Create fake data
    // await createData(connection);
  } catch (err) {
    console.log(err);
  }
};
export default dbConfig;
