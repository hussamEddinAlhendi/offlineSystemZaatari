var helpers = require('./helpers.js'); 
var candidate = require('../candidate/candidateController.js');

module.exports = function (app, express) {

	
	//============================================================================
	/* 								  candidate							        */
	//============================================================================
		app.post('/api/candidate/insertCandidateInfo', candidate.insertCandidateInfo);
		app.post('/api/candidate/getUser', candidate.getUser);
		app.get('/api/candidate/getUsers', candidate.getUsers);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

