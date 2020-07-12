import { detect, parseAngularRoutes } from 'guess-parser';
import { join } from 'path';
import { writeFile } from 'fs';

try {
  const dir = join(__dirname, '/app');
  console.log(dir); //?.

  // console.log(detect(dir));
  const routes = parseAngularRoutes(dir).map(r => r.path); //?.;

  const jsonContent = JSON.stringify(routes, undefined, 4);

  writeFile('output.json', jsonContent, 'utf8', function (err) {
    if (err) {
      console.log('An error occurred while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });

  console.log('done');
} catch (e) {
  console.log('oops', e);
}
