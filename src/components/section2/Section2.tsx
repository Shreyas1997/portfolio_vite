import AboutMe from "./AboutMe";
import './Section2.css';

function Section2(){
    return(
        <div className = "section-2-main">
            <div className = "water-mark">
                <h1>About Me...</h1>
            </div>
            <div className = "about-me-content-container">
                <AboutMe/>
            </div>
        </div>
    );
}

function experience(){
    let totalExperience = "";
    let df = new Date("01/01/2020");
    let dt = new Date();
    let startMonth = df.getFullYear() * 12 + df.getMonth();
    let endMonth = dt.getFullYear() * 12 + dt.getMonth();
    let monthInterval = (endMonth - startMonth);

    let yearsOfExperience = Math.floor(monthInterval / 12);
    let monthsOfExperience = monthInterval % 12;
    totalExperience = yearsOfExperience+ "." +monthsOfExperience;
    return totalExperience;
}

export default Section2;