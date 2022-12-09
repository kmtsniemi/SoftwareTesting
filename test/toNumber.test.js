import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect


describe("ToNumber", () => {
 it("Muutetaan numerosta numeroksi", () =>{
     expect(toNumber(6.66)).to.equal(6.66)
 });

 it("Muutetaan merkkijono numeroksi", () =>{
    expect(toNumber('-3.33')).to.equal(-3.33)
 });

 it("Muutetaan tyhjä merkkijono numeroksi", () =>{
    expect(toNumber('')).to.equal(0)
 });

 it("Muutetaan null-arvo numeroksi", () =>{
    expect(toNumber(null)).to.equal(0)
 });

 it("Muutetaan kirjainmerkkijono numeroksi", () =>{
    const arg = 'abc'
    expect(toNumber(arg)).to.deep.equal(NaN)
 });
})