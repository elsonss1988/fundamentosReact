type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <picture style={{ border: " 10px solid #FCD135" }}>{children}</picture>
  );
};

export default Card;
