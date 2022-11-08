import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function AllRecords() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

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
      navigate("/");
      notifyDelData();
    });
  };

  const searchData = async () => {
    let url = "http://localhost:4000/search/" + search;
    await axios.get(url).then((response) => {
      // console.log("search rsp", response.data);
      setData(response?.data);
    });
  };

  const notifyDelData = () => toast("Record Deleted");

  return (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setSearch(e?.target?.value);
                }}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => {
                  searchData();
                }}
              >
                Search
              </Button>
            </InputGroup>

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
                                navigate("/edit-record", {
                                  state: {
                                    id: item?._id,
                                    name: item?.name,
                                    designation: item.designation,
                                  },
                                });
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
        <ToastContainer />
      </Container>
    </div>
  );
}
