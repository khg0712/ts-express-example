import express from 'express';
import { crawl } from './crawl';

crawl();

const app = express();
app.get('/', (req, res) => {
});

app.listen(8080, () => {
  console.log(1);
});
