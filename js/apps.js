// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Template",
  version: "temp01",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 5333,
  bpm: 90,
  totalframe: 260,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#0F0F0F",
  col0: "#919191",
  col1: "#5f5f5f",
  col2: "#4b4b4b",
  col3: "#373737",
  col4: "#232323",
  animearray: [
    {
      name: "1_lead",
      color: "7D7D7D",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_deux",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "3_kosh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "4_shpok",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "5_tom",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "6_nouana",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "7_scratch",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "8_trill",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "9_bass",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "10_uh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "11_nugu",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "12_guit",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "13_tromp",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "14_pouin",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "15_tung",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "16_aoun",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "17_hum",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "18_get",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "19_tellme",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "20_make",
      color: "7D7D7D",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
    {
      name: "blank",
      src: "b1-v1-blank-hb",
      code: "1,2,3,4,5",
      sound: "aspire-blank",
      aspire: "aspire-blank",
      loop: 1, // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...
