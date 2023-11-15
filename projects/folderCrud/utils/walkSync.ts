import { readdirSync, statSync } from 'fs';
export const walkSync = function (dir: string, filelist: string[] = []) {
  const files = readdirSync(dir);
  files.forEach(function (file) {
    if (statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    } else {
      filelist.push(dir + file);
    }
  });
  return filelist;
};
