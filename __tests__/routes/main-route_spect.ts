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

    test("Servidor en primo", async () => {
        return await request(app)
            .get('/primo?numero=4')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            })
    })

    test("Servidor en primo", async () => {
        return await request(app)
            .get('/primo?numero=3')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            })
    })

    test("Servidor en palindromo", async () => {
        return await request(app)
            .get('/palindromo?frase=error')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada no es palindromo");
            })
    })
            
    test("Servidor en palindromo", async () => {
        return await request(app)
            .get('/palindromo?frase=reconocer')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            })
    })

    test("Servidor en factorial", async () => {
        return await request(app)
            .get('/operar?operacion=factorial&num1=2')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 2");
            })
    })

    test("Servidor en elevar", async () => {
        return await request(app)
            .get('/operar?operacion=elevar&num1=5&num2=2')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 25");
            })
    })

    test("Servidor en dividir", async () => {
        return await request(app)
            .get('/operar?operacion=dividir&num1=10&num2=2')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 5");
            })
    })
    
});