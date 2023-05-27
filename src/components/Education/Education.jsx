import css from './Education.module.css'

export const Education = () => {
    return(
        <div className={css.EducationContainer}>
            <div className={css.sectionOne} >
                <div className={css.Images} >
                    <img src="src/images/Technologie_JavaScript.png" alt="" />
                    <img src="src/images/Technologie_HTML.png" alt="" />
                    <img src="src/images/Technologie_CSS.png" alt="" />
                    <img src="src/images/Technologie_WebPack.png" alt="" />
                    <img src="src/images/Technologie_React.png" alt="" />
                    <img src="src/images/Technologie_Node.png" alt="" />
                    <img src="src/images/Technologie_Docker.png" alt="" />
                </div>
                <div className={css.Experience}>
                    <div className={css.ExperienceTop}>
                        <span>07/2021 - 09/2023</span>

                        <h1>Professional Education</h1>
                        <span><strong>Full-Stack Develoer </strong>{'(Autodidact) / '} Desarrollo web - Platzi, Udemy</span>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                        </ul>
                    </div>
                    <div className={css.ExperienceBot}>

                    </div>
                </div>
            </div>
            <div className={css.sectionTwo} >

            </div>
            <div className={css.sectionThree} >

            </div>
        </div>
    )
}