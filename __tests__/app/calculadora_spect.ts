
import { describe, test } from "@jest/globals";
import { suma, operar, restar, multiplicar, dividir, factorizar, potencia } from "../../src/app/calculadora";



test("Pruebas de factorizar()", () => {
    // Prueba con un formato completo
    expect(factorizar(2)).toBe(2);
    expect(factorizar(5)).toBe(120);
    //expect(factorizar(5, 0)).toBe(1);
//    expect(potencia(5, 0)).toBeNaN();
    expect(factorizar(11)).toBe(39916800);
   

    // errores forzados    
    let a: any = "1";
    expect(factorizar(a)).toBeNaN();

    a = undefined;
    expect(() => factorizar(a)).toThrowError("No se puede factorizar indefinidos");

});

test("Pruebas de Elevar()", () => {
    // Prueba con un formato completo
    expect(potencia(2, 2)).toBe(4);
    expect(potencia(0, 0)).toBe(1);
    expect(potencia(5, 0)).toBe(1);
//    expect(potencia(5, 0)).toBeNaN();
    expect(potencia(0, 1.1)).toBe(0);
    expect(potencia(-2, 3)).toBe(-8);
    expect(potencia(-5,1)).toBe(-5);

    // errores forzados    
    let a: any = 1;
    let b: any = "1";
    expect(potencia(a, b)).toBeNaN();

    a = 1;
    b = undefined;
    expect(() => potencia(a, b)).toThrowError("No se puede elevar indefinidos");

});



test("Pruebas de Dividir()", () => {
    // Prueba con un formato completo
    const resultado = dividir(15, 3);

    expect(resultado).toBe(5);

    expect(dividir(0, 1)).toBe(0);
    expect(dividir(0, 0)).toBeNaN();
    expect(dividir(0, 1.1)).toBe(0);
    expect(dividir(-10, -2)).toBe(5);
    expect(dividir(-10, 2)).toBe(-5);

    // errores forzados    
    let a: any = 1;
    let b: any = "1";
    expect(dividir(a, b)).toBeNaN();

    a = 1;
    b = undefined;
    expect(() => dividir(a, b)).toThrowError("No se puede dividir indefinidos");

});


test("Pruebas de multiplicar()", () => {
    // Prueba con un formato completo
    const resultado = multiplicar(3, 2);

    expect(resultado).toBe(6);

    expect(multiplicar(0, 1)).toBe(0);
    expect(multiplicar(0, 0)).toBe(0);
    expect(multiplicar(0, 1.1)).toBe(0);
    expect(multiplicar(-10, -2)).toBe(20);
    expect(multiplicar(-10, 2)).toBe(-20);

    // errores forzados    
    let a: any = 1;
    let b: any = "1";
    expect(multiplicar(a, b)).toBeNaN();

    a = 1;
    b = undefined;
    expect(() => multiplicar(a, b)).toThrowError("No se puede multiplicar indefinidos");

});


describe("nombre de la suite de test", () => {
    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Pruebas de suma()", () => {
        // Prueba con un formato completo
        const resultado = suma(1, 2);
        expect(resultado).toBe(3);

        expect(suma(10, 1)).toBe(11);
        expect(suma(10, 1536)).toBe(1546);
        expect(suma(10, 1.1)).toBe(11.1);

        // errores forzados    
        let a: any = 1;
        let b: any = "1";
        expect(suma(a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });

    test("Pruebas de restar()", () => {
        // Prueba con un formato completo
        const resultado = restar(3, 2);
        expect(resultado).toBe(1);

        expect(restar(10, 1)).toBe(9);
        expect(restar(100, 9)).toBe(91);
        expect(restar(10, 1.1)).toBe(8.9);

        // errores forzados    
        let a: any = 1;
        let b: any = "1";
        expect(restar(a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");

    });


});