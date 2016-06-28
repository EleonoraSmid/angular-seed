const express = require('express'),
      app = express()

app.use('/', express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/src'))
app.use('/angular', express.static(__dirname + '/node_modules/angular'))
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'))
app.listen(3000, function(res,req){
	console.log('Server running on port 3000!')
	console.log('Use "Gulp" to compile less and "Gulp build" to minify your CSS')
})
