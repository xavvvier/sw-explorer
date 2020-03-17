let express = require("express");
let fileSystem = require("fs");

// construct application object via express
let app = express();

//add the static files middleware
//allow the static files (angular) to handle this routes 
app.use(express.static('./dist/sw-explorer'));
//add fallback route handler 
app.use('/**', express.static('./dist/sw-explorer/index.html'));

// startup the Express server
app.listen(8080, () => console.log("Listening on port 8080"));

