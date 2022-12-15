import chai from "chai"
import get from "../src/get.js"
const expect = chai.expect

describe("Get", () => {
    it("Objektista haetaan olemassa oleva tieto.", () =>{
        const obj = {'nimi':'Taloussokeri', 'hinta':4.50}
        const path = 'nimi'
        const res = 'Taloussokeri'
        expect(get(obj, path)).to.equal(res)
    }); 

    it("Objektista haetaan puuttuva tieto.", () =>{
        const obj = {'nimi':'Taloussokeri'}
        const path = 'ainesosat'
        const defVal = 'tieto puuttuu'
        const res = defVal
        expect(get(obj, path, defVal)).to.equal(res)
    }); 

    it("Objektista haetaan puuttuva tieto ja default value puuttuu.", () =>{
        const obj = {'nimi':'Taloussokeri'}
        const path = 'ainesosat'
        expect(function() {get(obj, path, defVal)}).to.throw()
    }); 
/*
    it("Objektista haetaan tietoa null polulla.", () =>{
        const obj = {'nimi':'Taloussokeri'}
        const path = null
        expect(function() {get(obj, path)}).to.throw()
    }); 

    it("Null-objektista haetaan tietoa.", () =>{
        const obj = null
        const path = 'ainesosat'
        expect(function() {get(obj, path)}).to.throw()
    }); 
*/
})