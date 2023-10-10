import { useEffect } from "react";
import TabWrapper from "./TabWrapper";
import { useProgressContext } from "../../context/useProgressContext";

function Tab() {
  const { currentTitle, progress, setCurrentTitle, setProgress } =
    useProgressContext();
  const titles = [
    { title: "Mamma Mia", img: "/MammaMia 1.png" },
    { title: "Shop Ease", img: "/ShopEase 3.png" },
    { title: "Wild Oasis", img: "/WildOasis 1.png" },
  ];
  const lastTitle = titles.length;
  // console.log(lastTitle);

  useEffect(() => {
    // animation to progress and some logic
    const interval = setInterval(() => {
      if (progress < 100) setProgress((prev) => prev + 1);
      else {
        setProgress(0);
        setCurrentTitle((prev) => prev + 1); // when clicked we need to setcurrrent to index
        clearInterval(interval);
      }
      // make progress rerender from first title when it end
    }, 50);

    return () => clearInterval(interval);
  }, [
    progress,
    currentTitle,
    lastTitle,
    setCurrentTitle,
    setProgress,
    titles.length,
  ]);
  if (currentTitle >= lastTitle) setCurrentTitle(0);

  return <TabWrapper titles={titles} />;
}
export default Tab;
