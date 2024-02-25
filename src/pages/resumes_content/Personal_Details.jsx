import React, { useState } from "react";

function Personal_Details() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{ width: "50%", padding: "20px", borderRight: "1px solid #ccc" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ marginRight: "10px" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ marginRight: "10px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="phone" style={{ marginRight: "10px" }}>
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="address" style={{ marginRight: "10px" }}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
      </div>
      <div style={{ width: "50%", padding: "20px" }}>
        <h2>Preview</h2>
        <div>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Personal_Details