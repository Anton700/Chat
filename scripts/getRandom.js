function getRandomName() {
  const lastName = [
    "Kovačević",
    "Horvat",
    "Babić",
    "Novak",
    "Marić",
    "Jurić",
    "Knežević",
    "Pavić",
    "Kovačić",
    "Petrović",
    "Perić",
    "Vuković",
    "Tomljanović",
    "Marković",
    "Kovač",
    "Šimunović",
    "Barišić",
    "Vukić",
    "Rukavina",
    "Vidaković",
    "Šarić",
    "Baković",
    "Janković",
    "Radošević",
    "Martinović",
    "Kralj",
    "Kovačev",
    "Knežić",
    "Jelić",
    "Horvatinčić"
  ];
  const firstName = [
    "Ana",
    "Ivan",
    "Petra",
    "Marko",
    "Marina",
    "Tomislav",
    "Maja",
    "Matija",
    "Lana",
    "Luka",
    "Nina",
    "Josip",
    "Ema",
    "Filip",
    "Marija",
    "Stjepan",
    "Sara",
    "Dominik",
    "Iva",
    "Antonio",
    "Dora",
    "Dario",
    "Karla",
    "Leon",
    "Helena",
    "Mihael",
    "Elena",
    "Nikola",
    "Lorena",
    "Lovro",
  ];
  return (
    firstName[Math.floor(Math.random() * firstName.length)] +
    " " +
    lastName[Math.floor(Math.random() * lastName.length)]
  );
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export { getRandomName, getRandomColor };
