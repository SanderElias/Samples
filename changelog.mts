import { writeFileSync } from 'node:fs';

const changeLog = await fetch(
  'https://raw.githubusercontent.com/angular/angular/main/CHANGELOG.md'
).then(res => res.text());
const chunks = changeLog.split(`<!-- CHANGELOG SPLIT MARKER -->`);
console.log(chunks.length);
const InterestedChunks: string[] = [];
for (const chunk of chunks) {
  const version = chunk.match(/name="([^"]+)"/)?.[1];
  if (version) {
    // console.log(`Version: ${version}`);
    if (version.startsWith('22') || version.startsWith('21')) {
      InterestedChunks.push(chunk);
    }
  }
}
console.log(`Found ${InterestedChunks.length} interested chunks.`);
const result = InterestedChunks.join('\n<!-- CHANGELOG SPLIT MARKER -->\n');
writeFileSync('ngChangelog.md', result, 'utf-8');
