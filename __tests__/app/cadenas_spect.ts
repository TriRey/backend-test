import { describe, test } from "@jest/globals";
import { contarCoincidenciasEnCadena } from "../../src/app/cadenas";



test("Pruebas de contarCoincidenciasEnCadena()", () => {
    
    // Prueba con un formato completo
    expect(contarCoincidenciasEnCadena('f','f')).toBe(true);
    /*expect(esPrimo(3)).toBe(true);
    expect(esPrimo(-3)).toBe(false);
    expect(esPrimo(-4)).toBe(false);
    expect(esPrimo(196)).toBe(false);
    */
});