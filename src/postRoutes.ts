import express, { Request, Response } from 'express';
import User from './models/User';
import Post from './models/Post';

const router = express.Router();

router.get('/', (req,res) => {
  Post.find()
    .then(data => res.json(data));
});

router.post('/', (req, res) => {
  const post = new Post({...req.body});

  post.save()
    .then(data => {
      User.findOneAndUpdate({_id: req.body.userId}, {$push: {posts: data._id}}, {new: true})
      .then( userData => {
        res.json(data);
      })
    });
});

export = router;