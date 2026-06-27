import { useParams } from "react-router-dom"
import courses from "../data/courses"

function CourseDetails(){
    const {id} = useParams()
    const course = courses.find(course => {return course.id === id;});
    if(!course) return <h1>course not found </h1>
    return <div>
        <p>Title: {course.title}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
    </div>
}

export default CourseDetails