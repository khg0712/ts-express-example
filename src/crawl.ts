import request from 'request';
import { Send } from 'express';
export const crawl = (callback: Send, extract: (html: string) => string[]) => {
  request.get('https://naver.com', (err, res) => {
    if (err) callback('');
    callback(extract(res.body).join(', '));
  });
};
