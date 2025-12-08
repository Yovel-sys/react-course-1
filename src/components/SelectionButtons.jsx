export const SelectionButton = ({setFlavour}) => {
  return (
    <div className="flex flex-row gap-6 w-full justify-center" dir="rtl">
      <button onClick={() => setFlavour("chocolate")}>שוקולד</button>
      <button onClick={() => setFlavour("vanilla")}>וניל</button>
      <button onClick={() => setFlavour("dubai")}>
        קינדר קרמל מלוח עוגיות דובאי
      </button>
    </div>
  );
};
