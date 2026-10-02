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

  document.title = data.pageTitle;
  text("page-title", data.pageTitle);
  text("venue", data.venue);
  text("venue-copy", data.venue);
  text("paper-title", data.paperTitle);
  text("authors", data.authors.join("、"));
  text("role", data.role);
  text("status-label", data.status.label);
  text("status-description", data.status.description);
  text("updated-date", data.lastUpdated);
  text("evidence-title", data.evidence.title);
  text("evidence-message", data.evidence.message);

  const badge = document.getElementById("status-badge");
  badge.dataset.status = data.status.code;
  document.querySelector(".state-mark").textContent = data.status.label;

  const history = document.getElementById("history-list");
  data.history.forEach((item) => {
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

  const evidenceLink = document.getElementById("evidence-link");
  if (data.evidence.available && data.evidence.url) {
    evidenceLink.href = data.evidence.url;
    evidenceLink.textContent = data.evidence.linkLabel;
    evidenceLink.hidden = false;
  }
})();
