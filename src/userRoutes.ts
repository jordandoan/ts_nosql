import express, { Request, Response } from 'express';
import User from './models/User';

const router = express.Router();

router.get('/', (req,res) => {
  User.findOne({_id: "5eb33f447f2d750614d6f486"})
    .populate('posts')
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  const user = new User({...req.body});

  user.save()
    .then(data => res.json(data));
});

export = router;