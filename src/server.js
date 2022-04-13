const express = require("express");
const { router } = require("./routes");
const app = express()
require('./database')


// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.set('views', path.join(__dirname, '..', 'public'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

// app.get('/hello', (req, res) => {
//   return res.render('html/hello.html');
// });


// const router = express.Router()
// router.get('/hello', (req, res) => {
//   return res.json({ message: 'Hello World!' })
// })

// app.use(cors());
app.use(express.json());
app.use(router)


app.listen(3000, function() {
  console.log('App de Exemplo ando na porta 3000!');
});