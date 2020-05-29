import React from "react";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";

import restaurantImage from "assets/img/Rest1.jpg";
import caesarSaImage from "assets/img/CaesarSa.png";
import greekSaImage from "assets/img/Greeksalad.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { FormatStrikethroughRounded, VerticalAlignCenter } from "@material-ui/icons";

import restaurantUtil from "../../utils/restaurantUtil";
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
            item: [],
            basket: [],
            isRestaurantOpen: false,
            deliveryOption: true,
            totalPrice: 0
        };
        this.addToBasket = this.addToBasket.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/restaurants/${this.state.restaurantId}`)
            .then(response => response.json())
            .then(data => this.setState({ restaurant: data }));
    }

    checkPrice() {
        sessionStorage.setItem("basket", JSON.stringify(this.state.basket));

        localStorage.setItem("deliveryType", this.state.deliveryOption);
        localStorage.setItem("totalOrderPrice", this.state.totalPrice);
        this.goNext();
    }

    goNext(){
        window.location.href = "/customer-details-page";
    }

    addToBasket(item) {
        var itemSpot = this.checkBasket(item)

        if (itemSpot != -1) { // if an item location is returned, increment the quantity value by one
            this.modifyBasketItem(item, 1)
            }
        else { // if no item location is found, add new menu item to basket
            var a = item
            a['quantity'] = 1

            var basket = this.state.basket.concat(a)
            this.setState({ basket: basket })
        }
    }

    // checks if item (a) already exists in basket and if it does, returns its location in the array
    checkBasket(a) {
        var itemSpot = -1

        for (let i = 0; i < this.state.basket.length; i++) {
            if (this.state.basket[i].itemName == a.itemName && this.state.basket[i].price == a.price) {
                itemSpot = i
                break
            }
        }

        return itemSpot
    }

    // modifies the quantity value of a basket item
    modifyBasketItem(item, value) {
        
        var itemSpot = this.checkBasket(item)

        var basket = this.state.basket
        basket[itemSpot].quantity += value

        // remove item if its quantity falls below 1
        if (basket[itemSpot].quantity < 1) {
            basket.splice(itemSpot, itemSpot+1)
        }

        this.setState({ basket: basket })
    }

    calculateTotalPrice(basket) {
        var total = 0

        if (basket.length == 0) {
            return 0;
        }
        basket.forEach(item => {
            total = total + (item.price * item.quantity)
        });

        return restaurantUtil.calculatePrice(total, this.state.deliveryOption, this.state.restaurant.deliveryLowerBoundary, this.state.restaurant.deliveryUpperBoundary, this.state.restaurant.deliveryPrice)
    }

    isOpen() {
        if ((this.state.hour * 100 + this.state.minutes / 60 >= this.state.restaurant.openAtHour) && (this.state.hour * 100 + this.state.minutes / 60 <= this.state.restaurant.closedAtHour)) {
            this.setState({ isRestaurantOpen: true });
        } else {
        }
    }

    render() {
        if (!this.state.restaurant.MenuCategories) {
            return null;
        }

        var total = this.calculateTotalPrice(this.state.basket)
        if (this.state.totalPrice != total) {
            this.setState({ totalPrice: total })
        }

        console.log("daata: " + this.state.restaurant.name + " - " + this.state.restaurantId)
        console.log("delivery option " + this.state.deliveryOption)

        localStorage.setItem("restaurantId", this.state.restaurant.id);

        let isOpen;
        let orderButton;
        let decreaseButton;
        let increaseButton;
        
        if ((this.state.hour * 100 + this.state.minutes / 60 >= this.state.restaurant.openAtHour) && (this.state.hour * 100 + this.state.minutes / 60 <= this.state.restaurant.closedAtHour)) {
            isOpen = <Badge color="success">OPEN</Badge>
        } else {
            isOpen = <Badge color="danger">CLOSED</Badge>
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
                                                            {orderButton = <Button onClick={() => this.addToBasket(menuItem)}>ORDER</Button>}
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
                                            <h4 style={{ display: "inline-block", marginLeft: "100px", marginRight: "30px" }}>
                                                {decreaseButton = <Button onClick={() => this.modifyBasketItem(orderedItem, -1)} style={{ height: "16px", width : "10%"}}><text style={{marginTop: "-9px" }}>- </text></Button>}
                                                <text>  {orderedItem.quantity}  </text>
                                                {increaseButton = <Button onClick={() => this.modifyBasketItem(orderedItem, 1)} style={{ height: "16px", width : "10%"}}><text style={{marginTop: "-9px" }}> +</text></Button>}
                                            </h4>
                                            <h4 style={{ display: "inline-block" }}>{orderedItem.price}</h4>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <input type="radio" id="pick-up" name="deliveryOption" value="pick-up" checked={this.state.deliveryOption}
                                            onChange={(e) => this.setState({deliveryOption: true})}></input>
                                    <label for="pick-up">Pick-up</label><br></br>
                                    <input type="radio" id="delivery" name="deliveryOption" value="delivery"
                                            onChange={(e) => this.setState({deliveryOption: false})}></input>
                                    <label for="delivery">Delivery</label><br></br>
                                </div>

                                <h4 style={{ textAlign: "right", marginTop: "20px" }}><strong>TOTAL PRICE: {this.state.totalPrice} DKK</strong></h4>
                                <Button style={{ float: "right" }}
                                    color="success"
                                    onClick={() => this.checkPrice()}>CHECK OUT</Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        )
    };
}
