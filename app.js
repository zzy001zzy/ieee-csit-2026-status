(function () {
  "use strict";

  const data = window.PAPER_STATUS;
  if (!data) {
    document.body.innerHTML = "<p class=\"fatal-error\">狀態資料載入失敗。</p>";
    return;
  }

  const text = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  const optionalText = (id, value) => {
    const node = document.getElementById(id);
    if (!node) return;
    const normalized = String(value || "").trim();
    node.textContent = normalized;
    node.hidden = !normalized;
  };

  document.title = data.pageTitle;
  text("page-title", data.pageTitle);
  text("venue", data.venue);
  text("venue-copy", data.venue);
  text("paper-title", data.paperTitle);
  text("authors", data.authors.join("、"));
  text("role", data.role);
  text("status-label", data.status.label);
  text("status-description", data.status.description);
  optionalText("status-note", data.status.note);
  text("updated-date", data.lastUpdated);
  text("evidence-title", data.evidence.title);
  optionalText("evidence-message", data.evidence.message);

  const badge = document.getElementById("status-badge");
  badge.dataset.status = data.status.code;
  const stateMark = document.querySelector(".state-mark");
  stateMark.textContent = data.status.label;
  stateMark.dataset.status = data.status.code;

  const history = document.getElementById("history-list");
  (history ? data.history : []).forEach((item) => {
    const li = document.createElement("li");
    li.className = "history-item";

    const date = document.createElement("time");
    date.className = "history-date";
    date.textContent = item.date;

    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const detail = document.createElement("p");
    detail.textContent = item.detail;
    body.append(title, detail);

    li.append(date, body);
    history.appendChild(li);
  });

  const evidenceImage = document.getElementById("evidence-image");
  if (data.evidence.available && data.evidence.imageUrl) {
    evidenceImage.src = data.evidence.imageUrl;
    evidenceImage.alt = data.evidence.imageAlt || data.evidence.title;
    evidenceImage.hidden = false;
  }
})();
