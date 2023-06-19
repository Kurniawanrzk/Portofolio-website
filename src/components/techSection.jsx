import laravel from '../assets/img/laravel.svg'
import react from '../assets/img/react.svg'
import vscode from '../assets/img/vscode.svg'
import nodejs from '../assets/img/nodejs.svg'
import postman from '../assets/img/postman.svg'
import mysql from '../assets/img/mysql.svg'

export default function TechSection() {
    return(
        <div className="tech-section">
            <div
            id='techs'
            className="techs">
            <div 
                 data-aos="fade-up"
                 data-aos-duration="700"
                 data-aos-easing="ease-in-out"
                className="tech-text-wrapper">
                <div className='title-project-head'>
                           <h2>TECHNOLOGIES THAT I USE</h2>
                            <br />
                            <p>
                                Most of the skill that i have is learned by myself and some other i learn in school
                            </p>
                </div>
                </div>
                <div className="tech">
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={laravel} />
                    <figcaption>
                        <p>Laravel</p>
                    </figcaption>
                    </figure>
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={react} />
                    <figcaption>
                        <p>ReactJS</p>
                    </figcaption>
                    </figure>
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={vscode} />
                    <figcaption>
                        <p>VsCode</p>
                    </figcaption>
                    </figure>
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={nodejs} />
                    <figcaption>
                        <p>NodeJS</p>
                    </figcaption>
                    </figure>
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={postman} />
                    <figcaption>
                        <p>Postman</p>
                    </figcaption>
                    </figure>
                    <figure
                    className='tech-item'
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-easing="ease-in-out"
                    >
                    <img src={mysql} />
                    <figcaption>
                        <p>MySQL</p>
                    </figcaption>
                    </figure>
                </div>

            </div>
        </div>
    )
}