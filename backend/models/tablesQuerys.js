/*

*/

const pool = require('../dbconnect');
exports.createTables = () => {
    pool.query(`
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE  users (
        user_uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(50) NOT NULL UNIQUE,
        user_password VARCHAR(100) NOT NULL,
        user_data JSONB UNIQUE NOT NULL
    );
    
    CREATE TABLE  articles (
        article_uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(50) NOT NULL UNIQUE,
        article JSONB NOT NULL UNIQUE,
        author_uid UUID REFERENCES users(user_uid)
    );
    
    CREATE TABLE  gifs (
        gif_uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(50) NOT NULL UNIQUE,
        gif_url JSONB NOT NULL UNIQUE,
        author_uid UUID REFERENCES users(user_uid)
    );
    
    CREATE TABLE  comments (
        comment_uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        comment JSONB NOT NULL,
        author_uid UUID REFERENCES users(user_uid),
        gif_uid UUID REFERENCES gifs(gif_uid),
        article_uid UUID REFERENCES articles(article_uid)
    );
    `
)
.then(
    (res) => {
        console.log('Tables created successfully. Please uncomment this function after use')
    }
).catch(
    (err) => {
        console.error(err)
    }
)
}

exports.deleteTables = () => {
    pool.query(
        `
        DROP TABLE users CASCADE;

        DROP TABLE articles CASCADE;

        DROP TABLE gifs CASCADE;

        DROP TABLE comments CASCADE;
        `
    )
    .then(
        (res) => {
            console.log('Tables created successfully. Please uncomment this function after use')
        }
    ).catch(
        (err) => {
            console.error('Pless uncomment this function')
        }
    );
}