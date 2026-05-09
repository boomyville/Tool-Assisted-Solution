/* Combined app source (original project files concatenated). */

/* icons.jsx */
/* Stroke icon set — Lucide-flavored, hand-tuned for warm sketch vibe */
const Icon = ({ name, size = 20, stroke = "currentColor", sw = 1.8, style = {} }) => {
  const paths = {
    home: <><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></>,
    plan: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
    parts: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5L13 10l1.2-1.2 2.5-2.5z"/></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></>,
    chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12z" /></>,
    back: <><path d="M15 6l-6 6 6 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <><path d="M5 12h14" /></>,
    check: <><path d="M5 12l4 4 10-10" /></>,
    x: <><path d="M6 6l12 12M18 6L6 18" /></>,
    chevron_right: <><path d="M9 6l6 6-6 6" /></>,
    chevron_down: <><path d="M6 9l6 6 6-6" /></>,
    chevron_up: <><path d="M6 15l6-6 6 6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4.9a7 7 0 0 0-2-1.2l-.4-2.5h-4l-.4 2.5a7 7 0 0 0-2 1.2L5.3 5.8l-2 3.4 2 1.6A7 7 0 0 0 5 12a7 7 0 0 0 .1 1.2l-2 1.6 2 3.4 2.4-.9a7 7 0 0 0 2 1.2l.4 2.5h4l.4-2.5a7 7 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6c0-.4.1-.8.1-1.2z" /></>,
    warning: <><path d="M12 3 2 21h20L12 3z" /><path d="M12 10v5M12 18.5v.1" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 8v.1M11 12h1v5h1" /></>,
    camera: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
    photo: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="1.8" /><path d="M21 17l-5-5-9 8" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></>,
    edit: <><path d="M4 20h4l11-11-4-4L4 16v4z" /><path d="M14 6l4 4" /></>,
    trash: <><path d="M4 7h16" /><path d="M9 7V4h6v3" /><path d="M6 7l1 13h10l1-13" /></>,
    link: <><path d="M10 14a4 4 0 0 1 0-5l3-3a4 4 0 0 1 6 6l-1.5 1.5" /><path d="M14 10a4 4 0 0 1 0 5l-3 3a4 4 0 0 1-6-6L6.5 10.5" /></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 0-2 2V5z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></>,
    spark: <><path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" /></>,
    send: <><path d="M3 12 21 4l-7 17-3-7-8-2z" /></>,
    flag: <><path d="M5 21V4h11l-2 4 2 4H5" /></>,
    award: <><circle cx="12" cy="9" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" /></>,
    archive: <><rect x="3" y="4" width="18" height="4" rx="1" /><path d="M5 8v12h14V8" /><path d="M10 12h4" /></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></>,
    cowboy: <><path d="M3 13c2-3 6-3 9-3s7 0 9 3" /><path d="M5 13c0 3 3 5 7 5s7-2 7-5" /><path d="M12 4c-1 2-3 3-5 3 1 1 3 2 5 2s4-1 5-2c-2 0-4-1-5-3z" /></>,
    drill: <><rect x="3" y="9" width="10" height="6" rx="1" /><path d="M13 11h3v2h-3z" /><path d="M16 12h4" /><path d="M6 15v2M10 15v2" /></>,
    inventory: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    bullseye: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></>,
    flame: <><path d="M12 21c4 0 7-3 7-7 0-3-2-5-3-7 0 2-2 3-3 3 0-3-1-5-3-7-1 4-5 6-5 11 0 4 3 7 7 7z" /></>,
    paint: <><rect x="4" y="3" width="16" height="6" rx="1" /><path d="M6 9v3h12V9" /><path d="M12 12v6" /><circle cx="12" cy="20" r="2" /></>,
    arrow_right: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    refresh: <><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>,
    snapshot: <><rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M9 6V4h6v2" /></>,
    folder: <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /></>,
    layers: <><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M2 13l10 5 10-5"/><path d="M2 18l10 5 10-5"/></>,
    ai: <><path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" /><path d="M9 9h6M9 13h4M9 17h2" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name] || null}
    </svg>
  );
};

window.Icon = Icon;

/* fixtures/projects.js */
/* Project fixtures — see FIXTURES.md for schema. */

window.FIXTURES = window.FIXTURES || {};

window.FIXTURES.userDefault = {
  name: null,
  location: "Armidale NSW",
  skill: 1,
  cowboy: false,
};

window.FIXTURES.proLookup = {
  searchUrl: ({ category, location }) =>
    "https://www.google.com/search?q=" +
    encodeURIComponent((category || "tradesperson") + " near " + (location || "")),
};

window.FIXTURES.projects = {
  door: {
    id: "door",
    name: "Bedroom door handle",
    summary: "Replace broken handle that rattles and won't latch.",
    category: "carpenter",
    user: "Casey",
    difficulty: "Easy",
    diffLevel: 1,
    estTime: "1 hr",
    verdict: "approved",
    verdictHeadline: "DIY Approved",
    why: "Door handle replacement is a contained mechanical repair: disassembly, matching the part, and reassembly. No electricity, plumbing, or load-bearing structure is involved. Your stated skill is well within range; the only reversible risk is misalignment, which is easy to spot before tightening.",
    minSkill: 0,
    updated: "Today",
    cover: "[door handle]",
    parts: [
      { id:"p1", name:"Replacement door handle (model A345)", own: false, where:"Stage 3", note:"" },
      { id:"p2", name:"Internal latch mechanism", own: false, where:"Stage 3", note:"Match existing 60 mm backset" },
      { id:"p3", name:"Screw kit — 6g × 30 mm", own: false, where:"Stage 3", note:"Pack of 8, only need 4" },
      { id:"p4", name:"Phillips screwdriver", own: true,  where:"Stage 1", note:"In your inventory" },
    ],
    stages: [
      {
        id: 1, title: "Disassemble the handle", time: "10 min", diff: "Easy", done: true,
        steps: [
          { text: "Open the door fully and prop it so it can't swing.", checkpoint: null, hazard: null, failureMode: null },
          { text: "Loosen and remove the two screws on the interior rosette.", checkpoint: null, hazard: null, failureMode: "Don't strip the screw heads — back out slowly with steady pressure." },
          { text: "Pull both handles free and set the spindle aside.", checkpoint: { text: "Both handles should come away with no force." }, hazard: null, failureMode: null },
        ],
      },
      {
        id: 2, title: "Purchase replacement parts", time: "30 min", diff: "Easy", done: false,
        steps: [
          { text: "Take the old handle and latch to the hardware store for matching.", checkpoint: null, hazard: null, failureMode: null },
          { text: "Confirm backset distance (60 mm here) and faceplate size match.", checkpoint: { text: "New latch faceplate should sit flush in the existing mortise." }, hazard: null, failureMode: "Mismatched backset = visible gap on reassembly." },
        ],
      },
      {
        id: 3, title: "Reassemble & test", time: "20 min", diff: "Easy", done: false,
        steps: [
          { text: "Hold the new latch with the tongue pointing outward (away from the door edge).", checkpoint: null, hazard: { text: "Latch installed backwards prevents the door from closing — verify orientation before fastening.", minSkill: 0 }, failureMode: null },
          { text: "Slide the latch into the bore until the faceplate is flush.", checkpoint: { text: "Faceplate should sit flat with no gap." }, hazard: null, failureMode: "Firm push, but don't force — if it resists, check alignment first." },
          { text: "Mark, pre-drill if hardwood, then drive the faceplate screws.", checkpoint: null, hazard: null, failureMode: "Tighten snug — over-torquing strips softwood." },
          { text: "Fit the new handles on either side, drop in the spindle, screw the rosette.", checkpoint: { text: "Final test: handle springs back, door latches and unlatches smoothly." }, hazard: null, failureMode: null },
        ],
      },
    ],
  },

  tap: {
    id: "tap",
    name: "Leaky kitchen tap",
    summary: "Swap the worn washer to stop the drip.",
    category: "plumber",
    user: "Casey",
    difficulty: "Easy",
    diffLevel: 1,
    estTime: "20 min",
    verdict: "approved",
    verdictHeadline: "DIY Approved",
    why: "Washer replacement is a contained plumbing repair downstream of an isolation valve. Worst case: it still drips and you call a plumber.",
    minSkill: 0,
    updated: "2 days ago",
    cover: "[kitchen tap]",
    parts: [
      { id:"p1", name:"Tap washer kit (assorted sizes)", own: false, where:"Stage 2", note:"Match diameter to old washer" },
      { id:"p2", name:"Adjustable spanner", own: true, where:"Stage 1", note:"In your inventory" },
    ],
    stages: [
      { id: 1, title: "Shut off & remove tap top", time: "10 min", diff: "Easy", done: false, steps: [
        { text: "Shut the water off at the isolation valve under the sink.", hazard: null, failureMode: null, checkpoint: { text: "Open the tap to confirm no water flows." }, reasoningKey: "tap__1__0" },
        { text: "Unscrew the tap handle and lift it off, then back out the spindle.", hazard: null, failureMode: "If the handle won't budge, don't lever it — penetrating oil and patience.", checkpoint: null },
      ]},
      { id: 2, title: "Swap washer & reassemble", time: "10 min", diff: "Easy", done: false, steps: [
        { text: "Replace the worn washer with the matching size from the kit.", hazard: null, failureMode: "Wrong size = drip continues. Match diameter to the old one.", checkpoint: null },
        { text: "Reassemble in reverse, restore water, run the tap, check for leaks.", hazard: null, failureMode: null, checkpoint: { text: "No drip when the tap is fully off." } },
      ]},
    ],
  },

  wall: {
    id: "wall",
    name: "Garage climbing wall",
    summary: "Frame and mount a 2.4 m bouldering wall with overhang.",
    category: "carpenter",
    user: "Marcus",
    difficulty: "Hard",
    diffLevel: 4,
    estTime: "2 weekends",
    verdict: "caution",
    verdictHeadline: "Proceed with caution",
    why: "Most of this build is within scope for a confident DIYer — framing, sheeting, T-nuts. The risk concentrates on one decision: how the wall is anchored. Modifying joist hangers or relying on drywall anchors to hold body weight is unsafe. With ledger boards lagged into studs (or a freestanding frame), this becomes a routine carpentry job.",
    minSkill: 0,
    updated: "Yesterday",
    cover: "[climbing wall]",
    parts: [
      { id:"p1", name:"2x4 framing lumber (×12)", own: false, where:"Stage 2", note:"" },
      { id:"p2", name:"19 mm structural plywood (4x8 sheet, ×3)", own: false, where:"Stage 4", note:"" },
      { id:"p3", name:"T-nuts ⅜\" (×120)", own: false, where:"Stage 4", note:"Pre-drill before installing" },
      { id:"p4", name:"Lag bolts ½\" × 4\" (×16)", own: false, where:"Stage 3", note:"For ledger to studs only" },
      { id:"p5", name:"Stud finder", own: true, where:"Stage 1", note:"In your inventory" },
      { id:"p6", name:"Cordless drill + impact driver", own: true, where:"All stages", note:"In your inventory" },
    ],
    stages: [
      { id:1, title:"Locate studs & mark layout", time:"1 hr", diff:"Easy", done:true, steps:[
        { text:"Find and mark every stud in the wall section.", hazard:null, failureMode:null, checkpoint:null },
        { text:"Mark anchor points along the studs at 600 mm spacing.", hazard:null, failureMode:null, checkpoint:{ text:"Marks should align with stud centres, not drywall." } },
      ]},
      { id:2, title:"Cut framing", time:"2 hr", diff:"Medium", done:true, steps:[
        { text:"Cut ledger boards to wall length.", hazard:{text:"Wear eye protection when cutting; clear offcuts from the saw path.", minSkill: 0}, failureMode:null, checkpoint:null },
      ]},
      { id:3, title:"Anchor ledger boards", time:"3 hr", diff:"Hard", done:false, minSkill: 1, steps:[
        { text:"Pre-drill ledger at every stud mark.", hazard:null, failureMode:null, checkpoint:null },
        { text:"Lag-bolt ledger directly into studs — never into drywall or modified joist hangers.", hazard:{text:"Body-weight loads require correct anchor ratings. Modifying joist hangers reduces their load-bearing capacity. Verify with a structural reference or consult a builder.", minSkill: 1}, failureMode:null, checkpoint:{ text:"Tug-test the ledger — should not flex or shift under hard pulling." } },
      ]},
      { id:4, title:"Sheet & T-nut", time:"4 hr", diff:"Medium", done:false, steps:[
        { text:"Pre-drill ⅜\" holes on a 200 mm grid.", hazard:null, failureMode:"Drill bit slightly narrower than T-nut shaft — too loose and they spin.", checkpoint:null },
        { text:"Hammer T-nuts in from the back.", hazard:null, failureMode:null, checkpoint:null },
        { text:"Lift sheet and screw to the framing.", hazard:{text:"Two-person lift — plywood sheets at height are awkward and heavy.", minSkill: 0}, failureMode:null, checkpoint:null },
      ]},
      { id:5, title:"Hold inspection & climb test", time:"30 min", diff:"Easy", done:false, steps:[
        { text:"Bolt 4–6 holds in low positions.", hazard:null, failureMode:null, checkpoint:null },
        { text:"Static load test (sit on a low hold) before climbing.", hazard:null, failureMode:null, checkpoint:{ text:"No flex, no creak from anchors. If anything moves, stop." } },
      ]},
    ],
  },

  fan: {
    id: "fan",
    name: "Ceiling fan installation",
    summary: "Hard-wire a ceiling fan into the lounge light fitting.",
    category: "electrician",
    user: "Casey",
    difficulty: "Hard",
    diffLevel: 5,
    estTime: "Get a sparky",
    verdict: "declined",
    verdictHeadline: "Get a licensed sparky",
    why: "Mains-voltage work is licensed in Australia (and most jurisdictions). The risk here isn't skill — it's legal and life-safety. An unpermitted electrical job can void your insurance, and a mistake can kill you or burn the house down.",
    minSkill: 99,
    updated: "5 days ago",
    cover: "[ceiling fan]",
    parts: [
      { id:"p1", name:"Ceiling fan unit", own: false, where:"Stage 2", note:"" },
      { id:"p2", name:"Mounting bracket (suit ceiling type)", own: false, where:"Stage 2", note:"" },
    ],
    stages: [
      { id:1, title:"Isolate the circuit", time:"15 min", diff:"Hard", done:false, steps:[
        { text:"Switch off the breaker for the lighting circuit and verify dead with a tester.", hazard:{ text:"Mains voltage. Test before you touch anything — meters lie, lockouts don't.", minSkill: 99 }, failureMode:null, checkpoint:{ text:"No voltage at the existing fitting — proven, not assumed." } },
      ]},
      { id:2, title:"Mount bracket & wire fan", time:"40 min", diff:"Hard", done:false, steps:[
        { text:"Fix the bracket to a structural member, never just plasterboard.", hazard:{ text:"A fan failing out of the ceiling is a serious injury risk. Bracket must be load-rated and in a joist.", minSkill: 99 }, failureMode:null, checkpoint:null },
        { text:"Connect active, neutral, and earth per the fan's wiring diagram.", hazard:{ text:"Incorrect wiring is a fire and shock risk. In AU this work legally requires a licensed electrician.", minSkill: 99 }, failureMode:null, checkpoint:null },
      ]},
      { id:3, title:"Test & finalise", time:"10 min", diff:"Easy", done:false, steps:[
        { text:"Restore power and run the fan through every speed.", hazard:{ text:"If anything trips, hums, or smells hot, kill power and call a sparky.", minSkill: 99 }, failureMode:null, checkpoint:{ text:"Fan runs smoothly on every speed without tripping the breaker." } },
      ]},
    ],
    declineAlternatives: [
      { kind: "pro-lookup", icon: "target", title: "Find a local sparky", body: "Licensed electrician — typical quote $180–$280 for a fan swap." },
      { kind: "simpler",    icon: "book",   title: "Add a USB-charging desk fan", body: "No wiring, no licensing — same airflow over a desk." },
      { kind: "prereq",     icon: "award",  title: "What an electrician needs to know", body: "Circuit, breaker rating, distance to nearest power point. Have those ready and the visit is faster." },
    ],
  },
};

