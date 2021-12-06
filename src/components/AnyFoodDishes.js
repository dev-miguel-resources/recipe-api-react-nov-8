import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField  from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { anyFoodDishes } from "../constants";

const AnyFoodDishes = ({ getData }) => {
  const [query, setQuery] = useState();

  const getFoods = () => {};

  return (
    <Grid>
      <Paper></Paper>
    </Grid>
  );
};

export default AnyFoodDishes;
