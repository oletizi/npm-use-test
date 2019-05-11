import {localHello} from "../lib/local";
import {hello} from "@oletizi/npm-test";


describe('Test Import', () => {
    describe('local import', () => {
        it('should import local function', () => {
            localHello();
        });
    });
    describe('package import', () => {
        it ('should import package funciton', () =>{
            hello();
        });
    });
});
