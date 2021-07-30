import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../css/style.css";
import Axios from "axios";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import UserContext from "../context/userContext";
import ErrorNotice from "../components/misc/ErrorNotice";
import Cal from "../images/cal.png";
import constants from "../constants/constants";

export default function AddSpace(props) {
  const [type, setType] = useState("room");
  const [capacity, setCapacity] = useState();
  const [price, setPrice] = useState();
  const [facilities, setFacilities] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async () => {
    try {
      let user = localStorage.getItem("user");
      console.log(user);
      const newSpace = {
        seller_id: user,
        type,
        capacity,
        price,
        facilities,
      };

      Axios.post(`${constants.backend_url}/spaces/addspace`, newSpace).then(
        (res) => {
          console.log(res.data);
        }
      );

      history.push("/SpaceDetails");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <Container>
        <br></br>
        <div className="text-center">
          <h2>Add New Space</h2>
        </div>
        <br></br>
        <Row>
          <Col sm={6}>
            <Form>
              <lable>Space Type</lable>
              <br></br>
              <select
                class="form-control"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="room">Meeting Room</option>
                <option value="space">Working Space</option>
              </select>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Facilities</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={facilities}
                  onChange={(e) => setFacilities(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100" onClick={submit}>
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
