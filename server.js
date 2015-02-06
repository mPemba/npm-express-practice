var express = require('express'),
  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS GET POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Control-Type, Accept');
	next();
})

app.use(function(req, res, next) {
	console.log('handling post guy');
	next();
}), function(req, res, next) {
	console.log('doing next thing');
	next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.type('application/json');
	if (req.query.lang === 'es') {
		res.json({message: 'hola mundo'});
	} else {
		res.json({message: 'hello world'});
	}
	// return res.send(JSON.stringify({message: 'hey world'}));
});

app.post('/', function(req, res) {
	console.log(req.body);
	res.json({message: 'keep it simple stupid'});
});

app.listen(8888);

