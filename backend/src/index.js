const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  console.log("Request")
  ctx.body = 'Hello World';
});

app.listen(5000);