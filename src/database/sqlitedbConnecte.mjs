import { createRequire } from "module";
const require = createRequire(import.meta.url);

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('C:\Users\lenovo\OneDrive\Documents\My-Github\my-pfe\src\database', err => {
    if (err) {
        console.error('Error opening database:', err);
        return;
    }
    console.log('Connected to the SQLite database.');
});
db.get('SELECT 1 as test', (err, row) => {
    if (err) {
        console.error('Error executing test query:', err);
        return;
    }
   
    console.log('Test query result:', row.test);
});

export default db;