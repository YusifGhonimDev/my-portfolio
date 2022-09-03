import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Family from "../../assets/family.jpg";
import Gym from "../../assets/gym.jpg";
import Task from "../../assets/task.jpg";
import "./Content.css";

const Content = () => {
  const data = [
    {
      image: Family,
      title: "E-Commerce",
      text: "It might be a web application or applications of e-commerce (now popularly known as m-commerce applications). Mobile e-commerce applications are just an extension of e-commerce. Mobile app concepts are the driving force behind any successful business app, whether a cab booking app or a food delivery app.",
      id: 1,
    },
    {
      image: Gym,
      title: "Fitness",
      text: "Get the latest expert fitness advice on healthy workouts, fitness challenges, muscle recovery, workout trends, and more.",
      id: 2,
    },
    {
      image: Task,
      title: "Task Manager",
      text: "Task management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time. Task management software, like Asana, empowers teams to work more productively and efficiently.",
      id: 3,
    },
  ];
  return (
    <section
      id="projects"
      style={{ backgroundColor: "#212529", color: "#D3D3D3", padding: "20px" }}
    >
      <h1>PROJECTS</h1>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          {data.map((card) => {
            return (
              <Col key={card.id} style={{ display: "flex" }}>
                <Card
                  style={{
                    color: "black",
                  }}
                >
                  <Card.Img src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                  <Button variant="dark">Live Demo</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Content;
