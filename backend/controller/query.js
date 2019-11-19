const { pool } = require('../dbconnect');
const passwordHash = require('password-hash');

exports.createUser = (req, res, next) => {
    
    const hashedPassword = passwordHash.generate(req.body.user_password);
    const user_password = hashedPassword;
    const email = req.body.email;
    const user_data = {
        employee_number: req.body.employee_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        job_role: req.body.job_role,
        department: req.body.department,
        user_address: req.body.user_address,
        timeCreated: Date(Date.now()).toString()
    };

    pool.query('INSERT INTO users(email, user_password, user_data) VALUES($1, $2, $3)', [email, user_password, user_data])
        .then(
                () => {
                    res.status(201).json({
                        message: 'User successfully created.'
                    });
                }
        ).catch(
            (error) => {
                res.status(500).json({
                    error: error.detail
                });
            }
        );
}




getArticles = () => {
    pool.query('SELECT * FROM articles')
    .then(
        (res) => {
            return res.rows;
        }
    ).catch(
        (err) => {
            return err.stack;
        }
    )
}

getGifs = () => {
    pool.query('SELECT * FROM gifs')
    .then(
        (res) => {
            return res.rows;
        }
    ).catch(
        (err) => {
            return err.stack;
        }
    )
}

geComments = () => {
    pool.query('SELECT * FROM comments')
    .then(
        (res) => {
            return res.rows;
        }
    ).catch(
        (err) => {
            return err.stack;
        }
    )
}

exports.getFeed = (req, res, next) => {
    const articles = getArticles();
    const gifs = getGifs();
    //const comments = getComments();

    res.status(200).json(
        //articles
        //gifs
        {
        message: "Homepage"
    })
}