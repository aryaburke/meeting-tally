import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { getServiceBodies, getMeetings } from "./api";
const axios = require("axios");
const jsonpAdapter = require("axios-jsonp");

const DESIRED_SERVICE_BODY_IDS = [
  1005, 1006, 1003, 1, 1067, 1007, 1045, 1008, 1010, 1011, 1012, 1064, 1013,
  1014,
];

function App() {
  const [meetings, setMeetings] = useState([]);
  const [serviceBodies, setServiceBodies] = useState([]);

  useEffect(() => {
    axios({
      url: getServiceBodies,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        let serviceBodies = res.data;
        serviceBodies = serviceBodies.filter((body) =>
          DESIRED_SERVICE_BODY_IDS.includes(Number(body.id))
        );
        serviceBodies = serviceBodies.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setServiceBodies(serviceBodies);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      url: getMeetings,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        let meetings = res.data;
        meetings = meetings.filter((meeting) =>
          DESIRED_SERVICE_BODY_IDS.includes(Number(meeting.service_body_bigint))
        );
        setMeetings(meetings);
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
          <h2>
            Total Meetings in the Greater New York Region: {meetings.length}
          </h2>
          <DataTable meetings={meetings} serviceBodies={serviceBodies} />
        </Container>
      </div>
    );
  }
}

export default App;
