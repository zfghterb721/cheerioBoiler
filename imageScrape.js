const axios = require("axios");
const cheerio = require("cheerio");


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


getPictureURL("https://www.pricecharting.com/game/nes/super-mario-bros-and-duck-hunt").then(img => console.log(img))