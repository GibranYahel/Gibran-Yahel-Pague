import css from './Education.module.css'

export const Education = () => {
    return(
        <div className={css.EducationContainer}>
            <div className={css.sectionOne} >
                <div className={css.Images} >
                    <img src="src/images/Technologie_JavaScript.png" alt="" />
                    <img src="src/images/Technologie_HTML.png" alt="" />
                    <img src="src/images/Technologie_CSS.png" alt="" />
                    <img src="src/images/Technologie_AWS.png" alt="" />
                    <img src="src/images/Technologie_React.png" alt="" />
                    <img src="src/images/Technologie_Node.png" alt="" />
                    <img src="src/images/Technologie_Docker.png" alt="" />
                    <img src="src/images/Technologie_Postgress.png" alt="" />
                </div>
                <div className={css.Experience}>
                    <div className={css.ExperienceTop}>
                        <span>07/2021 - 05/2023</span>
                        <h1>Professional Education</h1>
                        <span><strong>Full-Stack Develoer </strong>{'(Autodidact) / '} Web developmen - Platzi, Udemy</span>
                        <ul>
                            <li>Methodology of 3-Steps.</li>
                            <li>strong experience in developing interesting websites.</li>
                            <li>Design client-side and server-side architecture.</li>
                            <li>Excellence in clean code.</li>
                            <li>Build the front-end of applications through intuitive visual design</li>
                            <li>Develop and manage well-functioning databases and applications</li>
                            <li>Test software to ensure responsiveness, scalability, and efficiency</li>
                        </ul>
                    </div>
                    <div className={css.ExperienceBot}>
                        <h1>Aptitudes</h1>
                        <ul>
                            <li>Taste for teamwork.</li>
                            <li>Constant training.</li>
                            <li>Organization at work.</li>
                            <li>Sense of urgency.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={css.sectionTwo} >
                <div className={css.imageDGETI}>
                    <img src="src/images/DGETI_logo.png" alt="" />
                </div>
                <div className={css.infoDGETI}>
                    <h1>Dirección General de Educación Tecnológica Industrial</h1>
                    <span><strong>Professional License </strong>{'(Student) / '} Electronics Technician - Technology, Robots</span>
                    <ul>
                        <li>Microcontrollers programming.</li>
                        <li>Design, development, evaluation, testing and installation of robots.</li>
                        <li>Implemented predictive maintenance programs.</li>
                        <li>Operational and corrective functional support.</li>
                        <li>Device support and maintenance.</li>
                        <li>Software design.</li>
                        <li>Sntegrated electronic circuits.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}