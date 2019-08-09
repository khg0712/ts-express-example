import request from 'request';
import { Send } from 'express';
export const crawl = (callback: Send) => {
  request.get('https://naver.com', (err, res) => {
    if (err) callback('');
    callback(res.body);
  });
};
