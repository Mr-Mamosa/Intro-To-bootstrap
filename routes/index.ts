import express from 'express';
const router = express.Router(); // Declare router
export default router;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'about' });
});


router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects' });
});


router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'services' });
});


router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});






module. exports = router;
