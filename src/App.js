import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { getServiceBodies, getMeetings } from "./api";
const axios = require("axios");
const jsonpAdapter = require("axios-jsonp");

function App() {
  const [meetings, setMeetings] = useState([]);
  const [serviceBodies, setServiceBodies] = useState([]);
  useEffect(() => {
    axios({
      url: getServiceBodies,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        setServiceBodies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      url: getMeetings,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        setMeetings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!meetings.length) {
    return null;
  } else {
    return (
      <div className="main">
        <Header />
        <Container maxWidth="lg">
          <h2>Total Meetings in Connecticut: {meetings.length}</h2>

          <DataTable meetings={meetings} serviceBodies={serviceBodies} />
        </Container>
      </div>
    );
  }
}

export default App;
