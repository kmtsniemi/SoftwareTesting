import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Eq", () => {
 it("Verrataan kahta samanlaista arvoa", () =>{
    const value = { 'nimi' : 'Kauramaitojuoma' }
    const other = { 'nimi' : 'Kauramaitojuoma' }
    expect(eq(value, other)).to.equal(false)
 });

 it("Verrataan kahta erialista arvoa", () =>{
    const value = { 'nimi' : 'Mausteinen ruokakerma' }
    const other = { 'nimi' : 'Pippurinen ruokakerma' }
    expect(eq(value, other)).to.equal(false)
 });

 it("Toinen arvoista on null", () =>{
    const value = null
    const other = { 'nimi' : 'Pippurinen ruokakerma' }
    expect(eq(value, other)).to.equal(false)
 });

 it("Tuotevalikoimaan on lisätty vahingossa tyhjä tuote", () =>{
    const value = {}
    const other = { 'nimi' : 'Pippurinen ruokakerma' }
    expect(eq(value, other)).to.equal(false)
 });

})