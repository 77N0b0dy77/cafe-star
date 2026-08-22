 function openSection(sectionId) {
            // 1. Скрываем все секции
            const contents = document.querySelectorAll('.menu__section-content');
            contents.forEach(content => content.classList.remove('active'));

            // 2. Убираем активный класс у всех кнопок
            const buttons = document.querySelectorAll('.menu__tab-btn');
            buttons.forEach(btn => btn.classList.remove('active'));

            // 3. Показываем нужную секцию
            document.getElementById(sectionId).classList.add('active');

            // 4. Находим кнопку, соответствующую нажатой секции, и делаем её активной
            // Находим кнопку по атрибуту onclick или data-target, здесь проще по индексу или тексту, 
            // но надежнее сопоставить ID с кнопкой через data-target. 
            // Для простоты в этом примере мы просто ищем кнопку, у которой onclick содержит sectionId
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes(sectionId)) {
                    btn.classList.add('active');
                }
            });
        }


         ymaps.ready(init);

function init() {
            // !!! ВАЖНО: ЗАМЕНИТЕ КООРДИНАТЫ НИЖЕ НА РЕАЛЬНЫЕ ДЛЯ АДРЕСА "СПб, Коржекова, 5" !!!
            var coords = [59.938676, 30.314494]; 

            var myMap = new ymaps.Map("map", {
                center: coords,
                zoom: 16,
                controls: ['zoomControl', 'fullscreenControl']
            });

            var myPlacemark = new ymaps.Placemark(coords, {
                hintContent: 'Кофейня "Зернышко"',
                balloonContent: 'СПб, Коржекова, 5'
            }, {
                preset: 'islands#redDotIcon' 
            });

            myMap.geoObjects.add(myPlacemark);
        }