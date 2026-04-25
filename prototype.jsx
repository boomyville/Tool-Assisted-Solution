import { useState } from "react";

const SCREENS = [
  "home",
  "project_input",
  "assessment_result",
  "plan_overview",
  "parts_tools",
  "stage_detail",
  "safety_view",
  "ask",
];

const SCREEN_LABELS = {
  home: "0. Home",
  project_input: "1. Project Input",
  assessment_result: "2. Assessment",
  plan_overview: "3. Plan Overview",
  parts_tools: "4. Parts & Tools",
  stage_detail: "5. Stage Detail",
  safety_view: "6. Safety View",
  ask: "7. Ask",
};

/* ── lo-fi design tokens ─────────────────────────────── */
const sketchBorder = "2.5px solid #333";
const sketchBorderLight = "2px solid #888";
const sketchRadius = "6px";
const fontBody = "'Caveat', cursive";
const fontUI = "'Architects Daughter', cursive";
const bgPage = "#FFFEF5";
const bgCard = "#FFF9E8";
const bgAccent = "#E8E3D5";
const ink = "#2A2A2A";
const inkLight = "#777";
const highlight = "#FFD966";
const danger = "#E57373";
const safe = "#81C784";

/* ── shared primitives ───────────────────────────────── */
const Btn = ({ children, onClick, variant = "primary", style = {}, small }) => (
  <button
    style={{
      fontFamily: fontUI, fontSize: small ? 13 : 15, border: sketchBorder,
      borderRadius: sketchRadius, padding: small ? "5px 10px" : "9px 16px",
      cursor: "pointer", background: variant === "primary" ? highlight : variant === "danger" ? danger : bgCard,
      color: ink, transition: "transform 0.1s", whiteSpace: "nowrap", ...style,
    }}
    onClick={onClick}
    onMouseDown={e => (e.currentTarget.style.transform = "scale(0.96)")}
    onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
  >{children}</button>
);

const Placeholder = ({ w = "100%", h = 60, label, style = {} }) => (
  <div style={{
    width: w, height: h, border: "2px dashed #aaa", borderRadius: sketchRadius,
    display: "flex", alignItems: "center", justifyContent: "center", color: inkLight,
    fontFamily: fontBody, fontSize: 14,
    background: "repeating-linear-gradient(135deg,transparent,transparent 8px,rgba(0,0,0,.02) 8px,rgba(0,0,0,.02) 16px)",
    ...style,
  }}>{label}</div>
);

const Divider = () => <div style={{ borderTop: "1.5px dashed #bbb", margin: "14px 0" }} />;

const SectionLabel = ({ children, style = {} }) => (
  <div style={{ fontFamily: fontUI, fontSize: 17, fontWeight: 700, color: ink, marginBottom: 8, letterSpacing: 0.3, ...style }}>{children}</div>
);

const AnnotationTag = ({ children, color = "#FFE0B2" }) => (
  <span style={{
    display: "inline-block", fontFamily: fontBody, fontSize: 12,
    background: color, padding: "2px 7px", borderRadius: 4, border: "1px solid #ccc", marginLeft: 4, color: ink,
  }}>{children}</span>
);

/* ════════════════════════════════════════════════════════
   VIEW 0 — HOME
   ════════════════════════════════════════════════════════ */
