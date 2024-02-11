import './Section2.css';

function AboutMe(){
    return (
        <p>
            Welcome to my portfolio,
            <br/>
            I live in Udupi.
            <br/>
            I'm a <strong>Software</strong> engineer and <strong>Creative Enthusiast</strong> practicing 3D simulations and Illustrations.
            I come with {experience()} years of experience in full stack development and still practicing as <em>"learning never stops"</em>.
            My works in development are based on <em>NodeJS, Angular, MongoDB, Flutter, Firebase etc</em> and currently practicing <em>ReactJS</em>, creative works are based on <em>Blender 3D, Adobe Illustator Draw</em>.
        </p>
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

export default AboutMe;