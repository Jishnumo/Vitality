import React, { useState } from "react";
import styled from "styled-components";

import Template01 from "./Template01";
import Layout from "../../components/Layout";

function UserDetailsForm() {
  const [userData, setUserData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const generateCV = () => {
    const formData = new FormData(document.getElementById("cv-form"));
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setUserData(data);
  };

  // previewImage
  function previewImage() {
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function (ofEvent) {
      imageDsp.src = ofEvent.target.result;
    };
  }

  const handleAddRow = (event) => {
    const repeaterContainer = event.target.parentElement.querySelector(
      "[data-repeater-list]"
    );
    const repeaterItem = repeaterContainer.querySelector(
      "[data-repeater-item]"
    );
    const clone = repeaterItem.cloneNode(true);
    repeaterContainer.appendChild(clone);
  };

  const handleRemoveRow = (event) => {
    const repeaterItem = event.target.closest("[data-repeater-item]");
    const repeaterContainer = repeaterItem.parentElement;
    if (repeaterContainer.children.length > 1) {
      repeaterContainer.removeChild(repeaterItem);
    }
  };

  return (
    <Layout>
      <Container>
        <section id="about-sc" className="">
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
                          Middle Name{" "}
                          <span className="opt-text">(optional)</span>
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

                <div className="cv-form-blk">
                  <div className="cv-form-row-title">
                    <h3>achievements</h3>
                  </div>

                  <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-a">
                      <div data-repeater-item>
                        <div className="cv-form-row cv-form-row-achievement">
                          <div className="cols-2">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Title
                              </label>
                              <input
                                name="achieve_title"
                                type="text"
                                className="form-control achieve_title"
                                id=""
                                onKeyUp={generateCV}
                                placeholder="e.g. johndoe@gmail.com"
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Description
                              </label>
                              <input
                                name="achieve_description"
                                type="text"
                                className="form-control achieve_description"
                                id=""
                                onKeyUp={generateCV}
                                placeholder="e.g. johndoe@gmail.com"
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>
                          <button
                            type="button"
                            data-repeater-delete
                            className="repeater-remove-btn"
                            onClick={handleRemoveRow}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-repeater-create
                      value="Add"
                      className="repeater-add-btn"
                      onClick={handleAddRow}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cv-form-blk">
                  <div className="cv-form-row-title">
                    <h3>experience</h3>
                  </div>

                  <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-b">
                      <div data-repeater-item>
                        <div className="cv-form-row cv-form-row-experience">
                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Title
                              </label>
                              <input
                                name="exp_title"
                                type="text"
                                className="form-control exp_title"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Company / Organization
                              </label>
                              <input
                                name="exp_organization"
                                type="text"
                                className="form-control exp_organization"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Location
                              </label>
                              <input
                                name="exp_location"
                                type="text"
                                className="form-control exp_location"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>

                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Start Date
                              </label>
                              <input
                                name="exp_start_date"
                                type="date"
                                className="form-control exp_start_date"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                End Date
                              </label>
                              <input
                                name="exp_end_date"
                                type="date"
                                className="form-control exp_end_date"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Description
                              </label>
                              <input
                                name="exp_description"
                                type="text"
                                className="form-control exp_description"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>

                          <button
                            type="button"
                            data-repeater-delete
                            className="repeater-remove-btn"
                            onClick={handleRemoveRow}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-repeater-create
                      value="Add"
                      className="repeater-add-btn"
                      onClick={handleAddRow}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cv-form-blk">
                  <div className="cv-form-row-title">
                    <h3>education</h3>
                  </div>

                  <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-c">
                      <div data-repeater-item>
                        <div className="cv-form-row cv-form-row-experience">
                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                School
                              </label>
                              <input
                                name="edu_school"
                                type="text"
                                className="form-control edu_school"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Degree
                              </label>
                              <input
                                name="edu_degree"
                                type="text"
                                className="form-control edu_degree"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                City
                              </label>
                              <input
                                name="edu_city"
                                type="text"
                                className="form-control edu_city"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>

                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Start Date
                              </label>
                              <input
                                name="edu_start_date"
                                type="date"
                                className="form-control edu_start_date"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                End Date
                              </label>
                              <input
                                name="edu_graduation_date"
                                type="date"
                                className="form-control edu_graduation_date"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Description
                              </label>
                              <input
                                name="edu_description"
                                type="text"
                                className="form-control edu_description"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>

                          <button
                            type="button"
                            data-repeater-delete
                            className="repeater-remove-btn"
                            onClick={handleRemoveRow}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-repeater-create
                      value="Add"
                      className="repeater-add-btn"
                      onClick={handleAddRow}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cv-form-blk">
                  <div className="cv-form-row-title">
                    <h3>projects</h3>
                  </div>

                  <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-d">
                      <div data-repeater-item>
                        <div className="cv-form-row cv-form-row-experience">
                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Project Name
                              </label>
                              <input
                                name="proj_title"
                                type="text"
                                className="form-control proj_title"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Project link
                              </label>
                              <input
                                name="proj_link"
                                type="text"
                                className="form-control proj_link"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Description
                              </label>
                              <input
                                name="proj_description"
                                type="text"
                                className="form-control proj_description"
                                id=""
                                onKeyUp={generateCV}
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>
                          <button
                            type="button"
                            data-repeater-delete
                            className="repeater-remove-btn"
                            onClick={handleRemoveRow}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-repeater-create
                      value="Add"
                      className="repeater-add-btn"
                      onClick={handleAddRow}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cv-form-blk">
                  <div className="cv-form-row-title">
                    <h3>skills</h3>
                  </div>

                  <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-e">
                      <div data-repeater-item>
                        <div className="cv-form-row cv-form-row-skills">
                          <div className="form-elem">
                            <label htmlFor="" className="form-label">
                              Skill
                            </label>
                            <input
                              name="skill"
                              type="text"
                              className="form-control skill"
                              id=""
                              onKeyUp={generateCV}
                            />
                            <span className="form-text"></span>
                          </div>

                          <button
                            type="button"
                            data-repeater-delete
                            className="repeater-remove-btn"
                            onClick={handleRemoveRow}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-repeater-create
                      value="Add"
                      className="repeater-add-btn"
                      onClick={handleAddRow}
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Button to toggle the popup */}
        <button type="preview" onClick={togglePopup}>
          Preview CV
        </button>

        {/* Popup to display the resume template */}
        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={togglePopup}>
                Close
              </button>
              {/* Pass userData as props to the resume template */}
              <Template01 userData={userData} />
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default UserDetailsForm;

const Container = styled.div`

.preview{

  margin-bottom: 40px;

}
  /* bars button */
  .bars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 16.5px;
    width: 25px;
  }
  .bars .bar {
    width: 100%;
    height: 2px;
    background-color: var(--clr-blue);
    transition: var(--transition);
  }

  .bars:hover .bar {
    background-color: var(--clr-dark);
  }

  /* buttons */
  .btn {
    font-size: 14.5px;
    font-weight: 600;
    padding: 1.4rem 1.6rem;
    border-radius: 4px;
    display: inline-block;
  }

  .btn-primary {
    background-color: var(--clr-blue);
    color: var(--clr-white);
    border: 1px solid var(--clr-blue);
    transition: var(--transition);
  }

  .btn-primary:hover {
    background-color: transparent;
    color: var(--clr-dark);
    border-color: var(--clr-grey);
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--clr-dark);
    border: 1px solid var(--clr-grey);
    transition: var(--transition);
  }

  .btn-secondary:hover {
    background-color: var(--clr-blue);
    color: var(--clr-white);
    border-color: var(--clr-blue);
  }

  .btn-group button:first-child,
  .btn-group a:first-child {
    margin-right: 1rem !important;
  }

  /* navbar part */
  .navbar {
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 8px;
  }

  .navbar .container {
    width: 100%;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.8rem;
  }
  .navbar-brand-text {
    color: var(--clr-dark);
    font-weight: 600;
  }
  .navbar-brand-text span {
    color: var(--clr-blue);
  }
  .navbar-brand-icon {
    width: 25px;
    margin-right: 6px;
    opacity: 0.8;
  }
  .brand-and-toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header-content {
    max-width: 740px;
    margin-right: auto;
    margin-left: auto;
  }
  .header-content img {
    max-width: 760px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 3.2rem;
  }
  .lg-title {
    margin: 1.4rem 0;
    font-size: 37px;
    line-height: 1.4;
    color: var(--clr-dark);
  }
  .header-content p {
    margin-bottom: 2.6rem;
    line-height: 1.6;
  }

  /* section one */
  .section-one {
    padding: 64px 0;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .section-one-l img {
    max-width: 545px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-one-r {
    margin-top: 4rem;
  }

  .section-one .btn-group {
    margin-top: 2rem;
  }
  .section-one-r {
    max-width: 545px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-one-r .btn-group {
    margin-top: 3rem;
  }

  /* section two */
  .section-two {
    padding: 64px 0;
  }
  .section-two .section-items {
    display: grid;
    gap: 2rem;
  }

  .section-two .section-item {
    max-width: 350px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }
  .section-two .section-item-icon {
    margin: 1rem 0;
  }
  .section-two .section-item-icon img {
    width: 80px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-two .section-item-title {
    color: var(--clr-blue-dark);
    font-size: 1.8rem;
    font-weight: 600;
  }
  .section-two .text {
    margin: 0.9rem 0;
  }

  /* footer */
  .footer {
    padding: 3rem 0;
  }
  .footer-content p {
    color: var(--clr-grey);
  }
  .footer-content p span {
    color: var(--clr-white);
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    .section-two .section-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .section-one-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
    }
    .section-one-r {
      text-align: left;
    }
    .section-two .section-items {
      grid-template-columns: repeat(3, 1fr);
    }
    .section-two .section-item {
      text-align: left;
    }
    .section-two .section-item-icon img {
      margin-left: 0;
    }
  }

  /* resume page */
  #about-sc {
    padding: 64px 0;
  }

  .cv-form-row-title {
    background-color: var(--clr-dark);
    padding: 0.8rem 1.6rem;
    margin-bottom: 2rem;
  }

  .cv-form-row-title h3 {
    color: var(--clr-white);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.7rem;
  }
  .cv-form-blk {
    margin: 3rem 0;
  }
  .cv-form-row {
    padding: 3rem 2rem 0 2rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 1rem;
    position: relative;
  }
  textarea {
    resize: none;
  }
  .form-elem {
    margin-bottom: 3rem;
    position: relative;
  }
  .form-label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    color: var(--clr-dark);
    margin-bottom: 0.5rem;
  }
  .form-control {
    border-radius: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    font-family: inherit;
    width: 100%;
    outline: 0;
    transition: var(--transition);
  }

  .form-control:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
  .form-text {
    color: #ca0b00;
    font-size: 12px;
    position: absolute;
    letter-spacing: 0.5px;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
  }
  .cols-3,
  .cols-2 {
    display: grid;
  }
  .repeater-add-btn {
    width: 25px;
    height: 25px;
    background-color: var(--clr-blue-mid);
    font-size: 1.6rem;
    color: var(--clr-white);
    margin: 1rem 0;
  }
  .repeater-remove-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ca0b00;
    color: var(--clr-white);
    font-size: 1.6rem;
  }

  /* preview section */
  .preview-cnt {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 32% auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow: hidden;
  }

  .preview-cnt-l {
    padding: 3rem 3rem 2rem 3rem;
  }
  .preview-cnt-r {
    padding: 3rem 3rem 3rem 4rem;
  }
  .preview-cnt-l .preview-blk:nth-child(1) {
    text-align: center;
  }
  .preview-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
  }
  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .preview-item-name {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 1.8rem 0;
    position: relative;
  }
  .preview-item-name::after {
    position: absolute;
    content: "";
    bottom: -10px;
    width: 50px;
    height: 1.5px;
    background-color: rgba(255, 255, 255, 0.5);
    left: 50%;
    transform: translateX(-50%);
  }
  .preview-blk {
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
  .preview-blk-title h3 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 0.5rem;
  }
  .preview-blk-title {
    margin-bottom: 1rem;
  }
  .preview-blk-list .preview-item {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
    opacity: 0.95;
  }
  .preview-cnt-r .preview-blk-title {
    color: var(--clr-dark);
  }
  .preview-cnt-r .preview-blk-list .preview-item {
    margin-top: 1.8rem;
  }

  .achievements-items.preview-blk-list .preview-item span:first-child,
  .educations-items.preview-blk-list .preview-item span:first-child,
  .experiences-items.preview-blk-list .preview-item span:first-child {
    display: block;
    font-weight: 600;
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.03);
  }

  .educations-items.preview-blk-list .preview-item span:nth-child(2),
  .experiences-items.preview-blk-list .preview-item span:nth-child(2) {
    font-weight: 600;
    margin-right: 1rem;
  }

  .educations-items.preview-blk-list .preview-item span:nth-child(3),
  .experiences-items.preview-blk-list .preview-item span:nth-child(3) {
    font-style: italic;
    margin-right: 1rem;
  }

  .educations-items.preview-blk-list .preview-item span:nth-child(4),
  .educations-items.preview-blk-list .preview-item span:nth-child(5),
  .experiences-items.preview-blk-list .preview-item span:nth-child(4),
  .experiences-items.preview-blk-list .preview-item span:nth-child(5) {
    margin-right: 1rem;
    background-color: var(--clr-green);
    color: var(--clr-white);
    padding: 0 1rem;
    border-radius: 0.6rem;
  }

  .educations-items.preview-blk-list .preview-item span:nth-child(6),
  .experiences-items.preview-blk-list .preview-item span:nth-child(6) {
    font-size: 13.5px;
    display: block;
    opacity: 0.8;
    margin-top: 1rem;
  }
  .projects-items.preview-blk-list .preview-item span {
    display: block;
  }

  @media screen and (min-width: 768px) {
    .cols-3 {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2rem;
    }
    .cols-2 {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .cv-form-row {
      padding: 3rem 3rem 0rem 3rem;
    }
    .cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .print-btn-sc {
    margin: 2rem 0 6rem 0;
  }

  /* print section */
  @media print {
    body * {
      visibility: hidden;
    }

    .non_print_area {
      display: none;
    }

    .print_area,
    .print_area * {
      visibility: visible;
    }

    .print_area {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
    }
  }
`;