window.FIXTURES.archived = [
  { id: "fence", name: "Fence paling replacement", stagesDone: 5, stagesTotal: 5, updated: "12 Mar" },
  { id: "floor", name: "Squeaky floorboard fix",   stagesDone: 2, stagesTotal: 2, updated: "28 Feb" },
];

window.FIXTURES.inventoryDefault = [
  { id:"i1", name:"Phillips screwdriver", category:"Hand tool" },
  { id:"i2", name:"Stud finder", category:"Hand tool" },
  { id:"i3", name:"Cordless drill + impact driver", category:"Power tool" },
  { id:"i4", name:"Tape measure (5 m)", category:"Hand tool" },
  { id:"i5", name:"Spirit level (600 mm)", category:"Hand tool" },
];

/* fixtures/ai.js */
/* AI fixtures — threads, askRouting, stepReasoning, loading phases.
   P0 ships skeletons; P1 authors the canonical content. */

window.FIXTURES = window.FIXTURES || {};

window.FIXTURES.threads = {
  /* Pre-seeded canonical thread — door stage 3 mortise complication. */
  "door__stage_3": [
    { from: "ai", text: "You're on the reassemble + test stage. What's going on?", greeting: true },
    { from: "user", text: "The latch won't slide in flush — it catches partway.", hasPhoto: true },
    { from: "ai", text: "Looks like a wood burr inside the bore from the original install. Pare it flush with a chisel or utility knife — light pressure, just shave the high spot." },
    { from: "user", text: "Done. Slides now but the faceplate isn't sitting flat." },
    { from: "ai", text: "Common. Score the mortise outline with a knife, then deepen by half a millimetre with the chisel. Faceplate should drop in flush after that." },
  ],
};

window.FIXTURES.askRouting = {
  _default: {
    fallback: "I'm not sure I caught that — can you share more, or a photo?",
  },
};

window.FIXTURES.stepReasoning = {};

window.FIXTURES.AI_LOADING_PHASES = [
  { label: "Drafting…",      ms: 600 },
  { label: "Safety review…", ms: 700 },
  { label: "Final pass…",    ms: 500 },
];

/* util.js */
/* Shared helpers — tier resolution + gating + localStorage glue. */

function pickTier(field, skill) {
  if (field == null) return null;
  if (typeof field === "string") return field;
  if (typeof field !== "object") return field;
  return field[skill] != null
    ? field[skill]
    : field[1] != null
      ? field[1]
      : Object.values(field)[0];
}

function gateFor(stage, project, skill, cowboy) {
  const stageMin = stage && stage.minSkill != null ? stage.minSkill : null;
  const projMin  = project && project.minSkill != null ? project.minSkill : 0;
  const required = stageMin != null ? stageMin : projMin;
  if (skill >= required) return "open";
  return cowboy ? "cowboy" : "locked";
}

const LS = {
  user:  "diy_user",
  onb:   "diy_onboarding_done",
  steps: "diy_step_progress",
  purch: "diy_purchased",
  inv:   "diy_inventory",
};

function lsRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch (e) { return fallback; }
}
function lsWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}
function lsClear(key) {
  try { localStorage.removeItem(key); } catch (e) {}
}

window.pickTier = pickTier;
window.gateFor = gateFor;
window.LS = LS;
window.lsRead = lsRead;
window.lsWrite = lsWrite;
window.lsClear = lsClear;

/* shell.jsx */
/* App shell helpers — top bar, bottom nav, modal */

const TopBar = ({ title, crumb, onBack, onChat, hideBack, hideChat }) => (
  <div className="top-bar">
    <button className="icon-btn" onClick={onBack} disabled={hideBack} aria-label="Back">
      {!hideBack && <Icon name="back" size={22} />}
    </button>
    <div className="title">
      {title}
      {crumb && <span className="crumb">{crumb}</span>}
    </div>
    <button className="icon-btn" onClick={onChat} disabled={hideChat} aria-label="Chat">
      {!hideChat && <Icon name="chat" size={20} />}
    </button>
  </div>
);

const BottomNav = ({ active, onNav }) => {
  const items = [
    { key: "home", label: "Home", icon: "home" },
    { key: "plan", label: "Plan", icon: "plan" },
    { key: "ai", label: "AI", icon: "ai" },
    { key: "parts", label: "Parts", icon: "parts" },
    { key: "profile", label: "Profile", icon: "profile" },
  ];
  return (
    <div className="bottom-nav">
      {items.map(it => (
        <button key={it.key}
          className={"item" + (active === it.key ? " active" : "")}
          onClick={() => onNav(it.key)}>
          <Icon name={it.icon} size={20} />
          <span className="lbl">{it.label}</span>
        </button>
      ))}
    </div>
  );
};

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Sheet = ({ title, onClose, children }) => (
  <>
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 12 }}>
      <h3 className="head" style={{margin:0}}>{title}</h3>
      <button className="icon-btn" onClick={onClose} aria-label="Close" style={{margin:-6}}>
        <Icon name="x" size={20} />
      </button>
    </div>
    {children}
  </>
);

window.TopBar = TopBar;
window.BottomNav = BottomNav;
window.Modal = Modal;
window.Sheet = Sheet;

/* onboarding.jsx */
function OnboardingScreen({ onDone, initialSkill = 1 }) {
  const [step, setStep] = React.useState(0);
  const [skill, setSkill] = React.useState(initialSkill);
  const [cowboy, setCowboy] = React.useState(false);

  const skills = [
    { key:0, label:"Just Starting", desc:"I've barely held a screwdriver. Walk me through the basics." },
    { key:1, label:"Getting Handy",    desc:"I can follow instructions and use common tools." },
    { key:2, label:"Experienced",desc:"I DIY regularly. Show me the essentials, skip the obvious." },
  ];

  const slides = [
    {
      title: "Welcome",
      body: (
        <>
          <div style={{ height: 88, marginTop: 8, marginBottom: 18, display:"flex", justifyContent:"center" }}>
            <div style={{
              width: 88, height: 88, borderRadius: 22, background: "var(--highlight)",
              border: "2px solid var(--ink)", display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow: "4px 4px 0 var(--ink)"
            }}>
              <Icon name="parts" size={44} sw={2} />
            </div>
          </div>
          <h2 style={{ fontFamily:"var(--font-h)", fontSize: 26, fontWeight: 800, margin:"0 0 6px", textAlign:"center" }}>
            DIY <span className="hand-underline">Companion</span>
          </h2>
          <p style={{ textAlign:"center", color:"var(--ink-soft)", fontSize: 14, lineHeight: 1.5, margin: "0 0 20px"}}>
            Your patient co-builder. Tell us what you want to fix or build, and we'll plan it stage by stage.
          </p>
          <div className="card" style={{ background: "var(--paper-deep)", border: "1px dashed var(--rule)" }}>
            <div style={{ display:"flex", gap: 10, alignItems:"flex-start" }}>
              <Icon name="spark" size={22} stroke="var(--highlight-deep)" />
              <div style={{ fontSize: 13, lineHeight: 1.45 }}>
                Three quick questions before we start. You can change all of these later in <strong>Settings</strong>.
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "About the AI",
      body: (
        <>
          <div style={{ display:"flex", alignItems:"center", gap: 10, marginBottom: 12 }}>
            <Icon name="shield" size={28} stroke="var(--safe)" />
            <h2 style={{ fontFamily:"var(--font-h)", fontSize: 22, fontWeight: 800, margin: 0 }}>How we use AI</h2>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 0 14px" }}>
            DIY Companion uses AI to plan your project. AI can be wrong. Here's what we do to keep you safe.
          </p>
          {[
            { icon:"layers", title:"Two-pass check", body:"Every plan is generated, then independently reviewed by a second AI before you see it." },
            { icon:"warning", title:"Safety-first verdicts", body:"If a project crosses into structural, electrical, or load-bearing risk, we flag it and offer alternatives." },
            { icon:"info", title:"Always explain", body:"Every verdict is explainable — tap “Why?” to see the reasoning behind it." },
          ].map((row, i) => (
            <div key={i} className="card" style={{ marginBottom: 8, display:"flex", gap: 10 }}>
              <div style={{ flexShrink:0, width: 32, height: 32, borderRadius: 8, background: "var(--paper-deep)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon name={row.icon} size={18} />
              </div>
              <div>
                <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14 }}>{row.title}</div>
                <div style={{ fontSize: 12.5, color:"var(--ink-soft)", lineHeight: 1.45 }}>{row.body}</div>
              </div>
            </div>
          ))}
          <div className="footnote" style={{ textAlign:"left", marginTop: 14, padding: "8px 10px", borderLeft: "3px dashed var(--highlight-deep)", background: "var(--highlight-bg)" }}>
            For anything load-bearing, electrical, or gas — get a second opinion from a human pro.
          </div>
        </>
      ),
    },
    {
      title: "Your skill level",
      body: (
        <>
          <h2 style={{ fontFamily:"var(--font-h)", fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>How handy are you?</h2>
          <p style={{ fontSize: 13.5, color: "var(--ink-soft)", margin: "0 0 14px", lineHeight: 1.5 }}>
            We tune step depth and tool assumptions to match. Change anytime in Settings.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap: 8, marginBottom: 14 }}>
            {skills.map(s => (
              <button key={s.key}
                onClick={() => setSkill(s.key)}
                style={{
                  border: skill === s.key ? "2px solid var(--ink)" : "1px solid var(--rule)",
                  background: skill === s.key ? "var(--highlight-bg)" : "var(--card)",
                  borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left",
                  fontFamily: "inherit", transition: "all .15s",
                }}>
                <div style={{ display:"flex", alignItems:"center", gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    border: "2px solid " + (skill === s.key ? "var(--ink)" : "var(--ink-light)"),
                    background: skill === s.key ? "var(--ink)" : "transparent",
                    boxShadow: skill === s.key ? "inset 0 0 0 3px var(--highlight)" : "none",
                  }} />
                  <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 15 }}>{s.label}</div>
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4, marginLeft: 28, lineHeight: 1.4 }}>
                  {s.desc}
                </div>
              </button>
            ))}
          </div>
          <h3 style={{ fontFamily:"var(--font-h)", fontSize: 14, fontWeight: 700, margin: "16px 0 6px" }}>Safety mode</h3>
          <div className="card" style={{ display:"flex", gap: 10, alignItems:"center" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 13.5, display:"flex", alignItems:"center", gap: 6 }}>
                <Icon name="cowboy" size={16} /> Cowboy mode
              </div>
              <div style={{ fontSize: 12, color:"var(--ink-soft)", lineHeight: 1.4, marginTop: 2 }}>
                {cowboy ? "Warn but allow risky projects" : "Lock out dangerous projects"}
              </div>
            </div>
            <button className={"toggle" + (cowboy ? " on" : "")} onClick={() => setCowboy(!cowboy)} aria-label="Toggle cowboy mode" />
          </div>
        </>
      ),
    },
  ];

  const last = step === slides.length - 1;

  return (
    <div style={{ display:"flex", flexDirection:"column", height: "100%" }}>
      {/* mini stepper + skip */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding: "12px 16px 0" }}>
        <div style={{ display:"flex", gap: 4 }}>
          {slides.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 22 : 8, height: 4, borderRadius: 2,
              background: i <= step ? "var(--highlight-deep)" : "var(--rule)",
              transition: "all .25s"
            }} />
          ))}
        </div>
        <button className="btn ghost small"
          onClick={() => onDone({ skill, cowboy })}
          style={{ padding: "4px 10px", fontSize: 12 }}>
          Skip
        </button>
      </div>

      <div className="scr fade-up" key={step} style={{ paddingTop: 22 }}>
        {slides[step].body}
      </div>

      <div style={{ padding: "12px 16px 18px", display:"flex", gap: 10, borderTop: "1px solid var(--rule)", background:"var(--paper)" }}>
        {step > 0 && (
          <button className="btn secondary" onClick={() => setStep(step - 1)} style={{ flexShrink:0 }}>
            <Icon name="back" size={16} />
          </button>
        )}
        <button className="btn full" onClick={() => last ? onDone({ skill, cowboy }) : setStep(step + 1)}>
          {last ? "Get started" : "Next"} <Icon name="arrow_right" size={16} />
        </button>
      </div>
    </div>
  );
}

