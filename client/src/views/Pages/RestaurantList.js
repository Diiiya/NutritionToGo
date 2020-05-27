
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAsync } from 'react-async';
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import restaurantImage from "assets/img/Rest1.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);

const loadRestaurants = async () =>
    await fetch("http://localhost:3000/api/restaurants")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())


export default function RestaurantList() {
    const classes = useStyles();

    const { data, error, isLoading } = useAsync({ promiseFn: loadRestaurants })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <div className={classes.container}>
                <h3><strong>CHOOSE A RESTAURANT</strong></h3>
                <GridContainer style={{ backgroundColor: "white" }}>
                    {data.map(restaurant =>
                        <Link to={`/restaurant-page/${restaurant.id}`}>
                            <GridItem xs={12} sm={12} md={12} style={{ paddingLeft: "15" }}>
                                <h4 style={{ textAlignment: "center" }}><strong>{restaurant.name}</strong></h4>
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
            </div>
        )
}