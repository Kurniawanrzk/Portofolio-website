export default function Header() {
    const HeaderStyle = {
        width:"100%",
        height:"75px",
        position:"sticky",
        top:"0",
        backgroundColor:"white"
    }

    const UlStyle = {
        display:"flex",
        listStyleType:"none",
        columnGap:"20px",
    }
    return(
       <header
       style={HeaderStyle}
       >
            <nav>
                <ul 
                style={UlStyle}
                >
                    <li><a className="home" href="/">Home</a></li>
                    <li><a className="projectt" id="project-sec" href="#projects">Project</a></li>
                    <li><a className="certificatee" id="certificate-sec" href="#certificates">Certificate</a></li>
                    <li><a className="techh" id="tech-sec" href="#techs">Tech</a></li>
                    <li><button><a className="social" href="#social-section">Social</a></button></li>
                </ul>
            </nav>
       </header>
    )
}