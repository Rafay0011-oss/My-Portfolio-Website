import React from 'react'
import "./Experience.css"

const Experience = () => {
  return (
    <section id="Experience">
        <div class="experience-heading">
            My Credentials
        </div>
        <div class="experience-content">
            <div class="experience-content-left">
                <div class="experience-info">
                    <div class="experience-firm">
                        BS Software Engineering
                    </div>
                    <div class="experience-duration">
                        Ongoing
                    </div>
                </div>

                <div class="experience-info">
                    <div class="experience-firm">
                        Meta Front-End Deveper Course
                    </div>
                    <div class="experience-duration">
                        <a href="https://coursera.org/verify/U1YRYXB4KEF9" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>

                <div class="experience-info">
                    <div class="experience-firm">
                        Adobe Graphic Designer Course
                    </div>
                    <div class="experience-duration">
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/7J0FDQMN2MCG" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>

            <div class="experience-mid-line">

            </div>

            <div class="experience-content-right">
                <div class="experience-position-info">
                    <div class="experience-position position-1">
                        International Islamic University Islamabad
                    </div>
                    <div class="experience-description">
                        I’m currently a Software Engineering student, developing a solid foundation in programming and software development. My academic journey is focused on building practical skills and understanding how to create real-world solutions.
                    </div>
                </div>

                <div class="experience-position-info">
                    <div class="experience-position position-2">
                        Coursera
                    </div>
                    <div class="experience-description">
                        I completed the Meta Front-End Developer course, focusing on building modern and responsive web interfaces. It helped me strengthen my skills in HTML, CSS, JavaScript and React from basics to advanced concepts.
                    </div>
                </div>

                <div class="experience-position-info">
                    <div class="experience-position position-3">
                        Coursera
                    </div>
                    <div class="experience-description">
                        I completed an Adobe Graphic Design course, focusing on creating visually appealing and professional designs. It strengthened my skills in tools like Photoshop and Illustrator, along with design fundamentals.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
