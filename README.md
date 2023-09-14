# TxtToHTML

Welcome to TxtToHTML Command Line Tool which convert `.txt` file as well as the directory containing `.txt` to `.html` file. This project was created with the help of `Node.js` and open source, cross-platform runtime environment for executing `JavaScript` code.

## How to Set-Up/ the installation process.

1. To clone this repository use the command given below:

```bash
git clone https://github.com/bhavik001/TxtToHTML.git
cd TxtToHTML
```

2.  Make sure you have `Node.js` install. Check it using this command:

```bash
node -v
```

if not download the `Node.js` locally to your device then download the `Node.js`

3.  Run the following command in the terminal to download the dependencies:

```bash
npm install
```

4. Now to run the code write the following command in the terminal:

```bash
npm run start
```

## Features

1. **Recursive Search for .txt Files**: When a user inputs a folder, TxtToHTML CLI tool will recursively scan that folder for.txt files and recreate the directory structure in the output directory.

2. **Custom Output Directory**: By using the `--output` or `-o` switch, users can select an alternative output directory. The default output directory is "til" if not otherwise specified. If the directory is empty, TxtToHTML CLI tool creates it.

3. **Version Information**: Running TxtToHTML CLI tool with the `--version` or `-v` flag will print the tool's name and current version.

4. **Help Message**: Running TxtToHTML CLI tool with the `--help` or `-h` flag will display a standard help/usage message, explaining how to use the tool, available command-line flags, and arguments.

5. **Input Flexibility**: A single.txt file or a folder containing.txt files can be specified as input by users of the TxtToHTML CLI tool. The programme processes a.txt file if one is given. It processes all.txt files contained in any specified directory if one is provided.

6. **HTML Output Generation**: For each input file, the TxtToHTML CLI tool creates a single.html file. For instance, using the tool to build a new 'bhavik.html' file from a 'bhavik.txt' file. The HTML5 standard is followed by the files that are created.

## Usage

1. The basic command is:

```bash
node src/index.js [options] <input>
```

2. The command to display help menu:

```bash
node src/index.js -h
node src/index.js --help
```

3. The command to display the version of the TxtToHTML CLI Tool:

```bash
node src/index.js -v
node src/index.js --version
```

4. The command which takes `.txt` file and convert it to `.html` file and store it in `./til` directory.

```bash
node src/index.js document.txt
```

5. The command which takes `.txt` files inside the directory and convert it to `.html` file and store it in `./til` directory.

```bash
node src/index.js document
```

6. The command which take `.txt` file, convert it into `.html` file and store in the `custom` directory

```bash
node src/index.js document.txt -o custom
node src/index.js document.txt -output custom
```

7. The command which take `.txt` file from the `document` directory, convert it into `.html` file and store in the `custom` directory

```bash
node src/index.js document.txt -o custom
node src/index.js document.txt -output custom
```

8. This command will search for all `.txt` files in the `document` directory and its subdirectories, convert them to `.html` file, and recreate the same directory structure in the `custom` directory with the corresponding `.html` files.

```bash
node src/index.js -o custom document
node src/index.js -output custom document
```

## Example

**In terminal:**

```
PS D:\Sem_7\OSD_600\Release_1\TxtToHTML> node src/index.js ..\Nodejs.txt -o custom
The Text file "..\Nodejs.txt" is converted into an HTML file.
```

**The original Nodejs.txt file is:**

```
Node.js is a JavaScript runtime that is event-driven and asynchronous, making it ideal for creating scalable network applications. The next "hello world" example allows for the handling of several connections at once. Every connection triggers the callback, but if nothing has to be done, Node.js will sleep.

This contrasts with the concurrency approach that is currently more often used, which makes use of OS threads. The utilization of thread-based networking is extremely challenging and wasteful. Node.js users also don't have to worry about deadlocks because there aren't any locks. Node.js has almost no functions that conduct I/O directly, therefore the process never stalls until the I/O is carried out via synchronous methods from the standard library. Scalable systems can easily be created in Node.js since nothing blocks.
```

**The HTML file tool has generated is Nodejs.html:**

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nodejs</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
  <p>Node.js is a JavaScript runtime that is event-driven and asynchronous, making it ideal for creating scalable network applications. The next "hello world" example allows for the handling of several connections at once. Every connection triggers the callback, but if nothing has to be done, Node.js will sleep.
</p>
<p>This contrasts with the concurrency approach that is currently more often used, which makes use of OS threads. The utilization of thread-based networking is extremely challenging and wasteful. Node.js users also don't have to worry about deadlocks because there aren't any locks. Node.js has almost no functions that conduct I/O directly, therefore the process never stalls until the I/O is carried out via synchronous methods from the standard library. Scalable systems can easily be created in Node.js since nothing blocks.
</p>
</body>
</html>
```
