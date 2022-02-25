const router = require('express').Router();

const {
    createOneUserOneMinningJump,
    getOneUserMinningJumps,
    getOneUserMinningStatstics,
} 
= require('../Controllers/MinningJumpController');

router.route('/createOneUserOneMinningJump/:kakaoId').post(createOneUserOneMinningJump);

router.route('/getOneUserMinningJumps/:kakaoId').get(getOneUserMinningJumps);

router.route('/getOneUserMinningStatstics/:kakaoId').get(getOneUserMinningStatstics);

module.exports = router;
