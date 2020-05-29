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
                <Link to={`/delivery-details-page`}>
                    <Button>Receipt of my last order</Button>
                </Link>
                <RestaurantList />
            </div>
        )
    };
}