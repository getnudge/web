
var express = require('express');
var app = module.exports = express()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const cors = require("cors");
const { response } = require('express');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(express.static("public"));


app.use("*", cors())

app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/dashboard', function(req, res){
    res.sendFile(__dirname + '/src/analytics.html');
});

// API ENDPOINTS 
app.get('/api/analyze', async function(req, res){

    console.log("hit")
    // wconsole.log(req.query.text)
    const datsa2 = await openai.createCompletion("text-davinci-002", {
        prompt: `Create a 400 word summary for the article ${req.query.url} in your own words. After you have created the summary, please enter the summary below.`,
        temperature: 0.1,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0,
    })

    if (!datsa2.data.choices[0].text) return res.send("Error")

    res.send(datsa2.data.choices[0].text);
  
});


app.listen(3000);
console.log('Express started on port 3000');

