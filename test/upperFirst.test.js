import chai from "chai"
import upperFirst from "../src/upperFirst.js"
const expect = chai.expect


describe("UpperFirst", () => {
 it("Sanan ensimmäisen kirjain isoksi, jos se on pieni", () =>{
     expect(upperFirst('kaura')).to.equal('Kaura')
 });

 it("Muutetaan ainoastaan ensimmäistä kirjainta", () =>{
    expect(upperFirst('sOIJA')).to.equal('SOIJA')
 });

 it("Muutettava sana on tyhjä", () =>{
    expect(upperFirst('')).to.equal('')
 });

 it("Sana on null-arvoinen", () =>{
    expect(upperFirst(null)).to.equal('')
 });

 it("Sanan alkukirjain isoksi, kun syöte alkaa välilyönnillä", () =>{
    expect(upperFirst(' kaura')).to.equal(' kaura')
 });

 it("Merkkijonossa on numeroita", () =>{
    expect(upperFirst('122')).to.equal('122')
 });

 it("Syöte on numero", () =>{
    expect(function() {upperFirst(122)}).to.throw()
 });
})