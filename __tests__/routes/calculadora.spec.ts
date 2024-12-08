import { describe, test, expect } from "@jest/globals";
import { suma, restar, operar } from "../../src/app/calculadora";

describe("Bateria de test de calculadora", () => {

    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Sumar en la calculadora", () => {

        expect(suma(1, 2)).toBe(3);

        expect(suma(5, 5)).toBe(10);

        expect(suma(15, 15)).toBe(30);

        expect(suma(1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(suma(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });

    test("Restar en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);

        expect(restar(15, 5)).toBe(10);

        expect(restar(45, 15)).toBe(30);

        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });

    test("Operar en la calculadora", () => {

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("restar", 5, 2)).toBe(3);
        expect(operar("suma", 5, 5)).toBe(10);
        expect(operar("restar", 15, 5)).toBe(10);
        expect(operar("suma", 15, 15)).toBe(30);
        expect(operar("restar", 45, 15)).toBe(30);
        expect(operar("suma", 1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(operar("suma", a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("restar", a, b)).toThrowError("No se puede restar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

        expect(operar("multiplicar", 10, 20)).toBeDefined();
    });

});