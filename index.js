var express = require('express');
var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var hbs = require('express-hbs');
var Datastore = require('nedb'), 
	db = new Datastore({ filename: 'db/mydb.db', autoload: true });

app.engine('hbs', hbs.express3({
  	partialsDir: __dirname + '/views/partials',
    defaultLayout: __dirname + '/views/layout.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(process.cwd() + '/public'));
//app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride());


app.get('/', function(req, res){
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	var returnObj = {
		metaSetup: {
			author: "www.nomis.dk - sp90(github)",
			title: "Boilerplate",
			pagetitle: "index",
			description: "This is a basic boilerplate which imply the best practice in frontend and a nodeJS express server",
			pageurl: fullUrl,
			imgurl: "imgurl"
		}
	}
  	res.render("index", returnObj);
});

app.listen(3000, function(err){
	if(err) {
		console.log(err);
	} else {
		console.log("server started on localhost:3000");
	}	
});
