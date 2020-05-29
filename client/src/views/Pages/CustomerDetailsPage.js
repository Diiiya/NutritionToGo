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
import CustomInput from "components/CustomInput/CustomInput.js";

import restaurantImage from "assets/img/Rest1.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import styles2 from "assets/jss/material-kit-react/components/customInputStyle.js"

import { Link } from "react-router-dom";
import { configs } from "eslint-plugin-prettier";
import { MenuItem } from "@material-ui/core";
import { forEach } from "async";
import { SettingsBackupRestoreTwoTone } from "@material-ui/icons";


import customerUtils from "../../utils/customerUtils";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

function checkInput(errorClass, successClass, deliveryTimeMinutes) {
    var myFirstName = document.getElementById("firstName");
    var myLastName = document.getElementById("lastName");
    var myAddress = document.getElementById("address");
    var myPostalCode = document.getElementById("postalCode");
    var myCity = document.getElementById("city");
    var myPhoneNumber = document.getElementById("phoneNumber");

    var firstNameValidation = customerUtils.validateFirstName(myFirstName);
    var lastNameValidation = customerUtils.validateLastName(myLastName);
    var addressValidation = customerUtils.validateAddress(myAddress);
    var postalCodeValidation = customerUtils.validatePostalCode(myPostalCode);
    var cityValidation = customerUtils.validateCity(myCity);
    var phoneNumberValidation = customerUtils.validatePhoneNumber(myPhoneNumber);

    var foundError = false;

    if (firstNameValidation == "ok") {
        myFirstName.className = successClass;
    } else {
        myFirstName.className = errorClass;
        alert(firstNameValidation);
        foundError = true;
    }

    if (lastNameValidation == "ok") {
        myLastName.className = successClass;
    } else if (!foundError) {
        myLastName.className = errorClass;
        alert(lastNameValidation);
        foundError = true;
    }

    if (addressValidation == "ok") {
        myAddress.className = successClass;
    } else if (!foundError) {
        myAddress.className = errorClass;
        alert(addressValidation);
        foundError = true;
    }

    if (postalCodeValidation == "ok") {
        myPostalCode.className = successClass;
    } else if (!foundError) {
        myPostalCode.className = errorClass;
        alert(postalCodeValidation);
        foundError = true;
    }

    if (cityValidation == "ok") {
        myCity.className = successClass;
    } else if (!foundError) {
        myCity.className = errorClass;
        alert(cityValidation);
        foundError = true;
    }

    if (phoneNumberValidation == "ok") {
        myPhoneNumber.className = successClass;
    } else if (!foundError) {
        myPhoneNumber.className = errorClass;
        alert(phoneNumberValidation);
        foundError = true;
    }

    if (!foundError) {
        localStorage.setItem("firstName", myFirstName.value);
        localStorage.setItem("lastName", myLastName.value);
        localStorage.setItem("address", myAddress.value);
        localStorage.setItem("postalCode", myPostalCode.value);
        localStorage.setItem("city", myCity.value);
        localStorage.setItem("phoneNumber", myPhoneNumber.value);

        myPostMethod(myFirstName.value, myLastName.value, myAddress.value, myPostalCode.value, myCity.value, myPhoneNumber.value, deliveryTimeMinutes)
    }
}

function myPostMethod(firstNamePost, lastNamePost, addressPost, postalCodePost, cityPost, phoneNumberPost, deliveryTimeMi) {

    var basketItems = JSON.parse(localStorage.getItem("basket"));

    var finalOrderItems = [];
    if(basketItems != null){
    
        basketItems.forEach(item => {
            finalOrderItems.push({
                itemName: item.itemName,
                quantity: item.quantity,
                price: item.price,
            })
        })
    
        localStorage.setItem("orderedItems", JSON.stringify(finalOrderItems));
    }

    axios.post(`http://localhost:3000/api/restaurants/${localStorage.getItem("restaurantId")}/order`, {
        cusFirstName: firstNamePost,
        cusSurname: lastNamePost,
        address: addressPost,
        postalCode: postalCodePost,
        city: cityPost,
        phoneNumber: phoneNumberPost,
        delivery: localStorage.getItem("deliveryType"),
        totalPrice: localStorage.getItem("totalOrderPrice"),
        orderItems: finalOrderItems
        })
        .then((response) => {
            console.log(response.data.id);
            console.log(response);
            setOrderId(response.data.id, deliveryTimeMi);
        }, (error) => {
            console.log(error);
        });
}

