let bothRecurrent = false;

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

if (info.recorrente === info2.recorrente) {
  bothRecurrent = true;
}

if (!bothRecurrent) {
  for (key in info) {
    console.log(info[key] + ' e ' + info2[key])
  }
} else {
  console.log(info.personagem + " e " + info2.personagem)
  console.log(info.origem + " e " + info2.origem)
  console.log(info.nota + " e " + info2.nota)
  console.log("Ambos recorrentes.")
}