window.OnboardingScreen = OnboardingScreen;

/* home.jsx */
function HomeScreen({ onOpenProject, onNew, projects, archived, userName }) {
  const greet = userName && typeof userName === "string" && userName.trim() ? userName.trim() : null;
  const [archiveOpen, setArchiveOpen] = React.useState(false);

  const ProjectCard = ({ p }) => {
    const total = p.stages.length;
    const done = p.stages.filter(s => s.done).length;
    return (
      <button onClick={() => onOpenProject(p.id)}
        style={{
          width: "100%", textAlign: "left",
          background: "var(--card)", border: "1px solid var(--rule)",
          borderRadius: 12, padding: 12, marginBottom: 10, cursor: "pointer",
          fontFamily: "inherit", transition: "border-color .15s, transform .08s",
        }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(.99)"}
        onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}>
        <div style={{ display:"flex", justifyContent:"space-between", gap: 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily:"var(--font-h)", fontSize: 15.5, fontWeight: 700, marginBottom: 2 }}>
              {p.name}
            </div>
            <div style={{ fontSize: 12, color:"var(--ink-light)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
              {p.summary}
            </div>
          </div>
          <span className={"pill " + (p.verdict === "approved" ? "safe" : p.verdict === "caution" ? "warn" : "danger")} style={{ flexShrink: 0, alignSelf: "flex-start" }}>
            {p.difficulty}
          </span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap: 8, marginTop: 10 }}>
          <div className="progress"><div style={{ width: (done/total*100) + "%", background: done===total ? "var(--safe)" : "var(--highlight-deep)" }} /></div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color:"var(--ink-light)", flexShrink:0 }}>{done}/{total}</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginTop: 6, fontSize: 11.5, color:"var(--ink-light)" }}>
          <span style={{ display:"inline-flex", gap: 4, alignItems: "center" }}>
            <Icon name="clock" size={12} /> {p.estTime}
          </span>
          <span style={{ fontFamily: "var(--font-hand)", fontSize: 14 }}>{p.updated}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="fade-up">
      <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", gap: 8, marginBottom: 14 }}>
        {greet ? (
          <h1 style={{ fontFamily:"var(--font-h)", fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
            Hi, <span className="hand-underline">{greet}</span>
          </h1>
        ) : <span />}
        <span className="footnote" style={{ margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>
          {projects.length + archived.length} projects
        </span>
      </div>

      <button className="btn full" onClick={onNew} style={{ marginBottom: 18, padding: "14px 16px", fontSize: 15 }}>
        <Icon name="plus" size={18} /> Start a new project
      </button>

      <h2 className="section">Active</h2>
      {projects.map(p => <ProjectCard key={p.id} p={p} />)}

      <div onClick={() => setArchiveOpen(!archiveOpen)}
        style={{
          marginTop: 14, display: "flex", alignItems: "center", gap: 6,
          cursor: "pointer", padding: "8px 4px", color: "var(--ink-soft)",
        }}>
        <Icon name={archiveOpen ? "chevron_down" : "chevron_right"} size={14} />
        <span style={{ fontFamily:"var(--font-h)", fontSize: 13, fontWeight: 600 }}>
          Completed ({archived.length})
        </span>
      </div>
      {archiveOpen && (
        <div className="fade-up">
          {archived.map(a => (
            <div key={a.id} style={{
              opacity: 0.7, background: "var(--paper-deep)", border: "1px solid var(--rule)",
              borderRadius: 10, padding: "10px 12px", marginBottom: 8,
            }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ fontFamily:"var(--font-h)", fontSize: 14, fontWeight: 600 }}>{a.name}</div>
                <span style={{ fontFamily:"var(--font-hand)", fontSize: 13, color:"var(--ink-light)" }}>{a.updated}</span>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap: 8, marginTop: 6 }}>
                <Icon name="check" size={14} stroke="var(--safe)" />
                <span style={{ fontSize: 11.5, color:"var(--ink-light)" }}>All {a.stagesTotal} stages complete</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

window.HomeScreen = HomeScreen;

/* input.jsx */
function InputScreen({ onSubmit, onPick }) {
  const [text, setText] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  const examples = [
    "My bedroom door handle rattles",
    "Build a climbing wall in the garage",
    "Fix a leaking kitchen tap",
  ];

  const submit = (preset) => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      onPick(preset || (text.toLowerCase().includes("climb") || text.toLowerCase().includes("wall") ? "wall" : "door"));
    }, 1200);
  };

  if (busy) {
    return (
      <div className="fade-up" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height: "70%", textAlign: "center", padding: "0 20px" }}>
        <div className="spin" style={{
          width: 48, height: 48, borderRadius: "50%",
          border: "4px solid var(--rule)", borderTopColor: "var(--highlight-deep)",
          marginBottom: 18,
        }} />
        <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Generating plan…</div>
        <div style={{ fontFamily:"var(--font-hand)", fontSize: 16, color:"var(--ink-light)" }}>Drafting → safety review → final pass</div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <h3 className="head">What are we tackling?</h3>
      <p className="muted small" style={{ margin: "0 0 14px" }}>Describe what you want to fix, build or improve.</p>

      <textarea className="input" rows={5}
        placeholder='e.g. "My bedroom door handle is broken and rattles when I turn it…"'
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ marginBottom: 12 }} />

      <button className="card dashed" style={{
        width: "100%", display: "flex", alignItems:"center", justifyContent:"center", gap: 8,
        background: "var(--paper-deep)", color:"var(--ink-soft)", cursor:"pointer",
        padding: "16px", marginBottom: 18, borderRadius: 12, fontFamily:"inherit"
      }}>
        <Icon name="camera" size={18} />
        <span style={{ fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 13 }}>Add photos</span>
        <span className="muted small">(optional)</span>
      </button>

      <h2 className="section">Or try a demo</h2>
      <div style={{ display:"flex", flexDirection:"column", gap: 6, marginBottom: 18 }}>
        <button className="btn ghost small" style={{ justifyContent:"flex-start" }} onClick={() => submit("door")}>
          <Icon name="folder" size={14} /> Door handle replacement (Casey)
        </button>
        <button className="btn ghost small" style={{ justifyContent:"flex-start" }} onClick={() => submit("wall")}>
          <Icon name="folder" size={14} /> Garage climbing wall (Marcus)
        </button>
      </div>

      <button className="btn full" onClick={() => submit()} disabled={!text.trim()}
        style={{ opacity: text.trim() ? 1 : 0.4 }}>
        Assess my project <Icon name="arrow_right" size={16} />
      </button>

      <div className="footnote">
        Skill level & tool inventory pulled from your profile.
      </div>
    </div>
  );
}

window.InputScreen = InputScreen;

/* check.jsx */
function CheckScreen({ project, onApprove, onDecline }) {
  const [whyOpen, setWhyOpen] = React.useState(false);
  const [showDecline, setShowDecline] = React.useState(false);

  const verdict = project.verdict;
  const palette = verdict === "approved"
    ? { bg: "var(--safe-bg)", border: "var(--safe)", color: "#2c5e36", icon: "check" }
    : verdict === "caution"
    ? { bg: "#FFF1D8", border: "#E9A93A", color: "#7A5500", icon: "warning" }
    : { bg: "var(--danger-bg)", border: "var(--danger-border)", color: "#B43A36", icon: "warning" };

  return (
    <div className="fade-up">
      <h2 className="section">Project check</h2>
      <h3 className="head" style={{ marginBottom: 14 }}>{project.name}</h3>

      {/* Verdict block — verdict on its own line */}
      <div style={{
        background: palette.bg, border: "2px solid " + palette.border,
        borderRadius: 14, padding: "14px 16px", marginBottom: 12,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap: 10 }}>
          <Icon name={palette.icon} size={28} stroke={palette.color} />
          <div>
            <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 18, color: palette.color }}>
              {project.verdictHeadline}
            </div>
            <div style={{ fontSize: 12.5, color: palette.color, opacity: 0.85 }}>
              {verdict === "approved" && "This is within your stated skill level."}
              {verdict === "caution" && "Doable — with one risk to watch."}
              {verdict === "declined" && "We recommend not attempting this yourself."}
            </div>
          </div>
        </div>
      </div>

      {/* Why? affordance directly below verdict */}
      <button onClick={() => setWhyOpen(!whyOpen)} style={{
        width: "100%", display: "flex", alignItems:"center", gap: 8,
        padding: "10px 12px", borderRadius: 10,
        border: "1px dashed var(--rule)", background: whyOpen ? "var(--paper-deep)" : "transparent",
        cursor: "pointer", fontFamily: "inherit", marginBottom: 10,
        transition: "background .15s",
      }}>
        <Icon name="info" size={16} />
        <span style={{ fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 13.5, flex: 1, textAlign:"left" }}>
          {whyOpen ? "Hide reasoning" : "Why? Show me"}
        </span>
        <Icon name={whyOpen ? "chevron_up" : "chevron_down"} size={16} />
      </button>
      {whyOpen && (
        <div className="card fade-up" style={{ background:"var(--paper-deep)", marginBottom: 14, borderStyle: "dashed" }}>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)" }}>
            {project.why}
          </div>
          <div style={{ display:"flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            <span className="tag info">checked twice</span>
            <span className="tag">skill: Handy</span>
            <span className="tag">no specialist tools</span>
          </div>
        </div>
      )}

      {/* Quick stats */}
      <div style={{ display:"grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
        <div className="card" style={{ textAlign:"center", padding: "10px 8px" }}>
          <div className="muted small">Difficulty</div>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 16, marginTop: 2 }}>{project.difficulty}</div>
          <div style={{ display:"flex", justifyContent:"center", gap: 2, marginTop: 4 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: "50%",
                background: i < project.diffLevel ? (verdict==="declined" ? "var(--danger)" : verdict==="caution" ? "var(--highlight-deep)" : "var(--safe)") : "var(--rule)" }} />
            ))}
          </div>
        </div>
        <div className="card" style={{ textAlign:"center", padding: "10px 8px" }}>
          <div className="muted small">Est. time</div>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 16, marginTop: 2 }}>{project.estTime}</div>
          <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>{project.stages.length} stages</div>
        </div>
        <div className="card" style={{ textAlign:"center", padding: "10px 8px" }}>
          <div className="muted small">Parts</div>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 16, marginTop: 2 }}>{project.parts.length}</div>
          <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>
            {project.parts.filter(p => p.own).length} owned
          </div>
        </div>
      </div>

      {!showDecline ? (
        <>
          <button className="btn full" onClick={onApprove}>
            Generate my plan <Icon name="arrow_right" size={16} />
          </button>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <button className="btn ghost small" onClick={() => setShowDecline(true)}>
              Not for me — what else can I do?
            </button>
          </div>
        </>
      ) : (
        <div className="fade-up">
          <h2 className="section" style={{ marginTop: 8 }}>What you can do instead</h2>
          {[
            { icon:"target", title:"Find a local pro", body:"We'll match you with vetted tradies near you, with quotes." },
            { icon:"book", title:"Try a simpler version", body:project.id === "wall" ? "Freestanding wall — no anchoring required." : "Tighten existing handle screws — covers ~40% of rattling cases." },
            { icon:"award", title:"Learn the prerequisite", body:"Short guide on stud-finding, anchor types, and load ratings before you commit." },
          ].map((opt, i) => (
            <button key={i} style={{
              width: "100%", textAlign: "left", marginBottom: 8,
              background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 12,
              padding: 12, cursor: "pointer", fontFamily:"inherit",
              display:"flex", gap: 10, alignItems:"flex-start",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--paper-deep)",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink: 0 }}>
                <Icon name={opt.icon} size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14 }}>{opt.title}</div>
                <div style={{ fontSize: 12.5, color:"var(--ink-soft)", lineHeight: 1.45, marginTop: 2 }}>{opt.body}</div>
              </div>
              <Icon name="chevron_right" size={16} stroke="var(--ink-light)" style={{ marginTop: 8 }} />
            </button>
          ))}
          <button className="btn ghost full" onClick={() => setShowDecline(false)} style={{ marginTop: 4 }}>
            <Icon name="back" size={16} /> Back to verdict
          </button>
        </div>
      )}
    </div>
  );
}

