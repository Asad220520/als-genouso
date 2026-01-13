// База данных приложения

const appData = {
  // Раздел 1: Истории (Теория)
  stories: [
    {
      title: "Работа и Зарплата",
      icon: "fa-briefcase",
      steps: [
        {
          icon: "😐",
          ru: "Я зарабатываю много.",
          de: "Ich verdiene <b>viel</b>.",
        },
        {
          icon: "🤝",
          ru: "Мой друг зарабатывает столько же, сколько я.",
          de: "Er verdient <span class='highlight-eq'>genauso viel wie</span> ich.",
        },
        {
          icon: "📈",
          ru: "Но шеф зарабатывает больше, чем мы.",
          de: "Der Chef verdient <span class='highlight-comp'>mehr als</span> wir.",
        },
        {
          icon: "👑",
          ru: "Владелец зарабатывает больше всех.",
          de: "Der Besitzer verdient <span class='highlight-super'>am meisten</span>.",
        },
      ],
    },
    {
      title: "Скорость Транспорта",
      icon: "fa-gauge-high",
      steps: [
        {
          icon: "🚌",
          ru: "Автобус быстрый.",
          de: "Der Bus ist <b>schnell</b>.",
        },
        {
          icon: "🚆",
          ru: "Поезд быстрее, чем автобус.",
          de: "Der Zug ist <span class='highlight-comp'>schneller als</span> der Bus.",
        },
        {
          icon: "🚗",
          ru: "Машина такая же быстрая, как поезд.",
          de: "Das Auto ist <span class='highlight-eq'>genauso schnell wie</span> der Zug.",
        },
        {
          icon: "✈️",
          ru: "Самолет быстрее всех.",
          de: "Das Flugzeug ist <span class='highlight-super'>am schnellsten</span>.",
        },
      ],
    },
    {
      title: "Вкусы и Еда",
      icon: "fa-burger",
      steps: [
        {
          icon: "🍕",
          ru: "Я люблю (ем охотно) пиццу.",
          de: "Ich esse <b>gern</b> Pizza.",
        },
        {
          icon: "🥙",
          ru: "Но донер я люблю больше.",
          de: "Aber Döner esse ich <span class='highlight-comp'>lieber als</span> Pizza.",
        },
        {
          icon: "🥩",
          ru: "Больше всего я люблю стейк.",
          de: "Steak esse ich <span class='highlight-super'>am liebsten</span>.",
        },
      ],
    },
  ],

  // Раздел 2: Упражнения
  quiz: [
    {
      question: "Der Bus ist schnell, aber der Zug ist ...",
      options: ["schnell", "schneller", "am schnellsten"],
      answer: "schneller",
      translation: "Поезд быстрее",
    },
    {
      question: "Mein Freund verdient genauso viel ... ich.",
      options: ["als", "wie", "dann"],
      answer: "wie",
      translation: "Столько же ... как (равенство)",
    },
    {
      question: "Ich mag Pizza, aber Döner mag ich ...",
      options: ["gut", "besser", "lieber"],
      answer: "lieber",
      translation: "Люблю больше (охотнее)",
    },
    {
      question: "Wer ist der Champion? Er ist ...",
      options: ["gut", "besser", "am besten"],
      answer: "am besten",
      translation: "Лучше всех",
    },
    {
      question: "Das Auto ist schneller ... das Fahrrad.",
      options: ["als", "wie", "von"],
      answer: "als",
      translation: "Быстрее ЧЕМ (сравнение)",
    },
  ],
};
