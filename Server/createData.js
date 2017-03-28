var fs = require('fs');
var parse = require('csv-parse');
var obj = {
    info: { location: "", sensorId: "" }, 
    chartData0: [],
    chartData1: [],
    chartData2: [],
    chartData3: [],
    chartData4: []
          };

var parser = parse({from: 2}, function(err, data){
  
    if(data.length >= 0){
        obj.info.location = data[0][1];
        obj.info.sensorId = data[0][4];
    }
    
    for(var i = 0; i < data.length; i++){  
        var tempDate = dateObjectFromString(data[i][0]);
        if(data[i][5] != '-') obj.chartData0.push({time: tempDate, precipitation: data[i][5]});
        if(data[i][6] != '-') obj.chartData1.push({time: tempDate, potentialET: data[i][6]});
        if(data[i][7] != '-') obj.chartData2.push({time: tempDate, temperature: data[i][7]});
        if(data[i][8] != '-') obj.chartData3.push({time: tempDate, bar: data[i][8]});
        if(data[i][9] != '-') obj.chartData4.push({time: tempDate, waterDeficit: data[i][9]});
      }

    fs.writeFile('./public/Data/data.json',JSON.stringify(obj),'UTF-8',function(err){
        if(err){
            console.error(err.message);
            throw err;
        }
        console.log("Data.json was created");
    });
      
});

function dateObjectFromString(str){
    var dateArr = str.split("/");
    var to = dateArr[1] + "/" + dateArr[0] + "/" + dateArr[2];
    return new Date(to);
}

fs.createReadStream(__dirname+'/public/Data/Saturas3.csv').pipe(parser);
