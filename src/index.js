// Import required Node.js modules and external dependencies
const fs = require("fs"); // File system module for file operations
const path = require("path"); // Path module for working with file paths
const yargs = require("yargs"); // Yargs module for command-line argument parsing
const { processTextFile, processFolder, processMdFile } = require("./utils"); // Custom utility functions

// Read the version from package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const version = packageJson.version;

// Function to print help information about how to use the tool
function optionHelp() {
  console.log(`
Welcome to the Help Option of the TxtToHTMLizer.
Usage: node index.js [options] <input>

Options:
  -h, --help            Display this help message
  -v, --version         Display the tool's version
  -o, --output <dir>    Specify the output directory (default: ./til)

Inputs:
<input>: A text or folder containing a list of files that should be converted into HTML file format.

How to use for -o:
1. Convert a single text file to HTML with a custom output directory:
    * Usage: node index.js -o custom_output input.txt
2. Recursively convert all .txt files in a folder to HTML with a custom output directory:
    * Usage: node index.js -o custom_output my_folder
`);
}

// Function to clear the output directory
function clearOutputDir(outputDirectory) {
  if (fs.existsSync(outputDirectory)) {
    fs.rmSync(outputDirectory, { recursive: true, force: true });
  }
}

// The main function that performs the core functionality of the tool
function main() {
  // Parse command-line arguments using Yargs
  const argv = yargs
    .option("output", {
      alias: ["o"],
      description: "Specify the output directory (default: ./til)",
    })
    .version(version)
    .alias("version", "v")
    .help(false).argv; // Disable the default --help option

  if (argv.h || argv.help) {
    // Check for -h or --help
    optionHelp(); // Display custom help message
    return;
  }

  let inputFilePath = argv._[0] || "."; // Get the input path from command-line arguments
  let outputDirectory = argv.output || "./til"; // Get the output directory from command-line arguments

  // Clear the output directory before processing files
  clearOutputDir(outputDirectory);

  // Check if the input path exists
  if (!fs.existsSync(inputFilePath)) {
    console.error(`Error: Input path "${inputFilePath}" does not exist.`);
    process.exit(1);
  }

  // Check if the input path is a directory
  if (fs.statSync(inputFilePath).isDirectory()) {
    // If the input is a directory, create the output directory hierarchy
    inputFilePath = path.resolve(inputFilePath); // Convert relative path to absolute path

    // Create output directory if it doesn't exist (with recursive option)
    fs.mkdirSync(outputDirectory, { recursive: true });

    processFolder(inputFilePath, outputDirectory); // Process all text files in the directory
    console.log(
      `Text files inside the directory are converted into HTML files.`
    );
  } else if (inputFilePath.endsWith(".txt")) {
    // If the input is a .txt file, convert it to an HTML file
    processTextFile(inputFilePath, outputDirectory);
    console.log(`The Text file "${inputFilePath}" is converted into an HTML file.`);
  } else if (inputFilePath.endsWith(".md")) {
    // If the input is a .md file, convert it to an HTML file
    processMdFile(inputFilePath, outputDirectory);
    console.log(`The md file "${inputFilePath}" is converted into an HTML file.`);
  } else {
    console.error("Error: Invalid input file or directory.");
    process.exit(1);
  }
}

// Call the main function to start the tool
main();