window.CheckScreen = CheckScreen;

/* plan.jsx */
function PlanScreen({ project, skill, cowboy, onOpenStage, onTogglePart, onAddPart, onDeletePart, onSnapshot, onRestart, onSwitchToCowboy, proLookup, user }) {
  const [adding, setAdding] = React.useState(false);
  const [newName, setNewName] = React.useState("");

  const total = project.stages.length;
  const done = project.stages.filter(s => s.done).length;
  const projectGate = window.gateFor(null, project, skill, cowboy);

  return (
    <div className="fade-up">
      {/* Project header */}
      <h2 className="section">{project.user}'s project</h2>
      <h3 className="head" style={{ marginBottom: 4 }}>{project.name}</h3>
      <div style={{ display:"flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        <span className={"pill " + (project.verdict === "approved" ? "safe" : "warn")}>
          {project.verdict === "approved" ? "DIY approved" : "Proceed with caution"}
        </span>
        <span className="pill">{project.difficulty}</span>
        <span className="pill"><Icon name="clock" size={11} /> {project.estTime}</span>
      </div>

      {/* Overall progress */}
      <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 18 }}>
        <div className="progress"><div style={{ width: (done/total*100) + "%" }} /></div>
        <span style={{ fontFamily:"var(--font-mono)", fontSize: 12, color:"var(--ink-soft)", flexShrink:0 }}>
          {done}/{total} stages
        </span>
      </div>

      {/* Parts & Tools — moved above stages */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 8 }}>
        <h2 className="section" style={{ margin: 0 }}>Parts & Tools</h2>
        <button className="btn ghost small" onClick={() => setAdding(true)}>
          <Icon name="plus" size={13} /> Add
        </button>
      </div>

      {project.parts.map(p => (
        <div key={p.id} className="card" style={{
          marginBottom: 6, padding: "10px 10px 10px 12px",
          background: p.own ? "var(--safe-bg)" : "var(--card)",
          borderColor: p.own ? "#B6D6B6" : "var(--rule)",
        }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap: 10 }}>
            <button className={"check" + (p.own ? " on" : "")} onClick={() => onTogglePart(p.id)}
              aria-label={p.own ? "Mark as needed" : "Mark as owned"}>
              <Icon name="check" size={14} stroke="white" sw={3} />
            </button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 13.5, lineHeight: 1.3 }}>
                {p.name}
              </div>
              <div style={{ display:"flex", gap: 6, alignItems:"center", marginTop: 3, flexWrap:"wrap" }}>
                <span style={{ fontSize: 11, color:"var(--ink-light)" }}>{p.where}</span>
                {p.own && <span className="tag safe" style={{ fontSize: 12 }}>already have it</span>}
                {p.note && !p.own && <span className="tag" style={{ fontSize: 12 }}>{p.note}</span>}
              </div>
            </div>
            <button className="icon-btn" onClick={() => onDeletePart(p.id)} aria-label="Remove" style={{ width: 30, height: 30, color: "var(--ink-light)" }}>
              <Icon name="trash" size={15} />
            </button>
          </div>
        </div>
      ))}

      {adding && (
        <div className="card fade-up" style={{ marginBottom: 6, padding: 10, background: "var(--paper-deep)" }}>
          <input className="input" autoFocus
            placeholder="e.g. Hammer drill, 6mm bit"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && newName.trim()) { onAddPart(newName); setNewName(""); setAdding(false); }
              if (e.key === "Escape") { setAdding(false); setNewName(""); }
            }}
            style={{ marginBottom: 8 }}/>
          <div style={{ display:"flex", gap: 6, justifyContent:"flex-end" }}>
            <button className="btn ghost small" onClick={() => { setAdding(false); setNewName(""); }}>Cancel</button>
            <button className="btn small" disabled={!newName.trim()} onClick={() => { onAddPart(newName); setNewName(""); setAdding(false); }}>
              Add
            </button>
          </div>
        </div>
      )}

      <div className="divider" />

      {/* Stages */}
      <h2 className="section">Stages</h2>
      {projectGate === "locked" && (
        <div className="card dashed fade-up" style={{ background: "var(--danger-bg)", borderColor: "var(--danger-border)", marginBottom: 12, padding: 14 }}>
          <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 6 }}>
            <Icon name="warning" size={18} stroke="var(--danger)" />
            <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14, color: "#7A2522" }}>
              Plan locked
            </div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "#7A2522", marginBottom: 12 }}>
            This project is above your stated skill level. Either get a pro, try a simpler version, or switch to cowboy mode to proceed at your own risk.
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap: 6 }}>
            <button className="btn small" onClick={() => {
              if (proLookup) window.open(proLookup.searchUrl({ category: project.category, location: user && user.location }), "_blank");
            }}>
              <Icon name="target" size={13} /> Find a local pro
            </button>
            <button className="btn ghost small">
              <Icon name="book" size={13} /> Try a simpler version
            </button>
            <button className="btn ghost small" onClick={onSwitchToCowboy}>
              <Icon name="cowboy" size={13} /> Switch to cowboy mode
            </button>
          </div>
        </div>
      )}
      {projectGate === "cowboy" && (
        <div style={{
          background: "var(--danger-bg)", border: "2px solid var(--danger-border)",
          borderRadius: 10, padding: "10px 12px", marginBottom: 12,
          display:"flex", gap: 8, alignItems:"center",
        }}>
          <Icon name="cowboy" size={18} stroke="var(--danger)" />
          <div style={{ fontSize: 12.5, color: "#7A2522", lineHeight: 1.4, fontFamily: "var(--font-h)", fontWeight: 600 }}>
            You're below the recommended skill — warnings stay loud.
          </div>
        </div>
      )}
      {projectGate !== "locked" && project.stages.map((s, i) => {
        const isCurrent = !s.done && (i === 0 || project.stages[i-1].done);
        return (
          <button key={s.id} onClick={() => onOpenStage(s.id)} style={{
            width: "100%", textAlign: "left", marginBottom: 8,
            background: s.done ? "var(--safe-bg)" : "var(--card)",
            border: isCurrent ? "2px solid var(--ink)" : "1px solid " + (s.done ? "#B6D6B6" : "var(--rule)"),
            borderRadius: 12, padding: 12, cursor: "pointer", fontFamily:"inherit",
            position: "relative",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap: 12 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: s.done ? "var(--safe)" : isCurrent ? "var(--highlight)" : "var(--paper-deep)",
                color: s.done ? "white" : "var(--ink)",
                border: s.done ? "none" : "1.5px solid " + (isCurrent ? "var(--ink)" : "var(--rule)"),
                display:"flex", alignItems:"center", justifyContent:"center",
                flexShrink: 0,
                fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 13,
              }}>
                {s.done ? <Icon name="check" size={15} stroke="white" sw={3} /> : s.id}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14.5, marginBottom: 2 }}>{s.title}</div>
                <div style={{ display:"flex", gap: 8, fontSize: 11.5, color:"var(--ink-light)" }}>
                  <span style={{ display:"inline-flex", alignItems:"center", gap: 3 }}><Icon name="clock" size={11} /> {s.time}</span>
                  <span>·</span>
                  <span>{s.diff}</span>
                  {isCurrent && <><span>·</span><span style={{ fontFamily:"var(--font-hand)", fontSize: 13, color:"var(--ink)" }}>up next</span></>}
                </div>
              </div>
              <Icon name="chevron_right" size={16} stroke="var(--ink-light)" />
            </div>
          </button>
        );
      })}

      <div className="divider" />

      <div style={{ display:"flex", gap: 8 }}>
        <button className="btn ghost small" onClick={onSnapshot} style={{ flex: 1 }}>
          <Icon name="snapshot" size={14} /> Save snapshot
        </button>
        <button className="btn ghost small" onClick={onRestart} style={{ flex: 1 }}>
          <Icon name="refresh" size={14} /> Regenerate
        </button>
      </div>
      <div className="footnote">
        Snapshots export the current plan as text. Regenerate restarts from your description.
      </div>
    </div>
  );
}

window.PlanScreen = PlanScreen;

