# Contributing to TxtToHTML

Thank you for considering contributing to the TxtToHTML project. This guide will help you get started with the development process.

## Setup and Development

1. To clone this repository, use the command given below:

   ```bash
   git clone https://github.com/bhavik001/TxtToHTML.git
   cd TxtToHTML
   ```

2. Make sure you have Node.js installed. Check it using this command:

```bash
node -v
```

If it's not installed, download Node.js locally to your device.

3. Run the following command in the terminal to download the project's dependencies:

```bash
npm install
```

4. To run the code, use the following command in the terminal:

```bash
node src/index.js -h
```

## Testing

We use Jest as our testing framework. To run tests, use the following command:

```bash
npm test
```

## Writing Tests

When writing tests for the project, consider the following guidelines:

1. For each function or method, create separate test cases for various combinations of arguments.
2. Cover different code paths, including conditionals and loops.
3. Test "good" values and "bad" values your functions might encounter.
4. Consider the proper return type of your functions and cover all possible "good" return values.
5. Include test cases for extreme error conditions to ensure robust error handling.

## Test Organization

Add all the test file inside the test directory. See the example below:
TXTTOHTML
├── src
│ ├── index.js
│ ├── utils.js
│ └── ...
└── test
├── utils.test.js
└── ...

## Code Formatting

We use [Prettier](https://prettier.io/) to format our code. To format your code, run the following command:

```bash
npm run prettier
```

## Code Linting

We use [ESLint](https://eslint.org/) to lint our JavaScript code. To lint your code, run the following command:

```bash
npm run lint
```

## Editor Integration

Our project supports automatic linting and formatting in Visual Studio Code (VSCode). To set up linting and formatting in your VSCode:

1. Ensure you have VSCode installed on your machine.

2. Install the following VSCode extensions:

   - "ESLint" for JavaScript/TypeScript linting.
   - "Prettier - Code formatter" for source code formatting.

3. Open your project in VSCode.

4. Save a file to trigger linting and formatting.

5. To make linting and formatting settings consistent, ensure your project contains necessary configuration files (e.g., `.eslintrc.js`, `.prettierrc.js`).

With these settings, your code will be automatically formatted and linted as you type and save files in VSCode.

Note: The provided configuration files in the project should be sufficient for linting and formatting. You don't need to manually adjust settings in your VSCode settings.json.
