function showBlock(blockId) {
  var blocks = document.getElementsByClassName("block");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.display = "none";
  }
  document.getElementById(blockId).style.display = "block";
}

function showBlock(blockId) {
  var block = document.getElementById(blockId);
  if (block.style.display === "none") {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
}

function generateSpecification() {
  var specification = "Конечное ТЗ: \n";

  if (document.getElementById("feature1").checked) {
    specification += "Title\n";
  }
  if (document.getElementById("feature2").checked) {
    specification += "- Должен присутствовать на всех страницах сайта\n";
  }
  if (document.getElementById("feature3").checked) {
    specification += "- Должен содержать ключевые фразы\n";
  }
  if (document.getElementById("feature4").checked) {
    specification += "- Должен быть уникальным и отличаться от H1\n";
  }
  if (document.getElementById("feature5").checked) {
    specification += "- Для продвижения региона должен быть указан город\n";
  }
  if (document.getElementById("feature6").checked) {
    specification +=
      "- Оптимальная длина не более 6-10 слов и не более 60символов\n";
  }
  if (document.getElementById("feature7").checked) {
    specification +=
      "- Для нецелевых страниц генерация по шаблону с использованием коммерческих слов: купить, цена...\n";
  }
  // ------------------------------------------------------------------------------------------------------------------------------
  if (document.getElementById("feature8").checked) {
    specification += "Description\n";
  }
  if (document.getElementById("feature9").checked) {
    specification +=
      "-Размер мета тега description в Яндекс и Google не должен превышать 40-200 символов\n";
  }
  if (document.getElementById("feature10").checked) {
    specification +=
      "-Правильный description должен содержать ключевые слова, по которым оптимизируется данная страница\n";
  }
  if (document.getElementById("feature11").checked) {
    specification += "-Тег должен описывать содержание конкретной страницы\n";
  }
  if (document.getElementById("feature12").checked) {
    specification +=
      "-Описания в meta тегах description должны быть уникальными для всех страниц сайта\n";
  }
  if (document.getElementById("feature13").checked) {
    specification += "-Тег description должен отличаться от тега title.\n";
  }
  if (document.getElementById("feature14").checked) {
    specification +=
      "-Description должен быть привлекательным для пользователей\n";
  }
  if (document.getElementById("feature15").checked) {
    specification += "Sitemap\n";
  }
  if (document.getElementById("feature16").checked) {
    specification +=
      "-Исключить мусорные, дубли и запрещенные страницы в robots.txt.\n";
  }
  if (document.getElementById("feature17").checked) {
    specification +=
      "-Указать верный протокол сайта http/https и ссылки с www или без www.\n";
  }
  if (document.getElementById("feature18").checked) {
    specification +=
      "-Из обязательных XML-тегов должны быть urlset, url, loc.\n";
  }
  if (document.getElementById("feature19").checked) {
    specification +=
      "-Должен содержать не более 50 000 ссылок и весить не более 10Мб.\n";
  }
  if (document.getElementById("feature20").checked) {
    specification +=
      "-Description должен быть привлекательным для пользователей\n";
  }

  document.getElementById("specification").innerText = specification;
}
