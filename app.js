// ---------- 常數 ----------
const TOPIC_META = {
  music: { label: "英文歌曲", icon: "🎵" },
  nature: { label: "自然科學", icon: "🌿" },
  tech: { label: "科技與AI", icon: "🤖" },
  sports: { label: "體育賽事", icon: "⚽" }
};
const LEVEL_META = {
  elementary: { label: "國小中高年級" },
  middle: { label: "國中" }
};
const LS_KEYS = { VOCAB: "myVocabList", RECORDS: "learningRecords" };
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

// ---------- localStorage 工具 ----------
function getVocabList() {
  try { return JSON.parse(localStorage.getItem(LS_KEYS.VOCAB)) || []; }
  catch (e) { return []; }
}
function saveVocabList(list) { localStorage.setItem(LS_KEYS.VOCAB, JSON.stringify(list)); }
function addVocabWord(entry) {
  const list = getVocabList();
  if (!list.some(x => x.word === entry.word && x.articleId === entry.articleId)) {
    list.push(entry);
    saveVocabList(list);
  }
}
function removeVocabWord(word, articleId) {
  saveVocabList(getVocabList().filter(x => !(x.word === word && x.articleId === articleId)));
}

function getRecords() {
  try { return JSON.parse(localStorage.getItem(LS_KEYS.RECORDS)) || {}; }
  catch (e) { return {}; }
}
function saveRecords(records) { localStorage.setItem(LS_KEYS.RECORDS, JSON.stringify(records)); }
function updateRecord(articleId, quizType, score, total) {
  const records = getRecords();
  if (!records[articleId]) records[articleId] = {};
  const prev = records[articleId][quizType] || { attempts: 0, bestScore: 0, bestTotal: total };
  records[articleId][quizType] = {
    attempts: prev.attempts + 1,
    bestScore: Math.max(prev.bestScore, score),
    bestTotal: total,
    lastScore: score,
    lastTotal: total
  };
  saveRecords(records);
}

