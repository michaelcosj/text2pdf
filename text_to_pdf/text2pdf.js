//pdfkit is a npm pdf generation module
const PDFDocument = require('pdfkit');

//Fs is the default nodejs module for handling the filesystem
const fs = require('fs');

//Yargs is a npm module to get command line arguments, 
//I think just the default 'process.arv' module can be used but this seems easier to set up, 
//easier to use, and it has more features like the help, alias, describe, etc parameters
const args = require('yargs')(process.argv.slice(2)).alias('p', 'pdf').help('h')
.describe('p', 'convert text to pdf\nuse quotes for multi word arguments')
.example('$0 -p "some text"', 'generates a pdf file from the given text').argv;

//Create a new PDFdocument object
const doc = new PDFDocument();

//Args.pdf is the command line argument passed to the '-p' or '--pdf' option
let text = args.pdf;
 
//This takes the file generated.pdf file created by filesystem create write stream
//And creates a pdf document from it
doc.pipe(fs.createWriteStream('generated.pdf'));
 
//This adds the text containing the command line arguments to the pdf document and sets the fontsize
doc.fontSize(18).text(text);

//This finalizes the pdf file
doc.end();
