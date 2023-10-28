import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Text,
  PrimaryButton,
  DefaultButton,
  noWrap,
} from "@fluentui/react";

import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  makeStyles,
} from "@fluentui/react-components";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    margin: "30px",
    padding: "2em",
  },
});

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products", data.products);
        setProducts(data.products);
        const uniqueCategories = [
          "All",
          ...new Set(data.products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        console.log("Unique Categories", uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category !== "All") {
      navigate(`/${category.toLowerCase()}`);
    } else {
      navigate("/all");
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const classes = useStyles();
  return (
    <Stack>
      <Stack
        horizontal
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          flexWrap: "wrap",
          padding: "1em",
        }}
      >
        {categories.map((category) => (
          <Stack key={category}>
            <PrimaryButton
              style={{
                textTransform: "capitalize",
                padding: "1em",
                margin: "0.2em",
                fontSize: "1.2em",
                fontWeight: "bold",
                borderRadius: "10px",
                backgroundColor:
                  selectedCategory === category ? "#0078D4" : "white",
                color: selectedCategory === category ? "white" : "inherit",
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </PrimaryButton>
          </Stack>
        ))}
      </Stack>

      <Stack style={{ padding: "2em" }}>
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={4} xl={3}>
              <Card
                style={{
                  color: "white",
                  borderRadius: "20px",
                  padding: "1em",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardHeader
                  image={
                    <img
                      src={product.thumbnail}
                      width="200px"
                      height="200px"
                      alt={product.description}
                    />
                  }
                />
                <CardPreview>
                  <Text variant="large">{product.title}</Text>
                </CardPreview>
                <CardFooter>
                  <DefaultButton iconProps={{ iconName: "ShoppingCart" }}>
                    Add to Cart
                  </DefaultButton>
                  <PrimaryButton iconProps={{ iconName: "PaymentCard" }}>
                    Buy Now
                  </PrimaryButton>
                </CardFooter>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default ProductsPage;
