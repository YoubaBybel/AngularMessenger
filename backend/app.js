const express = require('express');
const app = express();
const http = require('http');

app.get('/', function (req, res) {
    http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
        let data = "";

        resp.on('data', (element) => {
            data += element;
        });

        resp.on('end', () => {
            let messagesJson = JSON.parse(data);

            // Permet de ne pas prendre en compte les problèmes de sécurité
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            res.json(messagesJson);
        });
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
