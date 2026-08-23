import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const securityTxtPath = join(import.meta.dirname, '../src/.well-known/security.txt');

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);
const expiresStr = expires.toISOString().replace(/\.\d{3}Z$/, '.000Z');

const defaultContent = `Contact: https://github.com/SanderElias/Samples/security/advisories/new
Expires: ${expiresStr}
Preferred-Languages: en, nl
`;

await mkdir(dirname(securityTxtPath), { recursive: true });

let content: string;
try {
  content = await readFile(securityTxtPath, 'utf-8');
} catch {
  content = defaultContent;
}

const updated = content.replace(/^Expires: .+$/m, `Expires: ${expiresStr}`);
await writeFile(securityTxtPath, updated, 'utf-8');

console.log(`security.txt Expires updated to ${expiresStr}`);
