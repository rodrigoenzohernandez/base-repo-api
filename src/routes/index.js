import express from 'express';
import { sayHi } from '../controllers/index.js';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  sayHi(req, res);
});

export default router;
