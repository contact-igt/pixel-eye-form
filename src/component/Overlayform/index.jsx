import Form from "@/common/Form";
import styles from "./styles.module.css";

const OverlayForm = () => {
  return (
    <section className={`d-flex flex-column position-absolute justify-content-center align-items-center ${styles.overlayform}`}>
      <h3>Welcome to Pixel Eye Hospitals!</h3>
      <Form />
    </section>
  );
};

export default OverlayForm;
