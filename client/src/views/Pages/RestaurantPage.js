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

import restaurantImage from "assets/img/Rest1.jpg";
import caesarSaImage from "assets/img/CaesarSa.png";
import greekSaImage from "assets/img/Greeksalad.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { FormatStrikethroughRounded } from "@material-ui/icons";
//const useStyles = makeStyles(styles);

//export default function RestaurantPage(props) {
/* const classes = useStyles();
 const [selectedEnabled, setSelectedEnabled] = React.useState("b"); */



export default class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        this.state = {
            hour: hour,
            minutes: minutes,
            restaurant: [],
            restaurantId: props.match.params.id,
            // item should be full object with price, name etc
            item: "item 1",
            basket: [],
            totalPrice: 0
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/restaurants/${this.state.restaurantId}`)
            .then(response => response.json())
            .then(data => this.setState({ restaurant: data }));
    }

    addToBasket(item) {
        var basket = this.state.basket.concat(item)
        this.setState({ basket: basket })
    }

    calculateTotalPrice(basket) {
        var total = 0
        basket.forEach(item => {
            total = total + item.price
        });
        return total
    }

    render() {
        // for some reason it doesn't work unless we check if menucategories exists
        if (!this.state.restaurant.MenuCategories) {
            return null;
        }

        // set total price
        var total = this.calculateTotalPrice(this.state.basket)
        if (total != this.state.totalPrice) {
            this.setState({ totalPrice: total});
        }
        
        console.log("daata: " + this.state.restaurant.name + " - " + this.state.restaurantId)
        console.log("daata: " + this.state.restaurant.MenuCategories)
        let isOpen;
        let orderButton;
        
        // I added '|| true' in the if statement to permanently allow myself to add items to the basket (for developing purposes) --- Jacob
        if ((this.state.hour * 100 + this.state.minutes / 60 >= this.state.restaurant.openAtHour) && (this.state.hour * 100 + this.state.minutes / 60 <= this.state.restaurant.closedAtHour) || true) {
            isOpen = <Badge color="success">OPEN</Badge>
            orderButton = <Button color="success"
                style={{ width: "100%" }}
                >ORDER</Button>
        } else {
            isOpen = <Badge color="danger">CLOSED</Badge>
            orderButton = <Button color="success" style={{ width: "100%" }} disabled>ORDER</Button>
        }

        return (
            <div>
                <Header
                    brand="NUTRITION TO GO"
                    color="dark"
                />
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
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
                            <h3><strong>{this.state.restaurant.name}</strong></h3>
                            <h5>{this.state.restaurant.address},
                                {this.state.restaurant.postalCode},
                                {this.state.restaurant.city}</h5>
                            {isOpen}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <h4 style={{ marginTop: "20px" }}>Opening hours</h4>
                            <h5>From: {this.state.restaurant.openAtHour}</h5>
                            <h5>To: {this.state.restaurant.closedAtHour}</h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <h4 style={{ marginTop: "20px" }}>Delivery (up to {this.state.restaurant.deliveryTimeMinutes} mins)</h4>
                            <h5>Minimum price for delivery: {this.state.restaurant.deliveryLowerBoundary} DKK</h5>
                            <h5>Delivery price: {this.state.restaurant.deliveryPrice}</h5>
                            <h5>Free delivery for orders over {this.state.restaurant.deliveryUpperBoundary} DKK</h5>
                        </GridItem>
                    </GridContainer>

                    <GridContainer style={{ marginTop: "60px" }}>
                        <GridItem xs={12} sm={12} md={9}>
                            <h3>
                                <small>{this.state.restaurant.name} MENU:</small>
                            </h3>
                            {this.state.restaurant.MenuCategories.map(category =>
                                <CustomTabs
                                    headerColor="warning"
                                    tabs={[
                                        {
                                            tabName: `${category.categoryName}`,
                                            tabContent: (
                                                <div style={{ display: "inline-block" }} >

                                                    {category.MenuItems.map(menuItem =>
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
                                                            <h4><strong>{menuItem.itemName}</strong></h4>

                                                            {menuItem.ItemIngredients.map(ingredient =>
                                                                <h5>{ingredient.ingredientName}</h5>
                                                                )}
                                                            <h4>{menuItem.price},- DKK</h4>
                                                            {orderButton = <Button onClick={() => this.addToBasket(menuItem)}></Button>}
                                                        </div>
                                                        )}
                                                
                                                </div>
                                            )
                                        }
                                    ]}
                                />
                            )}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "60px", backgroundColor: "white", height: "400px" }}>
                            <div>
                                <h3 style={{ alignText: "center" }}><strong>YOUR BASKET:</strong></h3>
                                <div>
                                    {this.state.basket.map(orderedItem =>
                                        <div>
                                            <h4 style={{ display: "inline-block" }}>{orderedItem.itemName}</h4>
                                            <h4 style={{ display: "inline-block", marginLeft: "120px", marginRight: "30px" }}>- 1 +</h4>
                                            <h4 style={{ display: "inline-block" }}>{orderedItem.price}</h4>
                                        </div>
                                    )}
                                </div>

                                {/*  <div style={{marginTop: "30px"}}>
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
                                </div> */}

                                <h4 style={{ textAlign: "right", marginTop: "20px" }}><strong>TOTAL PRICE: {this.state.totalPrice}</strong></h4>
                                <Button style={{ float: "right" }} color="success">CHECK OUT</Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        )
    };
}