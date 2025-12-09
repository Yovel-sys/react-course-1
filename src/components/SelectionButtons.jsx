import {icecreamHebrew} from "../util/coneCupIcecreamUtil";
export const SelectionButton = ({setFlavour}) => {
  return (
    <div className="flex flex-row gap-6 w-full justify-center" dir="rtl">
      <button onClick={() => setFlavour("chocolate")}>
        {icecreamHebrew.chocolate}
      </button>
      <button onClick={() => setFlavour("vanilla")}>
        {icecreamHebrew.vanilla}
      </button>
      <button onClick={() => setFlavour("dubai")}>
        {icecreamHebrew.dubai}
      </button>
    </div>
  );
};
