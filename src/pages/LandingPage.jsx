import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-5 p-3">
          <h2 className="mt-5 p-3">
            Welcome to <span className="text-warning">Flow Media</span>
          </h2>
          <p className=" fs-5 p-3" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            non illo voluptate, fugiat placeat blanditiis officiis omnis ipsum
            assumenda rerum cum nam debitis pariatur reprehenderit harum nihil
            fugit accusamus magni. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, veniam accusantium? Dignissimos error
            facilis tenetur, officia a blanditiis nobis odio vel, reprehenderit
            quibusdam cumque rerum. Quisquam similique eum tempora unde?
          </p>
          <Button variant="warning" className="mt-4 ms-3">
          <Link to={'/home'} style={{textDecoration:"none" , color:"white"}}>Get Started</Link>
          </Button>
        </div>
        <div className="col-md-5  justify-content-center align-item-center">
          <img
            src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"
            alt=""
            className="h-100 w-100"
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row w-100 mt-5">
        <h3 className="mt-5 text-center mb-5">Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-4 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="mt-2">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/8e/1c/9f/8e1c9f5c4a8d2946a1bb21feb4296b69.gif"
              className="w-100"
              height={"300px"}
            />

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-4 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="mt-2">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/8a/83/c8/8a83c8978f1b376321fde613d460e88d.gif "
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3  px-4 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="mt-2">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/58/b8/ef/58b8ef3f9fb69dee5bfe0862666e4548.gif"
              className="w-100"
              height={"300px"}
            />

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0 ">
        <div className="col-md-1"></div>
        <div className="col-md-10 border p-md-0 p-4 rounded m-5 ">
          <div className="row ms-2 ms-md-0 p-5 w-100">
            <div className="col-md-6 p-4">
              <h3 className="text-warning">Simple Fast & PowerFull</h3>
              <p className="mt-4">
                <span className="fs-4">Play Everything</span> Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Nulla dicta expedita nemo
                consequuntur, dignissimos dolorem quibusdam autem sunt aperiam
                distinctio quaerat dolore blanditiis exercitationem temporibus
                ducimus voluptas? Nihil, consequatur repudiandae.
              </p>

              <p className="mt-4">
                <span className="fs-4">Play Everything</span> Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Nulla dicta expedita nemo
                consequuntur, dignissimos dolorem quibusdam autem sunt aperiam
                distinctio quaerat dolore blanditiis exercitationem temporibus
                ducimus voluptas? Nihil, consequatur repudiandae.
              </p>

              <p className="mt-4">
                <span className="fs-4">Play Everything</span> Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Nulla dicta expedita nemo
                consequuntur, dignissimos dolorem quibusdam autem sunt aperiam
                distinctio quaerat dolore blanditiis exercitationem temporibus
                ducimus voluptas? Nihil, consequatur repudiandae.
              </p>
            </div>
            <div className="col-md-6 ">
              <iframe
                width="100%"
                height="100%"
                style={{ overflow: "hidden" }}
                src="https://www.youtube.com/embed/spFiZdlJCmA?si=phv1bIIt2B2bBMHU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default LandingPage;
