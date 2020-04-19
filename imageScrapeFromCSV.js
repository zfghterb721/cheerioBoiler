const csv = require("csvtojson");
const axios = require("axios");
const cheerio = require("cheerio");
var fs = require('fs')

async function getPictureURL(url) {
  try {
    const webpage = await axios.get(url);
    const $ = cheerio.load(webpage.data);

    return (
      $(".cover")
        .children("img")
        .attr("src")
    );
  } catch {
    return "";
  }
}
async function main(){
    const file = await csv().fromFile("csvs/missingVGImages.csv");
    //console.log(file)
    for(var line of file){
        const imgUrl = await getPictureURL(line["PCURL"]);
        console.log(imgUrl);
        fs.appendFile('foundVgImages.csv', `${line["Handle"]},${imgUrl}\n`, function (err) {
            if (err) {
              // append failed
            } else {
              // done
            }
          })
    }
}


//actually have to call the main function
main();