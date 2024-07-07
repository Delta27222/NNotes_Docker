import supertest from "supertest"
import { MongoMemoryServer } from "mongodb-memory-server";
import createServer from '../utils/server'
import mongoose from "mongoose";

const app = createServer();

describe("notes", ()=>{
    beforeAll(async ()=>{
        const mongoServer = await MongoMemoryServer.create();

        await mongoose.connect(mongoServer.getUri());
    }, 1000000);

    afterAll(async ()=>{
        await mongoose.disconnect();
        await mongoose.connection.close();
    }, 1000000)

    describe("get notes route", ()=>{
        describe("given the note does not exist", ()=>{
            it("should return a 404", async ()=>{
                const noteId = '663cb22f4e833bc2a260373e';
                
                await supertest(app).get(`/note?_id=${noteId}`).expect(404);
            },100000000)
        })
    })
})