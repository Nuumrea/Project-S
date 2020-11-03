import React, { useState } from "react";

// Styling
import "./index.css";
import LeKaba01 from "../../../assets/card/lekaba/lekaba01.png";
import LeKaba02 from "../../../assets/card/lekaba/lekaba02.png";
import LeKaba03 from "../../../assets/card/lekaba/lekaba03.png";
import LeKaba04 from "../../../assets/card/lekaba/lekaba04.png";
import LeKaba05 from "../../../assets/card/lekaba/lekaba05.png";
import ToDo01 from "../../../assets/card/todo/todo01.png";
import Vitrine01 from "../../../assets/card/vitrine/vitrine01.png";

// Components
import Card from "../card/index";
import Modal from "../modal/index";

const Content = () => {
  const [displayModalKaba, setDisplayModalKaba] = useState(false);
  const [displayModalTodo, setDisplayModalTodo] = useState(false);
  const [displayModalVitrine, setDisplayModalVitrine] = useState(false);

  const cardData = [
    {
      title: "Lekaba",
      spec: "React js",
      pic: LeKaba01,
      setState: setDisplayModalKaba,
    },
    {
      title: "Lekaba",
      spec: "React js",
      pic: LeKaba01,
      setState: setDisplayModalKaba,
    },
    {
      title: "To do list",
      spec: "React js",
      pic: ToDo01,
      setState: setDisplayModalTodo,
    },
    {
      title: "Vinyle",
      spec: "HTML, CSS",
      pic: Vitrine01,
      setState: setDisplayModalVitrine,
    },
  ];

  const modalDataKaba = {
    title: "Lekaba",
    description:
      "Le Kaba cherche, compare et sélectionne pour vous les meilleures alternatives éco-responsables à tous les gestes du quotidien.",
    link: "https://www.lekaba.fr/",
    pic: [LeKaba01, LeKaba02, LeKaba03, LeKaba04, LeKaba05],
    setState: setDisplayModalKaba,
  };
  const modalDataTodo = {
    title: "To do list",
    description: "Simple to do list",
    link: "https://to-do-list-kevin.netlify.app/",
    pic: [LeKaba01, LeKaba02, LeKaba03, LeKaba04, LeKaba05],
    setState: setDisplayModalTodo,
  };
  const modalDataVinyle = {
    title: "Vinyle",
    description: "Simple site en HTML et CSS",
    link: "https://site-vitrine-vinyle.netlify.app/",
    pic: [LeKaba01, LeKaba02, LeKaba03, LeKaba04, LeKaba05],
    setState: setDisplayModalVitrine,
  };

  return (
    <section id="project" className="project-wrapper">
      <div>
        {displayModalKaba ? <Modal data={modalDataKaba} /> : null}
        {displayModalKaba ? <Modal data={modalDataKaba} /> : null}
        {displayModalTodo ? <Modal data={modalDataTodo} /> : null}
        {displayModalVitrine ? <Modal data={modalDataVinyle} /> : null}
        <div className="project-card-container">
          {cardData.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
