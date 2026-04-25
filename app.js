/* ═══════════════════════════════════════════
   DIY Companion — Lo-Fi Wireframes
   Vanilla JS controller (no framework)
═══════════════════════════════════════════ */

const SCREENS = [
  'home', 'project_input', 'assessment_result',
  'plan_overview', 'parts_tools', 'stage_detail',
  'safety_view', 'ask'
];
const SCREEN_LABELS = {
  home:               '0. Home',
  project_input:      '1. Project Input',
  assessment_result:  '2. Assessment',
  plan_overview:      '3. Plan Overview',
  parts_tools:        '4. Parts & Tools',
  stage_detail:       '5. Stage Detail',
  safety_view:        '6. Safety View',
  ask:                '7. Ask',
};

let currentScreen = 'home';

/* ── Navigation ─────────────────────────── */
function navigate(screen) {
  if (!SCREENS.includes(screen)) return;
  currentScreen = screen;
  renderPhoneBody();
  updateNavStrip();
  updateTabBar();
  updatePager();
}

/* ── Screen nav strip ────────────────────── */
function buildNavStrip() {
  const nav = document.getElementById('screenNav');
  nav.innerHTML = '';
  SCREENS.forEach(s => {
    const el = document.createElement('div');
    el.className = 'screen-nav-item' + (s === currentScreen ? ' active' : '');
    el.textContent = SCREEN_LABELS[s];
    el.addEventListener('click', () => navigate(s));
    nav.appendChild(el);
  });
}
function updateNavStrip() {
  document.querySelectorAll('.screen-nav-item').forEach((el, i) => {
    el.classList.toggle('active', SCREENS[i] === currentScreen);
  });
}

/* ── Tab bar ─────────────────────────────── */
function updateTabBar() {
  document.querySelectorAll('.tab-item').forEach(el => {
    el.classList.toggle('active', el.dataset.screen === currentScreen);
  });
}

/* ── Pager ───────────────────────────────── */
function updatePager() {
  const idx = SCREENS.indexOf(currentScreen);
  document.getElementById('btnPrev').disabled = idx === 0;
  document.getElementById('btnNext').disabled = idx === SCREENS.length - 1;
  document.getElementById('pagerLabel').textContent = SCREEN_LABELS[currentScreen];
}

/* ── Render phone body ───────────────────── */
function renderPhoneBody() {
  const body = document.getElementById('phoneBody');
  const tpl = document.getElementById(`tpl-${currentScreen}`);
  if (!tpl) { body.innerHTML = '<p>Screen not found.</p>'; return; }
  body.innerHTML = '';
  body.appendChild(tpl.content.cloneNode(true));
  afterRender(currentScreen, body);
}

/* ── Post-render wiring (event listeners) ── */
function afterRender(screen, root) {

  /* Universal: data-nav buttons */
  root.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.nav));
  });

  switch (screen) {

    /* ── HOME ── */
    case 'home': {
      const active = [
        { name: 'Bedroom door handle',    stages: 3, done: 1, updated: 'Today',     nav: 'plan_overview' },
        { name: 'Garage climbing wall',   stages: 8, done: 5, updated: 'Yesterday', nav: 'plan_overview' },
        { name: 'Leaky kitchen tap',      stages: 4, done: 0, updated: '3 days ago',nav: 'plan_overview' },
      ];
      const archived = [
        { name: 'Fence paling replacement', stages: 5, done: 5, updated: '12 Mar' },
        { name: 'Squeaky floorboard fix',   stages: 2, done: 2, updated: '28 Feb'  },
      ];

      const activeWrap   = root.querySelector('#activeProjects');
      const archiveWrap  = root.querySelector('#archiveProjects');
      const archiveTrig  = root.querySelector('#archiveTrigger');
      const archiveArrow = root.querySelector('#archiveArrow');

      active.forEach(p  => activeWrap.appendChild(makeProjectCard(p, false)));
      archived.forEach(p => archiveWrap.appendChild(makeProjectCard(p, true)));

      if (archiveTrig && archiveWrap && archiveArrow) {
        archiveTrig.addEventListener('click', () => {
        const open = !archiveWrap.classList.contains('hidden');
        archiveWrap.classList.toggle('hidden', open);
        archiveArrow.classList.toggle('open', !open);
        });
      }
      break;
    }

    /* ── PROJECT INPUT ── */
    case 'project_input': {
      root.querySelectorAll('.skill-option:not(.skill-other)').forEach(opt => {
        opt.addEventListener('click', () => {
          root.querySelectorAll('.skill-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
        });
      });
      break;
    }

    /* ── PLAN OVERVIEW ── */
    case 'plan_overview': {
      const stages = [
        { id: 1, title: 'Disassemble the handle',    time: '10 min', diff: 'Easy', done: true  },
        { id: 2, title: 'Purchase replacement parts', time: '20 min', diff: 'Easy', done: false },
        { id: 3, title: 'Reassemble and test',        time: '15 min', diff: 'Easy', done: false },
      ];
      const list = root.querySelector('#stageList');
      stages.forEach((s, i) => list.appendChild(makeStageItem(s, i)));
      break;
    }

    /* ── PARTS & TOOLS ── */
    case 'parts_tools': {
      const parts = [
        { name: 'Replacement door handle (model A345)', where: 'Stage 3 — Reassemble', link: 'bunnings.com.au', note: '',                    imgLabel: '[handle photo]' },
        { name: 'Internal latch mechanism',             where: 'Stage 3 — Reassemble', link: 'bunnings.com.au', note: 'Match existing backset (60mm)', imgLabel: '[latch photo]' },
        { name: 'Screw kit — 6g × 30mm',               where: 'Stage 3 — Reassemble', link: 'bunnings.com.au', note: 'Pack of 8, only need 4',       imgLabel: '[screws photo]' },
        { name: 'Phillips-head screwdriver',            where: 'Stage 1 — Disassemble', link: null,             note: 'Already own',                  imgLabel: '[screwdriver]' },
      ];

      const toggleLinks  = root.querySelector('#toggleLinks');
      const toggleImages = root.querySelector('#toggleImages');
      const list = root.querySelector('#partsList');

      let showLinks  = true;
      let showImages = false;

      const renderParts = () => {
        list.innerHTML = '';
        parts.forEach(p => list.appendChild(makePartCard(p, showLinks, showImages)));
      };
      renderParts();

      if (toggleLinks) {
        toggleLinks.addEventListener('click', () => {
          showLinks = !showLinks;
          toggleLinks.classList.toggle('active', showLinks);
          renderParts();
        });
      }
      if (toggleImages) {
        toggleImages.addEventListener('click', () => {
          showImages = !showImages;
          toggleImages.classList.toggle('active', showImages);
          renderParts();
        });
      }
      break;
    }

    /* ── STAGE DETAIL ── */
    case 'stage_detail': {
      wireCollapsible(root, 'hazardTrigger', 'hazardArrow', 'hazardPanel', 'hazard-trigger', 'open');
      wireCollapsible(root, 'askTrigger',    'askArrow',    'askPanel');
      wireCollapsible(root, 'checkTrigger',  'checkArrow',  'checkPanel');
      break;
    }
  }
}

