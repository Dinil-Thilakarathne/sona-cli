// utils/clear-cache.ts
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const cacheDirs = ['.next', 'node_modules', '.turbo', 'dist', 'build'];

export async function clearCache() {
  console.log(chalk.blue('\n🧹 Clearing cache folders...\n'));

  for (const dir of cacheDirs) {
    const fullPath = path.resolve(process.cwd(), dir);

    if (await fs.pathExists(fullPath)) {
      try {
        await fs.remove(fullPath);
        console.log(chalk.green(`✅ Removed ${dir}`));
      } catch (err) {
        console.log(chalk.red(`❌ Failed to remove ${dir}: ${err}`));
      }
    } else {
      console.log(chalk.gray(`⚠️  ${dir} does not exist, skipped.`));
    }
  }

  console.log(chalk.blue('\n✅ Cache clear complete.\n'));
}