#!/usr/bin/env bun
import { execSync } from "child_process";
import { version } from "../package.json";
import latestVersion from "latest-version";

const pkgName = "@dinil/sona-cli";

export async function upgrade() {
  const latest = await latestVersion(pkgName);

  if (version === latest) {
    console.log(`✅ sona-cli is already up to date (v${version})`);
    return;
  }

  console.log(`🔄 Upgrading sona-cli from v${version} to v${latest}...`);
  try {
    execSync(`npm install -g ${pkgName}`, { stdio: "inherit" });
    console.log("✅ Upgrade complete!");
  } catch (err) {
    console.error("❌ Upgrade failed:", err);
  }
}
