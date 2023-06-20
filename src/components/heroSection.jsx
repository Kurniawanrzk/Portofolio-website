
export default function HeroSection() {
    const ForHeading = {
        fontWeight:"bold",
        fontSize:"60px"
    }

    const ForLead = {
        fontWeight:"lighter",
        fontSize:"30px"
    }

    const HeroSectionBtn = {
        width:"200px",
        height:"40px",
        fontSize:"larger",
        marginTop:"10px",
        cursor:"pointer",
        borderRadius:"5px",
        border:"none"
    }
    return(
        <div 
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="hero-section">
            <div>
                <h1 
                style={ForHeading}>
                    Kurniawan Rizki Trinanta<br /> Sembiring</h1>
                <p style={ForLead}>Coding Enthusisat, Web Developer, Competitive programming</p>
                <a href="#projects"><button style={HeroSectionBtn}>Click For More</button></a>
            </div>
        </div>
    )
}