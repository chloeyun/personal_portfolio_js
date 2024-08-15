import { Col, Row, Container } from "react-bootstrap";
import { ArrowRighCircle, ShieldExclamation } from "react-bootstrap-icons";
import headerImg from "../assets/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Content Creator", "Data Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              Hi I'm Chloe Yun <br></br>
              <span className="wrap">{text}</span>
            </h1>
            <p>dummy text</p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
            </button>
          </Col>

          <Col xs={12} md={6} xl={6}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
