// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Echoterra_V1",
  version: "1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 10112,
  bpm: 95,
  totalframe: 484,
  nbpolo: 7,
  bonusloopA: 0, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: 0,
  colBck: "#000000",
  col0: "#000000",
  col1: "#6caf6a",
  col2: "#000000",
  col3: "#6caf6a",
  col4: "#000000",
  animearray: [
    {name:"01_orok",color:"6d8d4c",uniqsnd:!0},
    {name:"02_chimpa",color:"6d8d4c",uniqsnd:!0},
    {name:"03_snapper",color:"6d8d4c",uniqsnd:!0},
    {name:"04_dunaka",color:"6d8d4c",uniqsnd:!0},
    {name:"05_shakri",color:"6d8d4c",uniqsnd:!0},
    {name:"06_ambia",color:"519a6f",uniqsnd:!0},
    {name:"07_goruk",color:"519a6f",uniqsnd:!0},
    {name:"08_tappa",color:"519a6f",uniqsnd:!0},
    {name:"09_omhara",color:"519a6f",uniqsnd:!1},
    {name:"10_thalora",color:"519a6f",uniqsnd:!1},
    {name:"11_zyric",color:"3a6b34",uniqsnd:!0},
    {name:"12_talura",color:"3a6b34",uniqsnd:!0},
    {name:"13_zera",color:"3a6b34",uniqsnd:!1},
    {name:"14_aetheris",color:"3a6b34",uniqsnd:!0},
    {name:"15_vyntra",color:"3a6b34",uniqsnd:!0},
    {name:"16_soluna",color:"6caf6a",uniqsnd:!0},
    {name:"17_zimri",color:"6caf6a",uniqsnd:!0},
    {name:"18_orunya",color:"6caf6a",uniqsnd:!1},
    {name:"19_vahara",color:"6caf6a",uniqsnd:!1},
    {name:"20_arunja",color:"6caf6a",uniqsnd:!0},
  ],
  bonusarray: [
    {
      name: "b1-plants",
      src: "b1-plants",
      code: "1,3,4,7,13",
      sound: "bonus-plants",
      aspire: "aspire",
      loop: 2, // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...