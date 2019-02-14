var express = require('express');
var router = express.Router();

var User = require('../modles/user');

//Settings
router.get('/settings', function(req, res){ 
	res.render('settings'); 
});
//Basket
router.get('/basket', function(req, res){ 
	res.render('basket'); 
});
//Register 
router.get('/register', function(req, res){ 
	res.render('register'); 
});
//Login
router.get('/login', function(req, res){ 
	res.render('login'); 
});

//logout
router.get('/logout', function(req, res){ 
	res.render('logout'); 
});



//Register user
router.post('/register', function(req, res){ 
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password;



	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();


	if (errors) {
		//re-render the form with error displayed 
		res.render('register', {
			errors: errors
		});
	}
	else {
		
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			
			console.log(user);
			console.log(name);

		});

        req.flash('success_msg','You are now registered and can log in');

        res.redirect('/users/login');
 
	}

	
});

module.exports = router;