import Form from "@/common/Form";
import styles from "./styles.module.css";

const OverlayForm = () => {
  return (
    <section className={`d-flex position-absolute justify-content-center ${styles.overlayform}`}>
      <Form />
    </section>
  );
};

export default OverlayForm;
