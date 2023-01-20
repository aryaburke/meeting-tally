import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ServerDropdown = ({ serverList, appChange }) => {
  const { server } = useContext(AppContext);
  console.log("list", serverList);
  return (
    <FormControl sx={{ backgroundColor: "#fff" }} variant="filled">
      <InputLabel id="demo-simple-select-label">Select Server</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={server}
        onChange={appChange}
        label="Select Server"
      >
        {serverList.length &&
          serverList.map((svr) => (
            <MenuItem key={svr.source_id} value={svr.root_server_url}>
              {svr.name.toUpperCase()}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
