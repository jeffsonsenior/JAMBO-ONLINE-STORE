import express from 'express';

const router = express.Router();


router.get('/Signup', (req, res) => {
  res.send('Signup route called');
});

router.get('/Login', (req, res) => {
  res.send('loging route called');
});

router.get('/Logout', (req, res) => {
  res.send('log out route called');
});

export default router;