function setOrderId(id, deliveryTimeM) {
    localStorage.setItem("orderId", id);
    localStorage.setItem("orderedRestaurantId", localStorage.getItem("restaurantId"));
    getDeliveryTime(deliveryTimeM)
}

function getDeliveryTime(deliveryTimeMinutes) {
    var nowTime = new Date();
    var myTime = new Date(nowTime.getTime() + deliveryTimeMinutes * 60000);
    var hours = myTime.getHours();
    var minutesToCheck = myTime.getMinutes();
    var minutes;
    if (minutesToCheck < 10) {
        minutes = "0" + minutesToCheck;
    }
    else {
        minutes = minutesToCheck;
    }
    localStorage.setItem("deliveryTimeMinutes", hours + ":" + minutes);
    window.location.href = "/delivery-details-page";
}

function setMyBasket(){
    var basket = JSON.parse(localStorage.getItem("basket"));
    var htmlBasket = "";

    if(basket !== null){
        basket.forEach(item => {
    
            htmlBasket += '<div><label style={{ display: "inline-block", marginRight: "120px" }}>' + "Name: <strong>" + item.itemName + '</strong></label><label style={{ display: "inline-block" }}>' + " quantity: <strong>" + item.quantity + '</strong></label><label style={{ display: "inline-block" }}>' +  " price: <strong>" + item.price + '</strong>DKK</label><hr></hr></div>';      
        });
    }
    else{
        htmlBasket += "<h4>Empty basket</h4>";
    }
    return {__html: htmlBasket};
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

export default function CustomerDetailsPage() {

    var myDelivery = checkDeliveryType();

    const [data, setData] = useState({ restaurant: [] });

    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:3000/api/restaurants/${localStorage.getItem("restaurantId")}`);

            setData(result.data);
        };

        fetchData();

    }, []);

    const classes = useStyles();
    const classes2 = useStyles2();

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
                    <GridItem xs={12} sm={12} md={5} style={{ marginTop: "60px", backgroundColor: "white", height: "500px", borderRight: '10px solid #e5e5e5' }}>
                        <div style={{ margin: "20px" }}>
                            <h3 style={{ alignText: "center" }}><strong>YOUR BASKET:</strong></h3>
                            <div id="htmlBasket" dangerouslySetInnerHTML={setMyBasket()}>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <h4>Delivery type: {myDelivery}</h4>
                            </div>
                            
                            <h4 style={{ textAlign: "right", marginTop: "20px" }}><strong id="totalPriceItem">TOTAL PRICE: {localStorage.getItem("totalOrderPrice")} DKK</strong></h4>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7} style={{ marginTop: "60px", backgroundColor: "white", height: "500px" }}>
                        <div>
                            <h3 style={{ alignText: "center" }}><strong>CUSTOMER DETAILS:</strong></h3>
                            <div style={{ marginBottom: "10px" }}>
                                <CustomInput labelText="First Name" id="firstName" width="200px" formControlProps={{ fullWidth: true }} />
                                <CustomInput labelText="Last Name" id="lastName" formControlProps={{ fullWidth: true }} />
                                <CustomInput labelText="Address" id="address" formControlProps={{ fullWidth: true }} />
                                <CustomInput labelText="Postal Code" id="postalCode" formControlProps={{ fullWidth: true }} />
                                <CustomInput labelText="City" id="city" formControlProps={{ fullWidth: true }} />
                                <CustomInput labelText="Phone Number" id="phoneNumber" formControlProps={{ fullWidth: true }} />
                            </div>
                            <Link to={`/restaurant-page/${localStorage.getItem("restaurantId")}`}>
                                <Button id="backButton" style={{ float: "left" }} color="success">BACK TO MENU</Button>
                            </Link>
                            <Button id="confirmButton" style={{ float: "right" }} color="success" onClick={() => checkInput(classes2.labelRootError, classes2.labelRootSuccess, data.deliveryTimeMinutes)}>CONFIRM AND PAY</Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}