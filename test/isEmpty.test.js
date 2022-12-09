import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe("IsEmpty", () => {
    it("Tarkistetaan, onko null-arvo tyhjä.", () =>{
        const val = null
        const res = true
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko tyhjä lista tyhjä.", () =>{
        const val = []
        const res = true
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko kolmen alkion lista tyhjä.", () =>{
        const val = ['vesi', 'sokeri', 'aromit']
        const res = false
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko tyhjä merkkijono tyhjä.", () =>{
        const val = ''
        const res = true
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko epätyhjä merkkijono tyhjä.", () =>{
        const val = 'Tampere'
        const res = false
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko tyhjä objekti tyhjä.", () =>{
        const val = {}
        const res = true
        expect(isEmpty(val)).to.equal(res)
    }); 

    it("Tarkistetaan, onko epätyhjä objekti tyhjä.", () =>{
        const val = {'nimi': 'omenat', 'kilohinta': 2.30}
        const res = false
        expect(isEmpty(val)).to.equal(res)
    }); 
})