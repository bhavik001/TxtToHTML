# TxtToHTML
Welcome to TxtToHTML Command Line Tool which convert `.txt` file as well as the directory containing `.txt` to `.html` file. This project was created with the help of `Node.js` and open source, cross-platform runtime environment for executing `JavaScript` code.

## How to Set-Up/ the installation process.
1. To clone this repository use the command given below:
```bash
git clone https://github.com/bhavik001/TxtToHTML.git
```
 2. Make sure you have `Node.js` install. Check it using this command:
 ```bash
 node -v
 ``` 
 if not download the `Node.js` locally to your device.

 3. Run the following command in the terminal to download the dependencies:
 ```bash
npm install
npm install yargs fs path
npm install mkdirp
```
4. Now to run the code write the following command in the terminal:
```bash
npm run start
```
## Features

1. **Recursive Search for .txt Files**: When a user inputs a folder, TxtToHTML CLI tool will recursively scan that folder for.txt files and recreate the directory structure in the output directory.

2. **Custom Output Directory**: By using the '--output' or '-o' switch, users can select an alternative output directory. The default output directory is "til" if not otherwise specified. If the directory is empty, TxtToHTML CLI tool creates it.


3. **Version Information**: Running TxtToHTML CLI tool with the `--version` or `-v` flag will print the tool's name and current version.

4. **Help Message**: Running TxtToHTML CLI tool with the `--help` or `-h` flag will display a standard help/usage message, explaining how to use the tool, available command-line flags, and arguments.

5. **Input Flexibility**: A single.txt file or a folder containing.txt files can be specified as input by users of the TxtToHTML CLI tool. The programme processes a.txt file if one is given. It processes all.txt files contained in any specified directory if one is provided.

6. **HTML Output Generation**: For each input file, the TxtToHTML CLI tool creates a single.html file. For instance, using the tool to build a new 'bhavik.html' file from a 'bhavik.txt' file. The HTML5 standard is followed by the files that are created.

## Usage
