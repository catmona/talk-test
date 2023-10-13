import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

const test = {
  name: "hi",
  id: '2',
  arr: [
    1, 2, 3, 4, 5
  ]
}

const app = new Elysia()

.use(cors({
  origin: 'http:\/\/localhost:5173'
}))

.ws('/ws', {
  message(ws, message) {
    ws.send(message);
  }
})

.get('/test', () => { return test} )

.post('/mirror', ({ body }) => body, {
  body: t.Object({
    id: t.Number(),
    name: t.String()
  })
})

.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
