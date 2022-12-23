# React Template Project

## Steps

Most of the steps followed to prepare this project are described here...

### Create application

```shell
yarn create react-app my-app --template typescript
```

### Typescript configuration

See https://www.typescriptlang.org/tsconfig.

Edit `tsconfig.json` to add `baseUrl` under `compilerOptions`:

```json
    "target", "es6",
    "baseUrl": "src"
```

The "baseUrl" option allows for absolute imports, relative to that URL.

### Install ESLint

```
yarn add -D eslint
npx eslint --init
```

Choose:

 * To check syntax and find problems
 * Javascript modules
 * React
 * Yes (Typescript)
 * Browser
 * JSON (config file)
 * yes (install now)
 * yarn

Typescript plugin for ESLint:

```shell
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

### Install Prettier

```shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
touch .prettierrc
```

### Configure ESLint

In `.eslintrc.json`:

#### Jest

Add "jest" true to "env":

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    }
}
```

#### Prettier

Add "prettier" to "extends", make sure it add it last to prevent conflicts with ESLint:

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ]
}
```

#### Plugins

Add "react-hooks" and "prettier" to plugins:

```json
{
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ]
}
```

#### Configure rules

See https://eslint.org/docs/rules.

#### ESLint extras

```shell
yarn install -D eslint-plugin-import
```

Add "import" to "plugins":

```json
{
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "import"
    ]
}
```

#### Typescript

Add to "settings":

```json
{
	"settings": {
        "import/resolver": {
        "typescript": {}
    }
}
```

### Configure Prettier

See https://prettier.io/docs/en/options.html.

In `.prettierrc`:

```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

### Scripts in package.json

Add "lint", "lint:fix" and "format" to "scripts" in `package.json`:

```json
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
        "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
        "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
    }
```

### Husky pre-commit hook

To lint and format code before commit, enable Husky pre-commit hooks.

In the project directory, at the root level (same as .git folder):

```shell
yarn add --dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit
```

Load `.husky/pre-commit` into an editor and change "undefined" to:

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

#### Commit

When committing changes to git, the pre-commit hook will run and if there are
no problems the expected output will be something like:

```
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
```

Otherwise problems will be reported in the terminal window.

### Git attributes

In the project root directory, edit `.gitattributes`:

```
* text=auto eol=lf
```

### Visual Studio Code

#### Formatter

If formatting code in VS Code, it may ask you to pick the default formatter for
CSS, and JSON. If so, choose Prettier.

#### Recommended plugins

It is recommended that Visual Studio Code is used with at least these plugins installed:

 - Jest, by Orta
 - ESLint, by Microsoft
 - Prettier, by Prettier
 - Live Share, by Microsoft (for collaborative workspaces)

Consider also:

 - git graph
 - git history
 - better comments
 - git lens


#### Recommended settings

Recommended Visual Studio settings:

 - "editor.foldingImportsByDefault": true
 - "files.trimTrailingWhitespace": true

#### Recommended themes

 - Blakai Theme
 - VSCode Icons

## Maintenance

Remember:

```shell
yarn outdated
yarn upgrade
```

## Running

From the project root directory:

```shell
yarn start
```

## Building and running

From the project root directory:

```shell
yarn build
```

If `serve` not already installed:

```shell
yarn global add serve
```

To run the built version of the application:

```shell
serve -s build
```

## TODO

 * Include code coverage check
 * Migrate instructions to ESLint v9 (new configuration replaces .eslintrc)
 * Integrate Cypress in a way that does conflict with Jest types
