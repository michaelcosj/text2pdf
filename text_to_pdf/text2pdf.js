const PDFDocument = require('pdfkit');
const fs = require('fs');
const args = require('yargs')(process.argv.slice(2)).alias('p', 'pdf').help('h')
.describe('p', 'convert text to pdf\nuse quotes for multi word arguments')
.example('$0 -p "some text"', 'generates a pdf file from the given text').argv;

const doc = new PDFDocument();

let text = args.pdf;
 
doc.pipe(fs.createWriteStream('generated.pdf'));
 
doc.fontSize(18).text(text);

doc.end();