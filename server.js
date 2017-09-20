
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//SET UP PORT AND LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});

//SET UP STATIC FILES
app.use('/static', express.static(path.join(__dirname, 'public')));

// SET UP CORS
app.use(cors());

//SET UP LOGGER
app.use(logger('dev'));

//SET UP BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// SETTING ROUTES
//============== INDEX ROUTE ============

app.get('/', function(req,res) {
  res.sendFile(_dirname + 'client/index.html');
});

//rotaflow API route
const rotaflowRoutes = require('./routes/rotaflowRoutes');
app.use('/api/rotas', rotaflowRoutes);

// Handle 404 Error
app.get('*', function(req, res) {
  res.status(404).send({message: 'Opps! Not found.'})
});





