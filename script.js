const container = document.getElementById("app-container");
const tabs = document.querySelectorAll(".nav-item");

// Состояние
let currentBuildIndex = 0;

// 1. Инициализация и Переключение
function switchTab(tabName) {
  // Убираем подсветку у всех кнопок
  tabs.forEach((t) => t.classList.remove("active"));

  // ЛОГИКА ИСПРАВЛЕНИЯ:
  // Если это был клик мышкой
  if (typeof event !== "undefined" && event.type === "click") {
    event.currentTarget.classList.add("active");
  } else {
    // Если это автозапуск (нет клика), подсвечиваем нужную кнопку вручную
    if (tabName === "learn") tabs[0].classList.add("active");
    if (tabName === "practice") tabs[1].classList.add("active");
    if (tabName === "construct") tabs[2].classList.add("active");
  }

  // Скролл вверх
  window.scrollTo(0, 0);

  // Загрузка контента
  if (tabName === "learn") renderLearn();
  if (tabName === "practice") renderQuiz();
  if (tabName === "construct") renderConstruct();
}

// 2. Рендер ТЕОРИИ
function renderLearn() {
  let html =
    '<h2 style="margin-left:10px; margin-bottom:20px;">Твоя база знаний</h2>';

  appData.stories.forEach((card) => {
    let rows = card.phrases
      .map(
        (p) => `
            <div class="phrase-row">
                <div class="ru-text">${p.ru}</div>
                <div class="de-text">${p.de}</div>
            </div>
        `
      )
      .join("");

    html += `
            <div class="card">
                <div class="card-header">
                    <div class="card-icon"><i class="fa-solid ${card.icon}"></i></div>
                    <div>
                        <div class="card-title">${card.title}</div>
                        <div class="card-subtitle">${card.subtitle}</div>
                    </div>
                </div>
                <div>${rows}</div>
            </div>
        `;
  });
  container.innerHTML = html;
}

// 3. Рендер ТЕСТА
function renderQuiz() {
  let html = '<h2 style="margin-left:10px;">Блиц-Тест</h2>';

  appData.quiz.forEach((q, idx) => {
    let opts = q.opts
      .map(
        (o) => `
            <div class="quiz-option" onclick="checkQuiz(this, '${o}', '${q.a}')">
                ${o} <i class="fa-solid fa-check" style="display:none"></i>
            </div>
        `
      )
      .join("");

    html += `
            <div class="card" style="padding-bottom:10px;">
                <div class="ru-text" style="font-size:1rem; font-weight:700; color:#4e54c8; margin-bottom:15px;">Вопрос ${
                  idx + 1
                }</div>
                <div class="de-text" style="margin-bottom:20px;">${q.q}</div>
                <div>${opts}</div>
            </div>
        `;
  });
  container.innerHTML = html;
}

function checkQuiz(el, choice, correct) {
  let parent = el.parentElement;
  // Блок кликов
  parent.style.pointerEvents = "none";

  if (choice === correct) {
    el.classList.add("correct");
    el.querySelector("i").style.display = "block";
  } else {
    el.classList.add("wrong");
    // Показать правильный
    Array.from(parent.children).forEach((child) => {
      if (child.innerText.trim() === correct) {
        child.classList.add("correct");
        child.querySelector("i").style.display = "block";
      }
    });
  }
}

// 4. Рендер КОНСТРУКТОРА
function renderConstruct() {
  if (currentBuildIndex >= appData.build.length) {
    container.innerHTML = `
            <div class="card" style="text-align:center; padding:40px;">
                <i class="fa-solid fa-crown" style="font-size:3rem; color:#ffd700; margin-bottom:20px;"></i>
                <h2>Ты прошел всё!</h2>
                <button class="check-btn" onclick="currentBuildIndex=0; renderConstruct()">Заново</button>
            </div>
        `;
    return;
  }

  let task = appData.build[currentBuildIndex];
  let words = [...task.parts].sort(() => Math.random() - 0.5); // Перемешать

  container.innerHTML = `
        <h2 style="margin-left:10px;">Уровень ${currentBuildIndex + 1}</h2>
        
        <div class="card">
            <div class="ru-text" style="text-align:center; font-size:1.1rem; margin-bottom:20px;">
                "${task.ru}"
            </div>
            
            <div id="drop-zone" class="build-area" onclick="returnWord(event)"></div>
            
            <div id="word-bank" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center;">
                ${words
                  .map(
                    (w) =>
                      `<div class="word-chip" onclick="selectWord(this)">${w}</div>`
                  )
                  .join("")}
            </div>
        </div>

        <button class="check-btn" onclick="checkBuild()">ПРОВЕРИТЬ</button>
        <div id="feedback" style="text-align:center; margin-top:20px; font-weight:800; min-height:20px;"></div>
    `;
}

// Логика перемещения слов
window.selectWord = function (el) {
  document.getElementById("drop-zone").appendChild(el);
  document.getElementById("drop-zone").classList.add("active");
};

window.returnWord = function (e) {
  if (e.target.classList.contains("word-chip")) {
    document.getElementById("word-bank").appendChild(e.target);
  }
};

window.checkBuild = function () {
  let task = appData.build[currentBuildIndex];
  let dropZone = document.getElementById("drop-zone");
  let feedback = document.getElementById("feedback");

  // Собираем фразу
  let userPhrase = Array.from(dropZone.children)
    .map((c) => c.innerText)
    .join(" ");
  let correctPhrase = task.parts.join(" ");

  if (userPhrase === correctPhrase) {
    feedback.style.color = "var(--secondary)";
    feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Правильно!';
    // Анимация успеха
    setTimeout(() => {
      currentBuildIndex++;
      renderConstruct();
    }, 1200);
  } else {
    feedback.style.color = "var(--accent)";
    feedback.innerHTML =
      '<i class="fa-solid fa-circle-xmark"></i> Ошибка! Попробуй еще раз.';
    // Тряска
    dropZone.style.transform = "translateX(10px)";
    setTimeout(() => (dropZone.style.transform = "translateX(0)"), 100);
    setTimeout(() => (dropZone.style.transform = "translateX(-10px)"), 200);
    setTimeout(() => (dropZone.style.transform = "translateX(0)"), 300);
  }
};

// Старт (вызовет функцию без event, но теперь она защищена)
switchTab("learn");
