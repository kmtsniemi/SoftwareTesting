import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe("Ceil", () => {
    it("Positiivinen kolmen desimaalin numero pyöristetään ylöspäin kahden desimaalin tarkkuuteen", () =>{
        expect(ceil(5.002, 2)).to.equal(5.01)
    });
       
    it("Pyöristetään merkkijono-tyyppistä numeroa", () =>{
       expect(function() {ceil('600', 2)}).to.throw()
    });
   
    it("Pyöristetään null-arvo", () =>{
       expect(function() {ceil(null, 2)}).to.throw()
    });   
   
    it("Pyöristämisen ilmoitettu tarkkuus on null-arvoinen", () =>{
       expect(ceil(5.002, null)).to.equal(6)
   });
   
   it("Pyöristetään negatiivinen luku", () =>{
       expect(ceil(-15.38, 1)).to.equal(-15.3)
   });
   })