import React, { useState } from "react";
import Button from "../Tasks/Button";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 1000));

    alert(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`
    );
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    alert("Form cancelled!");
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "" });
    alert("Form reset!");
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Contact Form</h3>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter Your Phone Number"
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="button-group">
          <Button
            label={isSubmitting ? "Submitting..." : "Submit"}
            className="form-button submit-button"
            onClick={handleSubmit}
            type="submit"
            disabled={isSubmitting}
          />
          <Button
            label="Cancel"
            className="form-button cancel-button"
            onClick={handleCancel}
            type="button"
            disabled={isSubmitting}
          />
          <Button
            label="Reset"
            className="form-button reset-button"
            onClick={handleReset}
            type="button"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
