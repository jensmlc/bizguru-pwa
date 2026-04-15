// Central Data Array
const projects = [
    { id: 1, title: "Whitelabel Landscape", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Competitive analysis of whitelabel platforms & GHL positioning.", file: "01-whitelabel-landscape.md", progress: 100 },
    { id: 2, title: "Service Niches Analysis", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Identified high-value niches: roofing, solar, HVAC, plumbing.", file: "02-service-niches.md", progress: 100 },
    { id: 3, title: "Competitor Landscape", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Deep dive: Halo, Dripify, Revnue, Snov.io positioning & pricing.", file: "03-competitors.md", progress: 100 },
    { id: 4, title: "Add-on & Upsell Strategy", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Path to $5K MRR: $800–2,000 from existing 8 clients via upsells.", file: "04-addons.md", progress: 100 },
    { id: 5, title: "Free Acquisition Channels", category: "BizGuru", status: "complete", date: "2026-04-14", description: "YouTube, Twitter, podcasts, community building — zero budget.", file: "05-free-acquisition.md", progress: 100 },
    { id: 6, title: "Tech Edge Analysis", category: "BizGuru", status: "complete", date: "2026-04-14", description: "GHL API integrations, custom workflows, proprietary automations.", file: "06-tech-edge.md", progress: 100 },
    { id: 7, title: "Cold Call Playbook", category: "Marketing", status: "complete", date: "2026-04-14", description: "Roofing cold call script, pain points, MCTB positioning.", file: "07-cold-call.md", progress: 100 },
    { id: 8, title: "Commission Sales Orgs", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Blue ocean untapped: solar, HVAC, roofing sales teams.", file: "08-commission-sales.md", progress: 100 },
    { id: 9, title: "Strategy Document", category: "BizGuru", status: "complete", date: "2026-04-14", description: "2026 growth roadmap: $5K → $10K → $30K MRR targets.", file: "09-strategy.md", progress: 100 },
    { id: 10, title: "Self-Audit", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Honest assessment: strengths, weaknesses, unfair advantages.", file: "10-self-audit.md", progress: 100 },
    { id: 11, title: "Gaps & Challenges", category: "BizGuru", status: "complete", date: "2026-04-14", description: "What's missing: hiring, automations, brand, systems.", file: "11-gaps.md", progress: 100 },
    { id: 12, title: "Improvements Roadmap", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Quick wins & long-term initiatives to hit growth targets.", file: "12-improvements.md", progress: 100 },
    { id: 13, title: "Identity & Brand Drafts", category: "Setup", status: "complete", date: "2026-04-14", description: "Draft SOUL.md & IDENTITY.md iterations.", file: "13-identity-drafts.md", progress: 100 },
    { id: 14, title: "Action Plan — 30/60/90", category: "BizGuru", status: "in-progress", date: "2026-04-14", description: "Concrete next steps: hiring, demos, cold calls, upsells.", file: "14-action-plan.md", progress: 85 },
    { id: 15, title: "Executed Tasks", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Finished deliverables from overnight research sprint.", file: "15-executed.md", progress: 100 },
    { id: 16, title: "Items Awaiting Approval", category: "BizGuru", status: "pending", date: "2026-04-14", description: "Drafts & recommendations pending Jens sign-off.", file: "16-needs-approval.md", progress: 50 },
    { id: 17, title: "Iteration & Feedback", category: "BizGuru", status: "in-progress", date: "2026-04-14", description: "Refinements based on Jens feedback & market testing.", file: "17-iteration.md", progress: 60 },
    { id: 18, title: "Dee's Strategic Ideas", category: "BizGuru", status: "complete", date: "2026-04-14", description: "Assistant recommendations for growth & positioning.", file: "18-dee-ideas.md", progress: 100 },
    { id: 19, title: "Open Questions & Clarifications", category: "BizGuru", status: "pending", date: "2026-04-14", description: "Unresolved questions from research — awaiting answers.", file: "19-questions.md", progress: 40 },
    { id: 20, title: "OpenClaw Deep Research (Kimi)", category: "OpenClaw", status: "complete", date: "2026-04-14", description: "Kimi K2.5 deep dive: architecture, features, optimization.", file: "openclaw-deep-research-KIMI.md", progress: 100 },
    { id: 21, title: "OpenClaw Deep Research (Gemini)", category: "OpenClaw", status: "complete", date: "2026-04-14", description: "Gemini analysis: multimodal capabilities, use cases.", file: "openclaw-deep-research-GEMINI.md", progress: 100 },
    { id: 22, title: "OpenClaw Deep Research (Sonnet)", category: "OpenClaw", status: "complete", date: "2026-04-14", description: "Claude Sonnet deep analysis: reasoning, optimization.", file: "openclaw-deep-research-SONNET.md", progress: 100 },
    { id: 23, title: "OpenClaw Deep Research (Codex)", category: "OpenClaw", status: "complete", date: "2026-04-14", description: "Codex research: code generation, architecture patterns.", file: "openclaw-deep-research-CODEX.md", progress: 100 },
    { id: 24, title: "Calendar & Email Setup Guide", category: "Setup", status: "in-progress", date: "2026-04-14", description: "Integration guide for calendar sync & email workflows.", file: "setup-guide-calendar-email.md", progress: 70 },
    { id: 25, title: "Cheap Marketing Research", category: "Marketing", status: "complete", date: "2026-04-14", description: "Low-cost acquisition: viral loops, referral, community.", file: "cheap-marketing-research.md", progress: 100 },
    { id: 26, title: "SOUL.md v2 (Draft)", category: "Setup", status: "pending", date: "2026-04-14", description: "Updated persona & values — draft version.", file: "drafts/SOUL-v2.md", progress: 50 },
    { id: 27, title: "IDENTITY.md v2 (Draft)", category: "Setup", status: "pending", date: "2026-04-14", description: "Revised identity metadata — awaiting review.", file: "drafts/IDENTITY-v2.md", progress: 50 }
];

let filteredProjects = [...projects];
let currentFilter = "all";
let currentStatusFilter = null;
let hideComplete = false;

function init() {
    try { if (localStorage.getItem('dashTheme') === 'light') document.documentElement.classList.add('light-mode'); } catch(e) {}
    renderFocusZone();
    generateBriefing();
    applyFilters();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => console.log('SW registered'));
    }

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openCmdPalette();
        }
    });
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
function formatStatus(s) { return { complete:'Complete', pending:'Needs Sign-off', 'in-progress':'In Progress' }[s] || s; }
function statusIcon(s) { return { complete:'✅', pending:'⏳', 'in-progress':'🔥' }[s] || '·'; }

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (filteredProjects.length === 0) {
        container.innerHTML = '<div class="no-results">No projects match your filters.</div>';
        return;
    }

    const statusOrder = { pending: 0, 'in-progress': 1, complete: 2 };
    const sorted = [...filteredProjects].sort((a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9));

    container.innerHTML = sorted.map(p => `
        <div class="project-card" data-status="${p.status}" onclick="viewDetails(${p.id})">
            <div class="project-header">
                <div class="project-title">${escapeHtml(p.title)}</div>
                <div class="project-meta">
                    <span class="badge category" data-cat="${p.category}">${escapeHtml(p.category)}</span>
                    <span class="badge status ${p.status}">${formatStatus(p.status)}</span>
                </div>
            </div>
            <div class="project-description">${escapeHtml(p.description)}</div>
            <div class="progress-bar-container">
                <div class="progress-label"><span>Progress</span><span>${p.progress}%</span></div>
                <div class="progress-bar"><div class="progress-fill ${p.status}" style="width: ${p.progress}%"></div></div>
            </div>
            <button class="action-btn touch-target" onclick="event.stopPropagation(); viewDetails(${p.id});">View Details</button>
        </div>
    `).join('');
}

function updateStats() {
    const total = filteredProjects.length;
    const complete = filteredProjects.filter(p => p.status === 'complete').length;
    const inProgress = filteredProjects.filter(p => p.status === 'in-progress').length;
    const pending = filteredProjects.filter(p => p.status === 'pending').length;

    document.getElementById('statsContainer').innerHTML = `
        <div class="stat-card touch-target" onclick="filterByStatus(null)">
            <div class="stat-number">${total}</div>
            <div class="stat-label">Total</div>
        </div>
        <div class="stat-card complete-stat touch-target" onclick="filterByStatus('complete')">
            <div class="stat-number">${complete}</div>
            <div class="stat-label">Complete</div>
        </div>
        <div class="stat-card in-progress-stat touch-target" onclick="filterByStatus('in-progress')">
            <div class="stat-number">${inProgress}</div>
            <div class="stat-label">Active</div>
        </div>
        <div class="stat-card needs-action touch-target" onclick="filterByStatus('pending')">
            <div class="stat-number">${pending}</div>
            <div class="stat-label">Need Sign-Off</div>
        </div>
    `;
    document.getElementById('projectCount').textContent = total;
}

function filterByCategory(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(hideComplete) document.getElementById('hideCompleteBtn').classList.add('active');
    currentFilter = btn.dataset.filter;
    currentStatusFilter = null;
    applyFilters();
}

function filterByStatus(status) {
    currentStatusFilter = (currentStatusFilter === status) ? null : status;
    applyFilters();
}

function toggleHideComplete() {
    hideComplete = !hideComplete;
    document.getElementById('hideCompleteBtn').classList.toggle('active', hideComplete);
    applyFilters();
}

let filterTimer;
function applyFilters() {
    clearTimeout(filterTimer);
    filterTimer = setTimeout(() => {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        filteredProjects = projects.filter(p => {
            const matchCat = currentFilter === 'all' || p.category === currentFilter;
            const matchStatus = !currentStatusFilter || p.status === currentStatusFilter;
            const matchSearch = searchTerm === '' || p.title.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
            const matchHide = !hideComplete || p.status !== 'complete';
            return matchCat && matchStatus && matchSearch && matchHide;
        });
        renderProjects();
        updateStats();
    }, 150);
}

function renderFocusZone() {
    const focusItems = projects.filter(p => p.status === 'pending' || p.status === 'in-progress');
    const container = document.getElementById('focusGrid');
    if (focusItems.length === 0) {
        container.innerHTML = '<p style="color: var(--accent-green); font-size: 14px;">✅ Nothing needs your attention right now.</p>';
        return;
    }
    const sorted = [...focusItems].sort((a, b) => a.progress - b.progress);
    container.innerHTML = sorted.map(p => `
        <div class="focus-card touch-target ${p.status === 'in-progress' ? 'in-progress' : ''}" onclick="viewDetails(${p.id})">
            <div style="flex:1">
                <div class="focus-card-title">${escapeHtml(p.title)}</div>
                <div class="focus-card-meta">${statusIcon(p.status)} ${formatStatus(p.status)} · ${p.category} · ${p.progress}%</div>
            </div>
        </div>
    `).join('');
}

function generateBriefing() {
    const pending = projects.filter(p => p.status === 'pending');
    const totalComplete = projects.filter(p => p.status === 'complete').length;
    let html = `<div class="briefing-item"><strong>🎯 Key Target:</strong> Expand generic CRM features utilizing D2D credibility.</div>`;
    if (pending.length > 0) {
        html += `<div class="briefing-item"><strong>⏳ Needs Your Sign-Off (${pending.length}):</strong><ul style="margin-left:20px;margin-top:6px;">${pending.map(p => `<li>${p.title}</li>`).join('')}</ul></div>`;
    }
    html += `<div class="briefing-item"><strong>✅ Overall:</strong> ${totalComplete}/${projects.length} complete</div>`;
    document.getElementById('briefingContent').innerHTML = html;
}

function toggleBriefing() { document.getElementById('briefingPanel').classList.toggle('active'); }
function toggleDarkMode() {
    document.documentElement.classList.toggle('light-mode');
    try { localStorage.setItem('dashTheme', document.documentElement.classList.contains('light-mode') ? 'light' : 'dark'); } catch(e){}
}

function viewDetails(id) {
    const p = projects.find(x => x.id === id);
    if(!p) return;
    document.getElementById('sheetContent').innerHTML = `
        <h2 style="margin-bottom:8px;">${escapeHtml(p.title)}</h2>
        <span class="badge status ${p.status}">${formatStatus(p.status)}</span>
        <span class="badge category" style="margin-left:8px">${escapeHtml(p.category)}</span>
        <div style="margin-top:20px; font-size:16px; line-height:1.6">${escapeHtml(p.description)}</div>
        <div style="margin-top:20px; font-size:14px; color:var(--text-muted)">File path: <code style="background:var(--bg-elevated);padding:4px 8px;border-radius:4px;">${p.file}</code></div>
        <button class="action-btn touch-target" style="margin-top:30px; background:var(--accent-blue); color:white" onclick="closeDetails()">Close</button>
    `;
    document.getElementById('sheetOverlay').classList.add('open');
    document.getElementById('detailsSheet').classList.add('open');
    history.pushState({sheetOpen: true}, '', '#details');
}

function closeDetails(e) {
    if(e && e.target.id !== 'sheetOverlay' && e.type === 'click') return;
    document.getElementById('sheetOverlay').classList.remove('open');
    document.getElementById('detailsSheet').classList.remove('open');
    if (history.state && history.state.sheetOpen) history.back();
}

const commands = [
    { title: 'Toggle Theme', action: toggleDarkMode },
    { title: 'Toggle Briefing', action: toggleBriefing },
    { title: 'Filter: Needs Sign-Off', action: () => filterByStatus('pending') },
    { title: 'Filter: All', action: () => filterByCategory(document.querySelector('.filter-btn[data-filter="all"]')) }
];

function openCmdPalette() {
    document.getElementById('cmdPaletteOverlay').classList.add('open');
    document.getElementById('cmdInput').focus();
    history.pushState({cmdOpen: true}, '', '#cmd');
    renderCmdResults('');
}

function closeCmdPalette(e) {
    if(e && e.target.id !== 'cmdPaletteOverlay' && e.type === 'click') return;
    document.getElementById('cmdPaletteOverlay').classList.remove('open');
    document.getElementById('cmdInput').value = '';
    if (history.state && history.state.cmdOpen) history.back();
}

document.getElementById('cmdInput').addEventListener('input', (e) => renderCmdResults(e.target.value.toLowerCase()));

function renderCmdResults(query) {
    const results = [];
    commands.forEach(c => { if(c.title.toLowerCase().includes(query)) results.push({...c, type: 'Command'}); });
    projects.forEach(p => { if(p.title.toLowerCase().includes(query)) results.push({title: p.title, type: 'Project', id: p.id}); });
    
    const container = document.getElementById('cmdResults');
    container.innerHTML = results.slice(0, 10).map((r, i) => `
        <div class="cmd-item touch-target" onclick="executeCmd(${i})">
            <span>${escapeHtml(r.title)}</span>
            <span style="font-size:12px; color:var(--text-muted)">${r.type}</span>
        </div>
    `).join('');
    window.currentCmdResults = results;
}

function executeCmd(index) {
    const item = window.currentCmdResults[index];
    closeCmdPalette();
    if(item.type === 'Command') item.action();
    if(item.type === 'Project') viewDetails(item.id);
}

window.addEventListener('popstate', (e) => {
    document.getElementById('sheetOverlay').classList.remove('open');
    document.getElementById('detailsSheet').classList.remove('open');
    document.getElementById('cmdPaletteOverlay').classList.remove('open');
});

function requestPushPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                const pending = projects.filter(p => p.status === 'pending');
                if(pending.length > 0) new Notification('BizGuru Dashboard', { body: `You have ${pending.length} items needing sign-off.`, icon: 'icons/icon-192x192.png' });
                else alert('Notifications enabled. No pending items right now.');
            } else {
                alert('Notification permission denied.');
            }
        });
    } else {
        alert('Notifications not supported on this device/browser.');
    }
}

window.addEventListener('DOMContentLoaded', init);