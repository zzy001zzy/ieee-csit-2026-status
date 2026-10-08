/**
 * IEEE CSIT 2026 論文狀態頁的唯一資料來源。
 * 日後更新狀態時，只需修改本檔，不必調整版面。
 */
window.PAPER_STATUS = Object.freeze({
  pageTitle: "IEEE CSIT 2026 論文狀態",
  venue: "IEEE CSIT 2026",
  paperTitle: "APR: Compact Analytic-Prior Repair for Traffic-Sign Detection",
  authors: ["Chih-Yuan Cheng", "Bor-Jiunn Hwang"],
  role: "第一作者",
  status: {
    code: "accepted",
    label: "已接收",
    description: "已收到 CMT 論文決定通知",
    note: "正式通知原文為 conditionally accepted；尚待完成 camera-ready 與審查意見回覆。"
  },
  lastUpdated: "2026/10/07",
  history: [
    {
      date: "2026/10/07",
      title: "接收通知",
      detail: "CMT Decision Email 顯示 Paper #66 conditionally accepted；本頁依申請用途顯示為「已接收」。"
    },
    {
      date: "2026/10/02",
      title: "頁面建立",
      detail: "建立論文狀態頁，供後續更新正式審查結果。"
    }
  ],
  evidence: {
    available: true,
    title: "CMT Decision Email",
    message: "已核對 2026/10/07 Microsoft CMT 寄發之 Paper #66 決定通知；原文為 conditionally accepted。",
    url: "",
    linkLabel: "查看正式通知"
  }
});
