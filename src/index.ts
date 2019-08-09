import express from 'express';
import { crawl } from './crawl';
import { extract } from './extract';

const app = express();
app.get('/crawl', (req, res) => {
  crawl(res.send.bind(res), extract);
});

app.listen(8080, () => {
  console.log(1);
});
