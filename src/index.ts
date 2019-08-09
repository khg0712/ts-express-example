import express from 'express';
import { crawl } from './crawl';
import { extract } from './extract';

const app = express();
app.get('/crawl', (req, res) => {
  crawl()
    .then(
      (html: string) => res.send(
        extract(html).join(', '),
      ),
    );
});

app.listen(8080, () => {
  console.log(1);
});
