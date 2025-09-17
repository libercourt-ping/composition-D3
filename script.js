var CLUB = {
  LIB: "Libercourt",
  BET: "Béthune",
  DUI: "Duisans",
  TIL: "Tilloy les Mofflaines",
  HUL: "Haisnes-Hulluch",
  LEF: "Leforest",
  ARL: "Arleux/Gohelle",
  MEU: "Meurchin",
};

var DAY = {
  SEM1: new Date("09/21/2025"),
  SEM2: new Date("09/28/2025"),
  SEM3: new Date("10/12/2025"),
  SEM4: new Date("11/16/2025"),
  SEM5: new Date("11/30/2025"),
  SEM6: new Date("12/14/2025"),
  SEM7: new Date("01/11/2026"),
};

class Match {
  static all = [];
  constructor(date, club, club_recepteur) {
    this.adversaire = club;
    this.club = CLUB.LIB;
    this.club_recepteur = club_recepteur;
    this.date = date;
    this.dateFR = date.toLocaleDateString("fr", { dateStyle: "full" });
    this.players = [];
    this.absents = [];
    this.previsionnels = [];
    this.remplacants = [];
    this.rdv = club === club_recepteur ? null : "9h à la salle";
    Match.all.push(this);
  }

  static nextMatch() {
    const today = new Date();
    return Match.all.find((el) => {
      return today.getTime() < el.date.getTime();
    });
  }

  setPlayers(players) {
    this.players = players;
  }

  setPrevisionnels(players) {
    this.previsionnels = players;
  }

  setRemplacants(players) {
    this.remplacants = players;
  }

  setAbsents(absents) {
    this.absents = absents;
  }

  setRdv(rdv) {
    this.rdv = rdv;
  }
}

var Joueurs = {
  NATHALIE: "Nathalie MILLE",
  VINCENT: "Vincent PIERSON",
  YOHAN: "Yohan GUILBERT",
  CEDRIC: "Cédric BOUQUET",
  QUENTIN: "Quentin DUBRULLE",
  HAMED: "Hamed ATMANE",
  FRED: "Frédéric BERTOUX",
};

function cr(x) {
  function cr1(b) {
    function cr2(a) {
      return atob(a);
    }
    return cr2(b);
  }
  return cr1(x);
}

function d(f, h) {
  function g() {
    let vofbuibcidsbivdbvidubsixbiudbv = "Tk9fQ09OTkVDVA==";
    return vofbuibcidsbivdbvidubsixbiudbv;
  }
  if (localStorage.getItem(cr(g()))) {
    f();
  } else if (h) {
    h(cr(g()));
  }
}

function cls(element, stri) {
  return element.classList.add(...stri.split(" "));
}

function initDesktopBase(doc) {
  d(() => {
    const div = document.createElement("div");
    cls(div, "flex w-full items-center justify-between");

    const divLogo = document.createElement("div");
    divLogo.id = "logo";
    cls(
      divLogo,
      "flex items-center justify-start ml-4 w-18 h-18 rounded-full p-2 border-2"
    );

    const spanInfo = document.createElement("span");
    spanInfo.id = "info";
    cls(spanInfo, "hidden");

    const divFlex = document.createElement("div");
    divFlex.classList.add("flex");

    const img = document.createElement("img");
    img.src = "./images/logo.png";
    img.width = "50";
    img.height = "50";

    divFlex.appendChild(img);
    spanInfo.appendChild(divFlex);

    const divFlexCol = document.createElement("div");
    cls(divFlexCol, "flex flex-col");

    const spanCP = document.createElement("span");
    spanCP.textContent = "Club pongiste libercourtois";
    const spanP = document.createElement("span");
    spanP.textContent = "Président: Thierry GUILBERT";
    divFlexCol.appendChild(spanCP);
    divFlexCol.appendChild(spanP);
    spanInfo.appendChild(divFlexCol);

    divLogo.appendChild(spanInfo);
    div.appendChild(divLogo);

    const div2 = document.createElement("div");
    cls(div2, "flex items-center justify-center w-full");

    const subDiv2 = document.createElement("div");
    cls(subDiv2, "flex flex-col items-center justify-center");
    subDiv2.id = "title";
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.textContent = "Planning - Ping pong";
    h2.textContent = "Saison 2025-2026, phase 1";
    subDiv2.appendChild(h1);
    subDiv2.appendChild(h2);

    div2.appendChild(subDiv2);
    div.appendChild(div2);
    doc.appendChild(div);

    const divContent = document.createElement("div");
    cls(divContent, "flex w-[98%] mt-16 items-center justify-center");
    const table = document.createElement("table");
    table.id = "content";
    cls(table, "w-full h-full");
    divContent.appendChild(table);
    doc.appendChild(divContent);

    const spanFlex1 = document.createElement("span");
    cls(spanFlex1, "flex-1");
    doc.appendChild(spanFlex1);

    const footer = document.createElement("footer");
    cls(footer, "flex w-full h-[12vh] bg-gray-800 items-center justify-center");
    const para = document.createElement("p");
    para.id = "led";
    cls(para, "led inline-block text-[36px] bold");
    para.textContent = "PROCHAIN MATCH : %MATCH%";

    footer.appendChild(para);
    doc.appendChild(footer);
  });
}

