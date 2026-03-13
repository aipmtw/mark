import React from "react";

const directions = [
  {
    title: "生成式 AI 應用開發",
    desc: "探索 ChatGPT、Stable Diffusion 等生成式模型的實務應用與整合開發",
    icon: "\u{1F680}",
  },
  {
    title: "大型語言模型（LLM）實務應用",
    desc: "深入 LLM 微調、RAG 架構、Prompt Engineering 等核心技術",
    icon: "\u{1F9E0}",
  },
  {
    title: "AI 專案管理與落地策略",
    desc: "從概念驗證到產品上線，掌握 AI 專案的完整生命週期管理",
    icon: "\u{1F4CB}",
  },
  {
    title: "產業 AI 解決方案探討",
    desc: "聚焦製造、醫療、金融等產業的 AI 應用場景與最佳實踐",
    icon: "\u{1F3ED}",
  },
];

const about = [
  { label: "分會名稱", value: "AI Innovator 進階分會 - 中部" },
  { label: "目標", value: "推動中部地區 AI 技術交流與進階應用發展" },
  { label: "對象", value: "對 AI 技術有基礎了解，希望深入探索進階主題的夥伴" },
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
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-lg text-sm font-medium"
          >
            加入我們
          </a>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
            進階分會 - 中部
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            AI Innovator
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              進階分會
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            專注於人工智慧技術的深度學習與實務應用，推動中部地區 AI 技術交流與進階應用發展。
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">關於我們</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {about.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition"
            >
              <h3 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">
                {item.label}
              </h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Directions Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">主要方向</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          我們聚焦以下四大主題，帶領夥伴從理論到實踐全面掌握 AI 技術
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {directions.map((d) => (
            <div
              key={d.title}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 hover:bg-white/[0.07] transition"
            >
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition">
                {d.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">歡迎加入我們</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-lg mx-auto">
            一起探索 AI 的無限可能！無論你是資深工程師還是 AI 愛好者，我們都歡迎你的加入。
          </p>
          <a
            href="https://github.com/aipmtw/ai-innovator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition"
          >
            前往 GitHub
          </a>
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
