type IconProps = {
  imagem?: string;
  name?: string;
};

export function Icons({ imagem, name }: IconProps) {
  return (
    <img
      src={imagem}
      alt={name}
      style={{ borderRadius: 50, width: 100, height: 100, padding: 5 }}
    />
  );
}
