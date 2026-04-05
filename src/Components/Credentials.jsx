import React from 'react'
import "./Credentials.css"

const Credentials = () => {
  return (
    <section id="Credentials">
        <div class="credentials-heading">
            My Credentials
        </div>
        <div class="credentials-content">
            <div class="credentials-content-left">
                <div class="credentials-info">
                    <div class="credentials-firm">
                        BS Software Engineering
                    </div>
                    <div class="credentials-duration">
                        Ongoing
                    </div>
                </div>

                <div class="credentials-info">
                    <div class="credentials-firm">
                        Meta Front-End Deveper Course
                    </div>
                    <div class="credentials-duration">
                        <a href="https://coursera.org/verify/U1YRYXB4KEF9" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>

                <div class="credentials-info">
                    <div class="credentials-firm">
                        Front End Development Internship
                    </div>
                    <div class="credentials-duration">
                        <a href="https://drive.google.com/file/d/10BE-ZcQB-ppqxLY2xdfxru9RUfZjcKHI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>

            <div class="credentials-mid-line">

            </div>

            <div class="credentials-content-right">
                <div class="credentials-position-info">
                    <div class="credentials-position position-1">
                        International Islamic University Islamabad
                    </div>
                    <div class="credentials-description">
                        I’m currently a Software Engineering student, developing a solid foundation in programming and software development. My academic journey is focused on building practical skills and understanding how to create real-world solutions.
                    </div>
                </div>

                <div class="credentials-position-info">
                    <div class="credentials-position position-2">
                        Coursera
                    </div>
                    <div class="credentials-description">
                        I completed the Meta Front-End Developer course, focusing on building modern and responsive web interfaces. It helped me strengthen my skills in HTML, CSS, JavaScript and React from basics to advanced concepts.
                    </div>
                </div>

                <div class="credentials-position-info">
                    <div class="credentials-position position-3">
                        DeveloperHub.Co
                    </div>
                    <div class="credentials-description">
                        I completed a Front End Development Internship, where I gained hands-on experience in building responsive and user-friendly web applications. It allowed me to apply my knowledge in a real-world setting and further develop my technical skills.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Credentials
