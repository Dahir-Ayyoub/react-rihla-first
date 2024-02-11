import React, { Component } from "react";
import "./rec.css";

export default class Rec2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          imgSrc: "../../images/IMG6.jpg",
          title: "UM6P",
          university: "Université Mohammed VI Polytechnique",
          location: "Benguerir",
          date: "2023-05-12",
        },
        {
          imgSrc: "../../images/IMG6.jpg",
          title: "UM6P",
          university: "Université Mohammed VI Polytechnique",
          location: "Benguerir",
          date: "2023-05-12",
        },
        {
          imgSrc: "../../images/IMG6.jpg",
          title: "UM6P",
          university: "Université Mohammed VI Polytechnique",
          location: "Benguerir",
          date: "2023-05-12",
        },
        {
          imgSrc: "../../images/IMG6.jpg",
          title: "UM6P",
          university: "Université Mohammed VI Polytechnique",
          location: "Benguerir",
          date: "2023-05-12",
        },
        // more data
      ],
    };
  }

  render() {
    return (
      <>
        <div>
        <div className="container-fluid ">
                <div className="my-3 mt-3">
                    <h2 className="line-title mr-3 mb-2"><b>RECOMMENDATIONS</b>   </h2>
                    </div>
            </div>
          {this.state.data.map((item, index) => (
            <div key={index} className="carte">
              <div className="carte-left">
                <img src={item.imgSrc} alt="Image" />
              </div>
              <div className="carte-right">
                <h3>{item.title}</h3>
                <p>{item.university}</p>
                <p>{item.location}</p>
                <p>{item.date}</p>
                <button className="button-17" role="button">
                <i class='bx bx-bookmark'></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </>
    );
  }
}
