import React, { Component, useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/data.json'
import './Course.css';




class Course extends Component {
  purchaseClicked(){
    console.log(fakeData);
  }
  render(){
    return(
      <div>
        {fakeData.map((postDetail)=>{
          return <div className="mainText">
                      
                      <h3>Course Name: {postDetail.Course_name}</h3>
                      <p>Registration Fee: {postDetail.Registration_Fee}</p>
                      <button className="btn btn-success" onClick={this.purchaseClicked}>Purchase Now</button>
                      
                      
                </div>
                
                
        })}
        <div className="payCart">
        <Cart></Cart>
        </div>
        
      </div>
    )
  }
}

export default Course;