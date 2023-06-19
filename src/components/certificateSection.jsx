import MOE from '../assets/img/MOE.jpg'
import CertificateGarudaEmas from '../assets/img/CertificateGarudaEmas.jpg'
import first from '../assets/img/1st.jpg'
export default function CertificateSection() {
    return(
        <div className="certificate-section">
            <div 
            id='certificates'
            className="certificates">
                <div 
                 data-aos="fade-up"
                 data-aos-duration="700"
                 data-aos-easing="ease-in-out"
                className="certificate-text-wrapper">
                <div className='title-project-head'>
                           <h2>MY CERTIFICATE</h2>
                            <br />
                            <p>
                                I achive this certificate in programming competition and official skills tests
                                </p>
                           </div>
                </div>
            <div className="certificate">
                <figure
                className='certificate-item'
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                >   
                    <img src={MOE} />
                    <figcaption>
                        <p>Medallion Of Excelence Certificate Lomba Kompetensi Siswa(LKS) National Level Category Web Technologies 2022</p>
                    </figcaption>
                </figure>
                <figure
                className='certificate-item'
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                >   
                    <img src={CertificateGarudaEmas} />
                    <figcaption>
                        <p>Garuda Emas Certificate by Badan Nasional Sertifikasi Profesi(BNSP)</p>
                    </figcaption>
                </figure>
                <figure
                className='certificate-item'
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
                >   
                    <img src={first} />
                    <figcaption>
                        <p>1st Place Lomba Kompetensi Siswa(LKS) Provincial Level Category Web Technologies Province Central Kalimantan 2022</p>
                    </figcaption>
                </figure>
            </div>
            </div>
        </div>
    )
}