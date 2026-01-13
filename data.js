const appData = {
  // ============================================
  // 1. ТЕОРИЯ (STORIES)
  // ============================================
  stories: [
    {
      title: "🔥 Золотые Исключения (Начни с этого!)",
      subtitle: "Gut, Viel, Gern — меняются полностью",
      icon: "fa-star",
      phrases: [
        // GUT (Хорошо -> Лучше -> Лучше всего)
        { ru: "Ты готовишь хорошо.", de: "Du kochst <b>gut</b>." },
        {
          ru: "Но твоя мама готовит лучше.",
          de: "Aber deine Mama kocht <span class='mark m-comp'>besser</span>.",
        },
        {
          ru: "Бабушка готовит лучше всех.",
          de: "Oma kocht <span class='mark m-super'>am besten</span>.",
        },

        // GERN (Люблю -> Охотнее -> Обожаю)
        {
          ru: "Я люблю (охотно) пить кофе.",
          de: "Ich trinke <b>gern</b> Kaffee.",
        },
        {
          ru: "Но чай я пью охотнее (предпочитаю).",
          de: "Aber Tee trinke ich <span class='mark m-comp'>lieber</span>.",
        },
        {
          ru: "Больше всего я люблю воду.",
          de: "Am <span class='mark m-super'>liebsten</span> trinke ich Wasser.",
        },

        // VIEL (Много -> Больше -> Больше всего)
        { ru: "У меня много работы.", de: "Ich habe <b>viel</b> Arbeit." },
        {
          ru: "У шефа больше работы.",
          de: "Der Chef hat <span class='mark m-comp'>mehr</span> Arbeit.",
        },
        {
          ru: "У президента больше всего работы.",
          de: "Der Präsident hat <span class='mark m-super'>am meisten</span> Arbeit.",
        },
      ],
    },
    {
      title: "📏 Люди и Семья (Größe & Alter)",
      subtitle: "Alt, Jung, Groß, Klein",
      icon: "fa-user-group",
      phrases: [
        {
          ru: "Мой брат старше, чем я.",
          de: "Mein Bruder ist <span class='mark m-comp'>älter als</span> ich.",
        },
        {
          ru: "Я моложе, чем моя сестра.",
          de: "Ich bin <span class='mark m-comp'>jünger als</span> meine Schwester.",
        },
        {
          ru: "Ты такой же высокий, как папа.",
          de: "Du bist <span class='mark m-eq'>genauso groß wie</span> Papa.",
        },
        {
          ru: "Дедушка самый старый.",
          de: "Opa ist <span class='mark m-super'>am ältesten</span>.",
        },
      ],
    },
    {
      title: "🌡️ Погода и Природа (Kalt & Warm)",
      subtitle: "Сравнение температуры",
      icon: "fa-temperature-half",
      phrases: [
        { ru: "Осенью холодно.", de: "Im Herbst ist es <b>kalt</b>." },
        {
          ru: "Зимой холоднее, чем осенью.",
          de: "Im Winter ist es <span class='mark m-comp'>kälter als</span> im Herbst.",
        },
        {
          ru: "На Северном полюсе холоднее всего.",
          de: "Am Nordpol ist es <span class='mark m-super'>am kältesten</span>.",
        },
        {
          ru: "Сегодня теплее, чем вчера.",
          de: "Heute ist es <span class='mark m-comp'>wärmer als</span> gestern.",
        },
      ],
    },
    {
      title: "💰 Деньги и Покупки (Teuer & Billig)",
      subtitle: "Сравниваем цены",
      icon: "fa-tags",
      phrases: [
        {
          ru: "Мерседес дороже, чем Лада.",
          de: "Mercedes ist <span class='mark m-comp'>teurer als</span> Lada.",
        },
        {
          ru: "Хлеб такой же дешевый, как молоко.",
          de: "Brot ist <span class='mark m-eq'>genauso billig wie</span> Milch.",
        },
        {
          ru: "Мой телефон самый дорогой.",
          de: "Mein Handy ist <span class='mark m-super'>am teuersten</span>.",
        },
      ],
    },
    {
      title: "❤️ Здоровье и Ощущения",
      subtitle: "Gesund, Krank, Laut, Leise",
      icon: "fa-heart-pulse",
      phrases: [
        {
          ru: "Фрукты полезнее, чем чипсы.",
          de: "Obst ist <span class='mark m-comp'>gesünder als</span> Chips.",
        },
        {
          ru: "Собака громче, чем кошка.",
          de: "Der Hund ist <span class='mark m-comp'>lauter als</span> die Katze.",
        },
        {
          ru: "Здесь так же тихо, как в библиотеке.",
          de: "Hier ist es <span class='mark m-eq'>genauso leise wie</span> in der Bibliothek.",
        },
      ],
    },
  ],

  // ============================================
  // 2. ТЕСТ (QUIZ) - 20 вопросов
  // ============================================
  quiz: [
    // Исключения
    {
      q: "Ich schwimme gut, aber du schwimmst ...",
      opts: ["guter", "besser", "besten"],
      a: "besser",
    },
    {
      q: "Ich esse Pizza gern, aber Pasta esse ich ...",
      opts: ["gerner", "lieber", "am liebsten"],
      a: "lieber",
    },
    {
      q: "Wer hat das meiste Geld? (Топ)",
      opts: ["am meisten", "am mehrsten", "am vielsten"],
      a: "am meisten",
    },
    {
      q: "Wir haben viel Zeit, aber sie haben ...",
      opts: ["vieler", "mehr", "meistens"],
      a: "mehr",
    },

    // Обычные сравнения
    {
      q: "Ferrari ist schnell, aber ein Flugzeug ist ...",
      opts: ["schnell", "schneller", "am schnellsten"],
      a: "schneller",
    },
    {
      q: "Der Winter ist ... als der Sommer.",
      opts: ["kalt", "kälter", "am kältesten"],
      a: "kälter",
    },
    {
      q: "Mein Opa ist ... (старый) als ich.",
      opts: ["alt", "älter", "am ältesten"],
      a: "älter",
    },
    {
      q: "Die Sonne ist ... als der Mond.",
      opts: ["heiß", "heißer", "am heißesten"],
      a: "heißer",
    },
    {
      q: "Mathematik ist ... (сложнее) als Sport.",
      opts: ["schwer", "schwerer", "am schwersten"],
      a: "schwerer",
    },

    // Равенство (wie) vs Неравенство (als)
    {
      q: "Ich bin genauso stark ... du.",
      opts: ["als", "wie", "von"],
      a: "wie",
    },
    {
      q: "Berlin ist größer ... Bonn.",
      opts: ["als", "wie", "dann"],
      a: "als",
    },
    {
      q: "Der Kaffee ist so heiß ... der Tee.",
      opts: ["als", "wie", "zu"],
      a: "wie",
    },
    {
      q: "Er läuft schneller ... ich.",
      opts: ["als", "wie", "wenn"],
      a: "als",
    },

    // Суперлатив (Топ)
    {
      q: "Welches Tier ist ... ? (самое быстрое)",
      opts: ["schnell", "schneller", "am schnellsten"],
      a: "am schnellsten",
    },
    {
      q: "Everest ist ... Berg. (самый высокий)",
      opts: ["hoch", "höher", "am höchsten"],
      a: "am höchsten",
    },
    {
      q: "Wer ist ... Mensch der Welt? (самый богатый)",
      opts: ["reich", "reicher", "am reichsten"],
      a: "am reichsten",
    },
  ],

  // ============================================
  // 3. КОНСТРУКТОР (BUILDER) - 15 уровней
  // ============================================
  build: [
    // Уровень 1-5: Простые
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

    // Уровень 6-10: Средние (Исключения)
    {
      ru: "Ты играешь лучше, чем Роналду.",
      parts: ["Du", "spielst", "besser", "als", "Ronaldo."],
    },
    {
      ru: "Я ем мясо охотнее, чем рыбу.",
      parts: ["Ich", "esse", "Fleisch", "lieber", "als", "Fisch."],
    },
    {
      ru: "У него больше денег, чем у меня.",
      parts: ["Er", "hat", "mehr", "Geld", "als", "ich."],
    },
    {
      ru: "Зимой холоднее, чем летом.",
      parts: ["Im Winter", "ist", "es", "kälter", "als", "im Sommer."],
    },
    {
      ru: "Этот тест самый сложный.",
      parts: ["Dieser Test", "ist", "am schwierigsten."],
    },

    // Уровень 11-15: Сложные
    {
      ru: "Спорт полезнее, чем алкоголь.",
      parts: ["Sport", "ist", "gesünder", "als", "Alkohol."],
    },
    {
      ru: "Моя собака умнее, чем твоя кошка.",
      parts: ["Mein Hund", "ist", "klüger", "als", "deine Katze."],
    },
    {
      ru: "Сегодня погода лучше, чем вчера.",
      parts: ["Heute", "ist", "das Wetter", "besser", "als", "gestern."],
    },
    {
      ru: "Я читаю книги так же охотно, как смотрю фильмы.",
      parts: [
        "Ich",
        "lese",
        "Bücher",
        "genauso gern",
        "wie",
        "ich Filme sehe.",
      ],
    },
    {
      ru: "В Германии люди живут дольше.",
      parts: ["In Deutschland", "leben", "die Menschen", "länger."],
    },
  ],
};
