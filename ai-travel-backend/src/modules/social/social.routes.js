const express = require('express');
const socialController = require('./social.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', socialController.createPost);
router.get('/all', socialController.getAllPosts);
router.put('/like/:id', socialController.likePost);
router.post('/comment/:id', socialController.commentPost);
router.delete('/:id', socialController.deletePost);

module.exports = router;