/* parts.jsx */
function PartsScreen({ projects, onOpenProject, onTogglePurchased, purchased }) {
  const [filter, setFilter] = React.useState("needed"); // needed | purchased | all

  // Aggregate: every non-owned part across active projects becomes a shopping-list line
  const lines = [];
  Object.values(projects).forEach(p => {
    p.parts.forEach(part => {
      if (!part.own) {
        lines.push({
          id: p.id + "-" + part.id,
          name: part.name,
          where: part.where,
          note: part.note,
          projectId: p.id,
          projectName: p.name,
          purchased: !!purchased[p.id + "-" + part.id],
        });
      }
    });
  });

  const filtered = filter === "needed"
    ? lines.filter(l => !l.purchased)
    : filter === "purchased"
    ? lines.filter(l => l.purchased)
    : lines;

  const totalNeeded = lines.filter(l => !l.purchased).length;
  const totalPurchased = lines.filter(l => l.purchased).length;

  // Group by project
  const byProject = {};
  filtered.forEach(l => {
    if (!byProject[l.projectId]) byProject[l.projectId] = { name: l.projectName, items: [] };
    byProject[l.projectId].items.push(l);
  });

  return (
    <div className="fade-up">
      <h2 className="section">Shopping list</h2>
      <h3 className="head" style={{ marginBottom: 4 }}>What I need to buy</h3>
      <p className="muted small" style={{ margin: "0 0 14px", lineHeight: 1.5 }}>
        Aggregated across all projects. Owned items live in <strong>Settings → Inventory</strong>; per-project lists live inside each plan.
      </p>

      {/* Summary */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 8, marginBottom: 14 }}>
        <div className="card" style={{ padding: "10px 12px", background:"var(--highlight-bg)", borderColor:"var(--highlight-deep)" }}>
          <div className="muted small">To buy</div>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 22 }}>{totalNeeded}</div>
        </div>
        <div className="card" style={{ padding: "10px 12px", background:"var(--safe-bg)", borderColor:"#B6D6B6" }}>
          <div className="muted small">Picked up</div>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 22, color:"#2c5e36" }}>{totalPurchased}</div>
        </div>
      </div>

      {/* Filter */}
      <div className="seg" style={{ marginBottom: 14 }}>
        {[["needed","To buy"], ["purchased","Picked up"], ["all","All"]].map(([k, l]) => (
          <button key={k} className={filter === k ? "active" : ""} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="card dashed" style={{
          textAlign: "center", padding: "30px 16px", background: "var(--paper-deep)",
        }}>
          <Icon name="check" size={28} stroke="var(--safe)" />
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14, marginTop: 6 }}>
            {filter === "needed" ? "Nothing to buy right now" : filter === "purchased" ? "No purchases yet" : "Shopping list is empty"}
          </div>
          <div className="footnote" style={{ marginTop: 4 }}>
            {filter === "needed" && "Everything across your projects is sorted."}
          </div>
        </div>
      )}

      {/* Grouped by project */}
      {Object.entries(byProject).map(([pid, group]) => (
        <div key={pid} style={{ marginBottom: 16 }}>
          <button onClick={() => onOpenProject(pid)} style={{
            width:"100%", display:"flex", alignItems:"center", gap: 6,
            background:"transparent", border:"none", padding: "0 0 6px 0",
            cursor:"pointer", fontFamily:"inherit", textAlign:"left",
          }}>
            <Icon name="folder" size={13} stroke="var(--ink-light)" />
            <span style={{ fontFamily:"var(--font-h)", fontSize: 11.5, fontWeight: 700, color:"var(--ink-soft)", textTransform:"uppercase", letterSpacing:".06em" }}>
              {group.name}
            </span>
            <span style={{ fontFamily:"var(--font-mono)", fontSize: 10.5, color:"var(--ink-light)" }}>
              · {group.items.length}
            </span>
            <Icon name="chevron_right" size={12} stroke="var(--ink-light)" style={{ marginLeft: "auto" }} />
          </button>

          {group.items.map(item => (
            <div key={item.id} className="card" style={{
              marginBottom: 6, padding: "10px 10px 10px 12px",
              background: item.purchased ? "var(--safe-bg)" : "var(--card)",
              borderColor: item.purchased ? "#B6D6B6" : "var(--rule)",
            }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap: 10 }}>
                <button className={"check" + (item.purchased ? " on" : "")} onClick={() => onTogglePurchased(item.id)}
                  aria-label={item.purchased ? "Mark as unbought" : "Mark as bought"}>
                  <Icon name="check" size={14} stroke="white" sw={3} />
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 13.5, lineHeight: 1.3,
                    textDecoration: item.purchased ? "line-through" : "none",
                    color: item.purchased ? "var(--ink-light)" : "var(--ink)",
                  }}>
                    {item.name}
                  </div>
                  <div style={{ display:"flex", gap: 6, alignItems:"center", marginTop: 3, flexWrap:"wrap" }}>
                    <span style={{ fontSize: 11, color:"var(--ink-light)" }}>{item.where}</span>
                    {item.note && <span className="tag" style={{ fontSize: 12 }}>{item.note}</span>}
                  </div>
                </div>
                <button className="icon-btn" aria-label="Find link" style={{ width: 30, height: 30, color:"var(--ink-light)" }}>
                  <Icon name="link" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="divider" />
      <div className="footnote" style={{ textAlign: "left", padding: "8px 10px", borderLeft: "3px dashed var(--rule)", background: "var(--paper-deep)", borderRadius: "0 6px 6px 0" }}>
        Tip: items you'll keep using become inventory. From the project plan, tap a part's checkbox to mark "already have it" — it auto-adds to your owned tools.
      </div>
    </div>
  );
}

window.PartsScreen = PartsScreen;

/* stage.jsx */
function StageScreen({ project, stageId, skill, cowboy, onBack, onChat, onComplete, onToggleStep, completed, dismissedSafety, onDismissSafety, onSwitchToCowboy, proLookup, user }) {
  const stage = project.stages.find(s => s.id === stageId) || project.stages[0];
  const idx = project.stages.findIndex(s => s.id === stage.id);
  const gate = window.gateFor(stage, project, skill, cowboy);
  const [media, setMedia] = React.useState({}); // step idx -> "photo" | "video" | null
  const [showSafety, setShowSafety] = React.useState(
    !dismissedSafety && stage.steps.some(s => s.hazard) && project.verdict !== "approved" && gate !== "locked"
  );
  const [stageDoneOpen, setStageDoneOpen] = React.useState(false);

  const stepCount = stage.steps.length;
  const doneCount = stage.steps.reduce((acc, _, i) => acc + (completed[i] ? 1 : 0), 0);
  const allDone = doneCount === stepCount;

  return (
    <>
      {/* Safety modal — dismissible per session */}
      {showSafety && (
        <div className="modal-overlay" onClick={() => { setShowSafety(false); onDismissSafety(); }}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ display:"flex", alignItems:"flex-start", gap: 10, marginBottom: 10 }}>
              <Icon name="warning" size={26} stroke="var(--danger)" />
              <div>
                <h3 className="head" style={{ margin: 0, color: "var(--danger)" }}>Heads up before you start</h3>
                <div className="muted small" style={{ marginTop: 2 }}>This stage has injury-risk steps</div>
              </div>
            </div>
            <div style={{ background: "var(--danger-bg)", border: "1.5px dashed var(--danger-border)", borderRadius: 10, padding: 12, fontSize: 13.5, lineHeight: 1.5, color: "#7A2522", marginBottom: 12 }}>
              {stage.steps.find(s => s.hazard)?.hazard.text}
            </div>
            <div style={{ display:"flex", gap: 8 }}>
              <button className="btn ghost" style={{ flex: 1 }} onClick={() => { setShowSafety(false); onDismissSafety(); }}>Got it</button>
              <button className="btn" style={{ flex: 1 }} onClick={onChat}>
                <Icon name="chat" size={14} /> Ask
              </button>
            </div>
            <div style={{ textAlign:"center", marginTop: 8 }}>
              <span className="footnote" style={{ margin: 0 }}>Dismissed for this session.</span>
            </div>
          </div>
        </div>
      )}

      {/* Stage complete modal */}
      {stageDoneOpen && (
        <div className="modal-overlay" onClick={() => setStageDoneOpen(false)}>
          <div className="modal fade-up" onClick={e => e.stopPropagation()}>
            <div style={{ textAlign:"center", padding: "10px 0 4px" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: "var(--safe)",
                margin: "0 auto 10px", display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <Icon name="check" size={36} stroke="white" sw={3} />
              </div>
              <h3 className="head" style={{ margin: 0 }}>Stage {stage.id} done!</h3>
              <p className="muted" style={{ fontSize: 13, margin: "4px 0 14px" }}>
                {idx === project.stages.length - 1 ? "Project complete." : "Up next: " + project.stages[idx+1].title}
              </p>
            </div>
            <div style={{ display:"flex", gap: 8 }}>
              <button className="btn ghost" style={{flex:1}} onClick={() => setStageDoneOpen(false)}>Stay here</button>
              <button className="btn" style={{flex:1}} onClick={() => { setStageDoneOpen(false); onComplete(stage.id); }}>
                {idx === project.stages.length - 1 ? "Finish project" : "Next stage →"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fade-up">
        <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 6 }}>
          <span className="tag safe">Stage {stage.id} of {project.stages.length}</span>
          <span className="tag">~{stage.time}</span>
          {stage.diff !== "Easy" && <span className="tag" style={{ background: "#FFF1D8", borderColor: "#E9A93A", color:"#7A5500" }}>{stage.diff}</span>}
        </div>
        <h3 className="head" style={{ fontSize: 20, marginBottom: 4 }}>{stage.title}</h3>
        <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 16 }}>
          <div className="progress"><div style={{ width: (doneCount/stepCount*100) + "%" }} /></div>
          <span style={{ fontFamily:"var(--font-mono)", fontSize: 11, color:"var(--ink-soft)", flexShrink:0 }}>
            {doneCount}/{stepCount}
          </span>
        </div>

        {gate === "locked" && (
          <div className="card dashed fade-up" style={{ background: "var(--danger-bg)", borderColor: "var(--danger-border)", marginBottom: 12, padding: 14 }}>
            <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 6 }}>
              <Icon name="warning" size={18} stroke="var(--danger)" />
              <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14, color: "#7A2522" }}>
                Stage above your skill level
              </div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#7A2522", marginBottom: 12 }}>
              This stage is gated for your current skill level. Pick a path:
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap: 6 }}>
              <button className="btn small" onClick={() => {
                if (proLookup) window.open(proLookup.searchUrl({ category: project.category, location: user && user.location }), "_blank");
              }}>
                <Icon name="target" size={13} /> Find a local pro
              </button>
              <button className="btn ghost small">
                <Icon name="book" size={13} /> Try a simpler version
              </button>
              <button className="btn ghost small" onClick={onSwitchToCowboy}>
                <Icon name="cowboy" size={13} /> Switch to cowboy mode
              </button>
            </div>
          </div>
        )}

        {gate === "cowboy" && (
          <div style={{
            background: "var(--danger-bg)", border: "2px solid var(--danger-border)",
            borderRadius: 10, padding: "10px 12px", marginBottom: 12,
            display:"flex", gap: 8, alignItems:"center",
          }}>
            <Icon name="cowboy" size={18} stroke="var(--danger)" />
            <div style={{ fontSize: 12.5, color: "#7A2522", lineHeight: 1.4, fontFamily: "var(--font-h)", fontWeight: 600 }}>
              You're below the recommended skill — warnings stay loud.
            </div>
          </div>
        )}

        {/* Steps */}
        {gate !== "locked" && stage.steps.map((step, i) => {
          const isDone = !!completed[i];
          const m = media[i];
          return (
            <div key={i} style={{ display:"flex", gap: 10, padding: "10px 0", borderBottom: "1px dashed var(--rule)" }}>
              <button className={"check" + (isDone ? " on" : "")} onClick={() => onToggleStep(i)} aria-label="Mark step done">
                <Icon name="check" size={14} stroke="white" sw={3} />
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:"flex", alignItems:"baseline", gap: 6 }}>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize: 11, color:"var(--ink-light)", flexShrink:0 }}>0{i+1}</span>
                  <div style={{ fontFamily:"var(--font-b)", fontSize: 14.5, lineHeight: 1.5, color: isDone ? "var(--ink-light)" : "var(--ink)", textDecoration: isDone ? "line-through" : "none" }}>
                    {window.pickTier(step.text, skill)}
                  </div>
                </div>

                {/* Failure-mode — calmer amber inline */}
                {window.pickTier(step.failureMode, skill) && (
                  <div style={{
                    fontSize: 12.5, color: "#6D4C00", lineHeight: 1.45, marginTop: 6,
                    padding: "8px 10px",
                    background: "#FFF8E1", borderLeft: "3px solid #FFB300",
                    borderRadius: "0 6px 6px 0",
                  }}>
                    <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 10.5, textTransform:"uppercase", letterSpacing: ".06em", display:"flex", alignItems:"center", gap: 4, marginBottom: 3, color: "#8A5A00" }}>
                      <Icon name="info" size={11} /> <span>Heads up</span>
                    </div>
                    <div>{window.pickTier(step.failureMode, skill)}</div>
                  </div>
                )}

                {/* Hazard — red dashed */}
                {step.hazard && (
                  <div style={{
                    marginTop: 6, padding: 10,
                    background: "var(--danger-bg)",
                    border: "1.5px dashed var(--danger-border)",
                    borderRadius: 8,
                  }}>
                    <div style={{ display:"flex", gap: 6, marginBottom: 4 }}>
                      <Icon name="warning" size={14} stroke="var(--danger)" />
                      <span style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 11, textTransform:"uppercase", letterSpacing:".05em", color:"var(--danger)" }}>
                        Hazard
                      </span>
                    </div>
                    <div style={{ fontSize: 13, color: "#7A2522", lineHeight: 1.45 }}>
                      {step.hazard.text}
                    </div>
                  </div>
                )}

                {/* Mini checkpoint */}
                {step.checkpoint && (
                  <div style={{
                    marginTop: 6, padding: "8px 10px",
                    background: "var(--safe-bg)", border: "1px dashed #8FB99A",
                    borderRadius: 8,
                    display:"flex", gap: 8, alignItems:"flex-start",
                  }}>
                    <Icon name="bullseye" size={14} stroke="var(--safe)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 11, textTransform:"uppercase", letterSpacing:".05em", color:"#2c5e36", marginBottom: 2 }}>
                        Mini checkpoint
                      </div>
                      <div style={{ fontSize: 13, color:"#2c5e36", lineHeight: 1.45 }}>
                        {step.checkpoint.text}
                      </div>
                    </div>
                  </div>
                )}

                {/* Media toggle */}
                <div style={{ display:"flex", gap: 6, marginTop: 8 }}>
                  <button className="btn ghost small" style={{ padding: "5px 9px", fontSize: 11.5,
                    background: m === "photo" ? "var(--paper-deep)" : "transparent" }}
                    onClick={() => setMedia({...media, [i]: m === "photo" ? null : "photo"})}>
                    <Icon name="photo" size={12} /> Photo
                  </button>
                  <button className="btn ghost small" style={{ padding: "5px 9px", fontSize: 11.5,
                    background: m === "video" ? "var(--paper-deep)" : "transparent" }}
                    onClick={() => setMedia({...media, [i]: m === "video" ? null : "video"})}>
                    <Icon name="video" size={12} /> Video
                  </button>
                </div>
                {m && (
                  <div className="img-ph fade-up" style={{ marginTop: 8, height: 100 }}>
                    {m === "photo" ? "[reference photo]" : "[15-sec demo clip]"}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Stage-end checkpoint CTA */}
        {gate !== "locked" && <div style={{ marginTop: 16, padding: 14,
          background: allDone ? "var(--safe-bg)" : "var(--paper-deep)",
          border: "2px solid " + (allDone ? "var(--safe)" : "var(--rule)"),
          borderRadius: 12,
        }}>
          <div style={{ display:"flex", alignItems:"center", gap: 10, marginBottom: 10 }}>
            <Icon name="flag" size={20} stroke={allDone ? "var(--safe)" : "var(--ink-soft)"} />
            <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14 }}>
              Stage checkpoint
            </div>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: 10 }}>
            Final review for stage {stage.id}: every step ticked, all hazards observed, last mini-checkpoint passed.
          </div>
          <div style={{ display:"flex", gap: 8 }}>
            <button className="btn full" disabled={!allDone}
              onClick={() => setStageDoneOpen(true)}
              style={{ opacity: allDone ? 1 : 0.4 }}>
              <Icon name="check" size={14} /> {allDone ? "Mark stage complete" : `${stepCount - doneCount} step${stepCount-doneCount===1?"":"s"} left`}
            </button>
          </div>
        </div>}

        <div className="footnote" style={{ marginTop: 14 }}>
          Stuck? Tap the <Icon name="chat" size={11} style={{verticalAlign:"middle"}} /> chat icon — it carries this stage's context.
        </div>
      </div>
    </>
  );
}

window.StageScreen = StageScreen;

