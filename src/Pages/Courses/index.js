import React,{lazy,Suspense} from "react";
import Loading from "../../Components/Shared/Loading/Loading";
const Lazyloaded = lazy (()=> import('./Courses'));

function Course() {
    return(
        <Suspense fallback={<Loading/>}>
            <Lazyloaded/>
        </Suspense>
    )
};
export default Course