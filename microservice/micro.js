// setting the port number
const port = 8488;

const express = require('express');
const app = express();
var CORS = require('cors');
const axios = require('axios');
const res = require('express/lib/response');
const { response } = require('express');


// JSON and form processing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(CORS());


// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// function that makes call to currency API
function apiCall() {
    return axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=c57339d0-9018-11ec-ab39-910d5ad288fe')
        .then(res => {
            // handle success
            const response = res.data.data
            // console.log(data)
            return response;
        })
        .catch(error => {
            // handle error
            console.log(error);
        })
}

// get route in order to get the currency conversion
app.get('/convert', (req, res, next) => {
    const currency = req.query["currency"]
    const amount = req.query["amount"]
    apiCall()
      .then(response => {
        const rate = response[currency]
        const conv = rate * amount;
        const result = {conversion: conv}
        try {res.json(result)}
        catch {console.log("error")}
      })
  })

  // 400 error handler
app.use((req, res) => {
    res.status(404);
    console.log('400 Error')
    res.send('404');
  });
  
// 500 error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    console.log('500 Error')
    res.send('500');
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });