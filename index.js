const serverInfo = require("./package.json");
const express = require("express");
const app = express();
const port = 3000;

//import data from json
const allCategories = require("./src/data/categories.json");
const allProducts = require("./src/data/products.json");

//home endpoint
app.get("/", (req, res) => {
  res.send("Go to /info for more information");
});

//info endpoint
app.get("/info", (req, res) => {
  res.json({
    serverName: serverInfo.name,
    serverVersion: serverInfo.version
  });
});

//get all product endpoint
app.get("/products/all", (req, res) => {
    let combined = {
      allCategories: allCategories,
      allProducts: allProducts,
    }
   
    res.status(200).json({
      success: true,
      data: combined
    })
});

//get product from following id
app.get("/product/:itemId", (req, res)=> {
    let id = req.params.itemId
    let category = allCategories.categories[id]
    let product = allProducts.products[id]

    res.status(200).json({
      success: true,
      data: {
        "id" : product.id,
        "categoryId" : product.categoryId,
        "category": category.categoryName,
        "name" : product.name,
        "unit" : product.unit,
        "pricePerUnit" : product.pricePerUnit,
        "stocks" :product.stocks
      }
    })
});

//get all product from following 
app.get("/category/:categoryId", (req, res)=> {
    let ctyId = req.params.categoryId
    let allProductLength = allProducts.products.length
    let data = []

    for(i = 0; i < allProductLength; i++) {
        if(allProducts.products[i].categoryId === ctyId) {
            data.push(allProducts.products[i])
        }
    }

    res.status(200).json({
      success: true,
      data
    })
})



app.listen(port, () => console.log(`listening on port ${port}!`));
