const appData = {
  // === ТЕОРИЯ ===
  stories: [
    {
      title: "Сравнение (Komparativ)",
      subtitle: "Быстрее, выше, сильнее",
      icon: "fa-person-running",
      phrases: [
        {
          ru: "Поезд быстрее, чем автобус.",
          de: "Der Zug ist <span class='mark m-comp'>schneller als</span> der Bus.",
        },
        {
          ru: "Берлин больше, чем Бонн.",
          de: "Berlin ist <span class='mark m-comp'>größer als</span> Bonn.",
        },
        {
          ru: "Зимой холоднее, чем осенью.",
          de: "Im Winter ist es <span class='mark m-comp'>kälter als</span> im Herbst.",
        },
        {
          ru: "Мой чемодан тяжелее.",
          de: "Mein Koffer ist <span class='mark m-comp'>schwerer</span>.",
        },
      ],
    },
    {
      title: "Равенство (Genauso)",
      subtitle: "Одинаковые вещи",
      icon: "fa-scale-balanced",
      phrases: [
        {
          ru: "Я такой же быстрый, как ты.",
          de: "Ich bin <span class='mark m-eq'>genauso schnell wie</span> du.",
        },
        {
          ru: "Машина такая же дорогая.",
          de: "Das Auto ist <span class='mark m-eq'>genauso teuer</span>.",
        },
        {
          ru: "Сегодня так же тепло, как вчера.",
          de: "Heute ist es <span class='mark m-eq'>genauso warm wie</span> gestern.",
        },
      ],
    },
    {
      title: "Чемпионы (Superlativ)",
      subtitle: "Самый-самый",
      icon: "fa-trophy",
      phrases: [
        {
          ru: "Самолет быстрее всех.",
          de: "Das Flugzeug ist <span class='mark m-super'>am schnellsten</span>.",
        },
        {
          ru: "В Сибири холоднее всего.",
          de: "In Sibirien ist es <span class='mark m-super'>am kältesten</span>.",
        },
        {
          ru: "Этот костюм самый красивый.",
          de: "Dieser Anzug ist <span class='mark m-super'>am schönsten</span>.",
        },
      ],
    },
    {
      title: "Исключения (Важно!)",
      subtitle: "Gut, Viel, Gern",
      icon: "fa-star",
      phrases: [
        {
          ru: "Я люблю (охотнее) чай.",
          de: "Ich trinke <span class='mark m-comp'>lieber</span> Tee.",
        },
        {
          ru: "Больше всего я люблю воду.",
          de: "Am <span class='mark m-super'>liebsten</span> trinke ich Wasser.",
        },
        {
          ru: "Ты играешь лучше.",
          de: "Du spielst <span class='mark m-comp'>besser</span>.",
        },
        {
          ru: "Месси играет лучше всех.",
          de: "Messi spielt <span class='mark m-super'>am besten</span>.",
        },
      ],
    },
  ],

  // === ТЕСТ (QUIZ) ===
  quiz: [
    {
      q: "Ferrari ist schnell, aber Bugatti ist ...",
      opts: ["schnell", "schneller", "am schnellsten"],
      a: "schneller",
    },
    {
      q: "Ich esse Pizza gern, aber Sushi esse ich ...",
      opts: ["gerner", "lieber", "besser"],
      a: "lieber",
    },
    {
      q: "Wer hat das meiste Geld? (Топ)",
      opts: ["am meisten", "am mehrsten", "am vielsten"],
      a: "am meisten",
    },
    {
      q: "Mein Bruder ist genauso alt ... ich.",
      opts: ["als", "wie", "von"],
      a: "wie",
    },
    {
      q: "Der Winter ist ... als der Sommer.",
      opts: ["kalt", "kälter", "am kältesten"],
      a: "kälter",
    },
    {
      q: "Du bist gut, aber ich bin ...",
      opts: ["guter", "besser", "besten"],
      a: "besser",
    },
  ],

  // === КОНСТРУКТОР (BUILDER) ===
  build: [
    {
      ru: "Поезд быстрее, чем машина.",
      parts: ["Der Zug", "ist", "schneller", "als", "das Auto."],
    },
    {
      ru: "Я зарабатываю больше, чем ты.",
      parts: ["Ich", "verdiene", "mehr", "als", "du."],
    },
    {
      ru: "Анна такая же красивая, как Мария.",
      parts: ["Anna", "ist", "genauso", "schön", "wie", "Maria."],
    },
    {
      ru: "Больше всего я люблю спать.",
      parts: ["Am", "liebsten", "schlafe", "ich."],
    },
    {
      ru: "Мой дом больше, чем твой.",
      parts: ["Mein Haus", "ist", "größer", "als", "dein Haus."],
    },
  ],
};
