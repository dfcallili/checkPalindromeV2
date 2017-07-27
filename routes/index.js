var express = require('express');
var router = express.Router();
var libStr = require('./../libs/libStr');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Test2' });
});

router.post('/checkPalindrome',function(req,res,next){
	var body = req.body;
	var isPalindrome = libStr(body.inputText1);

	if(!isPalindrome){
		res.status(400);
		res.send('IS NOT A PALINDROME.');
	}
	else{
		res.status(200);
		res.send('IS A PALINDROME.');
	}
});

module.exports = router;
