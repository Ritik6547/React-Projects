import ColorCard from "./colorCard";

const CardsList = ({ colors }) => {
  return (
    <div className="color-card-container">
      {colors.map((color) => {
        return <ColorCard key={color} color={color} />;
      })}
    </div>
  );
};

export default CardsList;
