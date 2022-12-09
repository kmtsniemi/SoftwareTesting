import chai, { AssertionError } from "chai"
import every from "../src/every.js"
const expect = chai.expect

describe("Every", () => {
    it("Verrataan alkioita, jotka eivät kaikki täytä vaadittuja vaatimuksia.", () =>{
        const arr = [
            { 'nimi' : 'Luomu maito', 'saatavissa' : true },
            { 'nimi' : 'AB jugurtti', 'saatavissa' : true },
            { 'nimi' : 'Raejuusto', 'saatavissa' : false }]
        const fun = ({saatavissa}) => saatavissa
        const res = false
        expect(every(arr, value => value.saatavissa)).to.equal(true)
    }); 

    it("Joukolla ei ole alkoita.", () =>{
        const arr = []
        const fun = ({saatavissa}) => saatavissa
        expect(every(arr, fun)).to.equal(true)
    }); 

    it("Joukko on null-arvoinen.", () =>{
        const arr = null
        const fun = ({saatavissa}) => saatavissa
        expect(every(arr, fun)).to.equal(true)
    }); 

    it("Joukon alkion property-arvo on null.", () =>{
        const arr = [
            { 'nimi' : 'Luomu maito', 'saatavissa' : null },
            { 'nimi' : 'AB jugurtti', 'saatavissa' : true },
            { 'nimi' : 'Raejuusto', 'saatavissa' : false }]
        const fun = ({saatavissa}) => saatavissa
        expect(every(arr, fun)).to.equal(false)
    }); 
/*
    it("Property puuttuu.", () =>{
        const arr = [
            { 'nimi' : 'Luomu maito' },
            { 'nimi' : 'AB jugurtti' },
            { 'nimi' : 'Raejuusto' }]
        const fun = ({saatavissa}) => saatavissa
        expect(every(arr, fun)).to.equal(true)

    });
    */
})