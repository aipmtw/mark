import React from "react";

const directions = [
  {
    title: "🌐 開始做自己的網站",
    desc: "用自己的想法、文字、圖片，和 AI 一步一步互動",
  },
  {
    title: "🤖 體驗 AI 協作建站",
    desc: "從描述需求，到逐步產生成果的過程",
  },
  {
    title: "🏗️ 像建築師一樣引導 AI",
    desc: "這不是一次對話就完成，而是一步一步推進的互動式過程",
  },
  {
    title: "🤝 交流與分享",
    desc: "有參與實作的會員，從「主角視角」分享過程與心得",
  },
];

const prepSteps = [
  { label: "Email", desc: "本次要使用的 Email" },
  { label: "GitHub", desc: "GitHub 帳號（若已有）" },
  { label: "Discord", desc: "Discord Username（若已有）" },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">AI</span> Innovator
          </span>
          <a
            href="https://github.com/aipmtw/mark/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-lg text-sm font-medium"
          >
            issues 填寫
          </a>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
            進階分會 - 中部
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Keynote Speech
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              例會實作公告
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            從現在到例會前，大家如何實際動手做出自己的網站。
            <br />
            不只是聽概念，而是真的讓有興趣的會員，開始體驗透過 AI 與現成環境，一步一步做出屬於自己的網站。
          </p>
        </div>
      </header>

      {/* Activity Directions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">活動方向</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          參與的會員，將有機會體驗以下內容
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {directions.map((d) => (
            <div
              key={d.title}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 hover:bg-white/[0.07] transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition">
                {d.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">參與前的準備</h2>
        <p className="text-slate-400 text-center mb-12 max-w-lg mx-auto">
          有興趣參與實作的會員，請先提供以下資訊
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {prepSteps.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition"
            >
              <h3 className="text-indigo-400 text-2xl font-bold mb-2">
                {s.label}
              </h3>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-slate-300 leading-relaxed">
            如果你目前還沒有 GitHub 或 Discord，建議趁這個機會先申請這兩個免費帳號，並先稍微熟悉一下基本操作。這樣到時候進行會順很多。
          </p>
        </div>
      </section>

      {/* Why Discord Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">為什麼改用 Discord？</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <p className="text-slate-300">避免 LINE 訊息過度頻繁</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">💾</div>
            <p className="text-slate-300">圖片與影像資料更容易長期保存</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <p className="text-slate-300">細節討論更容易整理與追蹤</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://discord.gg/3rydDZaY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold px-8 py-3 rounded-xl transition text-lg"
          >
            加入 Discord 頻道
          </a>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">報名接龍</h2>
          <p className="text-lg text-indigo-100 mb-4 max-w-lg mx-auto">
            請有興趣參與的會員，依下列格式接龍：
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 max-w-md mx-auto text-left">
            <code className="text-indigo-100 text-sm">
              姓名, Email, [GitHub 帳號], [Discord Username]
            </code>
            <br />
            <span className="text-indigo-200 text-sm mt-2 block">
              範例：1. Mark, mark@aipm.com.tw, [aipmtw], [twcloud]
            </span>
          </div>
          <a
            href="https://github.com/aipmtw/ai-innovator/edit/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition"
          >
            前往 GitHub 報名
          </a>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">想對第一次接觸的會員說</h2>
          <div className="text-slate-300 leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              如果你之前沒有接觸過 GitHub、Discord，或也還沒真正用 AI 來做網站，剛開始看到這些資訊，可能會覺得有點多，這很正常。
            </p>
            <p>
              但只要先把準備工作做好，你就可以開始進入有趣的部分：
            </p>
            <p className="text-xl font-semibold text-indigo-300 text-center py-2">
              直接用你的描述（文字、圖片、想法），讓 AI 協助你建立自己的網站。
            </p>
            <p>
              這會是一段互動式的過程，不是單次完成，而是一步一步推進。
              你也可以把這次例會，當成一個很好的起點，藉由大家交流，一起開始練習。
            </p>
            <p className="text-slate-400 text-sm pt-4 text-center">
              也歡迎自行在其他平台練習，這次例會提供的是一個體驗與交流的機會。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        &copy; 2026 AI Innovator 進階分會 - 中部. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
