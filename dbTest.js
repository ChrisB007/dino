const models = require("./models");
const creatures = require("./prehistoric_creatures.json");

const creature = async () => {
    for (let i = 0; i < creatures.length; i++){
         models.creature.create({
        type: creatures[i].type,
        img_url: creatures[i].img_url
    })
    }
}

creature();