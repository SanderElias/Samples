import { createHash } from 'crypto';
import { readdir,readFile, stat } from 'fs/promises';

export const hashFolder = async folder => {
  try {
  const files = await readdir(folder);
  const hashes = await Promise.all(
    files.map(async file => {
      const filePath = `${folder}/${file}`;
      const stats = await stat(filePath);
      if (stats.isDirectory()) {
        return hashFolder(filePath);
      } else {
        const content = await readFile(filePath);
        return createHash('sha256').update(content).digest('hex');
      }
    })
  );
  return createHash('sha256').update(hashes.join('')).digest('hex');
} catch (error) {
  console.log('`❌ error hashing the folder', error);
}
return '';
};
