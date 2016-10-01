var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  var memberList = ['Gurjeet', 'Jaswinder', 'Tajinder', 'Randeep', 'Simrandeep'];

  res.render('users', { title: 'Members List',
    users: userList
  });
});

module.exports = router;
