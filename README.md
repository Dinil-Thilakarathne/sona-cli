# sona-cli

`sona-cli` is a simple and efficient CLI tool designed to streamline project creation, cache management, and tool upgrades. Built with [Bun](https://bun.sh), it offers a fast and modern JavaScript runtime experience.

## Features

- **Create Projects**: Quickly scaffold new projects using predefined templates.
- **Clear Cache**: Remove common cache and build folders to free up space and resolve potential issues.
- **Upgrade Tool**: Seamlessly upgrade `sona-cli` to the latest version.

## Installation

To install the cli tool globally:

```bash
npm intall -g @sonacode/sona-cli
```

## Usage

Run the CLI tool using:

```bash
bun run index.ts
```

Alternatively, after building and linking the CLI, you can use:

```bash
sona <command>
```

### Commands

#### 1. `create`

Create a new project from a predefined template.

```bash
sona create
```

- **Description**: Prompts you to select a project template and specify a project name.
- **Templates Available**:
  - `Next.js + TypeScript (latest)`
  - `Astro + Svelte`

#### 2. `clear-cache`

Remove common cache and build folders.

```bash
sona clear-cache
```

- **Description**: Deletes directories like `.next`, `node_modules`, `.turbo`, `dist`, `build`, `.astro`, and `test` if they exist in the current working directory.
- **Output**: Displays success or failure messages for each directory.

#### 3. `upgrade`

Upgrade `sona-cli` to the latest version.

```bash
sona upgrade
```

- **Description**: Checks for the latest version of `sona-cli` and upgrades if a newer version is available.
- **Output**: Displays the current and latest versions, along with the upgrade status.

## Development

### Build

To build the project, run:

```bash
bun run build
```

### Link CLI

To link the CLI globally for testing:

```bash
bun run link-cli
```



## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for new features or bug fixes.

## License

This project is licensed under the MIT License.

---

For more information about Bun, visit [Bun's official website](https://bun.sh).
