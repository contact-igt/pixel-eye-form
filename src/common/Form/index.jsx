import Image from "next/image";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
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

    onSubmit: async (values) => {
      console.log("form sumbited", values);
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      setLoading(true);
      try {
        const newFormData = {
          name: values?.name,
          mobile: values?.mobile,
          email: values?.email,
          ip_address: ipData.ip,
          utm_source: localStorage.getItem("utm_source"),
        };
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx2Nkvdx2yoBTSc3FqN4dju5uglKN2UdL8aRT5F5JNUdSGe5b3LqMN5ySRknV_JjSTd/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(newFormData).toString(),
          }
        );
        setLoading(false);
        window.location.href = "/thank-you";
        localStorage.setItem("isSubmited", true);
      } catch (err) {
        setLoading(false);
        // window.location.href = "/error";
      }
    },
  });

  useEffect(() => {
    localStorage.removeItem("isSubmited");
  }, []);

  return (
    <section className={styles.formpopup}>
      <form onSubmit={Formik.handleSubmit}>
        <div className={`${styles.brandlogo} d-flex justify-content-center`}>
          <Image
            src={"/assets/pixeyelogo.png"}
            width={140}
            height={60}
            objectFit="cover"
            alt="pixel-eye-logo"
          />
        </div>

        <div className={`${styles.formtitle} mt-2 mb-lg-3 mb-4 `}>
          <h4>Appointment Form</h4>
          <p>Provide your details to confirm your screening or consultation</p>
        </div>

        <div className={`${styles.inputSection}`}>
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

          <div
            className={`${styles.inputgrp} w-100 pt-md-3 pt-2 mb-2 position-relative `}
          >
            <button className={`${styles.sbtn} btn w-100`} type="submit">
              {loading ? "Booking..." : "BOOK NOW"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