// ---------- 語音(Web Speech API) ----------
function speakText(text, rate, onEnd) {
  if (!("speechSynthesis" in window)) {
    alert("你的瀏覽器不支援語音朗讀功能,建議使用 Chrome 或 Edge 瀏覽器。");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate || 1;
  if (onEnd) utter.onend = onEnd;
  window.speechSynthesis.speak(utter);
}
function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

// ---------- 小工具 ----------
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderArticleBody(article) {
  const coreMap = {};
  article.vocabulary.forEach(v => { coreMap[v.word.toLowerCase()] = v; });
  const extraMap = {};
  (article.extraVocabulary || []).forEach(v => { extraMap[v.word.toLowerCase()] = v; });

  const allWords = article.vocabulary.map(v => v.word).concat((article.extraVocabulary || []).map(v => v.word));
  const escaped = allWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp("\\b(" + escaped.join("|") + ")(s|es|d|ed|ing)?\\b", "gi");

  return article.body
    .map(paragraph => {
      const html = paragraph.replace(regex, (match, base) => {
        const key = base.toLowerCase();
        if (coreMap[key]) {
          return `<span class="vocab-word" data-word="${key}">${match}</span>`;
        }
        if (extraMap[key]) {
          const ev = extraMap[key];
          return `<span class="extra-word" data-word="${key}" tabindex="0">${match}<span class="extra-tip">${escapeHtml(ev.zh)}${ev.pos ? ` <em>(${escapeHtml(ev.pos)})</em>` : ""} <button type="button" class="tip-speak" data-speak-word="${escapeHtml(ev.word)}">🔊</button></span></span>`;
        }
        return match;
      });
      return `<p>${html}</p>`;
    })
    .join("");
}

// ---------- 首頁 ----------
let homeLevelFilter = "all";
let homeTopicFilter = "all";

function cardHtml(a) {
  const t = TOPIC_META[a.topic];
  const l = LEVEL_META[a.level];
  return `<div class="article-card">
    <div class="card-top">${t.icon}</div>
    <div class="badge-row"><span class="badge">${l.label}</span><span class="badge">${t.label}</span><span class="badge">⏱ ${a.estMinutes} 分鐘</span></div>
    <h3>${a.title}</h3>
    <button class="card-cta" data-id="${a.id}">開始閱讀 →</button>
  </div>`;
}

function renderHome(app) {
  const levels = [["all", "全部"], ["elementary", "國小中高年級"], ["middle", "國中"]];
  const topics = [["all", "全部主題"]].concat(
    Object.keys(TOPIC_META).map(k => [k, TOPIC_META[k].icon + " " + TOPIC_META[k].label])
  );
  const filtered = ARTICLES.filter(
    a => (homeLevelFilter === "all" || a.level === homeLevelFilter) &&
         (homeTopicFilter === "all" || a.topic === homeTopicFilter)
  );

  app.innerHTML = `
    <div class="intro-box">
      <h1>歡迎來到英語探索島!🏝️</h1>
      <p>挑一篇你感興趣的文章,點擊生字看翻譯、聽發音,讀完後別忘了挑戰測驗喔!</p>
    </div>
    <div class="filter-group" id="level-filters">
      ${levels.map(([k, label]) => `<button class="filter-btn ${k === homeLevelFilter ? "active" : ""}" data-level="${k}">${label}</button>`).join("")}
    </div>
    <div class="filter-group" id="topic-filters">
      ${topics.map(([k, label]) => `<button class="filter-btn ${k === homeTopicFilter ? "active" : ""}" data-topic="${k}">${label}</button>`).join("")}
    </div>
    <div class="article-grid">${filtered.map(cardHtml).join("")}</div>
    ${filtered.length === 0 ? '<p class="empty-state">這個篩選條件下沒有文章,換個主題看看吧!</p>' : ""}
  `;

  app.querySelectorAll("#level-filters .filter-btn").forEach(btn =>
    btn.addEventListener("click", () => { homeLevelFilter = btn.dataset.level; renderHome(app); })
  );
  app.querySelectorAll("#topic-filters .filter-btn").forEach(btn =>
    btn.addEventListener("click", () => { homeTopicFilter = btn.dataset.topic; renderHome(app); })
  );
  app.querySelectorAll(".card-cta").forEach(btn =>
    btn.addEventListener("click", () => { location.hash = `#/article/${btn.dataset.id}`; })
  );
}

// ---------- 文章閱讀頁 ----------
let currentSpeechRate = 1;

// 整篇朗讀採「逐句佇列」播放,點選單字時只暫停目前這一句、插播單字發音,
// 結束後自動從剛才那一句繼續往下唸,達成連續聽讀不中斷的體驗。
let readQueue = [];
let readIndex = 0;
let readSession = 0;
let isReading = false;
let isPaused = false;
let ttsButtons = null; // { playBtn, pauseBtn, stopBtn }

function buildReadQueue(article) {
  const sentences = [];
  article.body.forEach(paragraph => {
    const matches = paragraph.match(/[^.!?]+[.!?]*/g) || [paragraph];
    matches.forEach(s => { const t = s.trim(); if (t) sentences.push(t); });
  });
  return sentences;
}

function finishReadingUI() {
  if (!ttsButtons) return;
  ttsButtons.playBtn.disabled = false;
  ttsButtons.pauseBtn.disabled = true;
  ttsButtons.stopBtn.disabled = true;
  ttsButtons.pauseBtn.textContent = "⏸ 暫停";
}

function playFrom(index) {
  if (!("speechSynthesis" in window)) {
    alert("你的瀏覽器不支援語音朗讀功能,建議使用 Chrome 或 Edge 瀏覽器。");
    return;
  }
  const mySession = ++readSession;
  isReading = true;
  isPaused = false;
  window.speechSynthesis.cancel();

  const step = i => {
    if (mySession !== readSession) return;
    if (i >= readQueue.length) {
      isReading = false;
      finishReadingUI();
      return;
    }
    readIndex = i;
    const utter = new SpeechSynthesisUtterance(readQueue[i]);
    utter.lang = "en-US";
    utter.rate = currentSpeechRate;
    let done = false;
    const advance = () => {
      if (done) return;
      done = true;
      if (mySession !== readSession) return;
      step(i + 1);
    };
    utter.onend = advance;
    utter.onerror = advance;
    window.speechSynthesis.speak(utter);
  };
  step(index);
}

function stopReading() {
  isReading = false;
  isPaused = false;
  readSession++;
  window.speechSynthesis.cancel();
}

// 瀏覽器原生的 speechSynthesis.pause()/resume() 在部分 Chrome 版本上並不可靠
// (暫停後 resume 常常沒有反應),因此改用自己的佇列位置手動實作暫停/繼續:
// 暫停時只是停止發聲並記住目前唸到第幾句,繼續時直接從那一句重新播放。
function pauseReading() {
  if (!isReading || isPaused) return;
  isPaused = true;
  readSession++; // 讓目前這句的 onend/onerror 失效,避免自動推進到下一句
  window.speechSynthesis.cancel();
}

function resumeReading() {
  if (!isReading || !isPaused) return;
  playFrom(readIndex);
}

// 插播一個單字的發音;若朗讀正在進行,唸完單字後自動從中斷的那一句繼續。
function interruptForWord(wordText) {
  if (!("speechSynthesis" in window)) {
    alert("你的瀏覽器不支援語音朗讀功能,建議使用 Chrome 或 Edge 瀏覽器。");
    return;
  }
  const resumeIndex = readIndex;
  const wasPaused = isPaused;
  readSession++; // 讓目前佇列裡待處理的 onend/onerror 失效,避免重複推進
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(wordText);
  utter.lang = "en-US";
  utter.rate = currentSpeechRate;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    // 如果原本就是暫停狀態,唸完單字後維持暫停,不自動接續朗讀
    if (isReading && !wasPaused) playFrom(resumeIndex);
  };
  utter.onend = finish;
  utter.onerror = finish;
  window.speechSynthesis.speak(utter);
}

