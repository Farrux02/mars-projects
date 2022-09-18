import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Card = ({ imgSrc, imgAlt, cardTitle, cardText, projectLink='google.com' }) => {
  const redirect = useNavigate();

  return (
    <div className="flex flex-col w-80 border-4 rounded-md">
      <img className="rounded-t" src={'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg'} alt={imgAlt} />
      <div className="flex flex-col items-center gap-y-6 m-4">
        <h5 className="text-xl font-bold">Frontend project</h5>
        <p className="text-lg">Project I've done, frontend</p>
        <Button
          btnLabel={"Перейти"}
          btnClassName={'bg-zinc-400 h-12 w-32 rounded text-lg text-white'}
          btnType={"button"}
          onClick={(e) => {
            e.preventDefault();
            projectLink ? window.location = {projectLink} : console.log('err');
          }}
        />
      </div>
    </div>
    // <div className='flex flex-col w-60 h-80'>
    //     <img src={imgSrc} alt={imgAlt} />
    //     <div>
    //         <h5>{cardTitle}</h5>
    //         <p>{cardText}</p>
    //         <Button />
    //     </div>
    // </div>
  );
};

export default Card;
