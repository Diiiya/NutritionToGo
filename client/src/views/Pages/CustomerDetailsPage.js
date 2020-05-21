import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import CustomInput from "components/CustomInput/CustomInput.js";

import restaurantImage from "assets/img/Rest1.jpg";
import caesarSaImage from "assets/img/CaesarSa.png";
import greekSaImage from "assets/img/Greeksalad.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);

export default function CustomerDetailsPage() {
    const classes = useStyles();
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");
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
                        <h3><strong>Restaurant 1</strong></h3>
                        <h5>Restaurant 1 address here</h5>
                        {/*<Badge color="success">OPEN</Badge>*/}
                    </GridItem>
                    {/*<GridItem xs={12} sm={12} md={3}>
                        <h4 style={{ marginTop: "20px" }}>Opening hours</h4>
                        <h5>Monday - Friday: 11:00 - 20:00</h5>
                        <h5>Saturday, Sunday: 11:00 - 18:00</h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <h4 style={{ marginTop: "20px" }}>Delivery (up to 20 mins)</h4>
                        <h5>50 DKK</h5>
                        <h5>Free for orders over 150 DKK</h5>
                    </GridItem>*/}
                </GridContainer>

                <GridContainer style={{ marginTop: "60px" }}>
                    {/*<GridItem xs={12} sm={12} md={9}>
                        <h3>
                            <small>Restaurant 1 MENU:</small>
                        </h3>
                        <CustomTabs
                            headerColor="warning"
                            tabs={[
                                {
                                    tabName: "SALADS",
                                    tabContent: (
                                        <div style={{ display: "inline-block" }} >
                                            <div style={{
                                                width: "200px",
                                                textAlign: "center",
                                                display: "inline-block",
                                                paddingLeft: "10px"
                                            }}>
                                                <img
                                                    src={caesarSaImage}
                                                    alt="..."
                                                    height="180"
                                                    width="100%"
                                                />
                                                <h4><strong>CAESAR SALAD</strong></h4>
                                                <h5>Ingredients here ... Ingredients here ... Ingredients here ... </h5>
                                                <h4>150 DKK</h4>
                                                <Button color="success" style={{ width: "100%" }}>ORDER</Button>
                                            </div>
                                            <div style={{
                                                width: "200px",
                                                textAlign: "center",
                                                display: "inline-block",
                                                paddingLeft: "10px"
                                            }}>
                                                <img
                                                    src={greekSaImage}
                                                    alt="..."
                                                    height="180"
                                                    width="100%"
                                                />
                                                <h4><strong>GREEK SALAD</strong></h4>
                                                <h5>Ingredients here ... Ingredients here ... Ingredients here ... </h5>
                                                <h4>150 DKK</h4>
                                                <Button color="success" style={{ width: "100%" }}>ORDER</Button>
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    tabName: "SANDWICHES",
                                    tabContent: (
                                        <p className={classes.textCenter}>...</p>
                                    )
                                },
                                {
                                    tabName: "DESSERTS",
                                    tabContent: (
                                        <p className={classes.textCenter}>...</p>
                                    )
                                },
                                {
                                    tabName: "BEVERAGES",
                                    tabContent: (
                                        <p className={classes.textCenter}>...</p>
                                    )
                                }
                            ]}
                        />
                    </GridItem>*/}
                    <GridItem xs={12} sm={12} md={4} style={{ marginTop: "60px", backgroundColor: "white", height: "500px" }}>
                        <div>
                            <h3 style={{ alignText: "center" }}><strong>YOUR BASKET:</strong></h3>
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
                            {/*<Button style={{float: "right"}} color="success">CHECK OUT</Button>*/}
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1} style={{ marginTop: "60px", height: "500px" }}></GridItem>
                    <GridItem xs={12} sm={12} md={7} style={{ marginTop: "60px", backgroundColor: "white", height: "500px" }}>
                        <div>
                            <h3 style={{ alignText: "center" }}><strong>CUSTOMER DETAILS:</strong></h3>
                            <div style={{marginBottom: "10px"}}>
                                <CustomInput labelText="First Name" id="float" formControlProps={{fullWidth: true}}/>
                                <CustomInput labelText="Last Name" id="float" formControlProps={{fullWidth: true}} />
                                <CustomInput labelText="Address" id="float" formControlProps={{fullWidth: true}} />
                                <CustomInput labelText="Postal Code" id="float" formControlProps={{fullWidth: true}} />
                                <CustomInput labelText="City" id="float" formControlProps={{fullWidth: true}} />
                                <CustomInput labelText="Phone Number" id="float" formControlProps={{fullWidth: true}} />
                            </div>
                            <Button style={{ float: "right"}} color="success">CONFIRM AND PAY</Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}