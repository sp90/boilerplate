var express = require('express');
var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var hbs = require('express-hbs');

// Database setup
	var tingodb = require('tingodb'); // Tingodb is a inproject version of Mongodb
	var tungus = require('tungus'); // Helps mongoose to hook into tingodb instead of mongodb
	var mongoose = require('mongoose'); // Mongoose is a mongodb extension
	var Schema = mongoose.Schema; // This is a alias for schema's

//console.log('Running mongoose version %s', mongoose.version);

mongoose.connect('tingodb://'+__dirname+'/db', function (err) {
  if (err) throw err;
});

/*
	How to create schemas through mongoose
		var consoleSchema = Schema({
		    name: String, 
		    manufacturer: String, 
		    released: Date
		})
		var Console = mongoose.model('Console', consoleSchema);

	How to create items on the schema you just made
		Console.create({
			name: 'Nintendo 64', 
			manufacturer: 'Nintendo', 
			released: 'September 29, 1996'
		});

	How to find excisting items in the db
		Console.findOne({name: 'Nintendo 64'}, function(err, item){
			console.log(item);
		});

	How to save to an excisting items in the db
		Console.findOne({name: 'Nintendo 64'}, function(err, item){
			Console.save({
				name: 'Nintendo 64', 
				manufacturer: 'Nintendo', 
				released: 'September 29, 1996'
			});
		});
*/

app.engine('hbs', hbs.express3({
  	partialsDir: __dirname + '/views/partials',
    defaultLayout: __dirname + '/views/layout.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(process.cwd() + '/public'));
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
