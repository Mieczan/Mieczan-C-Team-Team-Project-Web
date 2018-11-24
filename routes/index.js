var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){ 
	res.render('index'); 
});

module.exports = router;chrome-extension://mpognobbkildjkofajifpdfhcoklimli/components/startpage/startpage.html?section=Speed-dials&activeSpeedDialIndex=0