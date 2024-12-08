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

    /*
    test("Servidor en primo", async () => {
        return await request(app)
            .get('/primo?numero=4')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            })
    })
*/
   
});