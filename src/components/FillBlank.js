import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./FillBlank.css"
import { FillBlankCarousel } from "./FillBlankCarousel";
import ft_left from "./anatomy_pictures/fallopian_tube_left.png";
import ft_right from "./anatomy_pictures/fallopian_tube_right.png";
import cervix from "./anatomy_pictures/cervix.png";
import ovary_left from "./anatomy_pictures/ovary_left.png";
import ovary_right from "./anatomy_pictures/ovary_right.png";
import uterus from "./anatomy_pictures/uterus.png";
import vagina from "./anatomy_pictures/vagina.png";
import external from "./anatomy_pictures/external.png";

const data = [{
  image: ft_left,
  info: "The Fallopian Tube.",
  id: 1
}, {
  image: ft_right,
  info: "The Fallopian Tube.",
  id: 1
}, {
  image: cervix,
  info: "The cervix.",
  id: 1
}, {
  image: ovary_left,
  info: "The left ovary.",
  id: 1
}, {
  image: ovary_right,
  info: "The right ovary.",
  id: 1
}, {
  image: uterus,
  info: "The uterus.",
  id: 1
}, {
  image: vagina,
  info: "The vagina",
  id: 1
},
// {
//   image: external,
//   info: "external info",
//   id: 2
// }
]

export const FillInBlank = () => {

  // const [ extNumOfResponse, setExtNumOfResponse ] = useState(0);
  const [ intNumOfResponse, setIntNumOfResponse ] = useState(0);


  const internal = data.filter((image) => image.id === 1)
  // const external = data.filter((image) => image.id === 2)

  const handleResponse = () => {
    setIntNumOfResponse((prevCount) => prevCount + 1)
    // setExtNumOfResponse((prevCount) => prevCount + 1)
  }

  return (
    <div className="container">

      <div className="systems-container" >

        {/* <div className="ext-container">
          <div>External System</div>
          <FillBlankCarousel data={external} handleResponse={handleResponse}/>
          {extNumOfResponse === external.length && <Link className="external-sys" to="/external">external</Link>}

        </div> */}

        <div className="int-container">
          <div>Internal System</div>
          <FillBlankCarousel data={internal} handleResponse={handleResponse}/>
            {intNumOfResponse + 1 === internal.length && <Link className="internal-sys" to="/internal">Test Your Knowledge!</Link>}
        </div>
      </div>
    </div>
  )
}




