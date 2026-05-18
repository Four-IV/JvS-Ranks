const clearanceInfo = [
  {
    level: "CL-0",
    title: "Trainee access",
    summary: "Entry rank access for younglings, acolytes, and initiates."
  },
  {
    level: "CL-1",
    title: "Apprentice access",
    summary: "Padawan and apprentice equivalent access."
  },
  {
    level: "CL-2",
    title: "Full member access",
    summary: "Knight and Sith Lord equivalent access."
  },
  {
    level: "CL-3",
    title: "Senior member access",
    summary: "Master and Darth equivalent access."
  },
  {
    level: "CL-4",
    title: "Security Clearance",
    summary: "Guard branch authority for arrests and restricted enforcement."
  },
  {
    level: "CL-5",
    title: "Council and SFL access",
    summary: "Council-level access and subfaction command."
  },
  {
    level: "CL-6",
    title: "High Council access",
    summary: "High command authority below the top faction leads."
  },
  {
    level: "CL-7",
    title: "Sub-commander access",
    summary: "Master of the Order and Emperor's Voice equivalent access."
  },
  {
    level: "CL-8",
    title: "Commander access",
    summary: "Grandmaster and Emperor authority."
  }
];

const tierLabels = {
  "CL-0": "Training rank",
  "CL-1": "Padawan / Apprentice",
  "CL-2": "Knight / Lord",
  "CL-3": "Master / Darth",
  "CL-4": "Security Clearance (For guards)",
  "CL-5": "Council / SFL",
  "CL-6": "High Council",
  "CL-7": "Sub-commander",
  "CL-8": "Faction command"
};

