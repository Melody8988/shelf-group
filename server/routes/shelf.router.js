const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log('/shelf Get route')
    let queryText = `SELECT * FROM item;`
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500); 
    });
})

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if(req.isAuthenticated()){//in order to post an item, user must be signed in
        let queryText = `INSERT INTO item ("description", "image_url", "person_id") VALUES ($1, $2, $3);`;
        pool.query(queryText, [req.body.description, req.body.image_url, req.user.id]).then((result)=>{
            res.sendStatus(201);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(403);
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;