import React from "react";
import ApplyPage from "./Apply";
import "./style/Maain.scss"
import Code from "../../../assets/Code.webp"
import { FormattedMessage } from "react-intl";
const Main =() =>{
    return(
        <div className="form-container">
            <ApplyPage/>
            <div className="Image">
                <h1><FormattedMessage id="LearnFrom" defaultMessage="Learn from best industry experts"/></h1>
                <div className="Image-container" style={{content: `url(${Code})`}}>

                </div>
            </div>
        </div>
    )
}
export default Main