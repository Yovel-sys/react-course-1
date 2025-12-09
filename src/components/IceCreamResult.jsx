import {ServingType} from "../models/ServingType";
import style from "./IceCreamResult.module.css";
import {icecreamHebrew} from "../util/coneCupIcecreamUtil";
import {coneCupIcecreamVis} from "../util/coneCupIcecreamUtil";

export const IceCreamResult = ({cupOrCone, flavour}) => {
  let icecreamColor;
  // if (flavour === "chocolate") {
  //   icecreamColor = "bg-amber-700";
  // } else if (flavour === "vanilla") {
  //   icecreamColor = "bg-amber-200";
  // } else if (flavour === "dubai") {
  //   icecreamColor = "bg-[#5aa36d]";
  // }

  // let cupOrConeImg;
  // if (cupOrCone === "cup") {
  //   cupOrConeImg = style.cup;
  // } else if (cupOrCone === "cone") {
  //   cupOrConeImg = style.cone;
  // }

  return (
    <div>
      הגלידה שלי
      <div className="flex flex-col w-full h-80 bg-white items-center justify-center">
        <div
          id="ball"
          className={`h-12 w-12 ${coneCupIcecreamVis[flavour]}`}
        ></div>
        <div id="cupOrConeRep" className={coneCupIcecreamVis[cupOrCone]}></div>
      </div>
      <p>הגשה ב{cupOrCone === ServingType.Cone ? "גביע" : "ספל"}</p>
      <p> גלידה בטעם {icecreamHebrew[flavour]}</p>
    </div>
  );
};
