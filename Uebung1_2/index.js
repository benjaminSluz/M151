import { createServer } from "http";
import data from "./data.js";
import { getList } from "./list.js";
import { deleteAddress } from "./delete.js";
import { addAdress } from "./add.js";
import { getForm } from "./form.js";
import url from "url";
data.addresses.deleteAddress = deleteAddress;
data.addresses.addAdress = addAdress;

createServer((request, response) => {
    const urlParts = request.url.split(/[/?]/);
    if (urlParts.includes("delete")) {
        data.addresses.deleteAddress(+urlParts[2]);
        redirect(response, "/");
    } else if (urlParts.includes("new")) {
        data.addresses.addAdress(url.parse(request.url, true).query);
        redirect(response, "/");
    } else if (urlParts.includes("edit")) {
        send(response, getForm(request, data.addresses, urlParts[2]));
    } else {
        send(response, getList(data.addresses));
    }
}).listen(8080, () =>
    console.log("Server erreichbar unter http://localhost:8080")
);

function send(response, responseBody) {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(responseBody);
}

function redirect(response, to) {
    response.writeHead(302, { location: "/", "content-type": "text/plain" });
    response.end("302 Redirecting to /");
}