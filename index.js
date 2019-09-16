const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require('body-parser')



const app = express();

var conn = MongoClient.connect("mongodb://localhost:27017", { userNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());


app.get("/countries", (req, res) => {
    //res.json({ "nombre": "fernanda" });

    //Se conecta a la base de datos con una promesa
    conn.then(client => {
            client.db("countries").collection("countries").find({}).toArray((err, data) => {
                res.json(data);
            });
        }


    );
});
app.get("/countries/:id", (req, res) => {


    let idbuscado = req.params.id;
    //Se conecta a la base de datos con una promesa

    conn.then(client => {
            client.db("countries").collection("countries").find({ country: idbuscado }).toArray((err, data) => {
                res.json(data);
            });
        }


    );
});
app.post("/countries", (req, res) => {
    //res.json({ "nombre": "fernanda" });

    let pais = {
        "country": req.body.country,
        "population": req.body.population,
        "continent": req.body.continent,
        "lifeExpectancy": req.body.lifeExpectancy,
        "purchasingPower": req.body.purchasingPower
    };
    //Se conecta a la base de datos con una promesa
    conn.then(client => {
            var promise = client.db("countries").collection("countries").insertOne(pais);

            promise.then(result => {
                res.json({ result: "Country created." });
            });
        }


    );
});

app.put("/countries/:id", (req, res) => {
    //res.json({ "nombre": "fernanda" });

    let idbuscado = req.params.id;
    var myquery = { "country": idbuscado };

    let pais = {
        $set: {

            "population": req.body.population,
            "continent": req.body.continent,
            "lifeExpectancy": req.body.lifeExpectancy,
            "purchasingPower": req.body.purchasingPower
        }
    };

    //Se conecta a la base de datos con una promesa
    conn.then(client => {
            var promise = client.db("countries").collection("countries").updateOne(myquery, pais);

            promise.then(result => {
                res.json({ result: "Country update." });
            });
        }


    );
});

app.delete("/countries/:id", (req, res) => {
    //res.json({ "nombre": "fernanda" });
    let idbuscado = req.params.id;
    //Se conecta a la base de datos con una promesa
    conn.then(client => {
            var promise = client.db("countries").collection("countries").deleteOne({ country: idbuscado });

            promise.then(result => {
                res.json({ result: "Country delete." });
            });
        }


    );
});

app.listen(8080);