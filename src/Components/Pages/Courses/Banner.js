import { FormattedMessage } from "react-intl";
import "./style/Banner.scss"
const Banner =()=>{
    return(
<div className="Banner-Courses-Background">
    <h1><FormattedMessage id="OurCourses" defaultMessage="Our Courses"/></h1>
</div>
    )
}
export default Banner