/* ── Helpers ─────────────────────────────── */

function makeProjectCard(p, archived) {
  const card = document.createElement('div');
  card.className = 'project-card' + (archived ? ' archived' : '');
  if (!archived) card.addEventListener('click', () => navigate('plan_overview'));

  const pct    = (p.done / p.stages) * 100;
  const isDone = p.done === p.stages;
  card.innerHTML = `
    <div class="project-card-top">
      <div class="project-name">${p.name}</div>
      <div class="project-date">${p.updated}</div>
    </div>
    <div class="mini-progress-wrap">
      <div class="mini-progress-track">
        <div class="mini-progress-fill ${isDone ? 'complete' : ''}" style="width:${pct}%"></div>
      </div>
      <span class="mini-progress-label">${p.done}/${p.stages}</span>
    </div>`;
  return card;
}

function makeStageItem(s, i) {
  const wrap = document.createElement('div');
  wrap.className = 'stage-item' + (s.done ? ' done' : '');

  const row = document.createElement('div');
  row.className = 'stage-row';
  row.innerHTML = `
    <span class="stage-checkbox">${s.done ? '☑' : '☐'}</span>
    <div class="stage-info">
      <div class="stage-title">${s.title}</div>
      <div class="stage-meta">${s.time} · ${s.diff}</div>
    </div>
    <span class="stage-expand-arrow" id="stageArrow-${i}">▸</span>`;

  const preview = document.createElement('div');
  preview.className = 'stage-detail-preview hidden';
  preview.innerHTML = `
    <div style="margin-bottom:8px">Tap to open full stage detail with step-by-step guide, hazards, and checkpoints.</div>
    <button class="btn btn-primary btn-small" data-nav="stage_detail">Open stage →</button>`;

  preview.querySelector('[data-nav]').addEventListener('click', () => navigate('stage_detail'));

  row.addEventListener('click', () => {
    const open = !preview.classList.contains('hidden');
    preview.classList.toggle('hidden', open);
    row.querySelector(`#stageArrow-${i}`).classList.toggle('open', !open);
  });

  wrap.appendChild(row);
  wrap.appendChild(preview);
  return wrap;
}

function makePartCard(p, showLinks, showImages) {
  const card = document.createElement('div');
  card.className = 'part-card';

  const hasNote = p.note && p.note.length > 0;
  card.innerHTML = `
    <div class="part-top">
      <div class="part-info">
        <div class="part-name">${p.name}</div>
        <div class="part-where">${p.where}</div>
        ${showLinks && p.link ? `<div class="part-link">🔗 ${p.link}</div>` : ''}
      </div>
      ${showImages ? `<div class="part-img">${p.imgLabel}</div>` : ''}
    </div>
    <div class="part-note ${hasNote ? 'has-note' : ''}">
      ${hasNote ? p.note : "tap to add notes (e.g. 'borrowed from Jo, return by Fri')"}
    </div>`;
  return card;
}

/** Generic expand/collapse with arrow rotation.
 *  triggerId, arrowId, panelId: element IDs
 *  extraClass: optional class to toggle on the trigger itself
 *  openClass:  class name to use for "open" state (default: 'open')
 */
function wireCollapsible(root, triggerId, arrowId, panelId, extraClass, openClass = 'open') {
  const trigger = root.querySelector(`#${triggerId}`);
  const arrow   = root.querySelector(`#${arrowId}`);
  const panel   = root.querySelector(`#${panelId}`);
  if (!trigger || !panel) return;

  trigger.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden', isOpen);
    if (arrow) arrow.classList.toggle(openClass, !isOpen);
    if (extraClass) trigger.classList.toggle(openClass, !isOpen);
  });
}

/* ── Boot ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  buildNavStrip();
  renderPhoneBody();
  updateTabBar();
  updatePager();

  document.getElementById('btnPrev').addEventListener('click', () => {
    const idx = SCREENS.indexOf(currentScreen);
    if (idx > 0) navigate(SCREENS[idx - 1]);
  });
  document.getElementById('btnNext').addEventListener('click', () => {
    const idx = SCREENS.indexOf(currentScreen);
    if (idx < SCREENS.length - 1) navigate(SCREENS[idx + 1]);
  });

  document.querySelectorAll('.tab-item').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.screen));
  });
});