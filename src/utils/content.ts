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
    image: "/img/events/bench_stock.jpg",
    description: "Egész napos családi és CSR programok a Schönherz körül.",
    link: fbPages.events.junialis,
  },
  {
    name: "CST50",
    date: new Date(2022, 5, 19),
    location: "Hűvösvölgy - Nagyrét",
    image: "/img/events/hiking_stock.jpg",
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
      "Ekkor indultak útjára a budavári kollégiumban a körök és a hagyományos események, amelyek most is a közélet gerincét alkotják.",
  },
  {
    year: 1962,
    description:
      "Megalakult a Kollégiumi Önkormányzat a VIK-es hallgatókból (korábban gépész és vegyész hallgatók is laktak odafent).",
  },
  {
    year: 1976,
    description:
      "Kettészakadt a VIK-es közélet, egy részük a Kruspér utcába költözött.",
  },
  {
    year: 1981,
    description:
      "A VIK-es közélet birtokba vette a jelenlegi épületet, a Schönherz Zoltán Kollégiumot, szintén Újbudán.",
  },
  {
    year: 2007,
    description: `Megkezdődött a kollégium felújítása, emiatt a közélet az egykori Terminus Hotelbe, a Martos és a Kármán kollégiumokba költözött 1 évre. Ugyanekkor megalakult a SVIE, mint a közélet "új szíve & motorja", akik a HK Hallgatói Kollégiumi Bizottságával együtt alkotják az önkormányzatot jelenleg is`,
  },
  {
    year: 2017,
    description:
      'A kollégiumot a BME Szenátusának határozata értelmében immár csak "Schönherznek" hívjuk, ami mára erős branddé alakult át a fiatalok és öregek körében is egyaránt.',
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
