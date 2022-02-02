import { createServer } from "http";
import url from "url";
const server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html charset=utf8" });
  console.log(new URL(request.url, "http://localhost:8080"));
  response.end(`
    <h1>Hello World!</h1>
    `);
});
server.listen(8080, (test) => {
  console.log(test);
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});
