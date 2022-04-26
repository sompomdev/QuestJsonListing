const fs = require('fs');
const pathLising = "Listing"
const pathMain = "Main"

fs.readdir(pathLising, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    let list = []
    files.forEach(function (file) {
        if (file != ".DS_Store")
        {
            //console.log(file)
            let arrayOfJson = readJsonArray(pathLising + '/' + file)
            list.push(...arrayOfJson)
        }
    });
    //console.log(list)
    
    const myArgs = process.argv.slice(2);
    let fileToSave = 'quest_data_production.json'
    if (myArgs[0] != null)
    {
        fileToSave = myArgs[0]
    }
   
    writeJson(fileToSave, list)

    console.log("Save to file name : " + fileToSave)
})


let readJsonArray = function(fileName)
{
    const fs2 = require('fs');
    var obj = JSON.parse(fs2.readFileSync(fileName, 'utf8'));
    //console.log(obj);

    return obj;
}

let writeJson = function(fileName, json)
{
    const fs2 = require('fs');
    let data = JSON.stringify(json)
    fs2.writeFileSync(pathMain + '/' + fileName, data);
}