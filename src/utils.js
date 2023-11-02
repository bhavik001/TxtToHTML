// utils.js
const fs = require("fs"); // Import the Node.js File System module for file operations
const path = require("path"); // Import the Node.js Path module for path manipulation
const mkdirp = require("mkdirp"); // Import the mkdirp library for creating directories recursively

/**
 * Process a text file by converting it to an HTML file with paragraphs.
 *
 * @param {string} inputFilePath - The path to the input text file.
 * @param {string} outputDirectory - The directory where the HTML output file will be saved.
 */
function processTextFile(inputFilePath, outputDirectory) {
  // Read the content of the input text file
  const inputFileContent = fs.readFileSync(inputFilePath, "utf-8");

  // Split the content into paragraphs using regex (blank lines as separators)
  let paragraphs = inputFileContent.split(/\n/);

  const fileExtension = path.extname(inputFilePath);

  // Extract the file name (without extension) from the input file path
  const fileName = path.basename(inputFilePath, fileExtension);

  // Define the path for the output HTML file
  const outputFile = path.join(outputDirectory, `${fileName}.html`);

  // Create the output directory if it doesn't exist
  mkdirp.sync(outputDirectory);

  // Generate the HTML content with the extracted paragraphs
  const htmlContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${fileName}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Your page description here for SEO">
  <meta name="keywords" content="your, keywords, here, for, SEO">
  <meta property="og:title" content="${fileName}">
  <meta property="og:description" content="Your Open Graph description for social sharing">
  <!-- Add more meta tags as needed for SEO -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
        crossorigin="anonymous">
</head>
<body>
<center>
${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("\n")}
</center>
</body>
</html>`;

  // Write the HTML content to the output file
  fs.writeFileSync(outputFile, htmlContent);
}

/**
 * Recursively process all text files in a folder and its subfolders.
 *
 * @param {string} inputDir - The directory containing the text files.
 * @param {string} outputDirectory - The base directory for saving the HTML files.
 */
function processFolder(inputDir, outputDirectory) {
  // Read the list of files in the input directory
  const files = fs.readdirSync(inputDir);

  // Loop through each file in the directory
  for (const file of files) {
    const filePath = path.join(inputDir, file);

    // Check if the file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively process subdirectories
      processFolder(filePath, path.join(outputDirectory, file));
    } else if (file.endsWith(".txt") || file.endsWith(".md")) {
      // Process text files and convert them to HTML
      processTextFile(filePath, outputDirectory);
    }
  }
}

function processMdFile(inputFilePath, outputDirectory) {
  const inputFileContent = fs.readFileSync(inputFilePath, "utf-8");

  const paragraphs = inputFileContent
    .replace(/^#\s(.+)$/gm, "<h1>$1</h1>") // heading 1
    .replace(/^##\s(.+)$/gm, "<h2>$1</h2>") // heading 2
    .replace(/^(?!<h[1-6]>|<ul>|<ol>|<li>|<a>).+$/gm, "<p>$&</p>") // paragraph
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href=$2">$1</a>') //  link
    .replace(/\*(.*?)\*/g, "<i>$1</i>") // italic
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // bold
    .replace(/`(.*?)`/g, "<code>$1</code>") // inline code
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>") // fenced code block
    .replace(/^---$/gm, "<hr>"); // horizontal rule

  const fileName = path.basename(inputFilePath, ".md");
  const outputFile = path.join(outputDirectory, `${fileName}.html`);
  mkdirp.sync(outputDirectory);

  // Generate the HTML content with the extracted paragraphs
  const htmlContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${fileName}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Your page description here for SEO">
  <meta name="keywords" content="your, keywords, here, for, SEO">
  <meta property="og:title" content="${fileName}">
  <meta property="og:description" content="Your Open Graph description for social sharing">
  <!-- Add more meta tags as needed for SEO -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
        crossorigin="anonymous">
</head>
<body>
<center>
${paragraphs}
</center>
</body>
</html>`;

  fs.writeFileSync(outputFile, htmlContent);
}

// Export the functions for use in other modules
module.exports = {
  processTextFile,
  processFolder,
  processMdFile,
};
