import request from 'supertest';
import { expect, it } from '@jest/globals';
import main from '../main.js';
import { pool } from "../db/index";
import { array } from 'yargs';

afterAll(() => { // function to run after all tests
    pool.end();
  });
describe(`Integration tests`, () => {
    it('should get all react learning resources', async () => {
        const response = await request(main)
        .get('/api/v1/subject?search=react');
        expect(response.status).toStrictEqual(200);
        expect(response.body).toStrictEqual({
            success:true,
            payload: expect.any(array)
        });
        const bodyPayload = response.body.payload;
        console.log(bodyPayload,"this is the body payload")
        for(let i = 0; i < bodyPayload.length;i++){
            expect(bodyPayload[i]).toStrictEqual({
                subject_id: expect.toBe(1),
                subject_name: expect.toStrictEqual("React"),
                definition: expect.any(String)
            });
        };

    });
});