import inquirer from "inquirer";
import { execa } from "execa";
import chalk from "chalk";

async function createProject() {
  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "Choose a template:",
      choices: ["Next.js + TypeScript (latest)", "Astro + Svelte", "Cancel"],
    },
  ]);

  if (template === "Cancel") return;

  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project name:",
      default: "my-app",
    },
  ]);

  const projectPath = `./${projectName}`;

  console.log(chalk.blue(`\nCreating ${template} project...`));

  if (template === "Next.js + TypeScript (latest)") {
    // Run bun create next
    await execa(
      "bunx",
      [
        "create-next-app@latest",
        projectName,
        "--typescript",
        "--eslint",
        "--tailwind",
        "--app",
        "--src-dir",
      ],
      {
        stdio: "inherit",
      }
    );

    console.log(chalk.green(`\n✅ Project created at ./${projectName}`));
  } else if (template === "Astro + Svelte") {
    // init Astro project
    await execa("pnpm", [
      "create",
      "astro@latest",
      projectName,
      "--",
      "--template",
      "minimal",
      "--typescript",
      "strict",
      "--git",
      "--install",
    ],{
      stdio: "inherit",
    });

    console.log(chalk.green(`\n✅ Project created at ./${projectName}`));
  }
}

export default createProject;