const factionData = {
  jedi: {
    name: "Jedi Order",
    mark: "assets/logos/jedi-order-blue.png",
    accent: "var(--jedi)",
    intro:
      "The Jedi structure focuses on training, protection, restraint, diplomacy, and controlled command. Its subfactions support defensive operations, investigation, temple security, healing, and knowledge keeping.",
    baseRanks: [
      role("Jedi Youngling", "CL-0"),
      role("Jedi Initiate", "CL-0"),
      role("Jedi Padawan", "CL-1"),
      role("Jedi Knight", "CL-2"),
      role("Jedi Master", "CL-3"),
      role("Jedi Councillor", "CL-5"),
      role("Jedi High Councillor", "CL-6"),
      role("Master of the Order", "CL-7"),
      role("Grandmaster", "CL-8")
    ],
    factionRoles: [
      {
        name: "Jedi Youngling",
        summary:
          "The first Jedi role on the server. Younglings are new to the Order and are still learning the basics of RP, conduct, and Jedi life."
      },
      {
        name: "Jedi Initiate",
        summary:
          "A new Jedi who has completed initial training and is ready to start taking part in more structured temple and training RP."
      },
      {
        name: "Jedi Padawan",
        summary:
          "A developing Jedi who is starting to find their place, learning from senior ranks, and may begin working with a subfaction."
      },
      {
        name: "Jedi Knight",
        summary:
          "A trusted Jedi with solid knowledge of the Order. Knights help newer members, pass trials, and begin proving themselves in proper field work."
      },
      {
        name: "Jedi Master",
        summary:
          "A valuable and experienced Jedi with deep knowledge of the Order. Masters teach lower ranks, support leadership, and help guide the faction."
      },
      {
        name: "Jedi Councillor",
        priority: true,
        summary:
          "Senior Council members who guide the Order, judge internal matters, approve major decisions, and oversee Jedi operations.",
        duties: [
          "Review promotions, trials, and disciplinary cases.",
          "Approve major missions, investigations, and diplomatic actions.",
          "Oversee Jedi subfactions and their leadership.",
          "Set expectations for Jedi conduct, training, and temple order.",
          "Resolve disputes between Jedi ranks or branches.",
          "Advise the Order during crises, attacks, and major events."
        ]
      },
      {
        name: "Jedi High Councillor",
        priority: true,
        summary:
          "High Council leaders who hold the highest regular authority in the Order and decide its most important direction.",
        duties: [
          "Make final decisions on major Jedi matters.",
          "Direct the wider strategy of the Order.",
          "Authorise sensitive operations, arrests, investigations, and high-risk missions.",
          "Supervise Council members and subfaction leaders.",
          "Decide responses to Sith threats, rogue Jedi, temple emergencies, and political crises.",
          "Represent the senior will of the Jedi Order."
        ]
      },
      {
        name: "Master of the Order",
        priority: true,
        summary:
          "The presiding leader of the Jedi High Council, responsible for keeping Council business and daily leadership moving properly.",
        duties: [
          "Lead Jedi Council and High Council meetings.",
          "Manage day-to-day leadership of the Jedi Order.",
          "Coordinate Councillors, High Councillors, and subfaction leaders.",
          "Approve major policy, discipline, promotions, and internal decisions.",
          "Represent Council authority during emergencies.",
          "Keep the Order organised, stable, and aligned with its teachings."
        ]
      },
      {
        name: "Grandmaster",
        priority: true,
        summary:
          "The highest-ranking figure of the Jedi Order and final authority on the most serious Jedi matters.",
        duties: [
          "Serve as the supreme leader of the Jedi Order.",
          "Set the Order's direction, values, and long-term goals.",
          "Make final rulings on the most serious Jedi matters.",
          "Lead the Order during wars, major Sith threats, temple crises, and server-wide events.",
          "Oversee the High Council, Council, and all Jedi branches.",
          "Act as the symbolic and practical head of the Jedi."
        ]
      }
    ],
    subfactions: [
      {
        name: "Guardians",
        mark: "assets/new-subfaction-logos/guardian.png",
        summary:
          "Frontline Jedi defenders, duelists, battlefield leaders, and protectors of the Order.",
        overview:
          "Guardians are the Order's shield in open conflict. They protect Jedi and civilians, hold the line during attacks, and take charge when a situation needs direct combat strength.",
        duties: [
          "Defend Jedi and civilians during attacks, raids, and hostile encounters.",
          "Act as frontline combatants during missions, patrols, and server events.",
          "Train other Jedi in lightsaber combat, discipline, forms, and defensive tactics.",
          "Respond to active threats where direct combat strength is required."
        ],
        focus: ["Defense", "Leadership", "Front line", "Saber forms"],
        ranks: standardRanks(
          ["Squire", "Guardian Aspirant", "Guardian Vanguard"],
          ["Paragon", "Guardian Defender", "High Guardian"],
          ["Weapon Master", "Battlemaster", "Paladin"],
          "Guardian SFL"
        )
      },
      {
        name: "Sentinels",
        mark: "assets/new-subfaction-logos/sentinel.png",
        summary:
          "Jedi scouts, agents, investigators, infiltrators, and covert problem-solvers.",
        overview:
          "Sentinels handle the quiet work the Order cannot ignore. They scout ahead, gather intelligence, uncover hidden threats, and solve problems before they become open battles.",
        duties: [
          "Scout hostile or unknown areas before full Jedi deployment.",
          "Gather intelligence through observation, tracking, interrogation, and field reports.",
          "Conduct stealth-based missions where open Jedi presence would cause escalation.",
          "Locate hidden threats, traps, spies, and assassins.",
          "Assist Temple Guard and Council with internal investigations."
        ],
        focus: ["Recon", "Investigation", "Stealth", "Precision"],
        ranks: standardRanks(
          ["Scout", "Pathfinder", "Agent"],
          ["Sentinel", "Investigator", "Operative"],
          ["Spectre", "Shadow", "Watchman"],
          "First Shadow"
        )
      },
      {
        name: "Temple Guard",
        mark: "assets/new-subfaction-logos/gaurds.png",
        summary:
          "Internal Jedi security, temple protectors, peacekeepers, and enforcers of Jedi law.",
        overview:
          "Temple Guard protect the Order from threats inside its own walls. They secure sacred spaces, enforce Council orders, keep peace in the temple, and respond first when internal security breaks down.",
        duties: [
          "Protect the Jedi Temple, sacred chambers, archives, Council areas, and restricted zones.",
          "Patrol temple grounds and maintain a visible security presence.",
          "Keep peace between Jedi, visitors, prisoners, and allied personnel.",
          "Enforce temple law, Council orders, and clearance restrictions.",
          "Detain or arrest Jedi and visitors who break temple rules or threaten the Order.",
          "Guard high-value prisoners, artefacts, Council meetings, and sensitive ceremonies.",
          "Respond first to internal disturbances, Sith infiltrators, rogue Jedi, and temple lockdowns."
        ],
        focus: ["Security", "Arrests", "Temple law", "Restricted access"],
        ranks: guardRanks(
          ["Ward", "Sentry", "Oathkeeper"],
          ["Temple Guard", "Sanctum Guard", "Sanctum Keeper"],
          ["Elder Guard", "High Protector", "Maskbearer"],
          "Barsen'thor"
        )
      },
      {
        name: "Consulars",
        mark: "assets/new-subfaction-logos/jediconsular.png",
        summary:
          "Jedi Force specialists, healers, diplomats, scholars, sages, and lorekeepers.",
        overview:
          "Consulars keep the Order grounded through healing, diplomacy, study, and careful use of the Force. They are the people Jedi turn to for knowledge, recovery, mediation, and deeper Force work.",
        duties: [
          "Heal and support Jedi or allies during missions, raids, trials, and aftermath RP.",
          "Provide diplomatic support during negotiations, disputes, and faction meetings.",
          "Study Jedi lore, Force mysteries, prophecies, ancient sites, and recovered artefacts.",
          "Maintain archives, records, mission reports, and knowledge repositories.",
          "Assist with Padawan education, meditation training, and Force discipline.",
          "Support combat from range with defensive Force techniques, healing, and control abilities.",
          "Perform in-depth medical RP."
        ],
        focus: ["Diplomacy", "Healing", "Archives", "Force study"],
        ranks: standardRanks(
          ["Novice", "Meditant", "Scholar"],
          ["Consular", "Sage", "Healer"],
          ["Lorekeeper", "Archivist", "Seer"],
          "High Sage"
        )
      }
    ]
  },
  sith: {
    name: "Sith Empire",
    mark: "assets/logos/sith-empire-red.png",
    accent: "var(--sith)",
    intro:
      "The Sith structure focuses on ambition, command, power, discipline through fear, and specialist dominance. Its subfactions support conquest, intelligence, internal security, rituals, and dark side study.",
    baseRanks: [
      role("Sith Acolyte", "CL-0"),
      role("Sith Initiate", "CL-0"),
      role("Sith Apprentice", "CL-1"),
      role("Sith Lord", "CL-2"),
      role("Darth", "CL-3"),
      role("Dark Councillor", "CL-5"),
      role("Emperor's Hand", "CL-6"),
      role("Emperor's Voice", "CL-7"),
      role("Emperor", "CL-8")
    ],
    factionRoles: [
      {
        name: "Sith Acolyte",
        summary:
          "The first Sith role on the server. Acolytes are new to the Empire and are still learning Sith RP, discipline, and survival."
      },
      {
        name: "Sith Initiate",
        summary:
          "A new Sith who has completed initial training and is ready to start proving themselves through academy and faction RP."
      },
      {
        name: "Sith Apprentice",
        summary:
          "A developing Sith who is finding their footing, learning from stronger Sith, and may begin working with a subfaction."
      },
      {
        name: "Sith Lord",
        summary:
          "A Sith with solid knowledge and enough strength to guide newcomers, handle trials, and prove their worth in proper operations."
      },
      {
        name: "Darth",
        summary:
          "A powerful and proven Sith with deep knowledge of the Empire. Darths teach lower ranks, support command, and carry real weight in faction RP."
      },
      {
        name: "Dark Councillor",
        priority: true,
        summary:
          "One of the most powerful Sith in the Empire, responsible for ruling major Sith affairs beneath the Emperor.",
        duties: [
          "Govern major Sith affairs, policy, and internal disputes.",
          "Oversee Sith subfactions and powerful Sith Lords.",
          "Approve promotions, punishments, trials, and executions.",
          "Direct military, political, intelligence, or relic-focused operations.",
          "Compete with other Councillors for influence and control.",
          "Enforce Sith law and the will of the Empire."
        ]
      },
      {
        name: "Emperor's Hand",
        priority: true,
        summary:
          "Hidden agents of the Emperor who operate outside normal command and carry out work the Dark Council may never see.",
        duties: [
          "Act as the Emperor's direct agents and secret executors.",
          "Carry out orders that bypass the Dark Council.",
          "Investigate threats to the Emperor, including betrayal within Sith ranks.",
          "Deliver Imperial decrees, secret missions, and hidden objectives.",
          "Monitor the Dark Council, Sith Lords, and military leadership.",
          "Operate with high authority through secrecy and manipulation."
        ]
      },
      {
        name: "Emperor's Voice",
        priority: true,
        summary:
          "The Emperor's mouthpiece and direct proxy, speaking with his authority when he is absent.",
        duties: [
          "Speak with the Emperor's authority when the Emperor is absent.",
          "Deliver final commands, decrees, punishments, and Imperial decisions.",
          "Represent the Emperor before the Dark Council and Sith Empire.",
          "Override lower Sith authority when acting on the Emperor's will.",
          "Direct major Sith operations, wars, purges, and crises.",
          "Serve as the Emperor's public-facing authority."
        ]
      },
      {
        name: "Emperor",
        priority: true,
        summary:
          "The supreme ruler of the Sith Empire and final authority over every Sith branch and command body.",
        duties: [
          "Serve as the absolute ruler of the Sith Empire.",
          "Decide the Empire's long-term direction, wars, enemies, and major goals.",
          "Command the Dark Council, Emperor's Voice, Emperor's Hand, and Sith leadership.",
          "Issue final rulings on betrayal, war, promotion, punishment, and conquest.",
          "Oversee server-wide Sith arcs, major campaigns, and existential threats.",
          "Embody the peak of Sith power, domination, and authority."
        ]
      }
    ],
    subfactions: [
      {
        name: "Warriors",
        mark: "assets/new-subfaction-logos/warriors.png",
        summary:
          "Sith frontline fighters, enforcers, duelists, juggernauts, marauders, and conquerors.",
        overview:
          "Warriors are the Empire's weapon in open war. They lead assaults, break enemy lines, and enforce Sith authority through strength, intimidation, and direct action.",
        duties: [
          "Lead assaults against Jedi, Republic forces, rebels, and anyone who opposes the Sith.",
          "Act as frontline fighters during combat events and hostile operations.",
          "Enforce Sith authority through strength, intimidation, and direct action.",
          "Train Sith in duelling, battlefield discipline, aggression, and survival.",
          "Break enemy defences, breach guarded positions, and hold conquered territory."
        ],
        focus: ["Assault", "Intimidation", "Front line", "Conquest"],
        ranks: standardRanks(
          ["Rookie", "Blooded", "Warrior"],
          ["Enforcer", "Marauder", "Veteran"],
          ["Juggernaut", "Warlord", "Warmaster"],
          "Grand Conqueror"
        )
      },
      {
        name: "Inquisitors",
        mark: "assets/new-subfaction-logos/inquisitor.png",
        summary:
          "Sith infiltrators, assassins, saboteurs, spies, interrogators, and dark-side investigators.",
        overview:
          "Inquisitors work in shadows, cells, interrogation rooms, and enemy territory. They find weakness, remove targets, sabotage defences, and keep Sith leadership informed.",
        duties: [
          "Assassinate high-value targets when subtle removal is preferred over open battle.",
          "Gather intelligence through spying, interrogation, surveillance, and manipulation.",
          "Expose traitors, spies, and weak links within Sith-controlled space.",
          "Sabotage enemy defences, supply lines, communications, and security systems.",
          "Use fear, deception, and dark-side pressure to control unstable situations."
        ],
        focus: ["Espionage", "Interrogation", "Assassination", "Secrets"],
        ranks: standardRanks(
          ["Infiltrator", "Saboteur", "Adept"],
          ["Inquisitor", "Assassin", "Shadowblade"],
          ["Elite Inquisitor", "High Inquisitor", "Dark Savant"],
          "Grand Inquisitor"
        )
      },
      {
        name: "Dark Honour Guard",
        mark: "assets/new-subfaction-logos/gaurds.png",
        summary:
          "Elite Sith security, ceremonial protectors, citadel guards, and enforcers of imperial authority.",
        overview:
          "The Dark Honour Guard protect Sith power from threats inside and outside the Empire. They guard restricted sites, enforce command hierarchy, and act quickly when betrayal or infiltration threatens leadership.",
        duties: [
          "Protect Sith temples, Council chambers, restricted zones, and imperial installations.",
          "Guard high-ranking Sith, Council members, prisoners, relics, and sensitive locations.",
          "Patrol Sith-controlled areas and maintain order through visible authority.",
          "Enforce Sith law, clearance restrictions, and command hierarchy.",
          "Detain, remove, or execute threats to Sith leadership when authorised.",
          "Secure ceremonies, trials, executions, interrogations, and Council gatherings.",
          "Respond to internal betrayal, Jedi infiltration, riots, and security breaches."
        ],
        focus: ["Imperial security", "Arrests", "Command protection", "Discipline"],
        ranks: guardRanks(
          ["Aegis", "Sentry", "Centurion"],
          ["Honor Guard", "Dark Honor Guard", "Crimson Guard"],
          ["Citadel Guard", "Imperial Guard", "Emperor's Guard"],
          "Lord Commander"
        )
      },
      {
        name: "Sorcerers",
        mark: "assets/new-subfaction-logos/sorcerer.png",
        summary:
          "Sith Force wielders, dark healers, ritualists, corruptors, alchemists, seers, and occult scholars.",
        overview:
          "Sorcerers turn dark-side knowledge into practical power. They heal, corrupt, experiment, study relics, and support Sith forces with rituals and ranged Force work.",
        duties: [
          "Use dark-side healing, corruption, and Force techniques to support Sith allies.",
          "Perform in-depth medical RP.",
          "Study Sith sorcery, ancient rituals, forbidden knowledge, relics, and dark-side anomalies.",
          "Conduct rituals, experiments, corruptions, and Force-based research.",
          "Provide ranged Force support during battles through lightning, draining, control, and dark power.",
          "Empower allies or weaken enemies through dark-side techniques.",
          "Maintain records of Sith discoveries, experiments, relics, and dangerous knowledge."
        ],
        focus: ["Rituals", "Alchemy", "Force power", "Support"],
        ranks: standardRanks(
          ["Mystic", "Initiate", "Mystic Seer"],
          ["Sorcerer", "Corruptor", "Ritualist"],
          ["Warlock", "Sith Alchemist", "Arch-Sorcerer"],
          "Dark Magister"
        )
      }
    ]
  }
};

