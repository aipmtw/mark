import React, { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 10;
const REPO_OWNER = "aipmtw";
const REPO_NAME = "mark";

function ChangeLog({ onBack }) {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchCommits() {
      try {
        let allCommits = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=100&page=${page}`
          );
          if (!res.ok) throw new Error(`GitHub API 回應錯誤: ${res.status}`);
          const data = await res.json();
          if (data.length === 0) {
            hasMore = false;
          } else {
            allCommits = allCommits.concat(data);
            if (data.length < 100) hasMore = false;
            page++;
          }
        }

        // Filter out merge commits
        const filtered = allCommits.filter(
          (c) => c.parents && c.parents.length <= 1
        );

        setCommits(filtered);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCommits();
  }, []);

  const totalPages = Math.ceil(commits.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCommits = commits.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hour = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hour}:${min}`;
  }

  function getPageNumbers() {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisible - 1);
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }
      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">AI</span> Innovator
          </span>
          <button
            onClick={onBack}
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-lg text-sm font-medium"
          >
            返回首頁
          </button>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              變更紀錄
            </span>
          </h1>
          <p className="text-lg text-slate-300">
            專案的所有提交紀錄，包含時間與摘要說明
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 text-lg">載入中...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg mb-2">載入失敗</p>
            <p className="text-slate-500">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Stats */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-400">
                共 <span className="text-indigo-300 font-semibold">{commits.length}</span> 筆提交紀錄
              </p>
              <p className="text-slate-500 text-sm">
                第 {currentPage} / {totalPages} 頁
              </p>
            </div>

            {/* Commit List */}
            <div className="space-y-4">
              {currentCommits.map((commit) => (
                <div
                  key={commit.sha}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-indigo-500/40 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-slate-100 mb-2 break-words">
                        {commit.commit.message.split("\n")[0]}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {commit.commit.author.name}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatDate(commit.commit.author.date)}
                        </span>
                      </div>
                    </div>
                    <a
                      href={commit.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-mono bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-lg hover:bg-indigo-500/20 transition"
                    >
                      {commit.sha.substring(0, 7)}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 hover:border-indigo-500/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  上一頁
                </button>

                {getPageNumbers().map((p, i) =>
                  p === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-2 text-slate-500">
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                        currentPage === p
                          ? "bg-indigo-600 text-white"
                          : "bg-white/5 border border-white/10 hover:border-indigo-500/40"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 hover:border-indigo-500/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  下一頁
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        &copy; 2026 AI Innovator 進階分會 - 中部. All rights reserved.
      </footer>
    </div>
  );
}

export default ChangeLog;
