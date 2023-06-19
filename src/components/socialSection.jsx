import gh from '../assets/img/git.svg'
import ig from '../assets/img/ig.svg'
import twt from '../assets/img/twt.svg'
import stack from '../assets/img/stack.svg'

export default function SocialSection() {
    return(
        <div 
        id="social-section"
        className="social-section">
                <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                className="title-social">
                    <h1>My Social</h1>
                </div>

        <div className="socials">
                <a
                 data-aos="fade-up"
                 data-aos-duration="700"
                 data-aos-easing="ease-in-out"
                 href='https://github.com/kurniawanrzk'
                 ><img src={gh} width={"100"} alt='github-social' />
                </a>
                <a
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                href='https://www.instagram.com/nesccaafe/'><img src={ig} width={"100"}  alt='ig-social' /></a>
                <a
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
                href='https://twitter.com/Sukurdk'
                ><img src={twt} width={"100"} alt='twt-social' /></a>
                <a
                 href='https://stackoverflow.com/users/18394558/kurniawanrizky'
                 data-aos="fade-up"
                 data-aos-duration="1300"
                 data-aos-easing="ease-in-out"
                ><img src={stack} width={"100"} alt='stack-social' /></a>
        </div>
        </div>
    )
}