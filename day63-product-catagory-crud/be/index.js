console.log("Day-62 Category CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");
const { request, response } = require("express");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

// APT categrory®
app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    console.log(body);
    const isEdit = body.isEdit;

    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    console.log(typeof categoryData);
    const categoryDataObj = JSON.parse(categoryData);

    if (isEdit) {
      categoryDataObj.map((category) => {
        if (category.id == body.categoryId) {
          category.name = body.categoryName;
        }
        return category;
      });
    } else {
      const newCategory = {
        // id: Date.now().toString(),
        id: uuid(),
        name: body.catName,
      };

      categoryDataObj.push(newCategory);
    }

    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObj)
    );
    if (writeCategoryData) {
      response.json({
        status: "file write error",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataObj,
      });
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  })
  .delete((request, response) => {
    const body = request.body;
    console.log(body);
    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    const savedCategoriesObject = JSON.parse(savedCategories);
    const filteredCategories = savedCategoriesObject.filter(
      (category) => category.id !== body.categoryId
    );

    console.log(filteredCategories.length);
    fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(filteredCategories)
    );

    response.json({
      status: "success",
      data: filteredCategories,
    });
  })
  .put((request, response) => {
    const body = request.body;
    console.log(body);

    const catId = body.categoryId;

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const savedCategoriesObjectArray = JSON.parse(savedCategories);

    const foundCategory = savedCategoriesObjectArray.filter(
      (category) => category.id == catId
    )[0];

    response.json({
      status: "success",
      data: foundCategory,
    });
  });

app.get("/search", (request, response) => {
  console.log(request.query);

  const savedCategories = fs.readFileSync("./data/categories.json", {
    encoding: "utf-8",
    flag: "r",
  });

  const savedCategoriesArrayObject = JSON.parse(savedCategories);

  const foundCategory = savedCategoriesArrayObject.filter((category) =>
    category.name.toLowerCase().includes(request.query.value.toLowerCase())
  );
  response.json({
    status: "success",
    data: foundCategory,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
