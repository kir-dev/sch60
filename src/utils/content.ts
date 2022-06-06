import { link } from "fs";
import { EventType, TimelineEntity } from "./types";

export const fbPages = {
  sch60: "https://www.facebook.com/schonherz60/",
  schcst: "https://www.facebook.com/schcst",
  events: {
    junialis: "https://www.facebook.com/events/413093190377370",
  },
};

export const events: EventType[] = [
  {
    name: "Juniálisch",
    date: new Date(2022, 5, 18),
    location: "Schönherz kollégium",
    image: "/img/events/schonherz.png",
    description: "Egész napos családi és CSR programok a Schönherz körül.",
    link: fbPages.events.junialis,
  },
  {
    name: "CST50",
    date: new Date(2022, 5, 19),
    location: "Hűvösvölgy - Nagyrét",
    image: "/img/events/cst.jpg",
    description:
      "50. alkalommal kerül megrendezésre a méltán híres Csillagtúra.",
    link: fbPages.schcst,
  },
  {
    name: "QPA50",
    date: "ősszel",
    location: "szervezés alatt",
    image: "/img/events/qpa.png",
    description: "Az 50. kari napokat tartjuk a 60. jubileumi évben.",
  },
  {
    name: "SCH60",
    date: "ősszel",
    location: "szervezés alatt",
    image: "/img/events/sch60.jpg",
    description: "A jubileiumi év záró rendezvénye a Schönherzben.",
  },
];

export const timeline: TimelineEntity[] = [
  {
    year: 1954,
    description:
      "Még a budavári kollégiumban indultak útjára a körök és a hagyományos események, amik most is adják a közélet gerincét.",
  },
  {
    year: 1962,
    description:
      "Megalakult a Kollégiumi Önkormányzat a VIK-es hallgatókból (korábban gépész és vegyész hallgatók is laktak odafent).",
  },
  {
    year: 1976,
    description:
      "Ketté szakadt a VIK-es közélet: egy részük a Kruspér utcába költözött.",
  },
  {
    year: 1982,
    description:
      "Birtokba vette a jelenlegi épületet, a Schönherz Zoltán Kollégiumot szintén Újbudán.",
  },
  {
    year: 2007,
    description:
      "Felújítják a kollégiumot, a közélet az egykori Terminus Hotelbe, a Martos és a Kármán kollégiumokba költözik 1 évre, illetve " +
      'megalakul a SVIE, mint a közélet "új szíve & motorja", akik a HK Hallgatói Kollégiumi Bizottságával együtt alkotják az önkormányzatot.',
  },
  {
    year: 2017,
    description:
      'A kollégium "elvesztette Zoltán jellegét", s immár csak "Schönherznek" hívjuk, ami mára erős branddé alakult át.',
  },
];

export const keywords = [
  "Qpa",
  "SSSL",
  "társak",
  "Alumni",
  "Hagyományteremtő",
  "együttműködés",
  "SLaci",
  "lótöke",
  "SzintVacsik",
  "Sörváltó",
  "Otthon",
  "közélet",
  "barátok",
  "buli",
  "legszebb évek",
  "örök emlék",
  "Zoltán",
  "rücsök",
  "SLaci",
  "újvár",
  "körök",
  "medence",
  "kszk",
  "Qpa",
  "buli",
  "közösség",
  "összetartás",
  "burok",
  "lehetőség",
  "korlátlan",
  "határtalan",
  "függetlenség",
  "önkormányzatiság",
  "filantrópia",
  "közösség",
  "összetartozás",
  "humanizmus",
  "magas-értelmiség",
  "burjánzó",
  "Barátságok",
  "Egyetemi évek",
  "Qpa",
  "összetartozás",
  "Kolesz",
  "felelős önkormányzat",
  "segítőkész öregek",
  "SSSL",
  "a közösség ereje",
  "hagyományok",
  "öngondoskodás",
  "közösség",
  "barátság",
  "SSSL",
  "312",
  "összetartozás",
  "közösség",
  "lehetőségek",
  "barátok",
  "szabadság",
  "szintbuli",
  "QPA",
  "ajólovas",
  "KKB",
  "KB",
  "SLaci",
  "SSSL",
  "újvárklub",
  "FeCat",
  "Vizsgatemető",
  "VörösKakas",
  "MÁTRIX",
  "Csillagtúra",
  "közös élmények",
  "jó emlékek",
  "közösség",
  "Impulzus",
];
