import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product({ img, title, description, price }) {
  return (
    <>
      <Col>
        <Card style={{ minWidth: "15em" }}>
          {/* <Card.Img variant="top" src={img} /> */}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price} DH</Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
