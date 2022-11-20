var chai = require("chai")
var add = require ("../src/add.js")
const expect = chai.expect

describe("Add", () => {
    it("Positiiviseen lukuun lisätään positiivinen luku.", () =>{
        const first_nro = 88.50
        const second_nro = 2.70
        const res = 91.20
        expect(add(first_nro, second_nro)).to.equal(res)
    }); 

    it("Positiiviseen lukuun lisätään negatiivinen luku.", () =>{
        const first_nro = 5.00
        const second_nro = -3.00
        const res = 2.00
        expect(add(first_nro, second_nro)).to.equal(res)
    }); 

    it("Positiiviseen lukuun lisätään merkkijono.", () =>{
        const first_nro = 5.00
        const second_nro = '3.00'
        expect(function() {add(first_nro, second_nro)}).to.throw(Error)
    }); 

    it("Positiiviseen numeroon lisätään null-arvo.", () =>{
        const first_nro = 5.00
        const second_nro = null
        expect(function() {add(first_nro, second_nro)}).to.throw(Error)
    }); 

    it("Positiiviseen kokonaislukuun lisätään nolla.", () =>{
        const first_nro = 4.00
        const second_nro = 0.00
        const res = 4.00
        expect(add(first_nro, second_nro)).to.equal(res)
    }); 

    it("Negatiiviseen lukuun lisätään negatiivinen luku.", () =>{
        const first_nro = -4.00
        const second_nro = -3.00
        const res = -7.00
        expect(add(first_nro, second_nro)).to.equal(res)
    }); 
})