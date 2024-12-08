import { describe, test, expect } from "@jest/globals";
import { response } from "express";
import app from "../../src/server.js"
import request from 'supertest';


describe("Bateria de test de servidor", () => {
   
   
    test("Servidor en api-key", async () => {
        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("la apikey de mi aplicacion es: default-key");
            })
    })

   
    //-->   VALIDA CADENA
    test("Servidor Valida Rut", async () => {
        return await request(app)
            .get('/buscar-subcadena?cadena=14&subcadena=dd')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("La cadena \"14\" tiene 0 repeticiones de la subcadena \"dd\"");
            })
    })

    
    //-->   VALIDA RUT
    test("Servidor Valida Rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=141551124')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (141551124) es : valido");
            })
    })

    test("Servidor Valida Rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado () es : invalido");
            })
    })

    test("Servidor Valida Rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=141551122')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (141551122) es : invalido");
            })
    })

    test("Servidor Valida Rut", async () => {
        return await request(app)
            .get('/validar-rut?')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (undefined) es : invalido");
            })
    })
});