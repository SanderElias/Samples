import {detect, parseAngularRoutes} from 'guess-parser';
import {join} from 'path';

try {
  const dir = join(__dirname, '/app');
  console.log(dir);

  // console.log(detect(dir));
  const routes = parseAngularRoutes(dir);
  console.log(routes.filter(r => r.path === '/modalSamp'));

  console.log('done');
} catch (e) {
  console.log('oops', e);
}
