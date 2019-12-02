const Post = require('./../../models/post')

module.exports = async (req, res) => {
    const { slug } = req.params
    if(!slug) {
        return res.status(404).end()
    }
    try {
        const posts = await Post.findOne({ slug })
        return res.status(200).json({ posts: posts || {} })
    } catch (error) {
        return res.status(500).json({ error })
    }
}