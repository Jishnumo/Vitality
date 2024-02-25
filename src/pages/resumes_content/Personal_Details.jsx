import React from "react";
import styled from "styled-components";
import app from "../resumes_content/app";
import script from "../resumes_content/script";

const Personal_Details = () => {
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
            </form>
          </div>
        </div>
      </section>

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
                  data-repeater-delete
                  type="button"
                  className="repeater-remove-btn"
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
                  data-repeater-delete
                  type="button"
                  className="repeater-remove-btn"
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
                  data-repeater-delete
                  type="button"
                  className="repeater-remove-btn"
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
                  data-repeater-delete
                  type="button"
                  className="repeater-remove-btn"
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
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Personal_Details;
const Container = styled.div`
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