function HomeScreen({ onNav }) {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const activeProjects = [
    { name: "Bedroom door handle", stages: 3, done: 1, updated: "Today" },
    { name: "Garage climbing wall", stages: 8, done: 5, updated: "Yesterday" },
    { name: "Leaky kitchen tap", stages: 4, done: 0, updated: "3 days ago" },
  ];
  const archivedProjects = [
    { name: "Fence paling replacement", stages: 5, done: 5, updated: "12 Mar" },
    { name: "Squeaky floorboard fix", stages: 2, done: 2, updated: "28 Feb" },
  ];

  const ProgressBar = ({ done, total }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
      <div style={{ flex: 1, height: 10, background: "#eee", borderRadius: 5, border: "1.5px solid #ccc", overflow: "hidden" }}>
        <div style={{ width: `${(done / total) * 100}%`, height: "100%", background: done === total ? safe : highlight, borderRadius: 5, transition: "width 0.3s" }} />
      </div>
      <span style={{ fontFamily: fontUI, fontSize: 11, color: inkLight, flexShrink: 0 }}>{done}/{total}</span>
    </div>
  );

  const ProjectCard = ({ p, archived }) => (
    <div onClick={() => !archived && onNav("plan_overview")} style={{
      border: sketchBorderLight, borderRadius: sketchRadius, padding: "10px 12px", marginBottom: 8,
      background: archived ? bgAccent : "#fff", cursor: archived ? "default" : "pointer", opacity: archived ? 0.7 : 1,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: fontUI, fontSize: 14, fontWeight: 600 }}>{p.name}</div>
        <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight, flexShrink: 0 }}>{p.updated}</div>
      </div>
      <ProgressBar done={p.done} total={p.stages} />
    </div>
  );

  return (
    <div>
      <Btn style={{ width: "100%", marginBottom: 16, padding: "14px 16px", fontSize: 18 }} onClick={() => onNav("project_input")}>＋ New Project</Btn>
      <SectionLabel>My Projects</SectionLabel>
      {activeProjects.map((p, i) => <ProjectCard key={i} p={p} />)}
      <Divider />
      <div onClick={() => setArchiveOpen(!archiveOpen)} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", padding: "4px 0", marginBottom: archiveOpen ? 8 : 0 }}>
        <span style={{ fontFamily: fontUI, fontSize: 14, transition: "transform 0.2s", display: "inline-block", transform: archiveOpen ? "rotate(90deg)" : "rotate(0)" }}>▸</span>
        <span style={{ fontFamily: fontUI, fontSize: 14, color: inkLight }}>Completed ({archivedProjects.length})</span>
      </div>
      {archiveOpen && archivedProjects.map((p, i) => <ProjectCard key={i} p={p} archived />)}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 1 — PROJECT INPUT (unchanged)
   ════════════════════════════════════════════════════════ */
function ProjectInputScreen() {
  const [skill, setSkill] = useState(null);
  return (
    <div>
      <SectionLabel>Describe your project</SectionLabel>
      <div style={{ fontFamily: fontBody, fontSize: 14, color: inkLight, marginBottom: 10 }}>What do you need to fix, build or improve?</div>
      <div style={{ border: sketchBorderLight, borderRadius: sketchRadius, padding: 10, minHeight: 70, background: "#fff", fontFamily: fontBody, fontSize: 15, color: "#aaa", marginBottom: 12 }}>
        e.g. "My bedroom door handle is broken and rattles when I turn it…"
      </div>
      <Placeholder h={80} label="📷  Tap to add photos" style={{ marginBottom: 16 }} />
      <SectionLabel>Your skill level</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {["Beginner — I've barely held a screwdriver", "Handy — I can follow instructions", "Confident — I DIY regularly"].map((lvl, i) => (
          <div key={i} onClick={() => setSkill(i)} style={{
            border: skill === i ? `2.5px solid ${ink}` : sketchBorderLight, borderRadius: sketchRadius,
            padding: "8px 12px", fontFamily: fontBody, fontSize: 14, cursor: "pointer",
            background: skill === i ? highlight : "#fff", transition: "all 0.15s",
          }}>{lvl}</div>
        ))}
        <div style={{ border: sketchBorderLight, borderRadius: sketchRadius, padding: "8px 12px", fontFamily: fontBody, fontSize: 14, color: "#aaa", background: "#fff" }}>
          Other — describe your experience…
        </div>
      </div>
      <Btn style={{ width: "100%", marginTop: 4 }}>Assess my project →</Btn>
      <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight, textAlign: "center", marginTop: 8 }}>
        Casey would describe her broken door handle here. Marcus would paste his climbing-wall project details.
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 2 — ASSESSMENT RESULT (unchanged)
   ════════════════════════════════════════════════════════ */
function AssessmentResultScreen({ onNav }) {
  return (
    <div>
      <div style={{ background: "#E8F5E9", border: `2.5px solid ${safe}`, borderRadius: sketchRadius, padding: 14, marginBottom: 14, textAlign: "center" }}>
        <div style={{ fontFamily: fontUI, fontSize: 22, fontWeight: 700, color: "#2E7D32" }}>✓ DIY Approved</div>
        <div style={{ fontFamily: fontBody, fontSize: 14, color: ink, marginTop: 4 }}>This project is within your abilities</div>
      </div>
      <SectionLabel>Assessment</SectionLabel>
      <div style={{ fontFamily: fontBody, fontSize: 14, color: ink, lineHeight: 1.5, marginBottom: 12, background: "#fff", border: sketchBorderLight, borderRadius: sketchRadius, padding: 10 }}>
        Based on your skill level and the task described, this is a straightforward repair. A door handle replacement involves disassembly, purchasing the right part, and reassembly — no specialist tools needed.
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1, border: sketchBorderLight, borderRadius: sketchRadius, padding: 10, textAlign: "center", background: bgCard }}>
          <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight }}>Difficulty</div>
          <div style={{ fontFamily: fontUI, fontSize: 20, fontWeight: 700 }}>Easy</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 3, marginTop: 3 }}>
            <span style={{ color: safe }}>●</span><span style={{ color: "#ccc" }}>●</span><span style={{ color: "#ccc" }}>●</span><span style={{ color: "#ccc" }}>●</span><span style={{ color: "#ccc" }}>●</span>
          </div>
        </div>
        <div style={{ flex: 1, border: sketchBorderLight, borderRadius: sketchRadius, padding: 10, textAlign: "center", background: bgCard }}>
          <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight }}>Est. time</div>
          <div style={{ fontFamily: fontUI, fontSize: 20, fontWeight: 700 }}>45 min</div>
          <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight }}>3 stages</div>
        </div>
      </div>
      <Btn style={{ width: "100%" }} onClick={() => onNav("plan_overview")}>Generate my plan →</Btn>
      <Divider />
      <div style={{ textAlign: "center" }}><Btn variant="secondary" small>Not for me — find a professional</Btn></div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 3 — PLAN OVERVIEW
   • Checkboxes NOT clickable (display-only state indicators)
   • Tap target 1.5× for expand/collapse
   ════════════════════════════════════════════════════════ */
