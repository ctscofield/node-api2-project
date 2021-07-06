// implement your posts router here
const express = require("express");

const router = express();

const Posts = require("./posts-model");

router.get("/", (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(500).json({
                message: "The posts information could not be retrieved",
                error: err.message,
            });
            console.log(err);
        });
});



module.exports = router;