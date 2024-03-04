import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  education,
  skills,
  certificates,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.which}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <ul class="honeycomb" lang="es">
              {skills.map((data, i) => (
                <li class="honeycomb-cell" key={i}>
                  <img class="honeycomb-cell__image" src={data.img} alt="" />
                  <div class="honeycomb-cell__title">{data.name}</div>
                </li>
              ))}
              {/* <li class="honeycomb-cell honeycomb_placeholder"></li> */}
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Certification</h3>
          </Col>
          <Col lg="7">
            {certificates.map((data, i) => {
              return (
                <div className="certificate_ py-4" key={i}>
                  <h5 className="certificate__title">{data.title}</h5>
                  <p className="certificate_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
