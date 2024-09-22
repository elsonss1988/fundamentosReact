import Card from "./Card";
import { Rate } from "./Rate";

type ImageLegendProps = {
  imagem: string;
  name?: string;
};

const ImageLengend = ({ imagem, name }: ImageLegendProps) => {
  return (
    <div>
      <Card>
        <img
          src={imagem}
          alt="imagem place"
          style={{ width: 300, height: 300 }}
        />
        {name && <figcaption>{name}</figcaption>}
        <Rate rate={5}></Rate>
      </Card>
    </div>
  );
};

export default ImageLengend;
