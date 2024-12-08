import { describe, test } from "@jest/globals";
import { validarRUT } from "../../src/app/rut";


test("Pruebas de validarRUT()", () => {
    
    // Prueba con un formato completo
    expect(validarRUT("141551124")).toBe(true);
    expect(validarRUT("141551122")).toBe(false);
    expect(validarRUT("58786950")).toBe(true);

    expect(validarRUT("hola")).toBe(false);
    expect(validarRUT("a")).toBe(false);
    expect(validarRUT("10555124K")).toBe(true);

    expect(validarRUT("")).toBe(false);
    let a: any = null;
    expect(validarRUT(a)).toBe(false);

    expect(validarRUT("14.155.112-4")).toBe(true);


    expect(validarRUT(undefined as unknown as string)).toBe(false); // Valor undefined

});