// utils.test.js
const { processTextFile, processMdFile, processFolder } = require('../src/utils');
const fs = require('fs');
const path = require('path');

describe('processTextFile function', () => {
  test('should convert a text file to HTML', () => {
    const inputFilePath = path.join(__dirname, 'input.txt');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create a test input file
    fs.writeFileSync(inputFilePath, 'This is a test text file.');

    // Run the function to be tested
    processTextFile(inputFilePath, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile = path.join(outputDirectory, 'input.html');
    expect(fs.existsSync(outputFile)).toBe(true);

    // Clean up after the test
    fs.unlinkSync(inputFilePath);
    fs.rmdirSync(outputDirectory, { recursive: true });
  });

  test('should handle an empty text file', () => {
    const inputFilePath = path.join(__dirname, 'empty.txt');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create an empty test input file
    fs.writeFileSync(inputFilePath, '');

    // Run the function to be tested
    processTextFile(inputFilePath, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile = path.join(outputDirectory, 'empty.html');
    expect(fs.existsSync(outputFile)).toBe(true);

    // Clean up after the test
    fs.unlinkSync(inputFilePath);
    fs.rmdirSync(outputDirectory, { recursive: true });
  });
});

describe('processMdFile function', () => {
  test('should convert an md file to HTML', () => {
    const inputFilePath = path.join(__dirname, 'test.md');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create a test input md file
    fs.writeFileSync(inputFilePath, '# Test Header\n\nThis is a test markdown file.');

    // Run the function to be tested
    processMdFile(inputFilePath, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile = path.join(outputDirectory, 'test.html');
    expect(fs.existsSync(outputFile)).toBe(true);

    // Clean up after the test
    fs.unlinkSync(inputFilePath);
    fs.rmdirSync(outputDirectory, { recursive: true });
  });

  test('should handle an empty md file', () => {
    const inputFilePath = path.join(__dirname, 'empty.md');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create an empty test input md file
    fs.writeFileSync(inputFilePath, '');

    // Run the function to be tested
    processMdFile(inputFilePath, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile = path.join(outputDirectory, 'empty.html');
    expect(fs.existsSync(outputFile)).toBe(true);

    // Clean up after the test
    fs.unlinkSync(inputFilePath);
    fs.rmdirSync(outputDirectory, { recursive: true });
  });

  test('should handle an md file with multiple headings and paragraphs', () => {
    const inputFilePath = path.join(__dirname, 'multiple_sections.md');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create a test input md file with multiple sections
    fs.writeFileSync(inputFilePath, '# Section 1\n\nParagraph 1\n\n## Subsection\n\nParagraph 2');

    // Run the function to be tested
    processMdFile(inputFilePath, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile = path.join(outputDirectory, 'multiple_sections.html');
    expect(fs.existsSync(outputFile)).toBe(true);

    // Clean up after the test
    fs.unlinkSync(inputFilePath);
    fs.rmdirSync(outputDirectory, { recursive: true });
  });
});

describe('processFolder function', () => {
  test('should recursively process all text files in a folder', () => {
    const inputDir = path.join(__dirname, 'testFolder');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create a test folder with text files
    fs.mkdirSync(inputDir, { recursive: true });
    fs.writeFileSync(path.join(inputDir, 'file1.txt'), 'Text content 1');
    fs.writeFileSync(path.join(inputDir, 'file2.txt'), 'Text content 2');
    fs.writeFileSync(path.join(inputDir, 'file3.txt'), 'Text content 3');

    // Run the function to be tested
    processFolder(inputDir, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile1 = path.join(outputDirectory, 'file1.html');
    const outputFile2 = path.join(outputDirectory, 'file2.html');
    const outputFile3 = path.join(outputDirectory, 'file3.html');
    expect(fs.existsSync(outputFile1)).toBe(true);
    expect(fs.existsSync(outputFile2)).toBe(true);
    expect(fs.existsSync(outputFile3)).toBe(true);

    // Clean up after the test
    fs.rmdirSync(inputDir, { recursive: true });
    fs.rmdirSync(outputDirectory, { recursive: true });
  });

  test('should handle a folder with subfolders and md files', () => {
    const inputDir = path.join(__dirname, 'testFolder');
    const outputDirectory = path.join(__dirname, 'output');
    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    // Create a test folder with subfolders and md files
    fs.mkdirSync(inputDir, { recursive: true });
    fs.mkdirSync(path.join(inputDir, 'subfolder1'), { recursive: true });
    fs.writeFileSync(path.join(inputDir, 'subfolder1', 'file1.md'), '# Heading 1\n\nParagraph 1');
    fs.writeFileSync(path.join(inputDir, 'subfolder1', 'file2.md'), '# Heading 2\n\nParagraph 2');
    fs.writeFileSync(path.join(inputDir, 'file3.md'), '# Heading 3\n\nParagraph 3');

    // Run the function to be tested
    processFolder(inputDir, outputDirectory, metadata);

    // Add assertions to check the output or any side effects
    const outputFile1 = path.join(outputDirectory, 'subfolder1', 'file1.html');
    const outputFile2 = path.join(outputDirectory, 'subfolder1', 'file2.html');
    const outputFile3 = path.join(outputDirectory, 'file3.html');
    expect(fs.existsSync(outputFile1)).toBe(true);
    expect(fs.existsSync(outputFile2)).toBe(true);
    expect(fs.existsSync(outputFile3)).toBe(true);

    // Clean up after the test
    fs.rmdirSync(inputDir, { recursive: true });
    fs.rmdirSync(outputDirectory, { recursive: true });
  });
});
