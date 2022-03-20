
var express = require('express');
var app = module.exports = express()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(express.static("public"));



app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/analytics', function(req, res){
    res.sendFile(__dirname + '/src/analytics.html');
});

// API ENDPOINTS 
app.get('/api/analyze', async function(req, res){

    // wconsole.log(req.query.text)

    const datsa = await openai.createCompletion("text-davinci-002", {
        prompt: `Are the words ben franklin, us related to history`,
        temperature: 0.3,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0,
    })


    res.send(`You gave: ${req.query.text}<br><br>Open AI Gave: ${datsa.data.choices[0].text}`);
  
});


app.listen(3000);
console.log('Express started on port 3000');

