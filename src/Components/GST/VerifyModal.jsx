import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUser } from "../../Context/userContext";

export default function VerifyModal({
  show,
  handleClose,
  submitFunction,
  otpId,
}) {
  const { userDetails } = useUser();
  const [declare, setDeclare] = useState(false);
  const [otp, setotp] = useState(0);

  const handleSubmit = () => {
    submitFunction(otp, otpId);
  };

  return ReactDom.createPortal(
    <Modal className="fs-3" size="lg" show={show} onHide={handleClose}>
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title className="fs-3">Returns Filing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              //   id="disabledFieldsetCheck"
              // label="I/We hereby solemnly affirm and declare that the information given herein above is true and correct to the best of my/our knowledge and belief and nothing has been concealed therefrom."
              onChange={() => setDeclare(!declare)}
            />
            <Form.Label className="w-100">
              I/We hereby solemnly affirm and declare that the information given
              herein above is true and correct to the best of my/our knowledge
              and belief and nothing has been concealed therefrom.
            </Form.Label>
          </Form.Group>
          {declare ? (
            <>
              <Form.Group
                className="mb-3 fs-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Filling User</Form.Label>
                <Form.Select className="fs-3">
                  <option>select</option>
                  <option>{userDetails.fullName}</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP Recieved on your email"
                  className="fs-3"
                  onChange={(e) => setotp(e.target.value)}
                />
              </Form.Group>
            </>
          ) : (
            <></>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="fs-3 mx-4" variant="primary" onClick={handleClose}>
          Resend
        </Button>
        <Button className="fs-3 mx-4" variant="success" onClick={handleSubmit}>
          Verify
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
}
