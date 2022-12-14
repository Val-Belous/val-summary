import { useRef, useEffect } from 'react';
import svg from '../../images/symbol-defs.svg';
import photo from '../../images/myPhoto.JPG';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const AboutMe__box = document.querySelector('.AboutMe__box');

    const currentSideModal = document.querySelector('.modalAboutMe');
    currentSideModal.addEventListener('click', closeFrontSide);

    function closeFrontSide(evt) {
      if (evt.target === evt.currentTarget) {
        backdrop.classList.add('ishiddenAboutMe');
        rightSide.classList.remove('rightSideClosePortfolioContact');
        rightSide.classList.remove('rightSideOpen');
        leftSide.classList.remove('leftSideOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('frontSideOpen');
        AboutMe__box.classList.remove('third');
      }
    }

    const closeBtn = document.querySelector('.modal__close-btn');
    closeBtn.addEventListener('click', closeModal);
    function closeModal(evt) {
      if (evt.target !== evt.currentTarget) {
        AboutMe__box.classList.remove('third');
        rightSide.classList.remove('rightSideClosePortfolioContact');
        rightSide.classList.remove('rightSideOpen');
        leftSide.classList.remove('leftSideOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('frontSideOpen');
        element.classList.add('ishiddenAboutMe');
      }
    }

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            rightSide.classList.remove('rightSideClosePortfolioContact');
            AboutMe__box.classList.add('third');
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            backSide.classList.remove('contactMeCloseContact');
            frontSide.classList.remove('frontSideClosePortfolioExp');
            bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide.classList.remove('box__face--topCloseExp');
            leftSide.classList.remove('leftSideCloseExp');
            topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide.classList.remove('frontSideClosePortfolio');
            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            leftSide.classList.add('leftSideOpen');
            topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpen');
            frontSide.classList.add('frontSideOpen');
            rightSide.classList.add('rightSideOpen');
            rightSide.classList.remove('rightSideClosePortfolio');
            element.classList.remove('ishiddenAboutMe');
          }
          break;
        case 27:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            AboutMe__box.classList.remove('third');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            rightSide.classList.remove('rightSideOpen');
            leftSide.classList.remove('leftSideOpen');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove('frontSideOpen');
            element.classList.add('ishiddenAboutMe');
          }
          break;
        default:
          return;
      }
    };

    const element = ref.current;
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div
        id="modalAboutMe"
        className="backdropAboutMe ishiddenAboutMe"
        ref={ref}
      >
        <div className="modalAboutMe">
          <div className="AboutMe__box">
            <button className="modal__close-btn" type="button" data-modal-close>
              <svg className="modal__close-icon" width="18" height="18">
                <use href={`${svg}#icon-close`}></use>
              </svg>
            </button>
            <div className="boxAboutMeFirst">
              <img className="image" src={photo} alt="" />
              <div className="text-box">
                <h2 className="titleAboutMe">Valentyn Bilous</h2>
                <p>
                  I am junior front-end developer looking for a full - time job.
                  Seeking to use my good JavaScript and React.js skills. I want
                  try to do my best on my future position in order to achieve
                  the maximum good result in the shortest possible time.
                </p>
              </div>
            </div>
            <div className="education-skills-box">
              <div className="boxAboutMeFour">
                <h2 className="titleAboutMe">Education</h2>
                <h3 className="textAboutMe">Chernivtsi Polytechnic College</h3>
                <ul className="work-text-box">
                  <li>
                    <p className="work-text">2009 - 2013</p>
                    <p className="work-text">
                      Construction and civil engineering
                    </p>
                  </li>
                  <li>
                    <h3 className="textAboutMe">
                      Odessa Academy of Civil Engineering and Architecture
                    </h3>
                    <p className="work-text">2013 - 2017</p>
                    <p className="work-text">
                      Construction and civil engineering
                    </p>
                  </li>
                </ul>
              </div>
              <div className="AboutMe__box-first">
                <h2 className="titleAboutMe">Skills</h2>
                <div className="skills-text-box">
                  <h3 className="textAboutMe">Hard</h3>
                  <p className="textAboutMe__descr">
                    HTML5/CSS/SASS, Responsive/Adaptive design, GIT, JavaScript,
                    React, Redux, Axios, Parcel, MaterialUI, Chart.js
                  </p>
                </div>
                <div className="skills-text-box">
                  <h3 className="textAboutMe">Soft</h3>
                  <p>
                    Teamwork, Good communication, Capable, Honest, Good sense of
                    humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
