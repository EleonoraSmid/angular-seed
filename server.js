const express = require('express'),
      app = express()

app.use('/', express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/src/js'))
app.use('/angular', express.static(__dirname + '/node_modules/angular'))
app.listen(3000, function(res,req){

})
