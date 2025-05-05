#!/usr/bin/env bun

import { Command } from "commander";
import createProject from "./utils/create-projects";
import { clearCache } from "./utils/clear.cache";

const program = new Command();

program.name("sona-cli").description("A simple CLI tool").version("0.0.1");

program
  .command("init")
  .description("Initialize a new project")
  .action(() => {
    console.log("Project initialized!");
  });

program
  .command("create")
  .description("Create a new project from a predefined template")
  .action(createProject);

program
  .command("clear-cache")
  .description("Remove common cache and build folders")
  .action(clearCache);

program.parse(process.argv);
