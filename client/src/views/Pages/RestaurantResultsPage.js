import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useAsync } from 'react-async';

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import RestaurantList from "views/Pages/RestaurantList.js";


export default class RestaurantResultsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header
                    brand="NUTRITION TO GO"
                    color="dark"
                />
                <RestaurantList />
                {/*  <div className={classes.container}>
                    <h3><strong>CHOOSE A RESTAURANT</strong></h3>
                    <GridContainer style={{ backgroundColor: "white" }}>
                        {data.map(restaurant =>
                            <Link to={`/restaurant-page/${restaurant.id}`}>
                                <GridItem xs={12} sm={12} md={12} style={{ paddingLeft: "15" }}>
                                    <h4 style={{ textAlignment: "center" }}><strong>{restaurant.id}</strong></h4>
                                    <img
                                        src={restaurantImage}
                                        alt="..."
                                        height="230"
                                        width="100%"
                                    />
                                    <Button color="success" style={{ width: "100%" }}>ORDER NOW</Button>
                                </GridItem>
                            </Link>
                        )}
                    </GridContainer>
                        </div> */}
            </div>
        )
    };
}