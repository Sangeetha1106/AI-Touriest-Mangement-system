const socialService = require('./social.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class SocialController {
  async createPost(req, res, next) {
    try {
      const post = await socialService.createPost(req.body);
      res.status(CREATED).json(post);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await socialService.getAllPosts();
      res.status(OK).json(posts);
    } catch (error) {
      next(error);
    }
  }

  async likePost(req, res, next) {
    try {
      const post = await socialService.likePost(req.params.id);
      res.status(OK).json({ message: 'Post liked', likes: post.likes });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async commentPost(req, res, next) {
    try {
      const post = await socialService.commentPost(req.params.id, req.body);
      res.status(OK).json({ message: 'Comment added', postId: post.id });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async deletePost(req, res, next) {
    try {
      await socialService.deletePost(req.params.id);
      res.status(OK).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new SocialController();
