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
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
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