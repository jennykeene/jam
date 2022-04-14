import React from "react";
import { Button, Card } from "react-bootstrap";

const NewsIcons = (props) => {
  const card = {
    borderRadius: "15px",
    backgroundColor: "rgb(40, 45, 53)",
    color: "#fff"
  };
// borders for news article image
  const image = {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };
// bttn
  const bttn = {
    backgroundColor: "#005abb",
    borderRadius: "12px",
    fontWeight: "bold",
    color: "#fff",
    boxShadow: "0 30px 36px 0 rgba(0, 0, 0, 0.2)",
  };

// txt
  const txt = {
    color: "#b6b4b4",
  };

  
  const { imageUrl, alt, description, title, urlNews } = props

  return (
    <>
      <Card style={card}>
        <Card.Img style={image} variant="top" src={imageUrl} alt={alt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={txt}>
            {description}
          </Card.Text>
          <Button href={urlNews} target="_blank" style={bttn}>Read more →</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewsIcons;