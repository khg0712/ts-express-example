import request from 'request';
export const crawl = () => new Promise<string>((resolve, reject) => {
  request.get('https://naver.com', (err, res) => {
    if (err) reject(err);
    resolve(res.body);
  });
});
