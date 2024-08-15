import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import projimg1 from "../assets/project-img1.png";
import projimg2 from "../assets/project-img2.png";
import projimg3 from "../assets/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projimg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projimg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projimg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projimg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projimg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Text To Fill</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Okay</Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
