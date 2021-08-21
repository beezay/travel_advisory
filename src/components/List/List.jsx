import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

import useStyles from "./styles.js";
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";

const List = () => {
  const classes = useStyles();

  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Cool Bar" },
    { name: "Beer Chill" },
    { name: "Cool Bar" },
    { name: "Beer Chill" },
    { name: "Cool Bar" },
    { name: "Beer Chill" },
    { name: "Cool Bar" },
    { name: "Beer Chill" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select vlaue={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturant">Resturant</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select vlaue={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => (
          <Grid item key={idx} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
