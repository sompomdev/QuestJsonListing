const fs = require('fs');
const newDataPath = "Main/quest_data_production.json"
const oldDataPath = "Main/quest_data_original.json"

let readJsonArray = function(fileName)
{
    const fs2 = require('fs');
    var obj = JSON.parse(fs2.readFileSync(fileName, 'utf8'));
    // console.log(obj);

    return obj;
}

let oldQuests = readJsonArray(oldDataPath)
let newQuests = readJsonArray(newDataPath)
let counter = 0;
oldQuests.forEach(_old => {
    let found = false
    newQuests.forEach(_new => {
        if (_old.id === _new.id){
            found = true
        }
    }); 

    if (found === false)
    {
        //console.log("======MISSING " + ++counter + "=======")
        console.log(_old.id)
        //console.log("======^^^^^^^^^^^^=======")
    }
});

