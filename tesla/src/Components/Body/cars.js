import React from "react";
import Middle from "../Body/Middle/middle"
import Model3 from '../Images/Model3.png'
import ModelY from '../Images/ModelY.png'
import ModelS from '../Images/ModelS.png'
import ModelX from '../Images/ModelX.png'
import SolarPanel from '../Images/SolarPanel.png'
import SolarRoof from '../Images/SolarRoof.png'

const Products = () => {
    return(
        <div>
            <Middle
            title = "Model 3"
            desc ="Schedule a Test Drive"
            backImg={Model3}
            FirstButton="Buy Now"
            SecondButton="Customer Order"
            twoButtons="true"
            />
            <Middle 
            title = "Model Y"
            desc = "Schedule a Test Drive"
            backImg={ModelY}
            FirstButton="Buy Now"
            SecondButton="Customer Order"
            twoButtons="true"
            />
            <Middle 
            title = "Model S"
            desc = "Schedule a Test Drive"
            backImg={ModelS}
            FirstButton="Buy Now"
            SecondButton="Customer Order"
            twoButtons="true"
            />
            <Middle 
            title = "Model X"
            desc = "Schedule a Test Drive"
            backImg={ModelX}
            FirstButton="Buy Now"
            SecondButton="Customer Order"
            twoButtons="true"
            />
            <Middle 
            title = "Solar Panels"
            desc = "Lowest Cost Solar Panels in America"
            backImg={SolarPanel}
            FirstButton="Order Now"
            SecondButton="Learn More"
            twoButtons="true"
            />
            <Middle 
            title = "Solar Roof"
            desc = "Produce Clean Energy From Your Roof"
            backImg={SolarRoof}
            FirstButton="Order Now"
            SecondButton="Learn More"
            twoButtons="true"
            />
        </div>
    )
}
export default Products;