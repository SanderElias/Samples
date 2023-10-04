import http from 'http';
import { request } from 'https';

/**
 * Do a search for images based on the query string
 * @param {*} req: http.IncomingMessage
 * @param {*} res: http.ServerResponse
 * @param {*} options: string[]
 */
export const imgSearch = async (req, res, [name]) => {
  console.log('imgSearch', name);
  try {
    const content = await getContent(name);
    console.log('content', content);
  } catch (error) {
    console.error(error);
  }
  res.end('Hello imgSearch');
};

const getContent = name => {
  const so = new URL(`https://api.duckduckgo.com/?&format=json&pretty=1`);
  so.searchParams.set('q', `${name}`);

  return new Promise((resolve, reject) => {
    const req = request(so, res => {
      console.log(`statusCode: ${res.statusCode}`);

      let data = '';
      res.on('data', chunk => {
        console.log(String(chunk))
        data += String(chunk);
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', error => {
      reject(error);
    });

    req.end();
  });
};

const url = `https://www.google.com/search?q=darth+vader`;


const r = getContent('puppies')
console.table(r)
