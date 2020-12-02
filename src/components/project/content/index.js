import React, { useState, useEffect } from "react";

// Components
import Card from "../card/index";
import Modal from "../modal/index";

// Contexts

// Styling
import "./index.css";
import LeKaba01 from "../../../assets/card/lekaba/lekaba01.jpg";
import LeKaba02 from "../../../assets/card/lekaba/lekaba02.jpg";
import LeKaba03 from "../../../assets/card/lekaba/lekaba03.jpg";
import LeKaba04 from "../../../assets/card/lekaba/lekaba04.jpg";
import LogoTodo1 from "../../../assets/card/todo/logo01.jpg";
import ToDo01 from "../../../assets/card/todo/todo01.jpg";
import ToDo02 from "../../../assets/card/todo/todo02.jpg";
import ToDo03 from "../../../assets/card/todo/todo03.jpg";
import Vitrine01 from "../../../assets/card/vitrine/vitrine01.jpg";
import Vitrine02 from "../../../assets/card/vitrine/vitrine02.jpg";
import Vitrine03 from "../../../assets/card/vitrine/vitrine03.jpg";

const Content = () => {
  const [displayModalKaba, setDisplayModalKaba] = useState(false);
  const [displayModalTodo, setDisplayModalTodo] = useState(false);
  const [displayModalVitrine, setDisplayModalVitrine] = useState(false);
  const [isTitleProject, setIsTitleProject] = useState(false);

  useEffect(() => {
    const onScrollMenu = () => {
      if (window.scrollY >= 2030 && window.scrollY < 2710) {
        setIsTitleProject(true);
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [setIsTitleProject]);

  const cardData = [
    {
      title: "Lekaba",
      spec: "React/Javascript",
      pic: LeKaba01,
      setState: setDisplayModalKaba,
    },
    {
      title: "To do list",
      spec: "React/TypeScript",
      pic: LogoTodo1,
      setState: setDisplayModalTodo,
    },
    {
      title: "Vinyle",
      spec: "HTML/CSS",
      pic: Vitrine01,
      setState: setDisplayModalVitrine,
    },
  ];

  const modalDataKaba = {
    title: "Lekaba",
    description:
      "Le Kaba cherche, compare et sélectionne pour vous les meilleures alternatives éco-responsables à tous les gestes du quotidien.",
    link: "https://www.lekaba.fr/",
    pic: [LeKaba01, LeKaba02, LeKaba03, LeKaba04],
    setState: setDisplayModalKaba,
  };
  const modalDataTodo = {
    title: "To do list",
    description:
      "Simple to-do liste dans le cadre d'un exercice pour débuter en TypeScript.",
    link: "https://todo-ts.netlify.app/",
    pic: [ToDo01, ToDo02, ToDo03],
    setState: setDisplayModalTodo,
  };
  const modalDataVinyle = {
    title: "Vinyle",
    description:
      "Mon premier site vitrine en HTML et CSS pour un exercice durant ma formation.",
    link: "https://site-vitrine-vinyle.netlify.app/",
    pic: [Vitrine01, Vitrine02, Vitrine03],
    setState: setDisplayModalVitrine,
  };

  return (
    <section id="project" className="project-wrapper">
      <div>
        <div
          id={isTitleProject ? "slide-right" : "slide-false"}
          className="project-title fs-title"
        >
          <div>
            <span>Projets</span>
          </div>
        </div>
        {displayModalKaba ? <Modal data={modalDataKaba} /> : null}
        {displayModalTodo ? <Modal data={modalDataTodo} /> : null}
        {displayModalVitrine ? <Modal data={modalDataVinyle} /> : null}
        <div
          id={isTitleProject ? "slide-bottom" : "slide-false"}
          className="project-card-container"
        >
          {cardData.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
