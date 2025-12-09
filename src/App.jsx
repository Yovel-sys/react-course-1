import {useState} from "react";
import {AppHeader} from "./AppHeader";
import {IceCreamResult} from "./components/IceCreamResult";
import {AppButton} from "./components/button/AppButton";
import {AppLayout} from "./layouts/AppLayout";
import {ServingType} from "./models/ServingType";
import {SelectionButton} from "./components/SelectionButtons";
import {icecreamHebrew} from "./util/coneCupIcecreamUtil";

export function App() {
  const [cupOrCone, setCupOrCone] = useState(ServingType.Cone);
  const [flavour, setFlavour] = useState(icecreamHebrew.chocolate);

  return (
    <div className={"bg-amber-300 h-screen w-screen text-black text-center"}>
      <AppHeader></AppHeader>
      <IceCreamResult flavour={flavour} cupOrCone={cupOrCone}></IceCreamResult>

      <AppButton onClick={() => setCupOrCone("cup")}>
        {icecreamHebrew.cup}
      </AppButton>
      <AppButton onClick={() => setCupOrCone("cone")}>
        {icecreamHebrew.cone}
      </AppButton>
      <SelectionButton setFlavour={setFlavour} />
    </div>
  );
}
