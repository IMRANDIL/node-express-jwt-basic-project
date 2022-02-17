const router = require('express').Router();


const { login, dashboard } = require('../controllers/main');



const authMiddleware = require('../middleware/auth')



router.route('/api/v1/dashboard').get(authMiddleware, dashboard);

router.route('/api/v1/login').post(login)





module.exports = router;