function selectVocabWord(article, wordKey, el) {
  document.querySelectorAll(".vocab-word.active").forEach(s => s.classList.remove("active"));
  if (el) el.classList.add("active");
  const entry = article.vocabulary.find(v => v.word.toLowerCase() === wordKey);
  if (!entry) return;
  interruptForWord(entry.word);

  const panel = document.getElementById("vocab-panel");
  if (!panel) return;
  const already = getVocabList().some(x => x.word === entry.word && x.articleId === article.id);
  panel.classList.remove("placeholder");
  panel.innerHTML = `
    <span class="vp-word">${entry.word}</span><span class="vp-pos">${entry.pos}</span>
    <div class="vp-zh">${entry.zh}</div>
    <div class="vp-example">${entry.example}<br>${entry.exampleZh}</div>
    <div class="vp-actions">
      <button class="btn-speak" id="vp-speak">🔊 再聽一次</button>
      <button class="btn-add" id="vp-add" ${already ? "disabled" : ""}>${already ? "✓ 已加入單字本" : "➕ 加入我的單字本"}</button>
    </div>
  `;
  document.getElementById("vp-speak").addEventListener("click", () => interruptForWord(entry.word));
  const addBtn = document.getElementById("vp-add");
  addBtn.addEventListener("click", () => {
    addVocabWord({
      word: entry.word, zh: entry.zh, example: entry.example,
      exampleZh: entry.exampleZh, articleId: article.id, articleTitle: article.title
    });
    addBtn.disabled = true;
    addBtn.textContent = "✓ 已加入單字本";
  });
}

