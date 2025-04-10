ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    zoom: 15,
    center: [44.702877, 37.587579],
    controls: [],
  });
  myMap.controls.add("geolocationControl", {
    float: "none",
    position: {
      top: "16px",
      left: "16px",
    },
  });
  myMap.controls.add("zoomControl", {
    float: "none",
    position: {
      top: "250px",
      right: "15px",
    },
  });
  myMap.controls.add("typeSelector", {
    float: "none",
    position: {
      top: "16px",
      left: "64px",
    },
  });

  // Трэк

  // 1 часть
  var myPolyline1 = new ymaps.Polyline(
    [
      // Указываем координаты вершин.
      [44.7058777381504, 37.5860318421467],
      [44.7055104819157, 37.5860747576211],
      [44.7042900852769, 37.586243740067],
      [44.7032571304027, 37.58638321082],
      [44.7020979061547, 37.5865870607881],
      [44.701026649512, 37.5867909107563],
      [44.7007550117974, 37.586812362717],
      [44.7002576362699, 37.586855280776],
      [44.699633996971, 37.5869786638548],
      [44.6988305172765, 37.587118135971],
      [44.6985473914296, 37.5871878679952],
      [44.6981686061754, 37.5872898009693],
      [44.6980385172514, 37.5872790701685],
      [44.6979505214367, 37.5871503218391],
      [44.6979199060059, 37.5868338219441],
      [44.697923729901, 37.586517322049],
      [44.6980193941016, 37.5861632702555],
      [44.6980614690837, 37.5860667071397],
      [44.6980959135556, 37.5858628571715],
      [44.6980538245673, 37.585803854787],
      [44.6979581668599, 37.5857448524026],
      [44.6977171210494, 37.5856751146704],
      [44.6974263311876, 37.5856536505761],
      [44.697277112191, 37.5857823999916],
      [44.6970513563665, 37.5859916121621],
      [44.6966228325628, 37.5864422202802],
      [44.6964085587479, 37.5868016423628],
      [44.6960948097053, 37.5878369665224],
      [44.6959494087487, 37.5880676391094],
      [44.6958881947842, 37.5880944580978],
      [44.6956892177787, 37.5881212770862],
      [44.694185468071, 37.5878155080842],
      [44.694835953102, 37.588185664038],
      [44.6949048226727, 37.5882285716268],
      [44.6953448514159, 37.5886308999661],
      [44.6956547784477, 37.5890761510027],
      [44.6957389553882, 37.5891297912767],
      [44.6958001779039, 37.5891405220774],
      [44.6962899429677, 37.5891029740634],
      [44.6964238601882, 37.5890332285743],
      [44.6964850794203, 37.5889473983213],
      [44.6965386486881, 37.5888132926975],
      [44.6967682239601, 37.5878262437311],
      [44.696810308315, 37.5877833254646],
      [44.6968447523353, 37.5878476997084],
      [44.6968753626447, 37.5880247170997],
      [44.6970131042687, 37.5883197674909],
      [44.697154672384, 37.5885236100839],
      [44.6972885864697, 37.5886630922811],
      [44.6974339807239, 37.5887489225341],
      [44.697747726582, 37.5887811075858],
      [44.6986086061633, 37.5887167319055],
      [44.6987769615281, 37.5887596473798],
      [44.6991404301492, 37.5887274633281],
      [44.6998367719662, 37.5885879862709],
      [44.7005178014461, 37.5884109611334],
      [44.7006440598487, 37.5884485057773],
      [44.7008621371263, 37.5884002287653],
      [44.7022432925977, 37.5881749271043],
      [44.7034292981091, 37.5879979018023],
      [44.7046076210413, 37.5877511397779],
      [44.7049863717433, 37.5876760374064],
      [44.705395714874, 37.5875150973462],
      [44.7066046125388, 37.5868981901524],
      [44.7076757616871, 37.5864100289535],
      [44.7083107757347, 37.5860827975175],
      [44.7091523767427, 37.5856912011691],
      [44.709630552975, 37.5854229827778],

    ],
    [],

    {
      // Задаем опции геообъекта.
      // Цвет с прозрачностью.
      strokeColor: "#F28123",
      // Ширину линии.
      strokeWidth: 3,
      // Максимально допустимое количество вершин в ломаной.
      editorMaxPoints: 6,
      // Добавляем в контекстное меню новый пункт, позволяющий удалить ломаную.
      editorMenuManager: function (items) {
        items.push({
          title: "Удалить линию",
          onClick: function () {
            myMap.geoObjects.remove(myPolyline1);
          },
        });
        return items;
      },
    }
  );

  // 2 часть
  var myPolyline2 = new ymaps.Polyline(
    [
      // Указываем координаты вершин.
      [44.7033322686655, 37.5880113109173],
      [44.7027966540336, 37.5883841413647],
      [44.7027010064734, 37.5884592437362],
      [44.7026933572114, 37.5884887360366],
      [44.7027010064734, 37.5885316643789],
      [44.7027335324414, 37.5885584833673],
      [44.7032117470114, 37.588673822257],
      [44.7034833780991, 37.588692594848],
      [44.7038315299994, 37.5886952831077],
      [44.7042580956333, 37.5885611600088],
      [44.7043193086033, 37.5885745776142],

    ],
    [],

    {
      // Задаем опции геообъекта.
      // Цвет с прозрачностью.
      strokeColor: "#F28123",
      // Ширину линии.
      strokeWidth: 3,
      // Максимально допустимое количество вершин в ломаной.
      editorMaxPoints: 6,
      // Добавляем в контекстное меню новый пункт, позволяющий удалить ломаную.
      editorMenuManager: function (items) {
        items.push({
          title: "Удалить линию",
          onClick: function () {
            myMap.geoObjects.remove(myPolyline2);
          },
        });
        return items;
      },
    }
  );

  // Обозначение начала маршрута
  var startPoint = new ymaps.Placemark(
    [44.7058777381504, 37.5860318421467],
    {
      hintContent: "Начало экотропы",
      //   balloonContent: `Начало экотропы`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "https://i.ibb.co/Z2wRNPF/map-marker.png",
      iconImageSize: [32, 51],
      iconImageOffset: [-10, -45],
    }
  );

  // Обозначение конца маршрута
  var endPoint = new ymaps.Placemark(
    [44.709630552975, 37.5854229827778],
    {
      hintContent: "Конец экотропы",
      ////balloonContent: "Это конец экотропы",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "2",
      iconImageSize: [15, 15],
      iconImageOffset: [0, 0],
    }
  );

  // Добавляем линии на карту.
  myMap.geoObjects.add(myPolyline1).add(myPolyline2).add(startPoint).add(endPoint);

});

//Геолокация пользователя//
function init() {
  var geolocation = ymaps.geolocation,
    myMap = new ymaps.Map(
      "map",
      {
        center: [55, 34],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

  // Сравним положение, вычисленное по ip пользователя и
  // положение, вычисленное средствами браузера.
  geolocation
    .get({
      provider: "yandex",
      mapStateAutoApply: true,
    })
    .then(function (result) {
      // Красным цветом пометим положение, вычисленное через ip.
      result.geoObjects.options.set("preset", "islands#redCircleIcon");
      result.geoObjects.get(0).properties.set({
        balloonContentBody: "Мое местоположение",
      });
      myMap.geoObjects.add(result.geoObjects);
    });

  geolocation
    .get({
      provider: "browser",
      mapStateAutoApply: true,
    })
    .then(function (result) {
      // Синим цветом пометим положение, полученное через браузер.
      // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
      result.geoObjects.options.set("preset", "islands#blueCircleIcon");
      myMap.geoObjects.add(result.geoObjects);
    });
}
