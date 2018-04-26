const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//comment for test
router.get('/', (req, res) => {
// This route should return all users and their items
    console.log('/userinfo GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = `SELECT person.username, COUNT(item.id)
        FROM person
        LEFT JOIN item ON person.id=item.person_id
        GROUP BY person.id
        Order BY person.username;`;
        pool.query(queryText).then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});//end router.get



module.exports = router;