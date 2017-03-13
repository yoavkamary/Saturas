var fs = require('fs');
var parse = require('csv-parse');
var obj = {
    chartData0:[],
    chartData1:[],
    chartData2:[],
    chartData3:[],
    chartData4:[]
          };

var parser = parse({from: 2}, function(err, data){
  for(var i = 0; i < data.length; i++){
        if(data[i][5] != '-') obj.chartData0.push({time: data[i][0], precipitation: data[i][5]});
        if(data[i][6] != '-') obj.chartData1.push({time: data[i][0], potentialET: data[i][6]});
        if(data[i][7] != '-') obj.chartData2.push({time: data[i][0], temperature: data[i][7]});
        if(data[i][8] != '-') obj.chartData3.push({time: data[i][0], bar: data[i][8]});
        if(data[i][9] != '-') obj.chartData4.push({time: data[i][0], waterDeficit: data[i][9]});
  }
    
  fs.writeFile('./public/Data/data.json',JSON.stringify(obj),'UTF-8',function(err){
    if(err) throw err;
});
      
});

fs.createReadStream(__dirname+'/public/Data/Saturas3.csv').pipe(parser);

//var now = new Date().getTime();
//var obj = {
//        chartData0: [
//      { time: new Date(now - 86400 * 1000 * 10), precipitation: 30 }
//        ],
//                
//        chartData1: [
//      { time: new Date(now - 86400 * 1000 * 21), potentialET: 51 },
//      { time: new Date(now - 86400 * 1000 * 20), potentialET: 55 },
//      { time: new Date(now - 86400 * 1000 * 19), potentialET: 54 },
//      { time: new Date(now - 86400 * 1000 * 18), potentialET: 56 },
//      { time: new Date(now - 86400 * 1000 * 17), potentialET: 56 },
//      { time: new Date(now - 86400 * 1000 * 16), potentialET: 56 },
//      { time: new Date(now - 86400 * 1000 * 15), potentialET: 57 },
//      { time: new Date(now - 86400 * 1000 * 14), potentialET: 58 },
//      { time: new Date(now - 86400 * 1000 * 13), potentialET: 60 },
//      { time: new Date(now - 86400 * 1000 * 12), potentialET: 60 },
//      { time: new Date(now - 86400 * 1000 * 11), potentialET: 60 },
//      { time: new Date(now - 86400 * 1000 * 10), potentialET: 61 },
//      { time: new Date(now - 86400 * 1000 * 9), potentialET: 88 },
//      { time: new Date(now - 86400 * 1000 * 8), potentialET: 88 },
//      { time: new Date(now - 86400 * 1000 * 7), potentialET: 90 },
//      { time: new Date(now - 86400 * 1000 * 6), potentialET: 92 },
//      { time: new Date(now - 86400 * 1000 * 5), potentialET: 60 },
//      { time: new Date(now - 86400 * 1000 * 4), potentialET: 60 },
//      { time: new Date(now - 86400 * 1000 * 3), potentialET: 63 },
//      { time: new Date(now - 86400 * 1000 * 2), potentialET: 62 },
//      { time: new Date(now - 86400 * 1000 * 1), potentialET: 65 },
//      { time: new Date(now - 86400 * 1000 * 0), potentialET: 65 }        
//        ],  
//        
//        chartData2: [
//      { time: new Date(now - 86400 * 1000 * 21), temperature: 35 },
//      { time: new Date(now - 86400 * 1000 * 20), temperature: 28 },
//      { time: new Date(now - 86400 * 1000 * 19), temperature: 34 },
//      { time: new Date(now - 86400 * 1000 * 18), temperature: 32 },
//      { time: new Date(now - 86400 * 1000 * 17), temperature: 40 },
//      { time: new Date(now - 86400 * 1000 * 16), temperature: 32 },
//      { time: new Date(now - 86400 * 1000 * 15), temperature: 35 },
//      { time: new Date(now - 86400 * 1000 * 14), temperature: 55 },
//      { time: new Date(now - 86400 * 1000 * 13), temperature: 38 },
//      { time: new Date(now - 86400 * 1000 * 12), temperature: 30 },
//      { time: new Date(now - 86400 * 1000 * 11), temperature: 25 },
//      { time: new Date(now - 86400 * 1000 * 10), temperature: 32 },
//      { time: new Date(now - 86400 * 1000 * 9), temperature: 42 },
//      { time: new Date(now - 86400 * 1000 * 8), temperature: 37 },
//      { time: new Date(now - 86400 * 1000 * 7), temperature: 33 },
//      { time: new Date(now - 86400 * 1000 * 6), temperature: 24 },
//      { time: new Date(now - 86400 * 1000 * 5), temperature: 26 },
//      { time: new Date(now - 86400 * 1000 * 4), temperature: 30 },
//      { time: new Date(now - 86400 * 1000 * 3), temperature: 33 },
//      { time: new Date(now - 86400 * 1000 * 2), temperature: 38 },
//      { time: new Date(now - 86400 * 1000 * 1), temperature: 40 },
//      { time: new Date(now - 86400 * 1000 * 0), temperature: 29 }        
//        ],
//        
//        chartData3: [
//      { time: new Date(now - 86400 * 1000 * 21), bar: 2 },
//      { time: new Date(now - 86400 * 1000 * 20), bar: 5 },
//      { time: new Date(now - 86400 * 1000 * 19), bar: 7 },
//      { time: new Date(now - 86400 * 1000 * 18), bar: 9 },
//      { time: new Date(now - 86400 * 1000 * 17), bar: 8 },
//      { time: new Date(now - 86400 * 1000 * 16), bar: 6 },
//      { time: new Date(now - 86400 * 1000 * 15), bar: 4 },
//      { time: new Date(now - 86400 * 1000 * 14), bar: 2 },
//      { time: new Date(now - 86400 * 1000 * 13), bar: 1 },
//      { time: new Date(now - 86400 * 1000 * 12), bar: 3 },
//      { time: new Date(now - 86400 * 1000 * 11), bar: 5 },
//      { time: new Date(now - 86400 * 1000 * 10), bar: 7 },
//      { time: new Date(now - 86400 * 1000 * 9), bar: 8 },
//      { time: new Date(now - 86400 * 1000 * 8), bar: 9 },
//      { time: new Date(now - 86400 * 1000 * 7), bar: 10 },
//      { time: new Date(now - 86400 * 1000 * 6), bar: 9 },
//      { time: new Date(now - 86400 * 1000 * 5), bar: 6 },
//      { time: new Date(now - 86400 * 1000 * 4), bar: 3 },
//      { time: new Date(now - 86400 * 1000 * 3), bar: 1 },
//      { time: new Date(now - 86400 * 1000 * 2), bar: 5 },
//      { time: new Date(now - 86400 * 1000 * 1), bar: 7 },
//      { time: new Date(now - 86400 * 1000 * 0), bar: 9 }        
//        ],
//        
//        chartData4: [
//      { time: new Date(now - 86400 * 1000 * 21), waterDeficit: 3 },
//      { time: new Date(now - 86400 * 1000 * 20), waterDeficit: 3 },
//      { time: new Date(now - 86400 * 1000 * 19), waterDeficit: 4 },
//      { time: new Date(now - 86400 * 1000 * 18), waterDeficit: 4 },
//      { time: new Date(now - 86400 * 1000 * 17), waterDeficit: 4 },
//      { time: new Date(now - 86400 * 1000 * 16), waterDeficit: 6 },
//      { time: new Date(now - 86400 * 1000 * 15), waterDeficit: 6 },
//      { time: new Date(now - 86400 * 1000 * 14), waterDeficit: 6 },
//      { time: new Date(now - 86400 * 1000 * 13), waterDeficit: 6 },
//      { time: new Date(now - 86400 * 1000 * 12), waterDeficit: 6 },
//      { time: new Date(now - 86400 * 1000 * 11), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 10), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 9), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 8), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 7), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 6), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 5), waterDeficit: 5 },
//      { time: new Date(now - 86400 * 1000 * 4), waterDeficit: 3 },
//      { time: new Date(now - 86400 * 1000 * 3), waterDeficit: 3 },
//      { time: new Date(now - 86400 * 1000 * 2), waterDeficit: 3 },
//      { time: new Date(now - 86400 * 1000 * 1), waterDeficit: 4 },
//      { time: new Date(now - 86400 * 1000 * 0), waterDeficit: 4 }        
//        ],
//}

//fs.writeFile('./public/data.json',JSON.stringify(obj),'UTF-8',function(err){
//    if(err) throw err;
//});
