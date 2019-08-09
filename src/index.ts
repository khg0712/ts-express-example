import express from 'express';
import { crawl } from './crawl';

const app = express();
app.get('/crawl', (req, res) => {
  crawl(res.send.bind(res));
});

app.listen(8080, () => {
  console.log(1);
});
