import { describe, test } from "@jest/globals";
import { validarRUT } from "../../src/app/rut";


test("Pruebas de esPalindromo()", () => {
    
    // Prueba con un formato completo
    expect(validarRUT("141551124")).toBe(true);
    /*
    expect(esPalindromo("anilina")).toBe(true);
    expect(esPalindromo("radar")).toBe(true);
    expect(esPalindromo("reconocer")).toBe(true);
    expect(esPalindromo("vino")).toBe(false);
    expect(esPalindromo("")).toBe(false);
    */
});