import fastify from "fastify";
import { Libary } from "./routes/libary";
const app = fastify();

app.register(Libary, {
    prefix: 'libary'
});

export default app;