function init() {
  d(() => {
    const doc = document.getElementById("container");
    doc.style.display = "flex";
    initDesktopBase(doc);
    const table = document.getElementById("content");
    const thead = document.createElement("thead");
    const trhead = document.createElement("tr");
    const trhead2 = document.createElement("tr");
    const trhead3 = document.createElement("tr");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(trhead);
    thead.appendChild(trhead2);
    thead.appendChild(trhead3);
    const fth = document.createElement("th");
    fth.classList.add("h-full");
    fth.rowSpan = 3;
    fth.textContent = "Date, Lieu et RDV";
    trhead.appendChild(fth);
    for (let j in Joueurs) {
      const tr = document.createElement("tr");
      tr.id = `${Joueurs[j]}`;
      const fthJ = document.createElement("th");
      fthJ.classList.add("th_joueur");
      fthJ.textContent = Joueurs[j];

      tr.appendChild(fthJ);
      tbody.appendChild(tr);
      for (let z = 0; z < matchs.length; ++z) {
        const td = document.createElement("td");
        td.id = "td_" + matchs[z].adversaire + "_" + Joueurs[j];
        tr.appendChild(td);
        td.classList.add("non");
      }
    }
    for (let i = 0; i < matchs.length; ++i) {
      const thD = document.createElement("th");
      thD.classList.add("day");
      thD.textContent = matchs[i].dateFR;
      trhead.appendChild(thD);
      const thM = document.createElement("th");
      thM.textContent = matchs[i].adversaire;
      const isAdvRec = matchs[i].adversaire === matchs[i].club_recepteur;
      thM.classList.add(isAdvRec ? "exterieur" : "interne");
      trhead2.appendChild(thM);
      const thH = document.createElement("th");
      thH.textContent = matchs[i].rdv ?? "";
      thH.classList.add(isAdvRec ? "h_exterieur" : "h_interne");
      trhead3.appendChild(thH);
      for (let k = 0; k < matchs[i].players.length; ++k) {
        const joueur = matchs[i].players[k];
        const club = matchs[i].adversaire;
        const td = document.getElementById("td_" + club + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("oui");
        td.title = "Présent";
      }
      for (let k = 0; k < matchs[i].previsionnels.length; ++k) {
        const joueur = matchs[i].previsionnels[k];
        const club = matchs[i].adversaire;
        const td = document.getElementById("td_" + club + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("maybe");
        td.title = "Prévisionnel";
      }
      for (let k = 0; k < matchs[i].remplacants.length; ++k) {
        const joueur = matchs[i].remplacants[k];
        const club = matchs[i].adversaire;
        const td = document.getElementById("td_" + club + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("remplacant");
        td.title = "Remplaçant disponible";
      }
      for (let k = 0; k < matchs[i].absents.length; ++k) {
        const joueur = matchs[i].absents[k];
        const club = matchs[i].adversaire;
        const td = document.getElementById("td_" + club + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("absent");
        td.title = "Absent";
      }
    }
    let nextMatch = Match.nextMatch();
    const para = document.getElementById("led");
    para.textContent = para.textContent.replace(
      "%MATCH%",
      `${nextMatch.adversaire} (${nextMatch.dateFR})`
    );
  });
}

function initDesktopMobile(doc) {
  const div = document.createElement("div");
  cls(div, "flex w-full items-center justify-between");

  const divLogo = document.createElement("div");
  divLogo.id = "logo-mobile";
  cls(
    divLogo,
    "flex items-center justify-start ml-4 w-12 h-12 rounded-full p-2 border-2"
  );

  const divFlex = document.createElement("div");
  divFlex.classList.add("flex");

  const img = document.createElement("img");
  img.src = "./images/logo.png";
  img.width = "50";
  img.height = "50";

  divFlex.appendChild(img);
  div.appendChild(divLogo);

  const div2 = document.createElement("div");
  cls(div2, "flex items-center justify-center w-full");

  const subDiv2 = document.createElement("div");
  cls(subDiv2, "flex flex-col items-center justify-center");
  subDiv2.id = "title-mobile";
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  h3.textContent = "Planning - Ping pong";
  h4.textContent = "Saison 2025-2026, phase 1";
  subDiv2.appendChild(h3);
  subDiv2.appendChild(h4);

  div2.appendChild(subDiv2);
  div.appendChild(div2);
  doc.appendChild(div);

  const divContent = document.createElement("div");
  cls(divContent, "flex flex-col h-[85vh] w-full overflow-auto mt-2 p-2");
  doc.appendChild(divContent);
  return divContent;
}

function initMobile() {
  d(() => {
    const doc = document.getElementById("container");
    doc.style.display = "flex";
    const content = initDesktopMobile(doc);
    for (let i = 0; i < matchs.length; ++i) {
      const match = matchs[i];
      const div = document.createElement("div");
      const marginTop = i === 0 ? "mt-2" : "mt-4";
      cls(div, `${marginTop} w-full flex flex-col border rounded-xl teams`);
      const divTitle = document.createElement("div");
      cls(divTitle, "flex flex-col w-full items-center justify-center p-1");

      const divRDV = document.createElement("div");
      cls(
        divRDV,
        "flex items-center justify-center w-full border-t border-black"
      );
      div.appendChild(divTitle);
      div.appendChild(divRDV);
      const spanTitle1 = document.createElement("div");
      const spanTitle2 = document.createElement("div");
      spanTitle1.textContent = `${match.dateFR} : `;
      spanTitle2.textContent = `\u21D2 ${match.adversaire}`;
      divTitle.appendChild(spanTitle1);
      divTitle.appendChild(spanTitle2);
      const nextMatch = Match.nextMatch();

      if (nextMatch.dateFR === match.dateFR) {
        cls(spanTitle1, "next-match");
        cls(spanTitle2, "next-match");
      }
      divRDV.textContent = `Rendez-vous : ${match.rdv ?? "À définir"}`;
      const classDiv =
        "flex w-full items-center justify-around border-t border-black relative py-2";

      if (match.players.length > 0) {
        const divJoueursPresents = document.createElement("div");
        cls(divJoueursPresents, classDiv + " presents");
        for (let jPr = 0; jPr < match.players.length; ++jPr) {
          const jp = match.players[jPr];
          const joueur = document.createElement("span");
          joueur.textContent = jp.split(" ")[0];
          divJoueursPresents.appendChild(joueur);
        }
        div.appendChild(divJoueursPresents);
      }

      if (match.previsionnels.length > 0) {
        const divJoueursPrevisionnels = document.createElement("div");
        cls(divJoueursPrevisionnels, classDiv + " previsionnels");
        for (let jPr = 0; jPr < match.previsionnels.length; ++jPr) {
          const jp = match.previsionnels[jPr];
          const joueur = document.createElement("span");
          joueur.textContent = jp.split(" ")[0];
          divJoueursPrevisionnels.appendChild(joueur);
        }
        div.appendChild(divJoueursPrevisionnels);
      }

      if (match.remplacants.length > 0) {
        const divJoueursRemplacants = document.createElement("div");
        cls(divJoueursRemplacants, classDiv + " remplacants");
        for (let jPr = 0; jPr < match.remplacants.length; ++jPr) {
          const jp = match.remplacants[jPr];
          const joueur = document.createElement("span");
          joueur.textContent = jp.split(" ")[0];
          divJoueursRemplacants.appendChild(joueur);
        }
        div.appendChild(divJoueursRemplacants);
      }

      if (match.absents.length > 0) {
        const divJoueursAbsents = document.createElement("div");
        cls(divJoueursAbsents, classDiv + " absents");
        for (let jPr = 0; jPr < match.absents.length; ++jPr) {
          const jp = match.absents[jPr];
          const joueur = document.createElement("span");
          joueur.textContent = jp.split(" ")[0];
          divJoueursAbsents.appendChild(joueur);
        }
        div.appendChild(divJoueursAbsents);
      }

      content.appendChild(div);
    }
  });
}

function isMobile() {
  return window.innerWidth <= 768;
}

window.onload = function () {
  d(
    () => {
      if (isMobile()) {
        initMobile();
      } else {
        init();
      }
    },
    (res) => {
      const a = prompt("Identifiant de connexion");
      const s = a.toLocaleLowerCase().replaceAll(" ", "");
      const [c, m] = s.split("/");
      const kc = "bGliZXJjb3VydA==";
      const km = "ZDNlMw==";
      const _c = btoa(c);
      const _m = btoa(m);
      console.log(_c, kc, _m, km);

      if (_c !== kc || _m !== km) {
        matchs = [];
        Joueurs = {};
        CLUB = {};
        DAY = {};
        document.body.remove();
      } else {
        localStorage.setItem(res, true);
        if (isMobile()) {
          initMobile();
        } else {
          init();
        }
      }
    }
  );
};
