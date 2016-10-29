// fyi You'll have to start by installing several modules,
// including express, express-validator, ejs, and body-parser.

// npm install express express-validator ejs body-parser

var express = require('express');
var app = express();
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

const TAs = [
  {
    stunum: "0111222333",
    givenname : "Jean",
    familyname: "Bartik",
    phone: "4165554444",
    birthday: "1924-03-23"
  },
  {
    stunum: "922333444",
    givenname : "Marylyn",
    familyname: "Meltzer",
    phone: "4166667777",
    birthday: "1922-12-3"
  },
  {
    stunum: "333444555",
    givenname : "Frances",
    familyname: "Holberton",
    phone: "4168889999",
    birthday: "1917-03-07"
  }
];


// Set views path, template engine and default layout
app.use(express.static(__dirname + '/assets'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');


// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// We have to create custom validators here:
app.use(expressValidator({
  customValidators: {
    // Hint: You can re-use the regular expressions you used client-side!
    // But be sure to use forward slashes for the start and end of the expression ...

    isStuNum: function(value) {
      return value.search( /\d{9}\d?$/ ) !== -1;
    },
    isPhone: function(value) {
      return value.search( /\d{3}?-?\d{3}-?\d{4}$/ ) !== -1;
    },
    isBirthday: function(value) {
      return value.search( /(\d{4})-(\d{2})-(\d{2})$/ ) !== -1;
    }
  }
})); // This line must be immediately after express.bodyParser()!


// Get the index page:
app.get('/', function(req, res) {
  res.render('tapp', {  // Note that .html is assumed.
    errors: ''
  });
});


// Getting the value from a form input:
app.post('/signup', function(req, res) {
  // Very simply checking if the fields (by name) aren't empty:
  req.assert('stunum', 'A student number is required').notEmpty();
  req.assert('phone', 'A phone number is required').notEmpty();
  req.assert('birthday', 'A birthday is required').notEmpty();

    // .checkBody() looks at POST data.

    // Checking student number (use your custom validation functions):
    req.checkBody('stunum', 'Student number not formatted properly.').isStuNum();

    // Checking phone number:
    req.checkBody('phone', 'Phone number not formatted properly.').isPhone();

    // Checking birthday:
    req.checkBody('birthday', 'Birthday not formatted properly.').isBirthday();

    // Checking for errors and mapping them:
    var errors = req.validationErrors();
    var mappedErrors = req.validationErrors(true);

    if (errors) {
      // If errors exist, send them back to the form:
      var errorMsgs = { 'errors': {} };

      if (mappedErrors.stunum) {
        errorMsgs.errors.error_stunum = mappedErrors.stunum.msg;
      }

      if (mappedErrors.phone) {
        errorMsgs.errors.error_phone = mappedErrors.phone.msg;
      }

      if (mappedErrors.birthday) {
        errorMsgs.errors.error_birthday = mappedErrors.birthday.msg;
      }

      // Note how the placeholders in tapp.html use this JSON:
      res.render('tapp', errorMsgs);
    } else {
      // You'd do your processing of the submitted data here.
      // We're just showing a JSON of the fields you've validated:
      response = {
        stunum: req.body.stunum,
        givenname: req.body.givenname,
        familyname: req.body.familyname,
        phone: req.body.phone,
        birthday: req.body.birthday
      };
      TAs.push(response);
      console.log(TAs);
      res.end(JSON.stringify(response));
    }
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Running on 127.0.0.1:%s', port);
});
