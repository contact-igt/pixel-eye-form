import Image from "next/image";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, User } from "lucide-react";

const Form = () => {
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().matches(/^[A-Za-z\s']+$/, "Enter valid name"),
      email: Yup.string().required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
    }),

    onSubmit: (values) => {
      console.log("form sumbited", values);
    },
  });

  return (
    <section className={styles.formpopup}>
      <form onSubmit={Formik.handleSubmit}>
        <div className={`${styles.brandlogo} d-flex justify-content-center`}>
          <Image
            src={"/assets/pixel_logo.png"}
            width={180}
            height={90}
            objectFit="cover"
            alt="pixel-eye-logo"
          />
        </div>

        <div className={`${styles.inputSection} mt-3`}>
          <div className={styles.inputgrp}>
            <label for="name">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter full name"
              {...Formik.getFieldProps("name")}
            />
            {Formik.touched.name && Formik.errors.name ? (
              <small className="text-danger">{Formik.errors.name}</small>
            ) : (
              ""
            )}
            <div className={`${styles.inputicon} position-absolute `}>
              <User color="#0e426a" size={18} />
            </div>
          </div>

          <div className={styles.inputgrp}>
            <label for="exampleInputEmail1">Mobile Number *</label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              {...Formik.getFieldProps("mobile")}
            />
            {Formik.touched.mobile && Formik.errors.mobile ? (
              <small className="text-danger">{Formik.errors.mobile}</small>
            ) : (
              ""
            )}
            <div className={`${styles.inputicon} position-absolute `}>
              <Phone color="#0e426a" size={18} />
            </div>
          </div>

          <div className={styles.inputgrp}>
            <label for="Email">Email Address *</label>
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="Enter email address"
              {...Formik.getFieldProps("email")}
            />
            {Formik.touched.email && Formik.errors.email ? (
              <small className="text-danger">{Formik.errors.email}</small>
            ) : (
              ""
            )}
            <div className={`${styles.inputicon} position-absolute `}>
              <Mail color="#0e426a" size={18} />
            </div>
          </div>

          <div className={`${styles.inputgrp} w-100 pt-3 mb-2`}>
            <button className={`${styles.sbtn} btn w-100`} type="submit">
              BOOK NOW
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
