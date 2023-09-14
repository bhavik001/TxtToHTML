// Import required Node.js modules and external dependencies
const fs = require("fs"); // File system module for file operations
const path = require("path"); // Path module for working with file paths
const yargs = require("yargs"); // Yargs module for command-line argument parsing
const mkdirp = require("mkdirp"); // mkdirp module for creating directories recursively
const { processTextFile, processFolder } = require("./utils"); // Custom utility functions

// Define the version of the tool
const version = "1.0.0";

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

  let inputPath = argv._[0] || "."; // Get the input path from command-line arguments
  let outputDir = argv.output || "./til"; // Get the output directory from command-line arguments

  // Check if the input path exists
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input path "${inputPath}" does not exist.`);
    process.exit(1);
  }

  // Check if the input path is a directory
  if (fs.statSync(inputPath).isDirectory()) {
    // If the input is a directory, create the output directory hierarchy
    inputPath = path.resolve(inputPath); // Convert relative path to absolute path
    mkdirp.sync(outputDir); // Create output directory if it doesn't exist
    processFolder(inputPath, outputDir); // Process all text files in the directory
    console.log(
      `Text files inside the directory are converted into HTML files.`
    );
  } else if (inputPath.endsWith(".txt")) {
    // If the input is a .txt file, convert it to an HTML file
    processTextFile(inputPath, outputDir);
    console.log(`The Text file "${inputPath}" is converted into an HTML file.`);
  } else {
    console.error("Error: Invalid input file or directory.");
    process.exit(1);
  }
}

// Call the main function to start the tool
main();
