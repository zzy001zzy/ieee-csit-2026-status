/**
 * IEEE CSIT 2026 論文狀態頁的唯一資料來源。
 * 日後更新狀態時，只需修改本檔，不必調整版面。
 */
window.PAPER_STATUS = Object.freeze({
  pageTitle: "IEEE CSIT 2026 論文狀態",
  venue: "2026 IEEE 20th International Conference on Computer Science and Information Technologies (CSIT)",
  paperTitle: "APR: Compact Analytic-Prior Repair for Traffic-Sign Detection",
  authors: ["Chih-Yuan Cheng", "Bor-Jiunn Hwang"],
  role: "第一作者",
  status: {
    code: "accepted",
    label: "已接收",
    description: "已收到 CMT 論文決定通知",
    note: ""
  },
  lastUpdated: "2026/10/07",
  previousUpdate: {
    date: "2026/10/02",
    status: "審查中"
  },
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
    title: "Gmail／Microsoft CMT 接收通知",
    message: "",
    imageUrl: "IEEE_CSIT_2026_Paper66_Decision_Email_Full.png",
    imageAlt: "Microsoft CMT 於 2026 年 10 月 7 日寄發之 Gmail 接收通知；Paper #66 獲 conditionally accepted。"
  }
});
