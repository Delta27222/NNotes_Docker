import express from "express";
import cors from "cors";
import {router} from '../note/note.router'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

function createServer(){
     const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(router);

    return app
}

export default createServer