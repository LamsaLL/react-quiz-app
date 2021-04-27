const express = require('express');
const router = express.Router();

router.get('/api/questions', (req, res) => {
    const { Questions }  = req.model;

    Questions.find({}, (err, docs) => {

        const formatResults = docs.map((elem) => {
            //We change _id to id using toObject from mongoose
            const objElem = elem.toObject();

            return ({
                ...objElem,
                id : objElem._id
            })
        });

        res.json(formatResults);
    });
});


module.exports = router;