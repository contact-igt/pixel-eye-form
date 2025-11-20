import styles from "./styles.module.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Thankyou = () => {

    return (
        <section className={`${styles.container} d-flex justify-content-center align-items-center flex-column`}>
            <Image src="/assets/check.png" alt="Appointment confirmed" width={120} height={120} className={styles.image} />
            <h1 className={`${styles.title} mt-3 fw-bold`}>Thank You for Booking Your Appointment!</h1>
            <p> We’ve received your appointment request. Our team 
                will contact you shortly to confirm your visit.</p>

            <div className={`${styles.videoContainer} mt-4`}>
                <iframe
                    src="https://www.youtube.com/embed/DJXRQDws02I"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={styles.card}>
                <h4 className="fs-6">Next Step</h4>
                <ul>
                    <li>
                        Our team will call or message you within 24 hours.
                    </li>
                    <li>Please bring any previous eye reports or prescriptions during your visit.</li>
                </ul>
            </div>
            {/* <div className="mt-4">
                <Button href="https://www.pixeleyehospitals.com/"
               isbtn3={true} name="Back to Home" bgcolor="#cf873d" txtcolor="#fff" isicon={true} icon={"arrow-right"} iconcolor={"#fff"} />
            </div> */}
            <div className={styles.buttonContainer}>
                <a href="https://www.pixeleyehospitals.com/" className={styles.button}>Back to Home <ArrowRight size={20}/></a>
            </div>
        </section>
    );
};

export default Thankyou;