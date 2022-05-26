const newDataPath = "Main/quest_data_production.json"

let readJsonArray = function(fileName)
{
    const fs2 = require('fs');
    var obj = JSON.parse(fs2.readFileSync(fileName, 'utf8'));
    // console.log(obj);

    return obj;
}

var list1 = readJsonArray(newDataPath);
var list2 = readJsonArray(newDataPath);
list1.forEach(q1 => {
    var matchCount = 0;
    list2.forEach(q2 => {
        if (q1.id === q2.id) {
            matchCount++;
        }
    }); 

    if (matchCount >= 2) {
        console.log(q1.id)
    }
});
