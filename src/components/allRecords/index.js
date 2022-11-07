import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AllRecords() {
  const history = useHistory();

  const [data, setData] = useState("");

  useEffect(() => {
    getAllDataHelper();
  }, []);

  const getAllDataHelper = async () => {
    let url = "http://localhost:4000/list";
    await axios.get(url).then((response) => {
      setData(response?.data);
    });
  };

  const delDataHelper = async (id) => {
    let url = "http://localhost:4000/delete/" + id;
    await axios.delete(url).then((response) => {
      // console.log("del rsp", response);
      if (response) {
        console.log("del...");
      }
    });
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Container />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item, ind) => {
                  return (
                    <tr>
                      <td>{ind + 1}</td>
                      <td>{item?.name}</td>
                      <td>{item?.designation}</td>
                      <td>
                        <div className="d-grid gap-2">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {
    history.push("/home");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => {
                              delDataHelper(item?._id);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}
