

- initialize npm ```npm init```
- install express ```npm install express --save```

get our server going

- create server.js
- require expresssetup an express app

```var express = require( 'express');
var app = express();```
///tell app to listen

``` app.listen( 5678, function(){
    console.log( 'server is up on 5678');
});
```

- start up sever make sure it's listening
- terminal ```node server.js```

setup base URL route:
```//base URL
app.get( '/', function(req, res){
  console.log('base url hit');
  res.send('I came from the server!!');
});//end base URL
```

- open up localhost:5678
- create 'views'
- create index.html
- put some html in there
- add ```var path = require('path');```
- change res.sen to ```res.sendFile(path.resolve('views/index.html'));```

add JS + JQ
- make "public" a "static" folder using express
```app.use( express.static('public'));
```
- source JS in html
```<script src="scripts/songs.js" charset="utf-8"></script>
```
-restart and reload
