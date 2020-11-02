import React, { Component, useState } from 'react';
import fakeData from '../fakeData/data.json'




class Course extends Component {
  render(){
    return(
      <div>
        {fakeData.map((postDetail)=>{
          return <div>
                      <h3>Course Name: {postDetail.Course_name}</h3>
                      <p>Registration Fee: {postDetail.Registration_Fee}</p>
                </div>
        })}
        
      </div>
    )
  }
}

export default Course;