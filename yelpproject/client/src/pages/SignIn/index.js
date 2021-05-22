import React from "react";
import  "../../styles.css"

import logo from "../SignIn/yelp_og_image.png"


export default function SignIn() {
    var styleVar = {
        fontFamily:'Arial',
        backgroundImage: `url(${logo})`,
        marginLeft:'0.01%',
        marginRight:'0.01%',
        textAlign:'center'
    }
    var formStyle = {
        fontFamily:'Arial',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center',
        marginTop:'20%'

    }
    var textBoxStyle = {
        fontFamily:'Arial',
        display: 'flex',
        marginLeft:'10%'

    }
    var radioStyle = {
        marginLeft:'11%',
        textAlign:'left'
    }
    return <div className="App" style={styleVar}>
           <div className="inputdiv" style={styleVar}>

               <form className="example" style={formStyle} action="http://localhost:4000/find/business/" method="post">
                   <div style={textBoxStyle}>
                       <input type="text" id="name" name="name" placeholder="Search.."  className="inputtext"/><br/>
                       <input type="submit" value="Submit" className="inputsubmit"/> <br/>
                   </div>
                   <div style={radioStyle}>
                       <label className="radio-inline"/>
                       <input type="radio" name="optradio" value="Name" checked/>Name
                       <label className="radio-inline"/>
                       <input type="radio" name="optradio" value="Location" />Location
                       <label className="radio-inline"/>
                       <input type="radio" name="optradio" value="Category" />Category
                   </div>
               </form><br/>
           </div>
        </div>;

}

//  <a href="http://localhost:3000/register"><button className="button button5">Register new user</button></a>