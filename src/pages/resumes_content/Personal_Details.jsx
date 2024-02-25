import React from "react";

const Personal_Details = () => {
  const generateCV = () => {
    // Your generateCV function logic here
  };

  const previewImage = () => {
    // Your previewImage function logic here
  };

  return (
    <>
      <nav className="navbar bg-white">
        <div className="container">
          <div className="navbar-content">
            <div className="brand-and-toggler">
              <a href="index.html" className="navbar-brand">
                <img
                  src="assets/images/curriculum-vitae.png"
                  alt=""
                  className="navbar-brand-icon"
                />
                <span className="navbar-brand-text">
                  build <span>resume.</span>
                </span>
              </a>
              <button type="button" className="navbar-toggler-btn">
                <div className="bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about-sc">
        <div className="container">
          <div className="about-cnt">
            <form action="" className="cv-form" id="cv-form">
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>about section</h3>
                </div>
                <div className="cv-form-row cv-form-row-about">
                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        First Name
                      </label>
                      <input
                        name="firstname"
                        type="text"
                        className="form-control firstname"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. John"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Middle Name <span className="opt-text">(optional)</span>
                      </label>
                      <input
                        name="middlename"
                        type="text"
                        className="form-control middlename"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. Herbert"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Last Name
                      </label>
                      <input
                        name="lastname"
                        type="text"
                        className="form-control lastname"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. Doe"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Your Image
                      </label>
                      <input
                        name="image"
                        type="file"
                        className="form-control image"
                        id=""
                        accept="image/*"
                        onChange={previewImage}
                      />
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Designation
                      </label>
                      <input
                        name="designation"
                        type="text"
                        className="form-control designation"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. Sr.Accountants"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="form-control address"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. Lake Street-23"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control email"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. johndoe@gmail.com"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Phone No:
                      </label>
                      <input
                        name="phoneno"
                        type="text"
                        className="form-control phoneno"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. 456-768-798, 567.654.002"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Summary
                      </label>
                      <input
                        name="summary"
                        type="text"
                        className="form-control summary"
                        id=""
                        onKeyUp={generateCV}
                        placeholder="e.g. Doe"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add other form blocks for achievements, experience, education, projects, and skills */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal_Details;
