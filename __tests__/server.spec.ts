import app from '../src/server.js';
import request from 'supertest';

describe("Bateria de test de servidor", () => {

    test("Servidor en endpoint /", async () => {

        return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola mundo al usuario Sebastian Triviño");
            });
    });

    test("Debe responder con 200 en la ruta base", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
      });
    
      test("Debe manejar rutas no encontradas", async () => {
        const response = await request(app).get("/ruta-no-existe");
        expect(response.statusCode).toBe(404);
      });
});