/* ask.jsx */
function AskScreen({ project, scope, onScopeChange, onBack }) {
  const [input, setInput] = React.useState("");
  // scope: { kind: "project" } | { kind: "stage", id: 3 }
  const threads = {
    project: [
      { from:"ai", text:"Hi! I have the full plan for " + project.name + " loaded. Ask anything that crosses stages — sequencing, total cost, alternatives." },
      { from:"user", text:"Could I do this in one weekend instead of two?" },
      { from:"ai", text:"Stages 1-2 (marking + cutting) plus stage 3 (anchoring) is comfortable for one weekend if you start Saturday morning. Sheeting and T-nuts (stage 4) is the time sink — that's where the second weekend goes. Splitting at the end of stage 3 leaves a safe stopping point." },
    ],
    stage_3: [
      { from:"ai", text:"You're on stage 3: anchoring the ledger. What's blocking?" },
      { from:"user", text:"The latch won't slide in flush — it catches partway.", hasPhoto: true },
      { from:"ai", text:"Looks like a wood burr inside the bore from the original install. Pare it flush with a chisel or utility knife — light pressure, just shave the high spot." },
      { from:"user", text:"Done. Slides now but the faceplate isn't sitting flat." },
      { from:"ai", text:"Common. Score the mortise outline with a knife, then deepen by half a millimetre with the chisel. Faceplate should drop in flush after that." },
    ],
  };

  const currentKey = scope.kind === "project" ? "project" : "stage_" + scope.id;
  const messages = threads[currentKey] || [
    { from:"ai", text: "Ready to help with stage " + scope.id + ". What's going on?" }
  ];

  return (
    <div className="fade-up" style={{ display:"flex", flexDirection:"column", height: "100%" }}>
      {/* Thread switcher */}
      <div style={{ marginBottom: 10 }}>
        <div className="muted small" style={{ marginBottom: 6, fontFamily:"var(--font-h)", fontWeight: 600, textTransform: "uppercase", fontSize: 10.5, letterSpacing: ".06em" }}>
          Thread
        </div>
        <div style={{ display:"flex", gap: 6, overflowX:"auto", paddingBottom: 4 }}>
          <button onClick={() => onScopeChange({ kind: "project" })}
            className="pill"
            style={{
              cursor: "pointer", flexShrink: 0,
              background: scope.kind === "project" ? "var(--ink)" : "var(--paper-deep)",
              color: scope.kind === "project" ? "var(--paper)" : "var(--ink-soft)",
              borderColor: scope.kind === "project" ? "var(--ink)" : "var(--rule)",
            }}>
            <Icon name="folder" size={11} /> {project.name}
          </button>
          {project.stages.map(s => (
            <button key={s.id} onClick={() => onScopeChange({ kind: "stage", id: s.id })}
              className="pill"
              style={{
                cursor: "pointer", flexShrink: 0,
                background: scope.kind === "stage" && scope.id === s.id ? "var(--ink)" : "var(--paper-deep)",
                color: scope.kind === "stage" && scope.id === s.id ? "var(--paper)" : "var(--ink-soft)",
                borderColor: scope.kind === "stage" && scope.id === s.id ? "var(--ink)" : "var(--rule)",
              }}>
              Stage {s.id}
            </button>
          ))}
        </div>
        <div style={{ fontFamily:"var(--font-hand)", fontSize: 14, color:"var(--ink-light)", marginTop: 4 }}>
          {scope.kind === "project"
            ? "Whole-project thread — questions across stages."
            : "Scoped to stage " + scope.id + ". Stage chats stay here."}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 2, display:"flex", flexDirection:"column", gap: 8 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display:"flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", gap: 6, alignItems:"flex-end" }}>
            {m.from === "ai" && <div className="avatar sm ai"><Icon name="spark" size={14} /></div>}
            <div className={"bubble " + m.from}>
              {m.hasPhoto && <div className="img-ph" style={{ height: 60, marginBottom: 6, fontSize: 10 }}>[attached photo]</div>}
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="card" style={{ marginTop: 10, padding: 8 }}>
        <textarea className="input" rows={2}
          placeholder={"Ask about " + (scope.kind === "project" ? "the whole project" : "stage " + scope.id) + "…"}
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ border: "none", padding: 6, marginBottom: 6, background: "transparent", resize: "none" }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <button className="icon-btn" aria-label="Attach photo" style={{ width: 32, height: 32 }}>
            <Icon name="camera" size={16} />
          </button>
          <button className="btn small" disabled={!input.trim()} style={{ opacity: input.trim() ? 1 : 0.4 }}>
            Send <Icon name="send" size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

window.AskScreen = AskScreen;

/* ai.jsx */
/* AI tab — lightweight browser-side LLM chat */

const DEFAULT_AI_MODEL = "gemma3-1b-it-q4f16_1-MLC";
const MODEL_CANDIDATES = [
  "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
  "Llama-3.2-1B-Instruct-q4f16_1-MLC",
  "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
  "Phi-3.5-mini-instruct-q4f16_1-MLC",
  "Llama-3.2-3B-Instruct-q4f16_1-MLC",
  DEFAULT_AI_MODEL,
];

function AIScreen() {
  const [webllm, setWebllm] = React.useState(null);
  const [engine, setEngine] = React.useState(null);
  const [selectedModelId, setSelectedModelId] = React.useState(DEFAULT_AI_MODEL);
  const [modelOptions, setModelOptions] = React.useState([]);
  const [activeModelId, setActiveModelId] = React.useState(DEFAULT_AI_MODEL);
  const [loading, setLoading] = React.useState(true);
  const [status, setStatus] = React.useState("Loading WebLLM...");
  const [messages, setMessages] = React.useState([
    {
      role: "assistant",
      content: "I run fully in the browser. Ask me to sketch ideas, explain tools, or draft quick fixes.",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loadPct, setLoadPct] = React.useState(0);
  const [showDebug, setShowDebug] = React.useState(false);
  const [debugLines, setDebugLines] = React.useState(["AI screen mounted"]);
  const scrollRef = React.useRef(null);
  const engineRef = React.useRef(null);
  const pendingRef = React.useRef(false);
  const pushDebug = React.useCallback((line) => {
    setDebugLines((prev) => [line, ...prev].slice(0, 10));
  }, []);

  React.useEffect(() => {
    let cancelled = false;

    async function init() {
      console.log("[AIScreen] Init starting...");
      pushDebug("Init starting");
      setLoading(true);
      setError("");
      setLoadPct(0);
      const gpuAvailable = !!navigator.gpu;
      console.log("[AIScreen] WebGPU available?", gpuAvailable);
      pushDebug("WebGPU available: " + gpuAvailable);
      try {
        setStatus("Preparing WebLLM module...");
        setLoadPct(5);
        if (window.mlcReady) {
          pushDebug("Awaiting window.mlcReady");
          await window.mlcReady;
        }
        if (window.mlcSourceUrl) {
          pushDebug("WebLLM source: " + window.mlcSourceUrl);
        }
        if (window.mlcLoadError) {
          throw new Error("WebLLM module failed to load: " + (window.mlcLoadError?.message || "Unknown error"));
        }

        let tries = 0;
        while (!window.mlc && tries < 120 && !cancelled) {
          if (tries % 10 === 0) pushDebug("Waiting for WebLLM global... " + tries / 10 + "s");
          await new Promise((resolve) => setTimeout(resolve, 100));
          tries += 1;
        }

        console.log("[AIScreen] Checking for window.mlc:", typeof window.mlc);
        pushDebug("window.mlc type: " + typeof window.mlc);
        if (!window.mlc) {
          throw new Error("WebLLM library not loaded from CDN module import.");
        }
        console.log("[AIScreen] WebLLM module available:", window.mlc);
        pushDebug("WebLLM module attached");
        const mod = window.mlc;
        if (!mod.CreateMLCEngine) {
          console.error("[AIScreen] CreateMLCEngine not found on window.mlc. Available keys:", Object.keys(mod));
          throw new Error("CreateMLCEngine not found. The WebLLM library may not have loaded correctly.");
        }

        const availableModelIds = Array.isArray(mod?.prebuiltAppConfig?.model_list)
          ? mod.prebuiltAppConfig.model_list
              .map((m) => m?.model_id)
              .filter((id) => typeof id === "string" && id.length > 0)
          : [];
        setModelOptions(availableModelIds);
        pushDebug("Prebuilt model count: " + availableModelIds.length);
        if (availableModelIds.length) {
          console.log("[AIScreen] Available prebuilt models:", availableModelIds);
        }

        let modelToLoad = selectedModelId;
        if (!availableModelIds.includes(modelToLoad) && availableModelIds.length) {
          const candidateHit = MODEL_CANDIDATES.find((id) => availableModelIds.includes(id));
          const smallModelHit = availableModelIds.find((id) => /0\\.5b|1b|tiny|mini/i.test(id));
          modelToLoad = candidateHit || smallModelHit || availableModelIds[0];
          pushDebug("Fallback model selected: " + modelToLoad);
        }

        if (selectedModelId !== modelToLoad) {
          setSelectedModelId(modelToLoad);
        }
        setActiveModelId(modelToLoad);
        if (cancelled) return;
        setWebllm(mod);
        setStatus("Loading model from source: " + modelToLoad);
        setLoadPct(12);
        if (engineRef.current?.unload) {
          pushDebug("Unloading previous model engine");
          await engineRef.current.unload().catch(() => {});
          engineRef.current = null;
          setEngine(null);
        }
        pushDebug("CreateMLCEngine start: " + modelToLoad);
        console.log("[AIScreen] Calling CreateMLCEngine with model:", modelToLoad);
        const nextEngine = await mod.CreateMLCEngine(modelToLoad, {
          initProgressCallback: (report) => {
            console.log("[AIScreen] Progress:", report);
            if (!cancelled) {
              setStatus(report.text || "Loading model...");
              const progressNum = typeof report?.progress === "number" ? report.progress : null;
              if (progressNum != null) {
                const pct = Math.max(0, Math.min(100, Math.round(progressNum * 100)));
                setLoadPct(pct);
              }
            }
            if (report?.text) pushDebug("Progress: " + report.text);
          },
        });
        console.log("[AIScreen] Engine created successfully:", nextEngine);
        pushDebug("Engine created successfully");
        if (cancelled) return;
        engineRef.current = nextEngine;
        setEngine(nextEngine);
        setLoadPct(100);
        setStatus("Ready. The model is cached locally after the first download.");
        pushDebug("Ready");
      } catch (err) {
        console.error("[AIScreen] Error during init:", err);
        console.error("[AIScreen] Error message:", err?.message);
        console.error("[AIScreen] Error stack:", err?.stack);
        pushDebug("Init error: " + (err?.message || "Unknown error"));
        if (cancelled) return;
        setError(err?.message || "Could not start WebLLM in this browser.");
        setStatus("WebLLM failed to load.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init();
    return () => {
      cancelled = true;
      pendingRef.current = false;
      if (engineRef.current?.unload) {
        engineRef.current.unload().catch(() => {});
      }
    };
  }, [selectedModelId, pushDebug]);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, status]);

  const send = async () => {
    const prompt = input.trim();
    if (!prompt || busy || !engine) return;
    pendingRef.current = true;
    setBusy(true);
    setError("");
    setInput("");

    const nextMessages = [...messages, { role: "user", content: prompt }];
    const assistantIndex = nextMessages.length;
    nextMessages.push({ role: "assistant", content: "" });
    setMessages(nextMessages);

    try {
      const chunks = await engine.chat.completions.create({
        stream: true,
        stream_options: { include_usage: true },
        temperature: 0.7,
        max_tokens: 256,
        messages: [
          {
            role: "system",
            content: "You are a concise browser-based assistant. Keep answers practical, short, and direct.",
          },
          ...nextMessages.slice(0, assistantIndex),
        ],
      });
      let reply = "";
      for await (const chunk of chunks) {
        reply += chunk.choices?.[0]?.delta?.content || "";
        if (!pendingRef.current) break;
        setMessages((current) => {
          const copy = current.slice();
          copy[assistantIndex] = { role: "assistant", content: reply || "..." };
          return copy;
        });
      }
      setMessages((current) => {
        const copy = current.slice();
        copy[assistantIndex] = { role: "assistant", content: reply || "I could not generate a reply." };
        return copy;
      });
    } catch (err) {
      setError(err?.message || "Model request failed.");
      setMessages((current) => {
        const copy = current.slice();
        copy[assistantIndex] = {
          role: "assistant",
          content: "I hit an error while generating. Try again after the model finishes loading.",
        };
        return copy;
      });
    } finally {
      pendingRef.current = false;
      setBusy(false);
    }
  };

  return (
    <div className="fade-up" style={{ display:"flex", flexDirection:"column", height:"100%", gap: 12 }}>
      <div className="card" style={{ padding: 12, background:"linear-gradient(180deg, var(--card), #FAF6EA)" }}>
        <div className="card-row" style={{ alignItems:"flex-start" }}>
          <button
            type="button"
            className="avatar sm ai"
            onClick={() => setShowDebug((v) => !v)}
            aria-label="Toggle AI details"
            title={showDebug ? "Hide AI details" : "Show AI details"}
            style={{ marginTop: 2, border: "none", cursor: "pointer" }}
          >
            <Icon name="spark" size={14} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily:"var(--font-h)", fontSize: 15, fontWeight: 700, marginBottom: 2 }}>Browser LLM</div>
            {showDebug && (
              <>
                <div className="small muted" style={{ lineHeight: 1.45 }}>
                  {status} {webllm ? "Model: " + activeModelId : ""}
                </div>
                <div className="small muted" style={{ marginTop: 6 }}>
                  The model is pulled into the page from its source and cached locally. First load can take a while.
                </div>

                <div style={{ marginTop: 10 }}>
                  <div className="small muted" style={{ marginBottom: 5 }}>Model</div>
                  <select
                    className="input"
                    value={selectedModelId}
                    onChange={(e) => {
                      setSelectedModelId(e.target.value);
                      setStatus("Switching model...");
                      setLoadPct(0);
                      setError("");
                    }}
                    disabled={loading || busy || !modelOptions.length}
                    style={{ height: 40 }}
                  >
                    {!modelOptions.length && <option value={selectedModelId}>{selectedModelId}</option>}
                    {modelOptions.map((id) => (
                      <option key={id} value={id}>{id}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div style={{ marginTop: 10 }}>
              <div style={{ height: 8, borderRadius: 999, background: "#E8E3D6", overflow: "hidden" }}>
                <div
                  style={{
                    width: loadPct + "%",
                    height: "100%",
                    borderRadius: 999,
                    transition: "width 160ms ease",
                    background: "linear-gradient(90deg, #7A6A4F, #B79A6A)",
                  }}
                />
              </div>
              <div className="small muted" style={{ marginTop: 6 }}>
                Loading progress: {loadPct}%
              </div>
            </div>

            {showDebug && (
              <div style={{ marginTop: 8, border: "1px solid #E2D9C7", borderRadius: 10, padding: 8, background: "#FFF9EE" }}>
                <div className="small muted" style={{ marginBottom: 5 }}>Debug log</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.35, maxHeight: 94, overflow: "auto", color: "#6D5D45" }}>
                  {debugLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {error && (
          <div className="pill danger" style={{ marginTop: 10, whiteSpace: "normal", lineHeight: 1.3 }}>
            {error}
          </div>
        )}
      </div>

      <div className="card" style={{ flex: 1, display:"flex", flexDirection:"column", minHeight: 0 }}>
        <div ref={scrollRef} className="scr" style={{ padding: 0, flex: 1, minHeight: 0 }}>
          <div style={{ display:"flex", flexDirection:"column", gap: 10 }}>
            {messages.map((message, index) => (
              <div key={index} style={{ display:"flex", justifyContent: message.role === "user" ? "flex-end" : "flex-start" }}>
                <div className={"bubble " + (message.role === "user" ? "user" : "ai")} style={{ maxWidth: "88%" }}>
                  {message.content || (busy && index === messages.length - 1 ? "Thinking..." : "")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <textarea
            className="input"
            rows={3}
            placeholder={loading ? "Wait for the model to finish loading..." : "Ask the browser model anything"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading || busy || !engine}
            style={{ resize: "none", minHeight: 84, marginBottom: 8 }}
          />
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap: 8 }}>
            <div className="small muted" style={{ lineHeight: 1.3 }}>
              {busy ? "Generating response..." : "Runs locally in the browser after the model downloads once."}
            </div>
            <button className="btn" onClick={send} disabled={loading || busy || !input.trim() || !engine}>
              Send <Icon name="send" size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.AIScreen = AIScreen;

/* profile.jsx */
function ProfileScreen({ projects, archived, onSettings, userName }) {
  const displayName = userName && userName.trim() ? userName.trim() : "DIYer";
  const initial = (displayName[0] || "?").toUpperCase();
  const totalProjects = projects.length + archived.length;
  const stagesDone = projects.reduce((acc, p) => acc + p.stages.filter(s => s.done).length, 0)
    + archived.reduce((acc, a) => acc + a.stagesDone, 0);
  const totalHours = 38;
  const completed = archived.length;

  return (
    <div className="fade-up">
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap: 12, marginBottom: 16 }}>
        <div className="avatar">{initial}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 800, fontSize: 18 }}>{displayName}</div>
          <div className="muted small">Handy · 4 months on DIY Companion</div>
        </div>
        <button className="icon-btn" onClick={onSettings} aria-label="Settings">
          <Icon name="settings" size={20} />
        </button>
      </div>

      {/* Stats grid */}
      <h2 className="section">Lifetime stats</h2>
      <div style={{ display:"grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {[
          { label:"Projects", value: totalProjects, icon:"folder" },
          { label:"Completed", value: completed, icon:"award" },
          { label:"Stages done", value: stagesDone, icon:"check" },
          { label:"Hours saved", value: totalHours + "h", icon:"clock" },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: 12 }}>
            <div style={{ display:"flex", alignItems:"center", gap: 8, marginBottom: 4 }}>
              <Icon name={s.icon} size={14} stroke="var(--ink-light)" />
              <span className="muted small">{s.label}</span>
            </div>
            <div style={{ fontFamily:"var(--font-h)", fontSize: 22, fontWeight: 800 }}>{s.value}</div>
          </div>
        ))}
      </div>

      <h2 className="section">Achievements</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { label:"First fix", earned: true },
          { label:"5 stages", earned: true },
          { label:"Asked for help", earned: true },
          { label:"Built it twice", earned: false },
          { label:"Pro graduate", earned: false },
        ].map((b, i) => (
          <div key={i} style={{
            background: b.earned ? "var(--highlight-bg)" : "var(--paper-deep)",
            border: "1px " + (b.earned ? "solid var(--highlight-deep)" : "dashed var(--rule)"),
            borderRadius: 999, padding: "5px 10px",
            fontFamily: "var(--font-hand)", fontSize: 14,
            color: b.earned ? "var(--ink)" : "var(--ink-light)",
            display:"inline-flex", gap: 5, alignItems:"center",
          }}>
            <Icon name="award" size={12} /> {b.label}
          </div>
        ))}
      </div>

      <h2 className="section">Skill trajectory</h2>
      <div className="card" style={{ padding: 14, marginBottom: 14 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 8 }}>
          <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 13.5 }}>
            Currently: <span style={{ color: "var(--ink)" }}>Handy</span>
          </div>
          <span className="tag">2 wins from Confident</span>
        </div>
        <div style={{ display:"flex", gap: 4, height: 8, marginBottom: 6 }}>
          <div style={{ flex: 1, background: "var(--safe)", borderRadius: 2 }} />
          <div style={{ flex: 1, background: "var(--safe)", borderRadius: 2 }} />
          <div style={{ flex: 1, background: "var(--highlight)", borderRadius: 2 }} />
          <div style={{ flex: 1, background: "var(--rule)", borderRadius: 2 }} />
          <div style={{ flex: 1, background: "var(--rule)", borderRadius: 2 }} />
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize: 11, color:"var(--ink-light)" }}>
          <span>Beginner</span><span>Handy</span><span>Confident</span>
        </div>
      </div>

      <button className="btn ghost full" onClick={onSettings}>
        <Icon name="settings" size={14} /> Open settings
      </button>
    </div>
  );
}

