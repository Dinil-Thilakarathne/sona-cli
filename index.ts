#!/usr/bin/env bun

import { Command } from "commander";
import createProject from "./utils/create-projects";
import { clearCache } from "./utils/clear-cache";
import { upgrade } from "./utils/upgrade";

const program = new Command();
const pkg = require("./package.json");

program
  .name("sona-cli")
  .description("A simple CLI tool")
  .version(pkg.version, "-v, --version", "output the current version")

program
  .command("create")
  .description("Create a new project from a predefined template")
  .action(createProject);

program
  .command("clear-cache")
  .description("Remove common cache and build folders")
  .action(clearCache);

program
  .command("upgrade")
  .description("Upgrade sona-cli to the latest version")
  .action(upgrade);

program.parse(process.argv);
