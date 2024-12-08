import { describe, test } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";


test("Pruebas de esPalindromo()", () => {
    
    // Prueba con un formato completo
    expect(esPalindromo("merienda")).toBe(false);
    expect(esPalindromo("anilina")).toBe(true);
    expect(esPalindromo("radar")).toBe(true);
    expect(esPalindromo("reconocer")).toBe(true);
    expect(esPalindromo("vino")).toBe(false);
    expect(esPalindromo("")).toBe(false);
});