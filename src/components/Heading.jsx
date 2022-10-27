import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/neonLights.module.css";
import { MaterialUISwitch } from "../helpers";

const Heading = ({ c }) => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(c);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
    if (!checked) {
      navigate("/after-dark");
      return;
    }
    navigate("/");
  };
  

  return c === false ? (
    <div className="mt-10 mb-3 flex flex-row justify-center items-center gap-10">
      <img alt="logo trash taste" src="/logo.jpg" />
      <h1 className="p-3 text-purple font-bold uppercase text-3xl md:text-6xl transition-transitionDuration: 1 ">
        Trash Taste <br />
      </h1>
      <MaterialUISwitch checked={c} onChange={switchHandler}/>
    </div>
  ) : (
    <div className="mt-10 mb-3 flex flex-row justify-center items-center gap-10">
      <img
        className="object-contain"
        alt="logo trash taste"
        src="/logoAF.jpg"
      />

      <h1
        className={`p text-white font-bold uppercase text-3xl md:text-6xl text-center ${styles.neonText}`}
      >
        Trash Taste <br/> After Dark
      </h1>
      <MaterialUISwitch checked={c} onChange={switchHandler} sx={{ m: 2 }} />
    </div>
  );
};

export default Heading;
