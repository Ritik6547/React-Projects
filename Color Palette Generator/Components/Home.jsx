import { useEffect, useState } from "react";
import Button from "./Button";
import CardsList from "./CardsList";

const Home = () => {
  const [colors, setColors] = useState([]);

  const template = "0123456789ABCDEF";

  function getRandomColor() {
    let colorCode = "";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * template.length);
      colorCode += template[randomNumber];
    }
    return colorCode;
  }

  function handleGenerateColor() {
    const arr = Array.from({ length: 5 }, () => getRandomColor());
    setColors(arr);
  }

  useEffect(() => {
    handleGenerateColor();
  }, []);

  return (
    <>
      <h1>Color Palette Generator</h1>
      <Button onClick={handleGenerateColor} />
      <CardsList colors={colors} />
    </>
  );
};

export default Home;
