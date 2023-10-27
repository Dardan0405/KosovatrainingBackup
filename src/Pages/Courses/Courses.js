import Navbar from "../../Components/Shared/NavBar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import Banner from "../../Components/Pages/Courses/Banner";
import RecomandedCourse from "../../Components/Pages/Courses/Course";

const CoursesPage =() =>{
    return(
        <div className="CoursesPage">
            <Navbar/>
            <Banner/>
              <RecomandedCourse/>
            <Footer/>
        </div>
    )
}
export default CoursesPage