function renderArticleView(app, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) { app.innerHTML = '<p class="empty-state">找不到這篇文章。</p>'; return; }
  currentSpeechRate = 1;
  readSession++; // 讓上一篇文章殘留的朗讀佇列失效
  isReading = false;
  isPaused = false;
  readQueue = buildReadQueue(article);
  readIndex = 0;
  ttsButtons = null;

  const t = TOPIC_META[article.topic];
  const l = LEVEL_META[article.level];

  app.innerHTML = `
    <span class="back-link" id="back-home">← 回首頁</span>
    <div class="article-header">
      <div class="badge-row"><span class="badge">${t.icon} ${t.label}</span><span class="badge">${l.label}</span><span class="badge">⏱ ${article.estMinutes} 分鐘</span></div>
      <h1>${article.title}</h1>
      <div class="tts-bar">
        <button id="play-btn">▶️ 整篇朗讀</button>
        <button id="pause-btn" class="secondary" disabled>⏸ 暫停</button>
        <button id="stop-btn" class="secondary" disabled>⏹ 停止</button>
        <label>語速 <input type="range" id="rate-range" min="0.6" max="1.4" step="0.1" value="1"></label>
      </div>
    </div>
    <div class="article-body" id="article-body">${renderArticleBody(article)}</div>
    <p class="vocab-hint">🟠 橘色底線的生字:點擊可聽發音、看翻譯、加入單字本 ・ 🟢 綠色虛線的單字:${isTouchDevice ? "點一下" : "滑鼠移上去停留一下"}會顯示簡易翻譯</p>
    <div class="vocab-panel placeholder" id="vocab-panel">👆 點擊文章中畫底線的生字,就能立刻聽發音、看中文翻譯!</div>
    <div class="vocab-list-section">
      <h2>📖 本篇生字總覽</h2>
      <div class="vocab-chip-list" id="vocab-chip-list">
        ${article.vocabulary.map(v => `<span class="vocab-chip" data-word="${v.word.toLowerCase()}">🔊 ${v.word}</span>`).join("")}
      </div>
    </div>
    <button class="quiz-cta" id="go-quiz">📝 前往測驗</button>
  `;

  document.getElementById("back-home").addEventListener("click", () => { location.hash = "#/"; });
  document.getElementById("go-quiz").addEventListener("click", () => { location.hash = `#/article/${article.id}/quiz`; });

  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");
  const rateRange = document.getElementById("rate-range");
  ttsButtons = { playBtn, pauseBtn, stopBtn };

  rateRange.addEventListener("input", () => { currentSpeechRate = parseFloat(rateRange.value); });

  playBtn.addEventListener("click", () => {
    playFrom(0);
    playBtn.disabled = true; pauseBtn.disabled = false; stopBtn.disabled = false;
  });
  pauseBtn.addEventListener("click", () => {
    if (!isPaused) {
      pauseReading();
      pauseBtn.textContent = "▶ 繼續";
    } else {
      resumeReading();
      pauseBtn.textContent = "⏸ 暫停";
    }
  });
  stopBtn.addEventListener("click", () => {
    stopReading(); finishReadingUI();
  });

  const bodyEl = document.getElementById("article-body");
  bodyEl.addEventListener("click", e => {
    const speakBtn = e.target.closest(".tip-speak");
    if (speakBtn) {
      e.stopPropagation();
      interruptForWord(speakBtn.dataset.speakWord);
      return;
    }
    const vocabEl = e.target.closest(".vocab-word");
    if (vocabEl) { selectVocabWord(article, vocabEl.dataset.word, vocabEl); return; }
    if (isTouchDevice) {
      const extraEl = e.target.closest(".extra-word");
      if (extraEl) {
        document.querySelectorAll(".extra-word.show-tip").forEach(o => { if (o !== extraEl) o.classList.remove("show-tip"); });
        extraEl.classList.toggle("show-tip");
      }
    }
  });

  if (!isTouchDevice) {
    bodyEl.querySelectorAll(".extra-word").forEach(el => {
      let hoverTimer = null;
      el.addEventListener("mouseenter", () => {
        hoverTimer = setTimeout(() => { el.classList.add("show-tip"); }, 600);
      });
      el.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer);
        el.classList.remove("show-tip");
      });
      el.addEventListener("focus", () => { el.classList.add("show-tip"); });
      el.addEventListener("blur", () => { el.classList.remove("show-tip"); });
    });
  }

  document.getElementById("vocab-chip-list").addEventListener("click", e => {
    const chip = e.target.closest(".vocab-chip");
    if (!chip) return;
    const wordEl = bodyEl.querySelector(`.vocab-word[data-word="${chip.dataset.word}"]`);
    selectVocabWord(article, chip.dataset.word, wordEl);
  });
}

