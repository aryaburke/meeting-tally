import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupsIcon from "@mui/icons-material/Groups";

export default function DataTable({ meetings, serviceBodies }) {
  const rows = [];
  serviceBodies.forEach((body) => {
    meetings.forEach((meeting) => {
      if (meeting.service_body_bigint === body.id) {
        rows.push({ ...meeting, ...body });
      }
    });
  });

  const weekdays = [
    {
      id: "1",
      name: "Sunday",
    },
    {
      id: "2",
      name: "Monday",
    },
    {
      id: "3",
      name: "Tuesday",
    },
    {
      id: "4",
      name: "Wednesday",
    },
    {
      id: "5",
      name: "Thursday",
    },
    {
      id: "6",
      name: "Friday",
    },
    {
      id: "7",
      name: "Saturday",
    },
  ];

  function Row({ row }) {
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        {/* {serviceBodies.map((body) => ( */}
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="center">
            {
              rows.filter(
                (pub) =>
                  pub.service_body_bigint === row.id && pub.published === "1"
              ).length
            }
          </TableCell>
          <TableCell align="center">
            {
              rows.filter(
                (pub) =>
                  pub.service_body_bigint === row.id && pub.published === "0"
              ).length
            }
          </TableCell>
          <TableCell align="center">
            {
              rows.filter(
                (pub) =>
                  pub.service_body_bigint === row.id &&
                  pub.venue_type === "1" &&
                  pub.published === "1"
              ).length
            }
          </TableCell>
          <TableCell align="center">
            {
              rows.filter(
                (pub) =>
                  pub.service_body_bigint === row.id &&
                  pub.venue_type === "3" &&
                  pub.published === "1"
              ).length
            }
          </TableCell>
          <TableCell align="center">
            {
              rows.filter(
                (pub) =>
                  pub.service_body_bigint === row.id &&
                  pub.venue_type === "2" &&
                  pub.published === "1"
              ).length
            }
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 600 }}>
            {rows.filter((pub) => pub.service_body_bigint === row.id).length}
          </TableCell>
        </TableRow>
        {/* ))} */}
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0, width: "100%" }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h6" gutterBottom component="h6">
                  Published
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Day Of Week</TableCell>
                      <TableCell align="center">In Person</TableCell>
                      <TableCell align="center">Hybrid</TableCell>
                      <TableCell align="center">Virtual</TableCell>
                      <TableCell align="center" style={{ fontWeight: 600 }}>
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {weekdays.map((day, idx) => (
                      <TableRow key={`weekday-${idx}`}>
                        <TableCell component="th" scope="row">
                          {day.name}
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "1" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "1" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "1" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "3" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "1" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "2" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center" style={{ fontWeight: 600 }}>
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "1" &&
                                pub.service_body_bigint === row.id &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h6" gutterBottom component="h6">
                  Unpublished
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Day Of Week</TableCell>
                      <TableCell align="center">In Person</TableCell>
                      <TableCell align="center">Hybrid</TableCell>
                      <TableCell align="center">Virtual</TableCell>
                      <TableCell align="center">Unknown</TableCell>
                      <TableCell align="center">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {weekdays.map((day, idx) => (
                      <TableRow key={`weekday-${idx}`}>
                        <TableCell component="th" scope="row">
                          {day.name}
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "0" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "1" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "0" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "3" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "0" &&
                                pub.service_body_bigint === row.id &&
                                pub.venue_type === "2" &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center">
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "0" &&
                                pub.service_body_bigint === row.id &&
                                !pub.venue_type &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                        <TableCell align="center" style={{ fontWeight: 600 }}>
                          {
                            rows.filter(
                              (pub) =>
                                pub.published === "0" &&
                                pub.service_body_bigint === row.id &&
                                pub.weekday_tinyint === day.id
                            ).length
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Area</TableCell>
            <TableCell align="center">Published</TableCell>
            <TableCell align="center">Unpublished</TableCell>
            <TableCell align="center">
              In Person
              <br />
              (Published)
            </TableCell>
            <TableCell align="center">
              Hybrid
              <br />
              (Published)
            </TableCell>
            <TableCell align="center">
              Virtual
              <br />
              (Published)
            </TableCell>
            <TableCell align="center" style={{ fontWeight: 600 }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {serviceBodies
            .filter((b) => b.id !== "1")
            .map((body) => (
              <Row key={body.id} row={body} />
            ))}
          <TableRow style={{ backgroundColor: "#282c34" }}>
            <TableCell>
              <IconButton aria-label="expand row" size="small">
                <GroupsIcon style={{ color: "#fff" }} />
              </IconButton>
            </TableCell>
            <TableCell style={{ fontWeight: 600, color: "#fff" }}>
              Connecticut Region
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {rows.filter((pub) => pub.published === "1").length}
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {rows.filter((pub) => pub.published === "0").length}
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {
                rows.filter(
                  (pub) => pub.published === "1" && pub.venue_type === "1"
                ).length
              }
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {
                rows.filter(
                  (pub) => pub.published === "1" && pub.venue_type === "3"
                ).length
              }
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {
                rows.filter(
                  (pub) => pub.published === "1" && pub.venue_type === "2"
                ).length
              }
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: 600, color: "#fff" }}
            >
              {rows.length}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
