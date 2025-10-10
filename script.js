// ===== Docs list =====
const DOC_PAGES = [
  { slug: "introduction",  file: "docs/introduction.md",  label: "Introduction" },
  { slug: "requirements",  file: "docs/requirements.md",  label: "Requirements" },
  { slug: "bom",           file: "docs/bom.md",           label: "BOM" },
  { slug: "schematic",     file: "docs/schematic.md",     label: "Schematics" },
  { slug: "assembly",      file: "docs/assembly.md",      label: "Assembly" },
  { slug: "debugging",     file: "docs/debugging.md",     label: "Debugging" },
  { slug: "faq",           file: "docs/faq.md",           label: "FAQ" },
];

// ===== Build sidebar =====
const navEl = document.getElementById("nav");
const docEl = document.getElementById("doc");
DOC_PAGES.forEach(p => {
  const a = document.createElement("a");
  a.href = `#/${p.slug}`;
  a.textContent = p.label;
  a.dataset.slug = p.slug;
  navEl.appendChild(a);
});

// ===== Router & loader =====
function currentSlug(){ const m = location.hash.match(/^#\/([^/?#]+)/); return m ? m[1] : DOC_PAGES[0].slug; }
async function loadPage(slug){
  [...navEl.querySelectorAll("a")].forEach(a => a.classList.toggle("active", a.dataset.slug === slug));
  const page = DOC_PAGES.find(p => p.slug === slug) || DOC_PAGES[0];

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
