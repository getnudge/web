
var express = require('express');
var app = module.exports = express()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const cors = require("cors");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(express.static("public"));


app.use("*", cors())

app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/analytics', function(req, res){
    res.sendFile(__dirname + '/src/analytics.html');
});

// API ENDPOINTS 
app.get('/api/analyze', async function(req, res){

    // wconsole.log(req.query.text)
    const datsa2 = await openai.createCompletion("text-davinci-002", {
        prompt: `There keywords that describe "${req.query.text}" are:`,
        temperature: 0.1,
        max_tokens: 30,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0,
    })


    const datsa = await openai.createCompletion("text-davinci-002", {
        prompt: `Are the words ${datsa2.data.choices[0].text} describing "${req.query.context}". Answer either true or false.`,
        temperature: 0.3,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0,
    })


    console.log("AI SUMMARY:" + "\n" + datsa2.data.choices[0].text + "\n" + datsa.data.choices[0].text);
    
    res.send(datsa.data.choices[0].text.toLowerCase());
  
});


app.listen(3000);
console.log('Express started on port 3000');

