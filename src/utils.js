// utils.js
const fs = require("fs"); // Import the Node.js File System module for file operations
const path = require("path"); // Import the Node.js Path module for path manipulation
const mkdirp = require("mkdirp"); // Import the mkdirp library for creating directories recursively

/**
 * Process a text file by converting it to an HTML file with paragraphs.
 *
 * @param {string} inputFilePath - The path to the input text file.
 * @param {string} outputDir - The directory where the HTML output file will be saved.
 */
function processTextFile(inputFilePath, outputDir) {
  // Read the content of the input text file
  const inputFileContent = fs.readFileSync(inputFilePath, "utf-8");

  // Split the content into paragraphs using regex (blank lines as separators)
  const paragraphs = inputFileContent.split(/\n\s*\n/);

  // Extract the file name (without extension) from the input file path
  const fileName = path.basename(inputFilePath, ".txt");

  // Define the path for the output HTML file
  const outputFile = path.join(outputDir, `${fileName}.html`);

  // Create the output directory if it doesn't exist
  mkdirp.sync(outputDir);

  // Generate the HTML content with the extracted paragraphs
  const htmlContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${fileName}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("\n")}
</body>
</html>`;

  // Write the HTML content to the output file
  fs.writeFileSync(outputFile, htmlContent);
}

/**
 * Recursively process all text files in a folder and its subfolders.
 *
 * @param {string} inputDir - The directory containing the text files.
 * @param {string} outputDir - The base directory for saving the HTML files.
 */
function processFolder(inputDir, outputDir) {
  // Read the list of files in the input directory
  const files = fs.readdirSync(inputDir);

  // Loop through each file in the directory
  for (const file of files) {
    const filePath = path.join(inputDir, file);

    // Check if the file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively process subdirectories
      processFolder(filePath, path.join(outputDir, file));
    } else if (file.endsWith(".txt")) {
      // Process text files and convert them to HTML
      processTextFile(filePath, outputDir);
    }
  }
}

// Export the functions for use in other modules
module.exports = {
  processTextFile,
  processFolder,
};
