"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ProductCard({product}) {
  const {name,image,id} = product
  // console.log(product);
  return (
    <Card
      sx={{
        // maxWidth: 345,
        borderRadius: 4,
        boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 12px 32px rgba(0,0,0,0.25)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          // src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          src={image}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a short description of the product. It looks modern,
            minimal and elegant using Material UI.
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            $49.99
          </Typography>
        </CardContent>
        <Button variant="contained" size="large" href={`/products/${id}`} fullWidth>see more</Button>
      </CardActionArea>
    </Card>
  );
}
