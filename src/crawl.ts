import request from 'request';
export const crawl = () => {
  request.get('https://naver.com', (err, res) => {
    if (err) console.log(err);
    console.log(res.body);
  });
};