window.ProfileScreen = ProfileScreen;

/* config.jsx */
/* Config / Settings — skill, inventory, cowboy mode */

function ConfigScreen({ skill, setSkill, cowboy, setCowboy, inventory, addInventory, removeInventory, userName, setUserName, onReplayOnboarding }) {
  const [adding, setAdding] = React.useState(false);
  const [newItem, setNewItem] = React.useState("");
  const skills = [
    { key:0, label:"Just Starting", desc:"Walk me through the basics" },
    { key:1, label:"Getting Handy",    desc:"Common tools, follows instructions" },
    { key:2, label:"Experienced",desc:"DIYs regularly, skip obvious steps" },
  ];

  return (
    <div className="fade-up">
      {/* Skill profile */}
      <h2 className="section">Skill profile</h2>
      <div style={{ display:"flex", flexDirection:"column", gap: 6, marginBottom: 18 }}>
        {skills.map(s => (
          <button key={s.key} onClick={() => setSkill(s.key)}
            style={{
              border: skill === s.key ? "2px solid var(--ink)" : "1px solid var(--rule)",
              background: skill === s.key ? "var(--highlight-bg)" : "var(--card)",
              borderRadius: 10, padding: "10px 12px", cursor: "pointer", textAlign: "left",
              fontFamily: "inherit",
              display:"flex", alignItems:"center", gap: 10,
            }}>
            <div style={{
              width: 18, height: 18, borderRadius: "50%",
              border: "2px solid " + (skill === s.key ? "var(--ink)" : "var(--ink-light)"),
              background: skill === s.key ? "var(--ink)" : "transparent",
              boxShadow: skill === s.key ? "inset 0 0 0 3px var(--highlight)" : "none",
              flexShrink: 0,
            }} />
            <div>
              <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14 }}>{s.label}</div>
              <div className="muted small" style={{ marginTop: 1 }}>{s.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Cowboy mode */}
      <h2 className="section">Safety mode</h2>
      <div className="card" style={{ marginBottom: 18 }}>
        <div style={{ display:"flex", alignItems:"center", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily:"var(--font-h)", fontWeight: 700, fontSize: 14, display:"flex", alignItems:"center", gap: 6 }}>
              <Icon name="cowboy" size={16} /> Cowboy mode
              {cowboy && <span className="pill warn" style={{ fontSize: 10, padding: "2px 6px" }}>ON</span>}
            </div>
            <div className="muted small" style={{ marginTop: 3, lineHeight: 1.4 }}>
              {cowboy
                ? "Risky projects show warnings but you can still proceed."
                : "Dangerous projects will be locked and offer alternatives instead."}
            </div>
          </div>
          <button className={"toggle" + (cowboy ? " on" : "")} onClick={() => setCowboy(!cowboy)} aria-label="Toggle cowboy mode" />
        </div>
      </div>

      {/* Inventory */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 8 }}>
        <h2 className="section" style={{ margin: 0 }}>Owned tools &amp; parts</h2>
        <button className="btn ghost small" onClick={() => setAdding(true)}>
          <Icon name="plus" size={13} /> Add
        </button>
      </div>
      <div className="footnote" style={{ marginTop: 0, marginBottom: 10, textAlign: "left" }}>
        These auto-mark "already have it" in every project's Parts &amp; Tools.
      </div>
      {inventory.map(item => (
        <div key={item.id} className="card" style={{ marginBottom: 6, padding: "9px 10px",
          display:"flex", alignItems:"center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, background:"var(--paper-deep)",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink: 0,
          }}>
            <Icon name={item.category === "Power tool" ? "drill" : "parts"} size={15} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 13.5 }}>{item.name}</div>
            <div className="muted" style={{ fontSize: 11 }}>{item.category}</div>
          </div>
          <button className="icon-btn" onClick={() => removeInventory(item.id)} aria-label="Remove" style={{ width: 30, height: 30, color:"var(--ink-light)" }}>
            <Icon name="trash" size={14} />
          </button>
        </div>
      ))}
      {adding && (
        <div className="card fade-up" style={{ marginBottom: 6, padding: 10, background:"var(--paper-deep)" }}>
          <input className="input" autoFocus
            placeholder="e.g. Hammer drill"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && newItem.trim()) { addInventory(newItem); setNewItem(""); setAdding(false); }
              if (e.key === "Escape") { setAdding(false); setNewItem(""); }
            }}
            style={{ marginBottom: 8 }} />
          <div style={{ display:"flex", gap: 6, justifyContent:"flex-end" }}>
            <button className="btn ghost small" onClick={() => { setAdding(false); setNewItem(""); }}>Cancel</button>
            <button className="btn small" disabled={!newItem.trim()} onClick={() => { addInventory(newItem); setNewItem(""); setAdding(false); }}>Add</button>
          </div>
        </div>
      )}

      <div className="divider" />

      {/* Testing affordances */}
      <h2 className="section">Testing</h2>
      <button className="btn ghost full" onClick={onReplayOnboarding} style={{ marginBottom: 8 }}>
        <Icon name="refresh" size={14} /> Replay onboarding
      </button>
      <div className="footnote" style={{ textAlign: "left", marginBottom: 14 }}>
        Resets the first-run flow. Useful for walking testers through it again.
      </div>

      <div className="footnote">DIY Companion · prototype · v0.1</div>
    </div>
  );
}

window.ConfigScreen = ConfigScreen;

/* app.jsx */
/* App — wires it all together */

const { useState, useEffect } = React;

function clone(o){ return JSON.parse(JSON.stringify(o)); }

