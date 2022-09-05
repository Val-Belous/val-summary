import styles from './PortfolioModal.module.css';
import { useRef, useEffect } from 'react';

export const PortfolioModal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.PortfolioModal_backdrop__XXUZr');
    backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.box__face--left');
    const frontSide = document.querySelector(
      '.FrontAboutMe_containerFront__-xEOJ'
    );
    const rightSide = document.querySelector('.Portfolio_container__hiJ0s');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.box__face--back');

    const closeBackdrop = () => {
      if (
        box.classList.contains('torightone') ||
        box.classList.contains('toleftthree')
      ) {
        topSide.classList.remove('box__face--topOpenPortfolio');
        topSide.classList.add('box__face--topCLosePortfolio');
        backSide.classList.add('box__face--backSideClose');
        backSide.classList.remove('box__face--backSideOpen');
        rightSide.classList.remove('Portfolio_rightSideOpenPortfolio__07BAa');
        bottomSide.classList.remove('box__face--bottomOpenPortfolio');
        rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
        leftSide.classList.remove('box__face--leftOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove(
          'FrontAboutMe_frontSideOpenPortfolio__Nptph'
        );
        frontSide.classList.add('FrontAboutMe_frontSideClosePortfolio__KIc2U');
        bottomSide.classList.add('box__face--bottomClosePortfolio');
        element.classList.add('PortfolioModal_ishidden__WK0Ud');
        rightSide.classList.add('Portfolio_rightSideClosePortfolio__zI+2E');
      }
    };
    // Portfolio_rightSideOpenPortfolio__07BAa
    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
          ) {
            topSide.classList.remove('box__face--topCLosePortfolio');
            topSide.classList.add('box__face--topOpenPortfolio');
            backSide.classList.remove('box__face--backSideClose');
            backSide.classList.add('box__face--backSideOpen');
            element.classList.remove('PortfolioModal_ishidden__WK0Ud');
            // leftSide.classList.add('box__face--leftOpen');
            // topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpenPortfolio');
            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            frontSide.classList.add(
              'FrontAboutMe_frontSideOpenPortfolio__Nptph'
            );
            frontSide.classList.remove(
              'FrontAboutMe_frontSideClosePortfolio__KIc2U'
            );
            rightSide.classList.add('Portfolio_rightSideOpenPortfolio__07BAa');
          }
          rightSide.classList.remove(
            'Portfolio_rightSideClosePortfolio__zI+2E'
          );
          break;
        case 27:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
          ) {
            topSide.classList.remove('box__face--topOpenPortfolio');
            topSide.classList.add('box__face--topCLosePortfolio');
            backSide.classList.add('box__face--backSideClose');
            backSide.classList.remove('box__face--backSideOpen');
            rightSide.classList.remove(
              'Portfolio_rightSideOpenPortfolio__07BAa'
            );
            bottomSide.classList.remove('box__face--bottomOpenPortfolio');
            rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
            leftSide.classList.remove('box__face--leftOpen');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove(
              'FrontAboutMe_frontSideOpenPortfolio__Nptph'
            );
            frontSide.classList.add(
              'FrontAboutMe_frontSideClosePortfolio__KIc2U'
            );
            bottomSide.classList.add('box__face--bottomClosePortfolio');
            element.classList.add('PortfolioModal_ishidden__WK0Ud');
            rightSide.classList.add('Portfolio_rightSideClosePortfolio__zI+2E');
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
      <div className={`${styles.backdrop} ${styles.ishidden}`} ref={ref}>
        <div className={styles.modal}>
          <div className={styles.box}>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>Front-end developer</h3>
              <p className={styles.text}>
                Portfolio. Portfolio. Portfolio. Portfolio. Portfolio.
                Portfolio. Portfolio. Portfolio. Portfolio. Portfolio..
                Portfolio. Portfolio. Portfolio. Portfolio. Portfolio.
                Portfolio. Portfolio. Portfolio. Portfolio. Portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
