import Card, { withPromoted } from "../Card/Card";
import React from "react";

const DisplayCards = ({ cardData }) => {
  const PromotedCards = withPromoted(Card);

  return (
    <div className="flex flex-wrap">
      {cardData.map((card) => (
        <div className="flex flex-wrap">
          {card.isPromoted ? (
            <PromotedCards card={card} />
          ) : (
            <Card card={card} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayCards;
