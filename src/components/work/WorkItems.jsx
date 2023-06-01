import React, { useState } from 'react';

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState({ index: 0, title: '', desc: '', info1: '', info2: '', info3: '', info4: '' });

  const toggleTab = (index, title, desc, info1, info2, info3, info4) => {
    setToggleState({ index: index, title: title, desc: desc, info1: info1, info2: info2, info3: info3, info4: info4 });
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__group">
        <span onClick={() => toggleTab(1, item.title, item.desc, item.info1, item.info2, item.info3, item.info4)} className="work__button ">
          View More <i className="uil uil-arrow-right work__button-icon"></i>
        </span>

        <div className={toggleState.index === 1 ? 'services__modal active-modal' : 'services__modal'}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">{toggleState.title}</h3>
            <p className="services__modal-description">{toggleState.desc}</p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{toggleState.info1}</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{toggleState.info2}</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{toggleState.info3}</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{toggleState.info4}</p>
              </li>
            </ul>
            <div>
              <br />
              <h3 className="qualification__title">Yang digunakan untuk project ini</h3>
              <br />
              {item.apk} 
              <br />
              <br />
            </div>
            <div>
              {item.doc && (
                <div>
                  <h3 className="qualification__title">Dokumen Tambahan</h3>
                  <br />
                  {item.doc}
                </div>
              )}
            </div>
          </div>
        </div>

        {item.category === 'design' ? (
          <a href={item.url} target="_blank" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        ) : (
          <a href={item.url} target="_blank" className="work__button">
            View Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;