import { execSync } from 'node:child_process';

export const getNpmVersion = packageName => {
  try {
    const version = execSync(`npm show ${packageName} version`, { encoding: 'utf-8' });
    return version.trim();
  } catch {
    console.log(`⚠️ error reading the version from NPM, using 0.0.0`);
    return '0.0.0';
  }
};
