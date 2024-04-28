import { createConnection } from 'mysql';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '*Mb2003.sql2024',
  database: 'vax'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
