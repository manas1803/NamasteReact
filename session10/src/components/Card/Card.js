import Hashtags from "./components/Hashtags";

const Card = ({ card }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.header}</div>
        <p className="text-gray-700 text-base">{card.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {card.hashtags.map((hashtag) => (
          <Hashtags hashtag={hashtag} />
        ))}
      </div>
    </div>
  );
};

export const withPromoted = (Card) => {
  return ({ card }) => (
    <div>
      <span className="relative text-sm font-semibold text-black">
        Promoted
      </span>
      <Card card={card} />
    </div>
  );
};

export default Card;
