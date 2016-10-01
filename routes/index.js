var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'My Family' });
});
router.get('/users', function(req, res, next)
{
  res.render('users', {
    title: 'user'
  });
});

router.get('/Gurjeet', function(req, res, next)
{
    res.render('Gurjeet',
        {
      title: 'Gurjeet'
    })
});

router.get('/Jaswinder', function(req, res, next)
{
    res.render('Jaswinder', {
    title: 'Jaswinder'
  })
});

router.get('/Tajinder', function(req, res, next)
{
    res.render('Tajinder', {
    title: 'Tajinder'
  })
});

router.get('/Randeep', function(req, res, next)
{
    res.render('Randeep',{
    title: 'Randeep'
  })
});

router.get('/Simrandeep', function(req, res, next)
{
    res.render('Simrandeep', {
    title:'Simrandeep'
  })
});

module.exports = router;
