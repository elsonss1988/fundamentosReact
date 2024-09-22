import { useState } from "react";

type Props = {
  rate: number;
};

export function Rate({ rate }: Props) {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const starsArr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  // const [rating, setRating] = useState(0);

  return (
    <div>
      {starsArr.map((star) => {
        return (
          <span
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}