// ---------- 測驗頁 ----------
function setupQuizSection(container, article, type, title) {
  const questions = article.quiz.filter(q => q.type === type);
  const record = (getRecords()[article.id] || {})[type];

  container.innerHTML = `
    <div class="quiz-section">
      <h2>${title}</h2>
      ${record ? `<p style="color:var(--color-muted);font-size:0.9rem;">已測驗 ${record.attempts} 次,最佳成績 ${record.bestScore}/${record.bestTotal}</p>` : ""}
      <form id="quiz-form-${type}">
        ${questions.map((q, i) => `
          <div class="quiz-question">
            ${q.type === "listening" ? `<button type="button" class="listen-btn" data-listen="${escapeHtml(q.listenText)}">🔊 播放句子</button>` : ""}
            <div class="q-text">${i + 1}. ${q.question}</div>
            <div class="q-options">
              ${q.options.map((opt, oi) => `<label><input type="radio" name="q${i}" value="${oi}"> ${opt}</label>`).join("")}
            </div>
          </div>
        `).join("")}
        <button type="submit" class="quiz-submit">送出這區測驗</button>
      </form>
      <div class="quiz-result" id="result-${type}"></div>
    </div>
  `;

  container.querySelectorAll(".listen-btn").forEach(btn => {
    btn.addEventListener("click", () => speakText(btn.dataset.listen, 1));
  });

  const form = container.querySelector(`#quiz-form-${type}`);
  form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    questions.forEach((q, i) => {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);
      const selectedVal = selected ? parseInt(selected.value, 10) : -1;
      form.querySelectorAll(`input[name="q${i}"]`).forEach(input => {
        const label = input.closest("label");
        input.disabled = true;
        const val = parseInt(input.value, 10);
        if (val === q.answerIndex) label.classList.add("correct");
        else if (val === selectedVal) label.classList.add("incorrect");
      });
      if (selectedVal === q.answerIndex) score++;
    });

    updateRecord(article.id, type, score, questions.length);
    const rec = getRecords()[article.id][type];
    const resultEl = document.getElementById(`result-${type}`);
    resultEl.innerHTML = `本次得分:${score} / ${questions.length}(最佳成績:${rec.bestScore} / ${rec.bestTotal},已測驗 ${rec.attempts} 次)
      <button type="button" class="quiz-submit" id="retry-${type}" style="margin-left:10px;">🔄 重新測驗</button>`;
    form.querySelector(".quiz-submit").disabled = true;
    document.getElementById(`retry-${type}`).addEventListener("click", () => setupQuizSection(container, article, type, title));
  });
}

function renderQuizView(app, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) { app.innerHTML = '<p class="empty-state">找不到這篇文章。</p>'; return; }

  app.innerHTML = `
    <span class="back-link" id="back-article">← 回文章</span>
    <div class="article-header">
      <h1>📝 ${article.title} - 測驗</h1>
      <p style="color:var(--color-muted);margin:0;">完成三種測驗,檢查你學得如何吧!</p>
    </div>
    <div id="quiz-reading"></div>
    <div id="quiz-vocab"></div>
    <div id="quiz-listening"></div>
  `;

  document.getElementById("back-article").addEventListener("click", () => { location.hash = `#/article/${article.id}`; });
  setupQuizSection(document.getElementById("quiz-reading"), article, "reading", "📖 閱讀理解測驗");
  setupQuizSection(document.getElementById("quiz-vocab"), article, "vocab", "🔤 單字測驗");
  setupQuizSection(document.getElementById("quiz-listening"), article, "listening", "🎧 聽力測驗(仔細聽,不會顯示文字喔)");
}

