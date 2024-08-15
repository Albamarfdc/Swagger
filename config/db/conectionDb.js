import 'dotenv/config';
import pg from 'pg';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  allowExitOnIdle: true,
});

pool.query('SELECT NOW()', (err, res) => {
  res ? console.log('🔋 DB-Connected', res.rows[0].now) : console.log({ err });
});

export default pool;