function PlanOverviewScreen({ onNav }) {
  const [expanded, setExpanded] = useState(null);
  const stages = [
    { id: 1, title: "Disassemble the handle", time: "10 min", diff: "Easy", done: true },
    { id: 2, title: "Purchase replacement parts", time: "20 min", diff: "Easy", done: false },
    { id: 3, title: "Reassemble and test", time: "15 min", diff: "Easy", done: false },
  ];
  const doneCount = stages.filter(s => s.done).length;

  return (
    <div>
      <SectionLabel>Project Plan</SectionLabel>
      <div style={{ fontFamily: fontBody, fontSize: 13, color: inkLight, marginBottom: 10 }}>Door Handle Replacement — 3 stages</div>

      {/* progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 14, background: "#eee", borderRadius: 7, border: "1.5px solid #ccc", overflow: "hidden" }}>
          <div style={{ width: `${(doneCount / stages.length) * 100}%`, height: "100%", background: safe, borderRadius: 7, transition: "width 0.3s" }} />
        </div>
        <span style={{ fontFamily: fontUI, fontSize: 13, color: ink }}>{doneCount}/{stages.length}</span>
      </div>

      {stages.map((s, i) => (
        <div key={s.id} style={{
          border: sketchBorderLight, borderRadius: sketchRadius, marginBottom: 10,
          background: s.done ? "#f0f7f0" : "#fff", overflow: "hidden",
        }}>
          {/* Row: 1.5× vertical padding for larger tap target. Checkbox is display-only. */}
          <div
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              display: "flex", alignItems: "center",
              padding: "15px 12px",  /* 1.5× the original 10px vertical */
              cursor: "pointer", gap: 8,
            }}
          >
            {/* Checkbox: display-only, not interactive — pointer-events none */}
            <span style={{ fontSize: 20, flexShrink: 0, pointerEvents: "none", lineHeight: 1 }}>
              {s.done ? "☑" : "☐"}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: fontUI, fontSize: 14, fontWeight: 600 }}>{s.title}</div>
              <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight }}>{s.time} · {s.diff}</div>
            </div>
            <span style={{
              fontFamily: fontUI, fontSize: 16, color: inkLight,
              transition: "transform 0.2s", transform: expanded === i ? "rotate(90deg)" : "rotate(0)",
            }}>▸</span>
          </div>
          {expanded === i && (
            <div style={{ borderTop: "1.5px dashed #ccc", padding: 12, fontFamily: fontBody, fontSize: 13, color: ink, background: bgCard }}>
              <div>Tap to open full stage detail with step-by-step guide, hazards, and checkpoints.</div>
              <div style={{ marginTop: 8 }}>
                <Btn small onClick={() => onNav("stage_detail")}>Open stage →</Btn>
              </div>
            </div>
          )}
        </div>
      ))}

      <Divider />
      <Btn variant="secondary" style={{ width: "100%" }} onClick={() => onNav("parts_tools")}>🔧 Parts & Tools list</Btn>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 4 — PARTS & TOOLS
   • Title + [link] and [image] toggle icons on same line
   • Notes always full-width, pushed below image when shown
   ════════════════════════════════════════════════════════ */