// ---------- 我的單字本 ----------
function renderVocabView(app) {
  const list = getVocabList();
  app.innerHTML = `
    <div class="intro-box"><h1>📒 我的單字本</h1><p>這裡收藏你在文章中加入的生字,點 🔊 可以再聽一次發音。</p></div>
    ${list.length === 0
      ? '<p class="empty-state">還沒有收藏任何單字,去文章裡點擊生字加入吧!</p>'
      : list.map((v, idx) => `
        <div class="vocab-item">
          <div class="vi-info">
            <div class="vi-word">${v.word}</div>
            <div class="vi-zh">${v.zh} · <span style="font-size:0.85rem;">${v.example}</span></div>
          </div>
          <div class="vi-actions">
            <button class="icon-btn" data-speak="${idx}">🔊</button>
            <button class="icon-btn" data-remove="${idx}">✕</button>
          </div>
        </div>
      `).join("")}
  `;
  app.querySelectorAll("[data-speak]").forEach(btn => btn.addEventListener("click", () => {
    speakText(list[parseInt(btn.dataset.speak, 10)].word, 1);
  }));
  app.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => {
    const v = list[parseInt(btn.dataset.remove, 10)];
    removeVocabWord(v.word, v.articleId);
    renderVocabView(app);
  }));
}

// ---------- 學習紀錄 ----------
function renderRecordsView(app) {
  const records = getRecords();
  const vocabCount = getVocabList().length;
  const typeLabels = { reading: "閱讀理解", vocab: "單字測驗", listening: "聽力測驗" };
  const articlesWithRecords = ARTICLES.filter(a => records[a.id]);

  app.innerHTML = `
    <div class="stat-summary">📒 目前已收藏 ${vocabCount} 個單字 ・ 已挑戰 ${articlesWithRecords.length} 篇文章的測驗</div>
    ${articlesWithRecords.length === 0
      ? '<p class="empty-state">還沒有測驗紀錄,去文章頁面挑戰看看吧!</p>'
      : articlesWithRecords.map(a => {
          const r = records[a.id];
          return `<div class="record-item">
            <div>
              <div class="ri-title">${a.title}</div>
              <div class="ri-scores">
                ${Object.keys(typeLabels).map(t => r[t]
                  ? `<span>${typeLabels[t]}:${r[t].bestScore}/${r[t].bestTotal}(共測 ${r[t].attempts} 次)</span>`
                  : `<span style="opacity:0.5">${typeLabels[t]}:尚未測驗</span>`
                ).join("")}
              </div>
            </div>
          </div>`;
        }).join("")}
  `;
}

// ---------- 路由 ----------
function router() {
  stopSpeaking();
  isReading = false;
  isPaused = false;
  readSession++;
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
  const app = document.getElementById("app");

  if (parts.length === 0) {
    renderHome(app);
  } else if (parts[0] === "article" && parts.length === 2) {
    renderArticleView(app, parts[1]);
  } else if (parts[0] === "article" && parts.length === 3 && parts[2] === "quiz") {
    renderQuizView(app, parts[1]);
  } else if (parts[0] === "vocab") {
    renderVocabView(app);
  } else if (parts[0] === "records") {
    renderRecordsView(app);
  } else {
    renderHome(app);
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

if (isTouchDevice) {
  document.addEventListener("click", e => {
    if (!e.target.closest(".extra-word")) {
      document.querySelectorAll(".extra-word.show-tip").forEach(o => o.classList.remove("show-tip"));
    }
  });
}
