import React from 'react';
import './recommendation.css'
class Recommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          link: "#",
          imgSrc: "../images/IMG6.jpg",
          imgAlt: "UM6P",
          title: "UM6P",
          location: "Benguerir"
        },
        {
          link: "#",
          imgSrc: "./images/IMG6.jpg",
          imgAlt: "BTS",
          title: "BTS",
          location: "Casablanca"
        },
        {
            link: "#",
            imgSrc: "./images/IMG6.jpg",
            imgAlt: "ENS",
            title: "ENS",
            location: "Marrakech"
          },
          ,
        {
            link: "#",
            imgSrc: "./images/IMG6.jpg",
            imgAlt: "ENCG",
            title: "ENCG",
            location: "Settate"
          },
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="d-flex justify-content-between mt-3">
          <h2 className="line-title"><b>Recommendation</b>   </h2>
          <span className='see-more'>See more</span>
        </div>
        {this.state.data.map((item, index) => (
          <a href={item.link} className="text-dark" key={index}>
            <div className="card mb-3 border-1 shadow my-2  w-100">
              <div className="row g-0">
                <div className="col-4">
                  <img src={item.imgSrc} alt={item.imgAlt} className="img-fluid rounded-start image" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h1 className="card-title">{item.title}</h1>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{item.location}</span>
                      <div className="d-flex gap-2">
                        <i className="fa-regular fa-bookmark fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default Recommendation;
