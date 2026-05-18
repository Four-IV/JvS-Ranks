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

const APPLICATION_ENDPOINT = "https://wg-jvs-applications.iv-467.workers.dev/";
const TURNSTILE_SITE_KEY = "0x4AAAAAADR0OpKVMvlte8Oe";
const APPLICATION_COOLDOWN_MS = 10 * 60 * 1000;
const MAX_SELECTED_ROLES = 8;

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
        ranks: [
          role("Squire", "CL-1"),
          role("Guardian Aspirant", "CL-1"),
          role("Guardian", "CL-1"),
          role("Vanguard", "CL-2"),
          role("Paragon", "CL-2"),
          role("Guardian Defender", "CL-2"),
          role("High Guardian", "CL-3"),
          role("Weapon Master", "CL-3"),
          role("Battlemaster", "CL-3"),
          role("Paladin", "CL-5", "Subfaction Lead")
        ]
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
const applicationModal = document.querySelector("#applicationModal");
const applicationForm = document.querySelector("#applicationForm");
const roleInterestSections = document.querySelector("#roleInterestSections");
const roleQuestionSections = document.querySelector("#roleQuestionSections");
const applicationStatus = document.querySelector("#applicationStatus");
const turnstileMount = document.querySelector("#turnstileMount");

let turnstileWidgetId = null;

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

  document.querySelectorAll("[data-open-application]").forEach((button) => {
    button.addEventListener("click", openApplicationModal);
  });

  document.querySelectorAll("[data-close-application]").forEach((button) => {
    button.addEventListener("click", closeApplicationModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && applicationModal.classList.contains("open")) {
      closeApplicationModal();
    }
  });

  applicationForm.addEventListener("change", (event) => {
    if (event.target.name === "factions" || event.target.name === "roles") {
      renderApplicationRoles();
    }
  });

  applicationForm.addEventListener("submit", submitApplication);
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
          .map(leadershipCardTemplate)
          .join("")}
    </div>
  `;
}

function leadershipCardTemplate(item) {
  const priority = item.priority ? `<span class="priority-key">Priority</span>` : "";

  if (!item.duties) {
    return `
      <article class="leadership-card no-expand ${item.priority ? "priority-role" : ""}">
        <span>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
        </span>
        ${priority}
      </article>
    `;
  }

  return `
    <details class="leadership-card ${item.priority ? "priority-role" : ""}">
      <summary>
        <span>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
        </span>
        ${priority}
      </summary>
      <ul>${item.duties.map((duty) => `<li>${duty}</li>`).join("")}</ul>
    </details>
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

function openApplicationModal() {
  renderApplicationRoles();
  applicationModal.classList.add("open");
  applicationModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  loadTurnstile();
  applicationForm.querySelector("input[name='discordUsername']").focus();
}