let activeFaction = "jedi";

const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const baseRankTable = document.querySelector("#baseRankTable");
const clearanceList = document.querySelector("#clearanceList");
const leadershipList = document.querySelector("#leadershipList");
const subfactionList = document.querySelector("#subfactionList");

init();

function init() {
  applyTheme(localStorage.getItem("wg-theme") || "dark");
  renderPage();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-faction-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFaction = button.dataset.factionTab;
      syncFactionButtons();
      renderPage();
    });
  });

  themeToggle.addEventListener("change", () => {
    applyTheme(themeToggle.checked ? "light" : "dark");
  });
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.checked = theme === "light";
  localStorage.setItem("wg-theme", theme);
}

function syncFactionButtons() {
  document.querySelectorAll("[data-faction-tab]").forEach((button) => {
    const isActive = button.dataset.factionTab === activeFaction;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderPage() {
  const faction = factionData[activeFaction];
  baseRankTable.innerHTML = rankTable(
    ["Order", `${faction.name} rank`, "Clearance", "Role level"],
    faction.baseRanks
  );
  clearanceList.innerHTML = clearanceInfo.map(clearanceTemplate).join("");
  leadershipList.innerHTML = factionRolesTemplate(faction);
  subfactionList.innerHTML = faction.subfactions.map((subfaction) => subfactionTemplate(subfaction, faction)).join("");
}

function clearanceTemplate(item) {
  return `
    <article class="detail-row">
      <span class="badge ${commandClass(item.level)}">${item.level}</span>
      <span>
        <h3>${item.title}</h3>
        <small>${item.summary}</small>
      </span>
    </article>
  `;
}

function factionRolesTemplate(faction) {
  return `
    <div class="leadership-grid">
      ${faction.factionRoles
          .map(
            (item) => `
              <details class="leadership-card ${item.priority ? "priority-role" : ""}">
                <summary>
                  <span>
                    <h3>${item.name}</h3>
                    <p>${item.summary}</p>
                  </span>
                  ${item.priority ? `<span class="priority-key">Priority</span>` : ""}
                </summary>
                ${item.duties ? `<ul>${item.duties.map((duty) => `<li>${duty}</li>`).join("")}</ul>` : ""}
              </details>
            `
          )
          .join("")}
    </div>
  `;
}

function subfactionTemplate(subfaction, faction) {
  return `
    <details class="subfaction">
      <summary>
        <span class="sub-icon" style="color:${faction.accent}">
          <img src="${subfaction.mark}" alt="">
        </span>
        <span>
          <h3>${subfaction.name}</h3>
          <p class="sub-copy">${subfaction.summary}</p>
        </span>
      </summary>
      <div class="sub-body">
        <ul class="focus-list">
          ${subfaction.focus.map((focus) => `<li class="chip">${focus}</li>`).join("")}
        </ul>
        <div class="duty-box">
          <div class="duty-copy">
            <h4>What it does</h4>
            <p class="sub-copy">${subfaction.overview}</p>
          </div>
          <div class="duty-copy">
            <h4>Day-to-day role</h4>
            <ul class="duty-list">
              ${subfaction.duties.map((duty) => `<li>${duty}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="rank-table">
          ${rankTable(["Order", "Role", "Clearance", "Tier"], subfaction.ranks)}
        </div>
      </div>
    </details>
  `;
}

function rankTable(headers, ranks) {
  return `
    <div class="rank-head">
      ${headers.map((header) => `<span>${header}</span>`).join("")}
    </div>
    ${ranks
      .map(
        (item, index) => `
          <div class="rank-row">
            <span>${index + 1}</span>
            <span><strong>${item.name}</strong></span>
            <span><span class="badge ${commandClass(item.clearance)}">${item.clearance}</span></span>
            <span>${item.tier}</span>
          </div>
        `
      )
      .join("")}
  `;
}

function standardRanks(first, second, third, sfl) {
  return [
    ...first.map((name) => role(name, "CL-1")),
    ...second.map((name) => role(name, "CL-2")),
    ...third.map((name) => role(name, "CL-3")),
    role(sfl, "CL-5", "Subfaction Lead")
  ];
}

function guardRanks(first, second, third, sfl) {
  return [
    ...first.map((name) => role(name, "CL-4", "Guard authority")),
    ...second.map((name) => role(name, "CL-4", "Guard authority")),
    ...third.map((name) => role(name, "CL-4", "Guard authority")),
    role(sfl, "CL-5", "Subfaction Lead")
  ];
}

function role(name, clearance, tier = tierLabels[clearance]) {
  return { name, clearance, tier };
}

function commandClass(clearance) {
  return Number(clearance.replace("CL-", "")) >= 5 || clearance === "CL-4" ? "command" : "";
}
