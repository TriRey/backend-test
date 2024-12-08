import { describe, test } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros";



test("Pruebas de EsPrimo()", () => {
    
    // Prueba con un formato completo
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
    expect(esPrimo(-3)).toBe(false);
    expect(esPrimo(-4)).toBe(false);
    expect(esPrimo(196)).toBe(false);
    
});