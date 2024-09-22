export function shortTime() {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  return fullTime;
}

export function greetings() {
  const fullTime = new Date().getHours();

  if (fullTime > 6 && fullTime <= 12) {
    return "Bom dia";
  }
  if (fullTime > 12 && fullTime <= 18) {
    return "Bom dia";
  } else {
    return "Boa Noite";
  }
}

export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}
