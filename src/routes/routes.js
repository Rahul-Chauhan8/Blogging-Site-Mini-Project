/*------------------------------------------Import Modules:-------------------------------------------*/
const express = require('express')
const router = express.Router()

const authorController = require('../Controllers/authorController')



/*------------------------------------------API's:-------------------------------------------*/
router.post('/authors', authorController.createAuthor)                   

router.post('/login', authorController.loginUser)


/*------------------------------------------Export Modules:-------------------------------------------*/
module.exports = router