function closeApplicationModal() {
  applicationModal.classList.remove("open");
  applicationModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderApplicationRoles() {
  const selectedFactions = getCheckedValues("factions");
  const selectedRoleIds = new Set(getCheckedValues("roles"));
  const roleAnswers = getRoleAnswerDrafts();

  roleInterestSections.hidden = selectedFactions.length === 0;
  roleQuestionSections.hidden = selectedRoleIds.size === 0;

  if (!selectedFactions.length) {
    roleInterestSections.innerHTML = "";
    roleQuestionSections.innerHTML = "";
    roleInterestSections.hidden = true;
    roleQuestionSections.hidden = true;
    return;
  }

  const groups = applicationRoleGroups().filter((group) => selectedFactions.includes(group.faction));
  const validRoleIds = new Set(groups.flatMap((group) => group.options.map((option) => option.id)));
  const limitedSelected = [...selectedRoleIds].filter((id) => validRoleIds.has(id)).slice(0, MAX_SELECTED_ROLES);

  roleInterestSections.innerHTML = `
    <div class="role-picker-head">
      <h3>Roles you are interested in <strong>*</strong></h3>
      <small>Select up to ${MAX_SELECTED_ROLES}. Separate groups make it easier to pick realistic roles.</small>
    </div>
    ${groups.map((group) => roleGroupTemplate(group, limitedSelected)).join("")}
  `;

  roleQuestionSections.innerHTML = limitedSelected.length
    ? `
      <div class="role-picker-head">
        <h3>Role-specific answers</h3>
        <small>These questions appear for each role you selected.</small>
      </div>
      ${limitedSelected.map((id) => roleQuestionTemplate(findApplicationRole(id), roleAnswers[id])).join("")}
    `
    : "";
  roleQuestionSections.hidden = limitedSelected.length === 0;
}

function roleGroupTemplate(group, selectedRoleIds) {
  return `
    <fieldset class="field role-group role-group-${group.faction} role-group-${group.kind}">
      <legend>
        <span>${escapeHtml(group.title)}</span>
        <small>${escapeHtml(group.caption)}</small>
      </legend>
      <div class="role-choice-grid">
        ${group.options
          .map((option) => {
            const checked = selectedRoleIds.includes(option.id) ? "checked" : "";
            return `
              <label class="role-choice role-choice-${option.faction}">
                <input type="checkbox" name="roles" value="${option.id}" ${checked} />
                <span>${escapeHtml(option.label)}</span>
                <small>${escapeHtml(option.detail)}</small>
              </label>
            `;
          })
          .join("")}
      </div>
    </fieldset>
  `;
}

function roleQuestionTemplate(roleOption, answers = {}) {
  if (!roleOption) {
    return "";
  }

  return `
    <section class="role-answer-card" data-role-id="${roleOption.id}">
      <h4>${escapeHtml(roleOption.label)}</h4>
      <label class="field">
        <span>Why do you wish to be ${escapeHtml(roleOption.label)}? <strong>*</strong></span>
        <textarea name="why_${roleOption.id}" required maxlength="1800" rows="3">${escapeHtml(answers.why || "")}</textarea>
      </label>
      <label class="field">
        <span>What can you bring to ${escapeHtml(roleOption.label)}? <strong>*</strong></span>
        <textarea name="bring_${roleOption.id}" required maxlength="1800" rows="3">${escapeHtml(answers.bring || "")}</textarea>
      </label>
    </section>
  `;
}

function applicationRoleGroups() {
  return Object.entries(factionData).flatMap(([factionKey, faction]) => {
    const seniorRole = faction.factionRoles.slice(4, 5).map((item) => ({
      id: roleId(factionKey, "core", item.name),
      label: item.name,
      detail: factionKey === "jedi" ? "Senior Jedi rank" : "Senior Sith rank",
      faction: factionKey
    }));

    const commandRoles = faction.factionRoles.filter((item) => item.duties).map((item) => ({
      id: roleId(factionKey, "command", item.name),
      label: item.name,
      detail: item.priority ? "Priority command role" : "Command role",
      faction: factionKey
    }));

    const sflRoles = faction.subfactions.map((item) => {
      const sflRank = item.ranks[item.ranks.length - 1];
      return {
        id: roleId(factionKey, "sfl", sflRank.name),
        label: sflRank.name,
        detail: `${item.name} SFL`,
        faction: factionKey
      };
    });

    return [
      {
        faction: factionKey,
        kind: "senior",
        title: `${faction.name} senior rank`,
        caption: factionKey === "jedi" ? "Master only from the core Jedi ladder." : "Darth only from the core Sith ladder.",
        options: seniorRole
      },
      {
        faction: factionKey,
        kind: "sfl",
        title: `${faction.name} subfaction leads`,
        caption: "SFL positions for specialist branches.",
        options: sflRoles
      },
      {
        faction: factionKey,
        kind: "command",
        title: `${faction.name} council and command`,
        caption: "Council, high command, and faction-leading roles.",
        options: commandRoles
      }
    ];
  });
}

function findApplicationRole(id) {
  return applicationRoleGroups()
    .flatMap((group) => group.options)
    .find((option) => option.id === id);
}

function roleId(faction, group, name) {
  return `${faction}-${group}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function getCheckedValues(name) {
  return [...applicationForm.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function getRoleAnswerDrafts() {
  const drafts = {};

  roleQuestionSections.querySelectorAll("[data-role-id]").forEach((card) => {
    const id = card.dataset.roleId;
    drafts[id] = {
      why: card.querySelector(`[name="why_${id}"]`)?.value || "",
      bring: card.querySelector(`[name="bring_${id}"]`)?.value || ""
    };
  });

  return drafts;
}

async function submitApplication(event) {
  event.preventDefault();
  setApplicationStatus("");

  const selectedFactions = getCheckedValues("factions");
  const selectedRoleIds = getCheckedValues("roles");

  if (!APPLICATION_ENDPOINT) {
    setApplicationStatus("Application sending is not connected yet. Add your Cloudflare Worker URL to APPLICATION_ENDPOINT in script.js.", true);
    return;
  }

  if (isOnCooldown()) {
    setApplicationStatus("Please wait a few minutes before sending another application.", true);
    return;
  }

  if (!selectedFactions.length) {
    setApplicationStatus("Pick at least one faction.", true);
    return;
  }

  if (!selectedRoleIds.length) {
    setApplicationStatus("Pick at least one role.", true);
    return;
  }

  if (selectedRoleIds.length > MAX_SELECTED_ROLES) {
    setApplicationStatus(`Pick ${MAX_SELECTED_ROLES} roles or fewer.`, true);
    return;
  }

  if (!applicationForm.reportValidity()) {
    setApplicationStatus("Fill in the required fields marked with *.", true);
    return;
  }

  const submitButton = applicationForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  setApplicationStatus("Sending application...");

  try {
    const payload = buildApplicationPayload(selectedFactions, selectedRoleIds);
    const response = await fetch(APPLICATION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.ok) {
      throw new Error(result.error || "Application failed to send.");
    }

    localStorage.setItem("wg-application-last-submit", String(Date.now()));
    applicationForm.reset();
    roleInterestSections.innerHTML = "";
    roleQuestionSections.innerHTML = "";
    roleInterestSections.hidden = true;
    roleQuestionSections.hidden = true;
    setApplicationStatus("Application sent. Staff will review it in Discord.");
  } catch (error) {
    setApplicationStatus(error.message || "Application failed to send.", true);
  } finally {
    submitButton.disabled = false;
  }
}

function buildApplicationPayload(factions, roleIds) {
  const formData = new FormData(applicationForm);
  const roles = roleIds.map((id) => findApplicationRole(id)).filter(Boolean);

  return {
    discordUsername: clean(formData.get("discordUsername")),
    steamLink: clean(formData.get("steamLink")),
    knownNames: clean(formData.get("knownNames")),
    wgRanks: clean(formData.get("wgRanks")),
    noxGenesisRanks: clean(formData.get("noxGenesisRanks")),
    rpExperience: clean(formData.get("rpExperience")),
    starWarsExperience: clean(formData.get("starWarsExperience")),
    factions,
    roles: roles.map((roleOption) => ({
      id: roleOption.id,
      label: roleOption.label,
      detail: roleOption.detail,
      faction: roleOption.faction
    })),
    roleAnswers: roles.map((roleOption) => ({
      role: roleOption.label,
      why: clean(formData.get(`why_${roleOption.id}`)),
      bring: clean(formData.get(`bring_${roleOption.id}`))
    })),
    additionalInfo: clean(formData.get("additionalInfo")),
    website: clean(formData.get("website")),
    turnstileToken: window.turnstile && turnstileWidgetId !== null ? window.turnstile.getResponse(turnstileWidgetId) : "",
    pageUrl: window.location.href,
    submittedAt: new Date().toISOString()
  };
}

function clean(value) {
  return String(value || "").trim();
}

function isOnCooldown() {
  const lastSubmit = Number(localStorage.getItem("wg-application-last-submit") || 0);
  return lastSubmit && Date.now() - lastSubmit < APPLICATION_COOLDOWN_MS;
}

function setApplicationStatus(message, isError = false) {
  applicationStatus.textContent = message;
  applicationStatus.classList.toggle("error", isError);
}

function loadTurnstile() {
  if (!TURNSTILE_SITE_KEY || turnstileWidgetId !== null) {
    return;
  }

  turnstileMount.hidden = false;

  const render = () => {
    if (!window.turnstile || turnstileWidgetId !== null) {
      return;
    }

    turnstileWidgetId = window.turnstile.render(turnstileMount, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: root.dataset.theme === "light" ? "light" : "dark"
    });
  };

  if (window.turnstile) {
    render();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  script.addEventListener("load", render);
  document.head.appendChild(script);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });
}
