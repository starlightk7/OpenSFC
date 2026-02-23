// ===== Docs list =====
const DOC_PAGES = [
  { slug: "introduction",  file: "docs/introduction.md",  label: "Introduction", group: null },
  { slug: "bom",           file: "docs/bom.md",           label: "Parts Lists (BOM)",   group: null },
  { slug: "schematic",     file: "docs/schematic.md",     label: "Schematics",   group: null },
  { slug: "requirements",  file: "docs/requirements.md",  label: "Requirements", group: "console" },
  { slug: "assembly",      file: "docs/assembly.md",      label: "Assembly",     group: "console" },
  { slug: "debugging",     file: "docs/debugging.md",     label: "Debugging",    group: "console" },
  { slug: "controller-requirements",  file: "docs/controller-requirements.md",  label: "Requirements", group: "controller" },
  { slug: "controller-assembly",      file: "docs/controller-assembly.md",      label: "Assembly",     group: "controller" },
  { slug: "faq",           file: "docs/faq.md",           label: "FAQ",          group: null },
];

// ===== Navigation groups =====
const NAV_GROUPS = {
  console: { label: "Main Console", expanded: true },
  controller: { label: "Controllers", expanded: true }
};

// ===== Build sidebar =====
const navEl = document.getElementById("nav");
const docEl = document.getElementById("doc");

// Track expanded groups from localStorage - default to expanded if not set
const expandedGroups = JSON.parse(localStorage.getItem("nav_groups") || "{}");

// Set all defined groups to expanded by default if not in localStorage
Object.keys(NAV_GROUPS).forEach(groupKey => {
  if (expandedGroups[groupKey] === undefined) {
    expandedGroups[groupKey] = true;
  }
});

// Render groups and their pages
function renderNav() {
  // Get unique groups in order of first appearance
  const groupsInOrder = [];
  const seenGroups = new Set();
  DOC_PAGES.forEach(p => {
    if (p.group && !seenGroups.has(p.group)) {
      groupsInOrder.push(p.group);
      seenGroups.add(p.group);
    }
  });

  // Process pages in order, rendering group headers when we encounter first page of a group
  let currentGroupIndex = 0;

  DOC_PAGES.forEach((page, index) => {
    if (page.group === null) {
      // Top-level page - render directly
      const a = document.createElement("a");
      a.href = `#/${page.slug}`;
      a.textContent = page.label;
      a.dataset.slug = page.slug;
      navEl.appendChild(a);
    } else {
      // Page with group - check if we need to render the group header first
      if (index === 0 || DOC_PAGES[index - 1].group !== page.group) {
        const groupKey = page.group;
        const group = NAV_GROUPS[groupKey];
        if (!group) return;

        // Group header
        const groupHeader = document.createElement("div");
        groupHeader.className = "nav-group-header";
        groupHeader.dataset.group = groupKey;

        const groupTitle = document.createElement("span");
        groupTitle.textContent = group.label;

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "group-toggle" + (expandedGroups[groupKey] ? " expanded" : "");
        toggleBtn.setAttribute("aria-label", `Toggle ${group.label} group`);
        toggleBtn.setAttribute("aria-expanded", expandedGroups[groupKey] ? "true" : "false");

        groupHeader.appendChild(toggleBtn);
        groupHeader.appendChild(groupTitle);

        // Group content container
        const groupContent = document.createElement("div");
        groupContent.className = "nav-group-content";
        groupContent.dataset.group = groupKey;
        if (expandedGroups[groupKey]) {
          groupContent.classList.add("expanded");
        }

        groupHeader.addEventListener("click", (e) => {
          if (e.target !== toggleBtn) return;
          expandedGroups[groupKey] = !expandedGroups[groupKey];
          localStorage.setItem("nav_groups", JSON.stringify(expandedGroups));

          groupContent.classList.toggle("expanded");
          toggleBtn.classList.toggle("expanded");
          toggleBtn.setAttribute("aria-expanded", expandedGroups[groupKey] ? "true" : "false");
        });

        navEl.appendChild(groupHeader);
        navEl.appendChild(groupContent);

        // Add this page to the group content
        const a = document.createElement("a");
        a.href = `#/${page.slug}`;
        a.textContent = page.label;
        a.dataset.slug = page.slug;
        groupContent.appendChild(a);
      } else {
        // Subsequent page in same group - add to existing group content
        const existingGroupContent = navEl.lastElementChild;
        if (existingGroupContent && existingGroupContent.classList.contains("nav-group-content")) {
          const a = document.createElement("a");
          a.href = `#/${page.slug}`;
          a.textContent = page.label;
          a.dataset.slug = page.slug;
          existingGroupContent.appendChild(a);
        }
      }
    }
  });
}

renderNav();

// Close sidebar on mobile when clicking a nav link (but not group toggles)
navEl.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && e.target.tagName === 'A') {
    toggleSidebar();
  }
});

// ===== Router & loader =====
function currentSlug(){ const m = location.hash.match(/^#\/([^/?#]+)/); return m ? m[1] : DOC_PAGES[0].slug; }
async function loadPage(slug){
  [...navEl.querySelectorAll("a")].forEach(a => a.classList.toggle("active", a.dataset.slug === slug));
  const page = DOC_PAGES.find(p => p.slug === slug) || DOC_PAGES[0];

  // Scroll content to top when switching pages
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0);
  } else {
    docEl.scrollTop = 0;
  }

  try {
    const res = await fetch(page.file, { cache: "no-store" });
    if (!res.ok) {
      docEl.innerHTML = `<p style="color:red">Page not found: <code>${page.file}</code></p>`;
      return;
    }

    const md = await res.text();
    docEl.innerHTML = marked.parse(md, { mangle:false, headerIds:true });
    docEl.querySelectorAll("img").forEach(img => {
      const alt = img.getAttribute("alt") || "";
      const sizeMatch = alt.match(/\|(\d+)(x(\d+))?/);
      if (sizeMatch) {
        img.style.width = `${sizeMatch[1]}px`;
        if (sizeMatch[3]) img.style.height = `${sizeMatch[3]}px`;
            img.alt = alt.replace(sizeMatch[0], "").trim();
      }
    });

    docEl.querySelectorAll("a").forEach(a => {
      const href = a.getAttribute("href");
      // Open in new tab if it's an absolute URL OR points outside /docs/
      if (href && (href.startsWith("http") || href.startsWith("../ibom/") || href.endsWith(".html"))) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    });

    mediumZoom(docEl.querySelectorAll("img"), { background:"rgba(0,0,0,0.85)", margin:24 });
  } catch (e) {
    docEl.innerHTML = `<p>Failed to load <code>${page.file}</code>: ${String(e)}</p>`;
  }
}
window.addEventListener("hashchange", () => loadPage(currentSlug()));
loadPage(currentSlug());

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const isOpen = sidebar.classList.toggle('open');
  if (overlay) {
    overlay.classList.toggle('show', isOpen);
  }
}

// Create overlay element once at startup
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.addEventListener('click', toggleSidebar);
  document.body.appendChild(overlay);
});
