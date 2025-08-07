const template = "0123456789ABCDEF";

function getRandomColor() {
  let colorCode = "";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * template.length);
    colorCode += template[randomNumber];
  }
  return colorCode;
}

export default getRandomColor;
