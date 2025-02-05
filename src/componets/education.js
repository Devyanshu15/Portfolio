import React from "react";

function Education() {
  return (
    <secton>
      <div className="education-page">
        <center>
          <h2 className="titele-text">
           
            <span>My </span>Education
          </h2>
        </center>

        <div className="box--container">
          <div className="box-1">
            <div className="e-box">
              <i class="fas fa-graduation-cap"></i>
              <span>2023-2025</span>
              <h3>MOHANLAL Sukhadia University (MCA)</h3>
              <p>Udaipur,Rajasthan india</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2020-2023</span>
              <h3>MOHANLAL SUKHADIYA UNIVERSITY  (BCA)</h3>
              <p>Udaipur,Rajasthan india</p>
            </div>
          </div>

          <div className="box-1">
            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2019-2020</span>
              <h3>Railway Sr Sec School (12th)</h3>
              <p> Aburoad Rajasthan</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2017-2018</span>
              <h3>ST Anselem's Sr Sec School  (10th)</h3>
              <p> Aburoad Rajasthan</p>

            </div>
          </div>
        </div>
      </div>
    </secton>
  );
}

export default Education;
