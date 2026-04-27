const Social = require('./social.model');

class SocialService {
  async createPost(data) {
    return await Social.create(data);
  }

  async getAllPosts() {
    return await Social.findAll({ order: [['createdAt', 'DESC']] });
  }

  async likePost(id) {
    const post = await Social.findByPk(id);
    if (!post) throw new Error('Post not found');
    return await post.increment('likes');
  }

  async commentPost(id, commentData) {
    const post = await Social.findByPk(id);
    if (!post) throw new Error('Post not found');
    return post;
  }

  async deletePost(id) {
    const post = await Social.findByPk(id);
    if (!post) throw new Error('Post not found');
    return await post.destroy();
  }
}

module.exports = new SocialService();
