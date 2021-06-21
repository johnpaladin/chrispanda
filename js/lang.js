var arrLang = {
  en: {
    about: "About",
    contact: "Contact",
    portfolio: "portfolio",
    intro_title: "Hi! I'm Chris Lin.",
    intro_para:
      "I am an engineer who is fascinated by the mysterious unknown. Do you have something to share with me?",
    language: "language",
    question: "Question",
    q_1: "Do you believe in UFO?",
  },
  zh: {
    about: "關於",
    contact: "聯絡我",
    portfolio: "作品集",
    intro_title: "Hi! 我是 Chris Lin.",
    intro_para: "一位對於神秘未知事物著迷的工程師，有什麼想跟我分享的嗎?",
    language: "語言",
    question: "問題",
    q_1: "你覺得有幽浮嗎?",
  },
};

var lang = localStorage.getItem("lang") || navigator.language.slice(0, 2);

document.addEventListener("DOMContentLoaded", function (event) {
  $(".lang").each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// Process translation
$(function () {
  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
