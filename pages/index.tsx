import { useState } from "react";
import { Accordion } from "react-bootstrap";
import background from "../src/images/bg-galaxy.jpg";
import jojoBodhiCodeLogo from "../src/images/jojoBodhiCodeLogo.png";

export default function Home() {
  return (
    <>
      <style>
        {`
          .bg-galaxy{
            background-image:  url(${background.src});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          
          .h-vh-100 {
            height: 100vh;
          }
          
          .max-w-75-percent { 
            max-width: 75%;
          }
          
          .bg-000 {
            background-color: rgba(0, 0, 0, 0.75);
          }

          .text-shadow {
            text-shadow: #000 1px 0 10px;
          }

          .accordion-item {
            background-color: rgba(0, 0, 0, 0);
            border: 1px solid rgba(0, 0, 0, 0.125);
            opacity: 100%;
          }

          .accordion-button:not(.collapsed) {
            color: #212529;
            background-color: #e7f1ff;
            box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
          }

          .accordion-button:focus {
            border-color: #e489f1;
          }
          `}
      </style>
      <div className="page-wrapper bg-galaxy w-100 h-vh-100">
        <div className="w-100 d-flex">
          <img
            className="img-fluid w-100 max-w-75-percent p-3 mx-auto"
            src={jojoBodhiCodeLogo.src}
            alt="jojoBodhiCodeLogo"
          />
        </div>

        <div className="d-flex flex-column align-items-center">
          <h1 className="text-white pb-3 text-shadow">
            <strong>jojoBodhiCode</strong>
          </h1>
        </div>
        <div className="d-flex flex-column align-items-center pb-3 mx-3">
          <audio
            className="rounded w-100"
            src="/interstellar-communication.mp3"
            controls
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <div className="main-body-wrapper bg-000 mx-3 rounded p-3 text-white d-flex flex-column">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Profile</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Experience</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Education</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Contact</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
