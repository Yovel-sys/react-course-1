import {BrowserRouter} from "react-router";
import {AppHeader} from "./AppHeader";
import {IcecreamBuilderPage} from "./pages/IcecreamBuilderPage";
import AppRouter from "./router/Approuter";
export function App() {
  return (
    <div
      className={
        "bg-amber-300 transition-all duration-300  h-screen w-screen text-black text-center"
      }
    >
      <BrowserRouter>
        <AppHeader></AppHeader>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
