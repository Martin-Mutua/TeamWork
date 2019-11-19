const { Pool } = require('pg');

// Connection to database
const connect = "postgres://<dbuser>:<password>@<hostname>/<database_name>";

const pool = new Pool ({
    connectionString: connect,
    max: 15,
    min: 0,
    idle: 10000,
    acquire: 30000
})


dbconnect = () => {
    pool.query('SELECT NOW ()')
    .then(
        (res) => {
            console.log(res.rows)
        }
    ).catch(
        (err) => {
            console.log(err.stack)
        }
    );
}



module.exports = { pool, dbconnect };
