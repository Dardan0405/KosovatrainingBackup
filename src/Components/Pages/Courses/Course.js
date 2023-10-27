import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
import "./style/Course.scss"
import { Recoamded1 } from "./data";
import { useSelector } from "react-redux";
import axios from "axios";


const RecomandedCourse = () => {
 const [courses, setCourses] = useState([]);
const language = useSelector ((state) => state.language.language);

const getApiLink = (language) =>{
  switch (language){
    case "en-GB":
      return "/Courses.json";

      case "sq-AL":
        return "/Courses-AL.json";
    
  }

};
const GetCourses = async () =>{
  const ApliLink = getApiLink (language)
  try{
    const response = await axios.get(ApliLink);
    setCourses(response.data)
  }
  catch (error){
    console.log("error");
  }
}
useEffect(()=>{
  GetCourses();
},[language])
    return (
      <div className="Recomaded-Coruse-Container">
        <h1>

          <span> <FormattedMessage id='Course2' defaultMessage="Courses" /></span>
        </h1>
  
        <div className="Tabs-Containers">
          {courses.map((i, index) => {
            return (
              <div key={index} className="col">
                <div className="inner-cotentRec">
                  <Link to="/">
                  <div className="Image-Rec">
                    <div className="image-containerRec" style={{ content: `url(${i.image})` }}></div>
                    <div className="Recomanded-Play">
                      <div className="Play-Rec" style={{ content: `url(${i.icon1})` }}></div>
                      <p>{i.textplay}</p>
                    </div>
                  </div>
  
                  <div className="Pargraph-monthsRec">
                    <p>{i.category}</p>
                    <div className="Circle-Recomanded">
                      <p>{i.months}</p>
                    </div>
                  </div>
                  <div className="Title-Recomanded">
                    <h4>{i.title}</h4>
                  </div>
                  <div className="StsrRev-Students">
                    <div className="Icon-Rec" style={{ content: `url(${i.icon})` }}></div>
                    <p>{i.review}</p>
                    <p className="Students-REC">{i.sutdents}</p>
                  </div>
                  <div className="Enrollnow-Rec">
                    <Link to={"/Apply"}>{i.link}</Link>
                  </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
  
        <div className="Link-RecomandedL">
          <Link>
            <FormattedMessage id="Load" defaultMessage="Load More" />
          </Link>
        </div>
      </div>
    );
        }
      
  export default RecomandedCourse