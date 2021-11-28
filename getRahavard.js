
var cluster = require("cluster");
const numCPUs = require('os').cpus().length;
const fs = require("fs");
const https = require('https');

const request = require("request")

setInterval(() => {
  
  request(
    { method: 'GET'
    , uri: 'https://rahavard365.com/api/chart/bars?ticker=exchange.index%3A1%3Aclose&resolution=1D&startDateTime=1571586894&endDateTime=1576166092&firstDataRequest=false'
    ,headers:
    {
      'authority':'rahavard365.com',
      'cookie':".rahavard365auth=2831F5F175E7FD52B5DB0809C0042F736A0C2BD47BCDF30066B6A6F7E83B344AE20C22C34E7D3AFF949B3EBB6398786A801F4DD1C438528DD4F6B7CCF207D2A06EAFE1E1221D3A790F456DBF1CDDDBC47B44CBB753690325FF9DAD4081404233C79498F0B97D99D6924A7B274B3B2DF5B9C910EC6B0EEA27D99144C7CB00A59A2FC9A12094045284A76D571B8D4987B8450872274E229C0F83993A008D30B31EF6634DE2;",
      }
    , gzip: true
    }
  , function (error, response, body) 
    {
      console.log(body)
    }
  )
  counter = 0;

}, 10000);

let counter = 0;

setInterval(() => {
  console.log(counter++)
}, 1000);