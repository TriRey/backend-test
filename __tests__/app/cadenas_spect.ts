import { describe, test } from "@jest/globals";
import { contarCoincidenciasEnCadena } from "../../src/app/cadenas";
test("Pruebas de contarCoincidenciasEnCadena()", () => {
    expect(contarCoincidenciasEnCadena('f','f')).toBe(1);
    expect(contarCoincidenciasEnCadena("ss","s")).toBe(2);
    expect(contarCoincidenciasEnCadena("a","hjg")).toBe(0);
});