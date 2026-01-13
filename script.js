const contentDiv = document.getElementById("app-content");
const tabs = document.querySelectorAll(".nav-item");

// 1. Инициализация (Запуск)
function init() {
  renderLearnSection(); // По умолчанию открываем "Учить"
}

// 2. Переключение вкладок
function switchTab(tabName) {
  // Убираем активный класс у всех кнопок
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Чистим экран
  contentDiv.innerHTML = "";

  if (tabName === "learn") {
    tabs[0].classList.add("active");
    renderLearnSection();
  } else {
    tabs[1].classList.add("active");
    renderPracticeSection();
  }
}

// 3. Рендер раздела "УЧИТЬ" (Истории)
function renderLearnSection() {
  let html = "";

  appData.stories.forEach((story) => {
    let stepsHtml = "";
    story.steps.forEach((step) => {
      stepsHtml += `
                <div class="comparison-row">
                    <div class="icon-box">${step.icon}</div>
                    <div class="text-box">
                        <div class="ru-hint">${step.ru}</div>
                        <div class="de-phrase">${step.de}</div>
                    </div>
                </div>
            `;
    });

    html += `
            <div class="story-card">
                <div class="story-header">
                    <i class="fa-solid ${story.icon}"></i> ${story.title}
                </div>
                <div class="story-body">
                    ${stepsHtml}
                </div>
            </div>
        `;
  });

  contentDiv.innerHTML = html;
}

// 4. Рендер раздела "ПРАКТИКА" (Упражнения)
function renderPracticeSection() {
  let html =
    '<h2 style="margin-bottom:20px; text-align:center;">Проверь себя</h2>';

  appData.quiz.forEach((q, index) => {
    let buttonsHtml = "";
    q.options.forEach((opt) => {
      buttonsHtml += `
                <button class="option-btn" onclick="checkAnswer(this, '${opt}', '${q.answer}')">
                    ${opt}
                    <i class="fa-solid fa-circle-check" style="display:none"></i>
                    <i class="fa-solid fa-circle-xmark" style="display:none"></i>
                </button>
            `;
    });

    html += `
            <div class="quiz-card">
                <div class="ru-hint" style="font-size: 1rem; margin-bottom: 10px;">${
                  q.translation
                }</div>
                <div class="quiz-question">${index + 1}. ${q.question}</div>
                <div class="quiz-options">
                    ${buttonsHtml}
                </div>
            </div>
        `;
  });

  contentDiv.innerHTML = html;
}

// 5. Логика проверки ответа
function checkAnswer(btn, selected, correct) {
  const parent = btn.parentElement;
  const allBtns = parent.querySelectorAll(".option-btn");

  // Блокируем повторное нажатие
  allBtns.forEach((b) => (b.disabled = true));

  if (selected === correct) {
    // Правильно
    btn.classList.add("correct");
    btn.querySelector(".fa-circle-check").style.display = "inline-block";
  } else {
    // Ошибка
    btn.classList.add("wrong");
    btn.querySelector(".fa-circle-xmark").style.display = "inline-block";

    // Показать правильный
    allBtns.forEach((b) => {
      if (b.innerText.includes(correct)) {
        b.classList.add("correct");
      }
    });
  }
}

// Запускаем при старте
init();