function App() {
  /* ── persistent user profile ───────────────────────── */
  const persistedUser = window.lsRead(window.LS.user, null);
  const seedUser = persistedUser || window.FIXTURES.userDefault;

  const onboardingDone = window.lsRead(window.LS.onb, null) === "1";

  /* ── routing ───────────────────────────────────────── */
  const [route, setRoute] = useState({ name: onboardingDone ? "home" : "onboarding" });
  const [history, setHistory] = useState([]);

  /* ── app state ─────────────────────────────────────── */
  const [projects, setProjects] = useState(clone(window.FIXTURES.projects));
  const [archived] = useState(window.FIXTURES.archived);
  const [userName, setUserName] = useState(seedUser.name);
  const [userLocation] = useState(seedUser.location || "Armidale NSW");
  const [skill, setSkill] = useState(seedUser.skill ?? 1);
  const [cowboy, setCowboy] = useState(!!seedUser.cowboy);
  const [inventory, setInventory] = useState(window.lsRead(window.LS.inv, null) || window.FIXTURES.inventoryDefault);
  const [stepProgress, setStepProgress] = useState(window.lsRead(window.LS.steps, {}));
  const [purchased, setPurchased] = useState(window.lsRead(window.LS.purch, {}));
  const [dismissedSafety, setDismissedSafety] = useState({}); // session
  const [chatScope, setChatScope] = useState({ kind: "project" });
  const [snapshotOpen, setSnapshotOpen] = useState(false);
  const [restartOpen, setRestartOpen] = useState(false);
  const [showSwipe, setShowSwipe] = useState(false);

  const project = route.projectId ? projects[route.projectId] : projects.door;
  const projectList = Object.values(projects);

  /* ── persistence side-effects ──────────────────────── */
  useEffect(() => { window.lsWrite(window.LS.user, { name: userName, location: userLocation, skill, cowboy }); }, [userName, userLocation, skill, cowboy]);
  useEffect(() => { window.lsWrite(window.LS.steps, stepProgress); }, [stepProgress]);
  useEffect(() => { window.lsWrite(window.LS.purch, purchased); }, [purchased]);
  useEffect(() => { window.lsWrite(window.LS.inv, inventory); }, [inventory]);

  /* ── navigation helpers ───────────────────────────── */
  const nav = (next) => {
    setHistory(h => [...h, route]);
    setRoute(next);
  };
  const back = () => {
    setHistory(h => {
      if (h.length === 0) {
        setRoute({ name: "home" });
        return [];
      }
      const prev = h[h.length - 1];
      setRoute(prev);
      return h.slice(0, -1);
    });
  };
  const navTab = (tab) => {
    setHistory([]);
    if (tab === "home") setRoute({ name: "home" });
    else if (tab === "plan") setRoute({ name: "plan", projectId: route.projectId || "door" });
    else if (tab === "parts") setRoute({ name: "parts" });
    else if (tab === "profile") setRoute({ name: "profile" });
  };

  // swipe-back gesture hint — show briefly when leaving home
  useEffect(() => {
    if (route.name !== "home" && route.name !== "onboarding") {
      setShowSwipe(true);
      const t = setTimeout(() => setShowSwipe(false), 3500);
      return () => clearTimeout(t);
    }
  }, [route.name]);

  /* ── data mutations ───────────────────────────────── */
  const togglePart = (pid, partId) => {
    setProjects(p => {
      const next = clone(p);
      const part = next[pid].parts.find(x => x.id === partId);
      if (part) part.own = !part.own;
      return next;
    });
  };
  const addPart = (pid, name) => {
    setProjects(p => {
      const next = clone(p);
      next[pid].parts.push({ id: "p" + Date.now(), name, own: false, where: "Custom", note: "" });
      return next;
    });
  };
  const deletePart = (pid, partId) => {
    setProjects(p => {
      const next = clone(p);
      next[pid].parts = next[pid].parts.filter(x => x.id !== partId);
      return next;
    });
  };
  const completeStage = (pid, sid) => {
    setProjects(p => {
      const next = clone(p);
      const st = next[pid].stages.find(s => s.id === sid);
      if (st) st.done = true;
      return next;
    });
    const stages = projects[route.projectId].stages;
    const idx = stages.findIndex(s => s.id === sid);
    if (idx < stages.length - 1) {
      setRoute({ name: "stage", projectId: route.projectId, stageId: stages[idx+1].id });
    } else {
      setRoute({ name: "plan", projectId: route.projectId });
    }
  };

  const stepKey = route.projectId && route.stageId ? `${route.projectId}-${route.stageId}` : null;
  const toggleStep = (i) => {
    if (!stepKey) return;
    setStepProgress(prev => {
      const cur = prev[stepKey] || {};
      return { ...prev, [stepKey]: { ...cur, [i]: !cur[i] } };
    });
  };

  /* ── onboarding completion + replay ───────────────── */
  const finishOnboarding = ({ skill: s, cowboy: c, name }) => {
    setSkill(s);
    setCowboy(c);
    if (name !== undefined) setUserName(name);
    window.lsWrite(window.LS.onb, "1");
    setRoute({ name: "home" });
  };
  const replayOnboarding = () => {
    window.lsClear(window.LS.onb);
    setHistory([]);
    setRoute({ name: "onboarding" });
  };

  /* ── screen routing ───────────────────────────────── */
  const onboarding = route.name === "onboarding";

  let topBarTitle = "DIY Companion";
  let topBarCrumb = null;
  let hideBack = history.length === 0 || route.name === "home";
  let hideChat = false;
  let bottomTab = "home";

  if (route.name === "input") { topBarTitle = "New project"; topBarCrumb = null; bottomTab = "home"; }
  if (route.name === "check") { topBarTitle = "Project check"; topBarCrumb = project.name; bottomTab = "home"; }
  if (route.name === "plan") { topBarTitle = "Plan"; topBarCrumb = project.name; bottomTab = "plan"; }
  if (route.name === "stage") { topBarTitle = `Stage ${route.stageId}`; topBarCrumb = project.name; bottomTab = "plan"; }
  if (route.name === "parts") { topBarTitle = "Parts"; topBarCrumb = "Shopping list"; bottomTab = "parts"; hideBack = true; }
  if (route.name === "ask") { topBarTitle = "Ask"; topBarCrumb = project.name; bottomTab = "home"; hideChat = true; }
  if (route.name === "ai") { topBarTitle = "AI"; topBarCrumb = "Browser LLM"; bottomTab = "ai"; hideChat = true; }
  if (route.name === "profile") { topBarTitle = "Profile"; bottomTab = "profile"; hideBack = true; }
  if (route.name === "config") { topBarTitle = "Settings"; topBarCrumb = "Profile"; bottomTab = "profile"; }

  let content;
  if (onboarding) {
    content = <OnboardingScreen
      initialSkill={skill}
      onDone={finishOnboarding} />;
  } else if (route.name === "home") {
    content = <HomeScreen projects={projectList} archived={archived} userName={userName}
      onOpenProject={(id) => nav({ name: "plan", projectId: id })}
      onNew={() => nav({ name: "input" })} />;
  } else if (route.name === "input") {
    content = <InputScreen
      onPick={(id) => setRoute({ name: "check", projectId: id })} />;
  } else if (route.name === "check") {
    content = <CheckScreen project={project}
      user={{ name: userName, location: userLocation }}
      proLookup={window.FIXTURES.proLookup}
      onApprove={() => setRoute({ name: "plan", projectId: project.id })}
      onDecline={() => setRoute({ name: "home" })} />;
  } else if (route.name === "plan") {
    content = <PlanScreen project={project} skill={skill} cowboy={cowboy}
      onOpenStage={(sid) => nav({ name: "stage", projectId: project.id, stageId: sid })}
      onTogglePart={(partId) => togglePart(project.id, partId)}
      onAddPart={(name) => addPart(project.id, name)}
      onDeletePart={(partId) => deletePart(project.id, partId)}
      onSnapshot={() => setSnapshotOpen(true)}
      onRestart={() => setRestartOpen(true)}
      onSwitchToCowboy={() => nav({ name: "config" })}
      proLookup={window.FIXTURES.proLookup}
      user={{ name: userName, location: userLocation }} />;
  } else if (route.name === "stage") {
    const sid = route.stageId;
    content = <StageScreen project={project} stageId={sid} skill={skill} cowboy={cowboy}
      onBack={back}
      onChat={() => { setChatScope({ kind: "stage", id: sid }); nav({ name: "ask", projectId: project.id }); }}
      onComplete={(id) => completeStage(project.id, id)}
      onToggleStep={toggleStep}
      completed={stepProgress[stepKey] || {}}
      dismissedSafety={!!dismissedSafety[stepKey]}
      onDismissSafety={() => setDismissedSafety(p => ({...p, [stepKey]: true}))}
      onSwitchToCowboy={() => nav({ name: "config" })}
      proLookup={window.FIXTURES.proLookup}
      user={{ name: userName, location: userLocation }} />;
  } else if (route.name === "parts") {
    content = <PartsScreen projects={projects}
      onOpenProject={(pid) => nav({ name: "plan", projectId: pid })}
      onTogglePurchased={(key) => setPurchased(p => ({ ...p, [key]: !p[key] }))}
      purchased={purchased} />;
  } else if (route.name === "ask") {
    content = <AskScreen project={project} scope={chatScope} onScopeChange={setChatScope} />;
  } else if (route.name === "ai") {
    content = <AIScreen />;
  } else if (route.name === "profile") {
    content = <ProfileScreen projects={projectList} archived={archived} userName={userName}
      onSettings={() => nav({ name: "config" })} />;
  } else if (route.name === "config") {
    content = <ConfigScreen
      skill={skill} setSkill={setSkill}
      cowboy={cowboy} setCowboy={setCowboy}
      userName={userName} setUserName={setUserName}
      onReplayOnboarding={replayOnboarding}
      inventory={inventory}
      addInventory={(name) => setInventory(p => [...p, { id: "i"+Date.now(), name, category: "Hand tool" }])}
      removeInventory={(id) => setInventory(p => p.filter(x => x.id !== id))} />;
  }

  return (
    <div className="stage" data-screen-label={"00 " + route.name}>
      <div className="header">
        <h1>DIY Companion <span className="hand-underline">— Hi-fi prototype</span></h1>
        <div className="sub">Tap through screens, or use the strip below.</div>
      </div>

      {/* Debug nav strip */}
      <div className="nav-strip">
        {[
          ["onboarding","Intro"],["home","Home"],["input","New"],["check","Check"],["plan","Plan"],
          ["stage","Stage"],["parts","Parts"],["ask","Ask"],["ai","AI"],["profile","Profile"],["config","Set"],
        ].map(([k, lbl]) => (
          <button key={k} className={"chip" + (route.name === k ? " active" : "")}
            onClick={() => {
              setHistory([]);
              if (k === "stage") setRoute({ name:"stage", projectId:"door", stageId:3 });
              else if (k === "plan") setRoute({ name:"plan", projectId:"door" });
              else if (k === "ai") setRoute({ name:"ai" });
              else if (k === "check") setRoute({ name:"check", projectId:"wall" });
              else if (k === "ask") setRoute({ name:"ask", projectId:"door" });
              else if (k === "parts") setRoute({ name:"parts" });
              else setRoute({ name: k });
            }}>
            {lbl}
          </button>
        ))}
      </div>

      <div className="phone">
        <div className="status-bar">
          <span>9:41</span>
          <span style={{ fontFamily:"var(--font-h)", fontWeight: 600, fontSize: 11, color:"var(--ink-soft)" }}>DIY Companion</span>
          <div className="dot-row"><div className="b"></div></div>
        </div>

        {!onboarding && (
          <TopBar
            title={topBarTitle}
            crumb={topBarCrumb}
            onBack={back}
            onChat={() => { setChatScope({ kind: "project" }); nav({ name: "ask", projectId: route.projectId || "door" }); }}
            hideBack={hideBack}
            hideChat={hideChat || onboarding}
          />
        )}

        <div className="scr" style={ onboarding ? { padding: 0 } : {}}>
          <div className={"swipe-hint" + (showSwipe ? " show" : "")} aria-hidden="true" />
          {content}
        </div>

        {!onboarding && route.name !== "ask" && (
          <BottomNav active={bottomTab} onNav={navTab} />
        )}
      </div>

      <div style={{ fontFamily:"var(--font-hand)", fontSize: 16, color:"var(--ink-light)" }}>
        {route.name} · {project ? project.name : ""}
      </div>

      {/* Snapshot modal */}
      {snapshotOpen && (
        <div className="modal-overlay" onClick={() => setSnapshotOpen(false)}
          style={{ position: "fixed", inset: 0, alignItems:"center", justifyContent: "center" }}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ borderRadius: 22, maxWidth: 460, margin: 20 }}>
            <Sheet title="Project snapshot" onClose={() => setSnapshotOpen(false)}>
              <div className="muted small" style={{ marginBottom: 10 }}>
                Plain-text export of the current project state. Pass into a fresh generation, or share with a pro.
              </div>
              <pre style={{
                background:"var(--paper-deep)", padding: 12, borderRadius: 8,
                fontFamily:"var(--font-mono)", fontSize: 11.5, color:"var(--ink)",
                whiteSpace:"pre-wrap", maxHeight: 280, overflow:"auto", margin: 0,
              }}>
{`# ${project.name}
- Verdict: ${project.verdictHeadline}
- Difficulty: ${project.difficulty}
- Estimated time: ${project.estTime}

## Parts (${project.parts.length})
${project.parts.map(p => `- [${p.own ? "x" : " "}] ${p.name}${p.note ? " — " + p.note : ""}`).join("\n")}

## Stages
${project.stages.map(s => `### ${s.id}. ${s.title} ${s.done ? "✓" : ""}
${s.steps.map((st, i) => `  ${i+1}. ${window.pickTier(st.text, skill)}`).join("\n")}`).join("\n\n")}
`}
              </pre>
              <div style={{ display:"flex", gap: 8, marginTop: 14 }}>
                <button className="btn ghost" style={{ flex: 1 }} onClick={() => setSnapshotOpen(false)}>Close</button>
                <button className="btn" style={{ flex: 1 }}><Icon name="snapshot" size={14} /> Copy markdown</button>
              </div>
            </Sheet>
          </div>
        </div>
      )}

      {/* Restart confirm */}
      {restartOpen && (
        <div className="modal-overlay" onClick={() => setRestartOpen(false)}
          style={{ position: "fixed", inset: 0, alignItems:"center", justifyContent: "center" }}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ borderRadius: 22, maxWidth: 380, margin: 20 }}>
            <Sheet title="Regenerate project?" onClose={() => setRestartOpen(false)}>
              <p style={{ fontSize: 14, color:"var(--ink-soft)", lineHeight: 1.5, marginTop: 0 }}>
                We'll feed the current snapshot back into a fresh generation. Stage progress and chat history will be archived, not deleted.
              </p>
              <div style={{ display:"flex", gap: 8 }}>
                <button className="btn ghost" style={{ flex: 1 }} onClick={() => setRestartOpen(false)}>Cancel</button>
                <button className="btn" style={{ flex: 1 }} onClick={() => { setRestartOpen(false); setRoute({ name: "input" }); }}>
                  <Icon name="refresh" size={14} /> Regenerate
                </button>
              </div>
            </Sheet>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
