import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import './ThirdStep.css';
import { useState } from "react";
import Resume from "../Resume";

export default function ThirdStep({setStep}) {
    const [modal, setModal] = useState(false);
    const onChangeComment = (e) => {
        const comment = e.target.value;
        localStorage.setItem('comment', comment)
    }
    return (
        <div>
            <h2>Third Step</h2>
            <h4>Do you want to add any comment?</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        <FloatingLabel controlId="floatingTextarea" label='Comments' className="mb-3">
                            <Form.Control as='textarea' placeholder="Leave a comment" onChange={(e) => onChangeComment(e)} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className="send-form">
                    <p className="result p-3" onClick={() => setModal(true)}>
                        View Result 🙌🏼
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep} />
                )}
            </Container>
        </div>
    );
};
