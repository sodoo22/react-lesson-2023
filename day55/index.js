const { request, response } = require("express");
const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.static("public"));

const returnHTML = `
<html>
<head>
<title>Sodgerel</title>
<link href="/style.css" rel="stylesheet" />
</head>
<body>
<h1>HELLO</h1>
<button onClick="alertMe()">Click ME</button>
<script src="/script.js"></script>
</body>
</html>
`;

app.get("/", (request, response) => {
  response.send(returnHTML);
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
