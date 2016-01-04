"use strict";

var app = require("./webserver");
var async = require("async");
var fs = require('fs');

var test =  function(req, res) {
    var sites = fs.readdirSync("./Sources");

    async.each(sites, function(site){
      require("./Sources/" + site)()
        .then(function(context, data){
           console.log("context: ", context);
           console.log("data: ", data);
           return { context: context, data: data };
         });
    });

    res.send("ok");
};

app.get("/", test);

// Start the server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
