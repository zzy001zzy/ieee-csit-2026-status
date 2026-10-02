/**
 * IEEE CSIT 2026 論文狀態頁的唯一資料來源。
 * 日後更新狀態時，只需修改本檔，不必調整版面。
 */
window.PAPER_STATUS = Object.freeze({
  pageTitle: "IEEE CSIT 2026 論文狀態",
  venue: "IEEE CSIT 2026",
  paperTitle: "交通標誌對抗貼紙影像修復",
  authors: ["Chih-Yuan Cheng", "Bor-Jiunn Hwang"],
  role: "第一作者",
  status: {
    code: "under-review",
    label: "審查中",
    description: "尚未收到正式結果"
  },
  lastUpdated: "2026-10-02",
  history: [
    {
      date: "2026-10-02",
      title: "狀態確認",
      detail: "目前仍在審查中，尚未收到正式結果。"
    }
  ],
  evidence: {
    available: false,
    title: "官方佐證",
    message: "尚未收到正式結果；收到正式通知後，將於此處更新。",
    url: "",
    linkLabel: "查看正式通知"
  }
});
