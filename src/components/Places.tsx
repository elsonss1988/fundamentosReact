import ImageLegend from "./ImageLegend";

type Props = {
  imagem: string;
  name?: string;
  description?: string;
};

const Places = ({ imagem, name, description }: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <ImageLegend imagem={imagem} name={name} />
      <h3>{description}</h3>
    </div>
  );
};

export default Places;
