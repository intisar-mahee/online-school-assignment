import React, { useState } from 'react';
import fakeData from './../fakeData/data.json'

const Course = () => {
  const first5 = fakeData.slice(0, 5);
  const [subjects] = useState(first5);

    return (
        <div>
           <ul>
             {
               subjects.map(subject=> <li>{subject}</li> )
             }
           </ul>
        </div>
    );
};

export default Course;