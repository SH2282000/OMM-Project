import { Form } from "react-router-dom";
import TopBar from "./Header";
import './Dashboard.css'

export default function Dashboard() {
    const getRandomColor = () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    const infoCourse = {
        type:"Course",
        name: "IUI",
        details: <p>Streak<br/>35 Days</p>,
        color: getRandomColor(),
        favorite: true,
    };

    return (
        <>
            <TopBar />
            <h1>Welcome</h1>
            <div className="courses">
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
            </div>
        </>
    );
}

const getRandomColor = () => `rgba(${56 + Math.floor(Math.random() * 200)},
                                    ${56 + Math.floor(Math.random() * 200)},
                                    ${56 + Math.floor(Math.random() * 200)}, 0.4)`;

function CourseElement({ infoCourse }: any) {
    let favorite = infoCourse.favorite;
    const changeColorInterval = setInterval(ChangeColor, 2000)
    return (
        <Form method="post">
            <div className="course-cardboard"
                style={{backgroundColor: getRandomColor()}}
            >
                <h3>{infoCourse.type}</h3>
                <div className="title-details">
                    <h2 className="title">
                        {infoCourse.name}
                    </h2>
                    <div className="details">
                        {infoCourse.details}
                    </div>
                </div>
                <div className="button-controls">
                    <button
                        name="start"
                    >
                        Start Now
                    </button>
                    <button
                        name="favorite"
                        value={favorite ? "false" : "true"}
                        aria-label={
                            favorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                    >
                        {infoCourse.favorite ? "★" : "☆"}
                    </button>
                </div>
            </div>
        </Form>
    );
}

function ChangeColor() {
    const cardboardCollection = document.getElementsByClassName("course-cardboard")
    const carboards = Array.from(cardboardCollection) as HTMLElement[]
    carboards.forEach(carboard => {
        carboard.style.backgroundColor = getRandomColor()
    });
}

function ProgressElement() {

    return
}