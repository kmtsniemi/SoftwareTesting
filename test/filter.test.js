import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("Filter", () => {
    it("Suodatetaan listan alkiot ehtoa käyttäen.", () =>{
        const maito = { 'nimi' : 'Luomu maito', 'laktoositon' : true }
        const jugurtti = { 'nimi' : 'AB jugurtti', 'laktoositon' : true }
        const juusto = { 'nimi' : 'Raejuusto', 'laktoositon' : false }
        const arr = [maito, jugurtti, juusto]
        const fun = ({laktoositon}) => laktoositon
        const res = [maito, jugurtti]
        expect(filter(arr, fun)).to.deep.equal(res)
    }); 

    it("Haetun propertyn arvo on null.", () =>{
        const arr = [
            { 'nimi' : 'Luomu maito', 'laktoositon' : null },
            { 'nimi' : 'AB jugurtti', 'laktoositon' : true },
            { 'nimi' : 'Raejuusto', 'laktoositon' : false }]
        const fun = ({laktoositon}) => laktoositon
        const res = [ { 'nimi' : 'AB jugurtti', 'laktoositon' : true } ]
        expect(filter(arr, fun)).to.deep.equal(res)
    }); 

    it("Haettu property puuttuu.", () =>{
        const arr = [
            { 'nimi' : 'Luomu maito' },
            { 'nimi' : 'AB jugurtti' },
            { 'nimi' : 'Raejuusto' }]
        const fun = ({laktoositon}) => laktoositon
        const res = [[]]
        expect(filter(arr, fun)).to.deep.equal(res)
    }); 

    it("Suodatetaan tyhjää joukkoa.", () =>{
        const arr = []
        const fun = ({laktoositon}) => laktoositon
        const res = [[]]
        expect(filter(arr, fun)).to.deep.equal(res)
    }); 

    it("Suodatettava joukko on null.", () =>{
        const arr = null
        const fun = ({laktoositon}) => laktoositon
        const res = [[]]
        expect(filter(arr, fun)).to.deep.equal(res)
    }); 
})