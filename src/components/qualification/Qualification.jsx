import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Pendidikan Ku</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>

          <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Universitas Bina Sarana Informatika</h3>
                <span className="qualification__subtitle">Sistem Informasi - Universitas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Sekarang
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">NF Computer</h3>
                <span className="qualification__subtitle">Fullstack Web Dev - MBKM Studi Independen</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Agustus 2022 - Januari 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMK Negeri 3 Bekasi</h3>
                <span className="qualification__subtitle">Perhotelan - Sekolah Menengah Kejuruan</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
          <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front End</h3>
                <span className="qualification__subtitle">Revamp Company Profile Digital Health - Jakarta</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Agustus 2023 - Desember 2023
                </div>
              </div>
            </div> 

          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Project Mata Kuliah WebProg 3 - Bekasi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front End & Back End Engineer</h3>
                <span className="qualification__subtitle">Final Project Studi Independen - Bekasi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> November 2022 - Desember 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI Designer</h3>
                <span className="qualification__subtitle">Project Mata Kuliah Sistem Informasi Manajemen - Bekasi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
