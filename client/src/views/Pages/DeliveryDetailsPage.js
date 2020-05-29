import React, { useState, useEffect } from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import restaurantImage from "assets/img/Rest1.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

function setMyBasket() {
    var basket = JSON.parse(localStorage.getItem("orderedItems"));

    var htmlBasket = "";

    basket.forEach(item => {

        htmlBasket += '<div><label style={{ display: "inline-block", marginRight: "120px" }}>' + "Name: <strong>" + item.itemName + '</strong></label><label style={{ display: "inline-block" }}>' + " quantity: <strong>" + item.quantity + '</strong></label><label style={{ display: "inline-block" }}>' +  " price: <strong>" + item.price + '</strong>DKK</label><hr></hr></div>';      
    });

    return { __html: htmlBasket };
}

function checkDeliveryType(){
    var myDelivery = localStorage.getItem("deliveryType");
    if (myDelivery === "true") {
        localStorage.setItem("deliveryType", 1);
        myDelivery = "delivery";
    }
    else{
        localStorage.setItem("deliveryType", 0);
        myDelivery = "pick-up";
    }
    return myDelivery;
}

export default function DeliveryDetailsPage() {

    var myDelivery = checkDeliveryType();

    const classes = useStyles();

    const [data, setData] = useState({ restaurant: [] });

    const [orderData, setOrder] = useState({ order: [] });

    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:3000/api/restaurants/${localStorage.getItem("orderedRestaurantId")}`);
            setData(result.data);

            const result2 = await axios(`http://localhost:3000/api/restaurants/${localStorage.getItem("orderedRestaurantId")}/order/${localStorage.getItem("orderId")}`)
            setOrder(result2.data);
            console.log(result2.data.id);

        };

        fetchData();
    }, []);

    return (

        <div>
            <Header
                brand="NUTRITION TO GO"
                color="dark"
            />
            <div className={classes.container}>
                <GridContainer style={{ backgroundColor: "white" }}>
                    <GridItem xs={12} sm={12} md={3} style={{ paddingLeft: "0" }}>
                        <img
                            src={restaurantImage}
                            alt="..."
                            height="230"
                            width="100%"
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <h3><strong>{data.name}</strong></h3>
                        <h5>{data.address}</h5>
                    </GridItem>
                </GridContainer>

                <GridContainer style={{ marginTop: "60px" }}>

                    <GridItem xs={12} sm={12} md={5} style={{ marginTop: "60px", backgroundColor: "white", height: "450px", borderRight: '10px solid #e5e5e5' }}>
                        <div style={{ margin: "20px" }}>
                            <div dangerouslySetInnerHTML={setMyBasket()}>
                            </div>

                            <div style={{ marginTop: "30px" }}>
                                <h4>Delivery type: {myDelivery}</h4>
                            
                            </div>

                            <h4 style={{ textAlign: "right", marginTop: "20px" }}><strong>TOTAL PRICE: {localStorage.getItem("totalOrderPrice")} DKK</strong></h4>

                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7} style={{ marginTop: "60px", backgroundColor: "white", height: "450px" }}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h3 style={{ alignText: "center" }}><strong>YOUR ORDER HAS BEEN PLACED SUCCESFULLY!</strong></h3>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>First name:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.cusFirstName}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Last name:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.cusSurname}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Address:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.address}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Postal code:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.postalCode}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>City:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.city}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Phone number:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{orderData.phoneNumber}</h4>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                <h4>Estimated delivery time: <strong id="time">{localStorage.getItem("deliveryTimeMinutes")}</strong></h4>
                            </GridItem>
                        </GridContainer>
                        <Link to={`/`}>
                            <Button style={{ float: "right" }} color="success">GO BACK TO RESTAURANT PAGE</Button>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}