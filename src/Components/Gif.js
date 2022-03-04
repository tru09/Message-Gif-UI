import { Fragment, useState } from "react";
import { TextField } from "@mui/material";

import axios from "axios";

const Gif = (props) => {
  const [search, setSearch] = useState("");

  const onInputChange = (event) => {
    setSearch(event.target.value);
    // console.log(search);

    const url = `http://api.giphy.com/v1/gifs/search?q=${search.replace(
      /\s/g,
      "+"
    )}&api_key=dc6zaTOxFJmzC`;

    props.loading(true);
    axios.get(url).then((res) => {
      const data = res.data.data;
      props.loading(false);
      console.log(data);
      props.gif(data);
    });
  };

  return (
    <Fragment>
      <TextField
        style={{ float: "left", height: "5px", marginTop: "1rem" }}
        label="search"
        variant="outlined"
        onBlur={() => props.onBlur(false)}
        onChange={onInputChange}
      />
    </Fragment>
  );
};

export default Gif;
