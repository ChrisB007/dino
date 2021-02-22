const express = require("express");
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResult = rowdy.begin(app);
const db = require("./models");

// variables

const PORT = process.env.PORT || 4040;


//ROUTES

app.get('/', function(req, res){
    console.log("Hello");
    // res.send("Hello");

})


//CRUD ROUTES

app.get('/creatures', async function(req, res){
    try{
        const creature = await db.creature.findAll();
        res.send(creature);

    } catch(err){
        console.log(err);
    }

})

app.get("/creatures/1", async function(req, res){
    try{
        const singleCreature = await db.creature.findByPk(req.params.id);
        res.send(singleCreature);
    } catch (err){
        console.log(err);
    }

});

app.post("/creatures", async function(req, res){
    try{
        const moreCreature = await db.creature.create({
            name: req.body.name,
            type: req.body.type
        })

        res.send(moreCreature)
        
    } catch (err){
        console.log(err);
    }
    
})




app.listen(PORT, ()=>{
    rowdyResult.print();
    console.log(`Port is listening at ${PORT}`);
});