function PartsToolsScreen() {
  const [showLinks, setShowLinks] = useState(true);
  const [showImages, setShowImages] = useState(false);
  const items = [
    { name: "Replacement door handle (model A345)", where: "Stage 3 — Reassemble", link: "bunnings.com.au", note: "", imgLabel: "[handle photo]" },
    { name: "Internal latch mechanism", where: "Stage 3 — Reassemble", link: "bunnings.com.au", note: "Match existing backset (60mm)", imgLabel: "[latch photo]" },
    { name: "Screw kit — 6g × 30mm", where: "Stage 3 — Reassemble", link: "bunnings.com.au", note: "Pack of 8, only need 4", imgLabel: "[screws photo]" },
    { name: "Phillips-head screwdriver", where: "Stage 1 — Disassemble", link: null, note: "Already own", imgLabel: "[screwdriver]" },
  ];

  const ToggleIcon = ({ active, onClick, children }) => (
    <span onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 28, height: 28, borderRadius: 4, cursor: "pointer",
      border: active ? `2px solid ${ink}` : "1.5px solid #ccc",
      background: active ? highlight : "transparent",
      fontFamily: fontBody, fontSize: 14, transition: "all .15s",
    }}>{children}</span>
  );

  return (
    <div>
      {/* Title row with toggle icons */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <SectionLabel style={{ marginBottom: 0 }}>Parts & Tools</SectionLabel>
        <div style={{ display: "flex", gap: 6 }}>
          <ToggleIcon active={showLinks} onClick={() => setShowLinks(!showLinks)}>🔗</ToggleIcon>
          <ToggleIcon active={showImages} onClick={() => setShowImages(!showImages)}>🖼</ToggleIcon>
        </div>
      </div>

      {items.map((item, i) => (
        <div key={i} style={{ border: sketchBorderLight, borderRadius: sketchRadius, padding: 10, marginBottom: 8, background: "#fff" }}>
          {/* Top section: text info + optional image side by side */}
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: fontUI, fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{item.name}</div>
              <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight }}>{item.where}</div>
              {showLinks && item.link && (
                <div style={{ fontFamily: fontBody, fontSize: 12, color: "#1976D2", marginTop: 3 }}>🔗 {item.link}</div>
              )}
            </div>
            {/* Image: top-right, above notes */}
            {showImages && (
              <div style={{
                width: 64, height: 64, border: "2px dashed #bbb", borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: fontBody, fontSize: 10, color: inkLight, textAlign: "center", flexShrink: 0,
                background: "repeating-linear-gradient(135deg,transparent,transparent 4px,rgba(0,0,0,.02) 4px,rgba(0,0,0,.02) 8px)",
              }}>{item.imgLabel}</div>
            )}
          </div>
          {/* Notes: always full card width, pushed below image */}
          <div style={{
            marginTop: 6, border: "1px dashed #ccc", borderRadius: 4, padding: "4px 8px",
            fontFamily: fontBody, fontSize: 12, color: item.note ? ink : "#bbb", background: bgCard, minHeight: 20,
          }}>
            {item.note || "tap to add notes (e.g. 'borrowed from Jo, return by Fri')"}
          </div>
        </div>
      ))}
      <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight, marginTop: 8, textAlign: "center" }}>
        Marcus would use notes to track borrowing, stock levels and return dates.
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 5 — STAGE DETAIL (reworked)
   • Title ABOVE badges
   • No 'Easy' difficulty badge (only shown if stage is Hard)
   • Larger fonts for legibility
   • Single "Potential hazards" dropdown referencing all steps
     — grouped visually with the steps section
   • "Ask a question" collapsible restored from v1
   • "Checkpoint" collapsible last
   • No "Rough time it took me"
   • No "Is this safe / will it break?" button
   ════════════════════════════════════════════════════════ */
