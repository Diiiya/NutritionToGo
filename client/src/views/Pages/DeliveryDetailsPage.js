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

function getDeliveryTime(deliveryTimeMinutes){
    var nowTime = new Date();
    var myTime = new Date(nowTime.getTime() + deliveryTimeMinutes*60000);
    var hours = myTime.getHours();
    var minutesToCheck = myTime.getMinutes();
    var minutes;
    if(minutesToCheck < 10){
        minutes = "0" + minutesToCheck;
    }
    else{
        minutes = minutesToCheck;
    }
    localStorage.setItem("deliveryTimeMinutes", hours + ":" + minutes);
}

export default function DeliveryDetailsPage() {
    const classes = useStyles();
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");

    const [data, setData] = useState({ restaurant: [] });
    
    useEffect(async () => {
        const fetchData = async () => {
            /*var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };*/
            const result = await axios('http://localhost:3000/api/restaurants/1');

            setData(result.data);
        };

        fetchData();
    }, []);

    getDeliveryTime(data.deliveryTimeMinutes);

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
                            <div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Caesar salad</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "120px", marginRight: "30px" }}>- 1 +</h4>
                                    <h4 style={{ display: "inline-block" }}>150 DKK</h4>
                                </div>
                                <hr></hr>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Greek salad</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "120px", marginRight: "30px" }}>- 1 +</h4>
                                    <h4 style={{ display: "inline-block" }}>150 DKK</h4>
                                </div>
                                <hr></hr>
                            </div>

                            <div style={{ marginTop: "30px" }}>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={selectedEnabled === "a"}
                                            onChange={() => setSelectedEnabled("a")}
                                            value="a"
                                            name="radio button enabled"
                                            aria-label="A"
                                            icon={
                                                <FiberManualRecord className={classes.radioUnchecked} />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked} />
                                            }
                                            classes={{
                                                checked: classes.radio,
                                                root: classes.radioRoot
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot
                                    }}
                                    label="Pick-up"
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={selectedEnabled === "b"}
                                            onChange={() => setSelectedEnabled("b")}
                                            value="b"
                                            name="radio button enabled"
                                            aria-label="B"
                                            icon={
                                                <FiberManualRecord className={classes.radioUnchecked} />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked} />
                                            }
                                            classes={{
                                                checked: classes.radio,
                                                root: classes.radioRoot
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot
                                    }}
                                    label="Delivery"
                                />
                            </div>

                            <h4 style={{ textAlign: "right", marginTop: "20px" }}><strong>TOTAL PRICE: 300 DKK</strong></h4>

                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7} style={{ marginTop: "60px", backgroundColor: "white", height: "450px" }}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h3 style={{ alignText: "center" }}><strong>YOUR ORDER HAS BEEN PLACED SUCCESFULLY!</strong></h3>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>First name:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("firstName")}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Last name:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("lastName")}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Address:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("address")}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Postal code:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("postalCode")}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>City:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("city")}</h4>
                                </div>
                                <div>
                                    <h4 style={{ display: "inline-block" }}>Phone number:</h4>
                                    <h4 style={{ display: "inline-block", marginLeft: "10px", fontStyle: "italic" }}>{localStorage.getItem("phoneNumber")}</h4>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                <h4>Estimated delivery time: <strong id="time">{localStorage.getItem("deliveryTimeMinutes")}</strong></h4>
                            </GridItem>
                        </GridContainer>
                        <Link to={"/restaurant-page"}>
                            <Button style={{ float: "right" }} color="success">GO BACK TO HOME PAGE</Button>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}