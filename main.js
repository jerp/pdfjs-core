// Entry point of rollup
// Extract of pdfjs-dist core elements

const { LocalPdfManager } = require('pdfjs-dist/lib/core/pdf_manager');
const primitives = require('pdfjs-dist/lib/core/primitives');

module.exports.PdfManager = LocalPdfManager
module.exports.primitives = primitives