import React, { useState } from "react"
import { Link } from "react-router-dom";

function Student(){
    const [data] = useState([
        {
            Name: "John",
            Age: 25,
            Course: "MERN",
            Batch: "October",
            Change: "Edit"
        },
        {
            Name: "Doe",
            Age: 22,
            Course: "MERN",
            Batch: "January",
            Change: "Edit" 
        },
        {
            Name: "Biden",
            Age: 26,
            Course: "MERN",
            Batch: "November",
            Change: "Edit"
        },
        {
            Name: "Mathew",
            Age: 25,
            Course: "MERN",
            Batch: "March",
            Change: "Edit"
        },
        {
            Name: "Christ",
            Age: 24,
            Course: "MERN",
            Batch: "March",
            Change: "Edit"
        },
        {
            Name: "Elina",
            Age: 23,
            Course: "MERN",
            Batch: "September",
            Change: "Edit"
        },
        {
            Name: "Sharma",
            Age: 24,
            Course: "MERN",
            Batch: "October",
            Change: "Edit"
        },
        {
            Name: "Sheethal",
            Age: 26,
            Course: "MERN",
            Batch: "December",
            Change: "Edit"
        }
    ])
    return(
        <div className="student">
            <h1>Students Details</h1>
            <button><Link id="stu_btn">Add new student</Link></button>
            <table id="table">
                <tr>
                    <th id="col1">Name</th>
                    <th id="col2">Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
                {data.map((item, index) =>{
                    return(
                        <tr key={index}>
                            <td id="col1">{item.Name}</td>
                            <td id="col2">{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td><Link>{item.Change}</Link></td>
                        </tr>
                    )
                })}
                
            </table>
        </div>
    )
}
export default Student;