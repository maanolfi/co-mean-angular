const { Router } = require('express')
const router = Router()

router.get('/', require('./post-list'))
router.post('/', require('./post-create'))

router.get('/:slug', require('./post-show.js'))

module.exports = router
