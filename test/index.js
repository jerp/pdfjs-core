const { expect } = require('chai')
const { PdfManager } = require('../main')
const fs = require('fs')

const readPdfasArrayBuffer = (name) => {
  const b = fs.readFileSync(__dirname + '/' + name)
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)
}

describe("PdfManager", () => {
  it('has the apropriate interface', () => {
    expect(typeof PdfManager).to.eq('function')
  })
  it('Inspects the simplest PDF file', () => {
    const arrayBuffer = readPdfasArrayBuffer('hello.pdf')
    const pdfManager = new PdfManager(1, arrayBuffer, '', {}, '')
    return pdfManager.ensureDoc('checkHeader', [])
      .then(() => {
        expect(pdfManager.pdfDocument.pdfFormatVersion).to.eq('1.4')
        return pdfManager.ensureDoc('parseStartXRef', [])
      })
      .then(() => {
        expect(pdfManager.pdfDocument.startXRef).to.eq(424)
        return pdfManager.ensureDoc('parse', [ /* recoveryMode */ true])
      })
      .then(() => {
        expect(pdfManager.pdfDocument.catalog != null).to.be.true
        return pdfManager.ensureDoc('numPages', [])
      })
      .then(() => {
        expect(pdfManager.pdfDocument.numPages).to.eq(1)
        return pdfManager.ensureDoc('fingerprint', [])
      })
      .then(() => {
        expect(pdfManager.pdfDocument.fingerprint != null).to.be.true
      })
  })
})