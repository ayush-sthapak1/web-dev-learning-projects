import { Link } from "react-router-dom";
import courses from "../data/courses";

function Courses() {
    
    return (
        <>

            {courses.map(course => (
                <div key={course.id}>
                <hr />
                <p>{course.title}</p>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <Link
                    
                    to={`/courses/${course.id}`}
                >
                    View Course
                </Link>
                </div>
            ))}
            
        </>
    );
}

export default Courses;