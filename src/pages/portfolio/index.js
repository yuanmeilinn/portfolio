import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import imgcv from "../../assets/images/IMG_1325.JPG"
import img1 from "../../assets/images/IMG_1310.JPG"
import img2 from "../../assets/images/IMG_1338.JPG"
import img3 from "../../assets/images/IMG_1339.JPG"
import img4 from "../../assets/images/IMG_1340.JPG"
import img5 from "../../assets/images/IMG_1348.JPG"
import img6 from "../../assets/images/IMG_1309.JPG"
import img7 from "../../assets/images/IMG_1347.JPG"
import img8 from "../../assets/images/IMG_1302.JPG"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
        <div className="po_item">
              <img src={imgcv} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
            </div>
            <div className="po_item">
              <img src={img1} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
            </div>
            <div className="po_item">
              <img src={img2} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
            </div>
            <div className="po_item">
              <img src={img3} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
            </div>
            <div className="po_item">
              <img src={img4} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
            </div>
            </div>
            <div className="po_item">
              <img src={img5} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
              </div>
            <div className="po_item">
              <img src={img6} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
              </div>
            <div className="po_item">
              <img src={img7} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
              </div>
            <div className="po_item">
              <img src={img8} alt="" />
              <div className="content">
                <p>something</p>
                <a href="">view project</a>
              </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
