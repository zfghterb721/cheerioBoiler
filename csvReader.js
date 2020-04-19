const csv = require("csvtojson");

async function main(){
    const file = await csv().fromFile("./test.csv");
    //console.log(file)
    for(var line of file){
        if(line["Sp"][" Def"] > 85){
            console.log(line["Name"],line["Sp"][" Def"]);
        }
    }
}


//actually have to call the main function
main();