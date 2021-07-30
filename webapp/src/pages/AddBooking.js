import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import { useParams } from "react-router";
import Axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/AddBooking.css";

import PaymentModal from "./PaymentModel";

function AddBooking(props) {
  const [startDate, setStartDate] = useState(new Date());
  function handleSubmit(e) {}

  function handleChange(e) {}

  return (
    <>
      <Modal
        className="addToCart_modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Bookings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add_product_category_form_container">
            <Form
              className="add_product_category_form"
              onSubmit={(e) => handleSubmit(e)}
              type="submit"
            >
              <Form.Row>
                <Col sm={12} style={{ marginTop: "20px", padding: "5px" }}>
                  <Form.Group controlId="order_Status">
                    <Form.Label style={{ marginRight: "15px" }}>
                      Order Status
                    </Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>

              <div className="add_product_category_form_btns text-center">
                {/* <Button className='add_product_category_form_btn1' type="submit">Add Booking</Button> */}
                <PaymentModal orderTotal={"1000"} date={startDate} />
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBooking;
