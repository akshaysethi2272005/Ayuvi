import React from "react";
import { Link } from "react-router-dom";
const Intro = () => {
    return (
        <div className="main-stack-information">
            <div className="msis">
                <div className="cfg">
                    <img src={require("./owner.png")} alt="owner" className="owner-img bal-cont"/>
                </div>
                <div className="cfg cfd">
                    <p className="text-own bal-cont" style={{fontWeight:"bold"}} id="kji">Health cannot be achieved by focusing only on body. We have to work on Mind, body and soul together to cherish the best gift given to us by God which is Health. HealthwithMindfulness is a program designed by Ms. Ashu Bhateja who is having an awesome experience of 10 years in teaching related to fitness, meditation and dance. she is also having a relevant teaching experience in Gurgaon based international school 'Scottish High International' and 'DAV schools, Delhi' We offer Fitness training , Mindful sessions and Mindful Activity sessions for kids( only for Kids and Female)</p>
                    <div className="Bysss">
                        <Link className="btnsty uyi" style={{textDecoration:"none"}} to="/booksession">Book Your 1st Trial Session</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Intro;
