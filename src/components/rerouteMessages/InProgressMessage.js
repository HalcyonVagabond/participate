import React from "react"
import { Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import "../Participate.css"

export default () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} className="mapContainer">
            <Jumbotron style={{ textAlign:'center', width:'75%'}}>
                <h1>
                    Work in Progress!
                </h1>
                <Card>
                    <CardImg top width="100%" src={require( "../../images/statueOfLiberty.jpeg")} alt="Statue of Liberty" />
                    <CardBody>
                        <CardTitle style={{fontWeight: 'bold'}}>Keep exploring. . .</CardTitle>

                        <CardText>We are still working on creating this content. If you want to help, click the <a target="_blank" href="https://github.com/HalcyonVagabond/participate">link</a> in the footer for our GitHub repository! If you want to keep exploring, click the button below to go back home.</CardText>
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Jumbotron>
        </div>
    );
};