function StageDetailScreen({ onNav }) {
  const [hazardsOpen, setHazardsOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [checkpointOpen, setCheckpointOpen] = useState(false);

  const steps = [
    {
      text: "Hold the new latch mechanism with the tongue pointing outward (away from the door edge).",
      forceNote: null,
    },
    {
      text: "Slide the latch into the hole in the door edge until the faceplate sits flush.",
      forceNote: "Firm push but don't force — if it resists, check alignment before applying more pressure.",
    },
    {
      text: "Mark screw holes with a pencil, pre-drill if needed, then fasten the faceplate screws.",
      forceNote: "Tighten screws snug — over-torquing can strip softwood.",
    },
  ];

  const hazardsByStep = [
    { step: 1, items: ["Ensure latch orientation is correct — reversing it will prevent the door from closing properly."] },
    { step: 2, items: ["Over-forcing a misaligned latch can crack the door edge or strip the bore hole."] },
    { step: 3, items: ["Pre-drill in hardwood to avoid splitting.", "Drill bit should be slightly narrower than screw shank."] },
  ];

  return (
    <div>
      {/* Title ABOVE badges */}
      <SectionLabel style={{ marginBottom: 4, fontSize: 19 }}>Reassemble & Test</SectionLabel>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
        <AnnotationTag color="#C8E6C9">Stage 3 of 3</AnnotationTag>
        <AnnotationTag>~15 min</AnnotationTag>
        {/* Difficulty badge: only shown if Hard or above — omitted here for Easy */}
      </div>

      {/* Steps */}
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: 8, padding: "10px 0", borderBottom: "1px dashed #ddd" }}>
          <span style={{ fontFamily: fontUI, fontSize: 15, fontWeight: 700, color: inkLight, flexShrink: 0, width: 22, textAlign: "right" }}>{i + 1}.</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: fontBody, fontSize: 16, color: ink, lineHeight: 1.5 }}>{s.text}</div>
            {s.forceNote && (
              <div style={{
                fontFamily: fontBody, fontSize: 14, color: "#6D4C00", fontStyle: "italic", marginTop: 5,
                background: "#FFF8E1", padding: "4px 8px", borderRadius: 4, borderLeft: "3px solid #FFB300", lineHeight: 1.4,
              }}>💪 {s.forceNote}</div>
            )}
          </div>
        </div>
      ))}

      {/* ── HAZARDS dropdown (single, referencing all steps — grouped with steps) ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8, marginBottom: 4 }}>
        <div
          onClick={() => setHazardsOpen(!hazardsOpen)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 5, cursor: "pointer",
            fontFamily: fontUI, fontSize: 13, color: "#C62828",
            padding: "5px 10px", borderRadius: sketchRadius,
            border: "1.5px dashed #E57373",
            background: hazardsOpen ? "#FBE9E7" : "transparent", transition: "background 0.15s",
          }}
        >
          <span style={{ fontSize: 14 }}>⚠</span>
          Potential hazards
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: hazardsOpen ? "rotate(90deg)" : "rotate(0)", fontSize: 11 }}>▸</span>
        </div>
      </div>
      {hazardsOpen && (
        <div style={{
          border: "1px solid #FFCDD2", borderRadius: sketchRadius,
          background: "#FBE9E7", padding: 10, marginBottom: 6,
        }}>
          {hazardsByStep.map((h, hi) => (
            <div key={hi} style={{ marginBottom: hi < hazardsByStep.length - 1 ? 8 : 0 }}>
              <div style={{ fontFamily: fontUI, fontSize: 13, color: "#B71C1C", marginBottom: 2 }}>Step {h.step}</div>
              {h.items.map((d, di) => (
                <div key={di} style={{ fontFamily: fontBody, fontSize: 14, color: "#B71C1C", lineHeight: 1.4, paddingLeft: 8 }}>• {d}</div>
              ))}
            </div>
          ))}
        </div>
      )}

      <Divider />

      {/* ── ASK A QUESTION dropdown (restored from v1) ── */}
      <div
        onClick={() => setQuestionOpen(!questionOpen)}
        style={{
          border: sketchBorderLight, borderRadius: sketchRadius, padding: "10px 12px",
          cursor: "pointer", background: bgCard, marginBottom: 8,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{ fontFamily: fontUI, fontSize: 15, fontWeight: 600 }}>💬 Ask a question</span>
        <span style={{ transition: "transform 0.2s", transform: questionOpen ? "rotate(90deg)" : "rotate(0)" }}>▸</span>
      </div>
      {questionOpen && (
        <div style={{
          border: sketchBorderLight, borderTop: "none", borderRadius: "0 0 6px 6px",
          padding: 12, marginTop: -8, marginBottom: 8, background: "#fff",
        }}>
          <div style={{
            border: "1.5px solid #ccc", borderRadius: sketchRadius, padding: 10,
            minHeight: 48, fontFamily: fontBody, fontSize: 15, color: "#bbb", marginBottom: 8,
          }}>
            Describe your issue or question…
          </div>
          <Placeholder h={50} label="📷  Attach photo of problem" style={{ marginBottom: 8 }} />
          <Btn small onClick={() => onNav("ask")}>Submit question →</Btn>
          <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight, marginTop: 6 }}>
            If the app detects a safety concern, the Safety View will appear.
          </div>
        </div>
      )}

      {/* ── CHECKPOINT dropdown (last) ── */}
      <div
        onClick={() => setCheckpointOpen(!checkpointOpen)}
        style={{
          border: `2px solid ${safe}`, borderRadius: sketchRadius, padding: "10px 12px",
          cursor: "pointer", background: "#f0f7f0", marginBottom: 8,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{ fontFamily: fontUI, fontSize: 15, fontWeight: 600 }}>✓ Checkpoint: Does it look right?</span>
        <span style={{ transition: "transform 0.2s", transform: checkpointOpen ? "rotate(90deg)" : "rotate(0)" }}>▸</span>
      </div>
      {checkpointOpen && (
        <div style={{
          border: "1.5px dashed #81C784", borderTop: "none", borderRadius: "0 0 6px 6px",
          padding: 12, marginBottom: 8, marginTop: -8, background: "#f9fdf9",
        }}>
          <Placeholder h={50} label="[diagram: latch tongue facing outward]" style={{ marginBottom: 8 }} />
          <div style={{ fontFamily: fontBody, fontSize: 15, color: ink }}>
            The latch tongue should point away from the door. The faceplate should be flush and square.
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <Btn small variant="secondary">Yes ✓</Btn>
            <Btn small variant="danger" onClick={() => onNav("ask")}>No — help!</Btn>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 6 — SAFETY VIEW (unchanged from v2)
   ════════════════════════════════════════════════════════ */
function SafetyViewScreen() {
  return (
    <div>
      <div style={{ background: "#FBE9E7", border: `2.5px solid ${danger}`, borderRadius: sketchRadius, padding: 14, marginBottom: 14, textAlign: "center" }}>
        <div style={{ fontSize: 28, marginBottom: 4 }}>⚠</div>
        <div style={{ fontFamily: fontUI, fontSize: 18, fontWeight: 700, color: "#C62828" }}>Safety Concern Flagged</div>
      </div>
      <div style={{ fontFamily: fontBody, fontSize: 14, color: ink, lineHeight: 1.5, marginBottom: 14, background: "#fff", border: sketchBorderLight, borderRadius: sketchRadius, padding: 10 }}>
        <strong style={{ fontFamily: fontUI }}>Improvisation advice:</strong> Modifying joist hangers may reduce their load-bearing rating. Structural connections supporting body weight require correct hardware ratings. <strong>Strongly recommend consulting an engineer or carpenter.</strong>
      </div>
      <SectionLabel>What would you like to do?</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { icon: "🔍", label: "Link me to experts in my area", desc: "We'll find local pros who can help" },
          { icon: "⚡", label: "I understand the risks — show me how", desc: "We'll provide the guide with caveats" },
          { icon: "💡", label: "Suggest alternatives", desc: "We'll look for a safer approach" },
        ].map((opt, i) => (
          <div key={i} style={{
            border: sketchBorderLight, borderRadius: sketchRadius, padding: "10px 12px",
            background: "#fff", cursor: "pointer", display: "flex", gap: 10, alignItems: "flex-start",
          }}>
            <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{opt.icon}</span>
            <div>
              <div style={{ fontFamily: fontUI, fontSize: 14, fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight }}>{opt.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight, marginTop: 12, textAlign: "center" }}>
        This is Marcus' scenario: modifying joist hangers for his climbing wall.
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIEW 7 — ASK (LLM Chat — unchanged from v2)
   ════════════════════════════════════════════════════════ */
function AskScreen({ onNav }) {
  const messages = [
    { from: "user", text: "The latch won't slide in flush — it's catching on something inside the door edge.", hasPhoto: true },
    { from: "ai", text: "It looks like there's a small wood burr inside the bore hole from the original install. Try using a chisel or utility knife to carefully pare it flush. You shouldn't need much force — just enough to shave the high spot.", hasPhoto: false },
    { from: "user", text: "Done — it slides in now but the faceplate isn't sitting perfectly flat.", hasPhoto: false },
    { from: "ai", text: "That's common. You can deepen the mortise slightly with the chisel so the faceplate recesses fully. Score the outline first with a utility knife, then pare thin shavings. A half-millimetre is usually enough.", hasPhoto: false },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ background: bgCard, border: sketchBorderLight, borderRadius: sketchRadius, padding: "6px 10px", marginBottom: 10, fontFamily: fontBody, fontSize: 12, color: inkLight }}>
        Re: <strong style={{ fontFamily: fontUI, color: ink }}>Stage 3 — Reassemble & Test</strong>
      </div>
      <div style={{ flex: 1, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", marginBottom: 8 }}>
            <div style={{
              maxWidth: "82%", background: m.from === "user" ? "#E3F2FD" : "#fff",
              border: m.from === "user" ? "2px solid #90CAF9" : sketchBorderLight,
              borderRadius: m.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", padding: "8px 11px",
            }}>
              {m.hasPhoto && <Placeholder h={44} label="📷 attached photo" style={{ marginBottom: 6, borderColor: "#90CAF9" }} />}
              <div style={{ fontFamily: fontBody, fontSize: 13, color: ink, lineHeight: 1.45 }}>{m.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ border: sketchBorderLight, borderRadius: sketchRadius, padding: 8, background: "#fff", marginBottom: 8 }}>
        <div style={{ fontFamily: fontBody, fontSize: 13, color: "#bbb", minHeight: 32, marginBottom: 6 }}>Ask a follow-up…</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: fontBody, fontSize: 18, cursor: "pointer" }}>📷</span>
          <Btn small>Send →</Btn>
        </div>
      </div>
      <div onClick={() => onNav("stage_detail")} style={{
        border: `2px solid ${ink}`, borderRadius: sketchRadius, padding: "10px 12px",
        textAlign: "center", cursor: "pointer", background: bgAccent,
      }}>
        <div style={{ fontFamily: fontUI, fontSize: 14, fontWeight: 700, color: ink }}>✕ End chat & return</div>
        <div style={{ fontFamily: fontBody, fontSize: 11, color: inkLight, marginTop: 2 }}>Your stage view will refresh with any updates from this conversation</div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   APP SHELL
   ════════════════════════════════════════════════════════ */
export default function App() {
  const [screen, setScreen] = useState("home");
  const idx = SCREENS.indexOf(screen);

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen onNav={setScreen} />;
      case "project_input": return <ProjectInputScreen />;
      case "assessment_result": return <AssessmentResultScreen onNav={setScreen} />;
      case "plan_overview": return <PlanOverviewScreen onNav={setScreen} />;
      case "parts_tools": return <PartsToolsScreen />;
      case "stage_detail": return <StageDetailScreen onNav={setScreen} />;
      case "safety_view": return <SafetyViewScreen />;
      case "ask": return <AskScreen onNav={setScreen} />;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 12px 40px", fontFamily: fontBody }}>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Architects+Daughter&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: fontUI, fontSize: 20, fontWeight: 700, color: ink, marginBottom: 4, textAlign: "center", letterSpacing: 0.5 }}>
        Lo-Fi Wireframes — DIY Companion App
      </div>
      <div style={{ fontFamily: fontBody, fontSize: 14, color: inkLight, marginBottom: 16, textAlign: "center" }}>
        Tap through screens or use the nav strip below
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginBottom: 16, maxWidth: 480 }}>
        {SCREENS.map(s => (
          <div key={s} onClick={() => setScreen(s)} style={{
            fontFamily: fontUI, fontSize: 11, padding: "4px 8px", borderRadius: 4,
            border: screen === s ? `2px solid ${ink}` : "1.5px solid #ccc",
            background: screen === s ? highlight : "#fff", cursor: "pointer",
            transition: "all 0.15s", fontWeight: screen === s ? 700 : 400,
          }}>{SCREEN_LABELS[s]}</div>
        ))}
      </div>

      <div style={{
        width: 375, maxWidth: "100%", borderRadius: 32, border: "3px solid #333",
        background: bgPage, boxShadow: "6px 8px 0px #d0cfc5", overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ background: "#333", color: "#eee", padding: "6px 16px", display: "flex", justifyContent: "space-between", fontFamily: fontUI, fontSize: 11, flexShrink: 0 }}>
          <span>9:41</span><span>DIY Companion</span><span>●●●</span>
        </div>
        <div style={{ padding: "16px 18px 20px", minHeight: 520, overflowY: "auto", maxHeight: 620, flex: 1 }}>
          {renderScreen()}
        </div>
        <div style={{ background: bgAccent, borderTop: "2px solid #ccc", display: "flex", justifyContent: "space-around", padding: "8px 0 12px", flexShrink: 0 }}>
          {[
            { icon: "🏠", label: "Home", s: "home" },
            { icon: "📋", label: "Plan", s: "plan_overview" },
            { icon: "🔧", label: "Parts", s: "parts_tools" },
            { icon: "💬", label: "Ask", s: "ask" },
          ].map(n => (
            <div key={n.s} onClick={() => setScreen(n.s)} style={{ textAlign: "center", cursor: "pointer", opacity: screen === n.s ? 1 : 0.5, transition: "opacity 0.15s" }}>
              <div style={{ fontSize: 18 }}>{n.icon}</div>
              <div style={{ fontFamily: fontUI, fontSize: 10 }}>{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Btn variant="secondary" onClick={() => idx > 0 && setScreen(SCREENS[idx - 1])} style={{ opacity: idx === 0 ? 0.3 : 1 }}>← Prev</Btn>
        <Btn onClick={() => idx < SCREENS.length - 1 && setScreen(SCREENS[idx + 1])} style={{ opacity: idx === SCREENS.length - 1 ? 0.3 : 1 }}>Next →</Btn>
      </div>
      <div style={{ fontFamily: fontBody, fontSize: 12, color: inkLight, marginTop: 6 }}>{SCREEN_LABELS[screen]}</div>
    </div>
  );
}