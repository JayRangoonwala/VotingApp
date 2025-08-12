import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {server} from './Graphql/index.js';
import { expressMiddleware } from '@as-integrations/express5';


dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 8000;

await server.start();

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    console.log("Hello from index");
    res.send('Hello Sir');
});


app.use('/graphql',expressMiddleware(server));

app.listen(PORT , () => {
    console.log(`Server Started At http://localhost:${PORT}`);
})