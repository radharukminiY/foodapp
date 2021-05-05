import React, { Component } from 'react';
import './landingPage.css';
import * as FoodAction from "../actions/action";
import {Header} from './../components/Header/header';

import foodStore from "../store/store";
import Favourite from "../components/Favourites/favourites";
import Categories from "../components/categories/categories";

class Landingpage extends Component {
          // eslint-disable-next-line
      constructor(props){
          super(props);


      }
      componentWillMount() {
          foodStore.on('change', this.getFoodData)
      }

    componentDidMount() {
        FoodAction.getFoodDetails();
      }

    componentWillUnmount(){

      }

      getFoodData(type){

      }


    render() {

    return (
      <div className="landing-page-container">
            <Header />
            <div className="main-section">
            <Favourite/>
            <Categories/>
            </div>

      </div>
    );
  }
}

export default Landingpage;
