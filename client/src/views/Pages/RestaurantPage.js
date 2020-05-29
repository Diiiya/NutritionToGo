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
            restaurantCategories: [],
            menuItems: [],
            restaurantId: props.match.params.id,
            item: [],
            basket: [],
            isRestaurantOpen: false,
            deliveryOption: "pick-up",
            totalPrice: 0
        };
        this.addToBasket = this.addToBasket.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/restaurants/${this.state.restaurantId}`)
            .then(response => response.json())
            .then(data => this.setState({ restaurant: data }));
        fetch(`http://localhost:3000/api/restaurants/${this.state.restaurantId}/categories`)
            .then(response => response.json())
            .then(data => this.setState({ restaurantCategories: data }))
            .then(this.interval = setInterval(() => this.isOpen(), 10000));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    addToBasket(item) {
        var basket = this.state.basket.concat(item)
        var totalPrice = this.state.totalPrice + item.price;

        if ((totalPrice < this.state.restaurant.deliveryLowerBoundary) && (this.state.deliveryOption === "delivery")) {
            totalPrice = this.state.restaurant.deliveryLowerBoundary;
        }

        if ((totalPrice < this.state.restaurant.deliveryUpperBoundary) && (this.state.deliveryOption === "delivery") && (this.state.restaurant.deliveryPrice != null)) {
            totalPrice += this.state.restaurant.deliveryPrice;
        }

        this.setState(prevState => {
            return {
                basket: basket,
                totalPrice: totalPrice
            }
        });
    }

    checkPrice() {
        sessionStorage.setItem("basket", JSON.stringify(this.state.basket));

        var orderPrice = this.state.totalPrice;
        var totalOrderPrice = 0;

        totalOrderPrice = orderPrice;

        if(this.state.deliveryOption === "delivery"){
            if(totalOrderPrice < this.state.restaurant.deliveryLowerBoundary){
                totalOrderPrice = this.state.restaurant.deliveryLowerBoundary;
            }
            if(this.state.restaurant.deliveryUpperBoundary != null){
                if(totalOrderPrice < this.state.restaurant.deliveryUpperBoundary){
                    totalOrderPrice += this.state.restaurant.deliveryPrice;
                }
            }
        }
        localStorage.setItem("deliveryType", this.state.deliveryOption);
        localStorage.setItem("totalOrderPrice", totalOrderPrice);
        this.goNext();
    }

    goNext(){
        window.location.href = "/customer-details-page";
    }


    isOpen() {
        if ((this.state.hour * 100 + this.state.minutes / 60 >= this.state.restaurant.openAtHour) && (this.state.hour * 100 + this.state.minutes / 60 <= this.state.restaurant.closedAtHour)) {
            this.setState({ isRestaurantOpen: true });
        } else {
        }
    }

    render() {
        console.log("daata: " + this.state.restaurant.name + " - " + this.state.restaurantId)
        //  console.log("delivery option " + this.state.deliveryOption)

        localStorage.setItem("restaurantId", this.state.restaurant.id);

        let isOpen;
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
                            {this.state.restaurantCategories.map(category =>
                                <CustomTabs
                                    headerColor="warning"
                                    tabs={[
                                        {
                                            tabName: `${category.categoryName}`,
                                            tabContent: (
                                                <div style={{ display: "inline-block" }} >
                                                    {category.MenuItems.map(item =>
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
                                                            <h4><strong>{item.itemName}</strong></h4>
                                                            <h4>{item.price} DKK</h4>
                                                            {(() => {
                                                                if (this.state.isRestaurantOpen) {
                                                                    return <Button color="success"
                                                                        style={{ width: "100%" }}
                                                                        onClick={() => this.addToBasket(item)}>ORDER</Button>;
                                                                } else {
                                                                    return <Button color="success" style={{ width: "100%" }} disabled>ORDER</Button>;
                                                                }
                                                            })()}
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
                                            <div>
                                                <h4 style={{ display: "inline-block", marginRight: "120px" }}>{orderedItem.itemName}</h4>
                                                <h4 style={{ display: "inline-block" }}>{orderedItem.price} DKK</h4>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <input type="radio" id="pick-up" name="deliveryOption" value="pick-up" checked="checked"
                                            onChange={(e) => this.setState({deliveryOption: e.target.value})}></input>
                                    <label for="pick-up">Pick-up</label><br></br>
                                    <input type="radio" id="delivery" name="deliveryOption" value="delivery"
                                            onChange={(e) => this.setState({deliveryOption: e.target.value})}></input>
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