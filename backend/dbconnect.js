const { Pool } = require('pg');

// Connection to database
const connect = "postgres://teamwork_webapp:vFthQTXfkSHMA8K7@localhost/teamworkdb";

const pool = new Pool ({
    connectionString: connect,
})

dbconnect = () => {
    pool.query('SELECT NOW ()')
    .then(
        (res) => {
            console.log(res.rows)
        }
    ).catch(
        (err) => {
            console.log(e.stack)
        }
    );
}

module.exports = { pool, dbconnect };