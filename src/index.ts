import axios from "axios";
import Cheerio from "cheerio";
import express, { json, Request, Response } from "express";

const Logger = require("../logger-library");

const app = express();

app.use(json());

app.use("/test", async (req: Request, res: Response) => {});

app.get('/scrap', async () => {
  const getPage = await axios.get('https://www.amazon.com/s?k=cpu');

  const $ = Cheerio.load(getPage.data);
  // console.log({result: $('.a-size-small', 'a-color-base' ,'a-text-normal')})
  console.log({result: $('div > div > h2 > a > span').text().includes("Desktop")})
})


app.listen(5000, () => {
  Logger.info("This is a test")
  Logger.info({
    test: {
      hello: "hello"
    }
  })
  console.log("Server running on port: ", 5000);
});

