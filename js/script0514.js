//------------ Начало
// $ - обрашение к объекту в документе
// $(document) - обращение ко всему документу
// $ ('#id') - обращение к элементу по идентификатору

// выполнение функции только если документ готов,
// т.е. все элементы документа загружены
// $(document).ready(function () {
// $ ('#id')
// });

// более короткая форма
// $(function () {
// $ ('#id')
// });


// ---------------- СЕЛЕКТОРЫ

$(document).ready(function () {

    console.log("Какое-то сообщение");

// Базовые селекторы (#id, tagName, .class)
//     $('p').css('border', 'solid 2px red');
    $('h2').css('border', 'solid 1px green');
    $('.p-lead').css('border', 'solid 2px red');
    $('p.blue').css('border', 'solid 2px blue');

// Селекторы взаимодействия (parent, child, + ~ и т.д.

// Простые фильтры (:first, :last, even, odd, eq и т.д.
    $('p:first').css('border', 'solid 2px yellow');
    $('p:eq(1)').css('border', 'solid 2px gray'); // обращение к элементу по порядку

// Фильры по аттрибутам ([name ~= value] и т.д.)


// ---------------- СОБЫТИЯ

// Клики мышью (click, dbclick)
    $('h2').click(function () {
        alert('Ты кликнул по заголовку')
        console.log('Кликнул по элеменнту h2')
    });

    $('h1').dblclick(function () {
        console.log('Кликнул по элеменнту h1')
        $(this).toggleClass('blue') // можно изменить стиль классом в css
        // класс blue записан в css

    });

// Полеты над элементов (mouseenter, mouseleave и т.д.)
    $('h2').mouseenter(function () {
        $(this).toggleClass('blue')
    });
    $('h2').mouseleave(function () {
        $(this).toggleClass('blue')
    });


// Формы (focus, change)
    $('input.input-one').focus(function () {
        console.log('Поле в фокусе')
    });

    $('input.input-one').change(function () {
        $('#userName').text(', ' + $(this).val());
    });


// Клавиатура (keypress, keydown, keyup)
    $('input.input-two').keyup(function () {
        $('#userName-two').text(', ' + $(this).val());

    });


// ------------------ АНИМАЦИЯ

// Базовая анимация
    // hide - скрыть элемент
    // show - показать элемент
    // delay - задержка
    $('.box:first').hide(1000)
    $('.box:eq(1)').delay(1000).hide(3000)
    $('.box:eq(2)').delay(2000).hide(3000).show(1000)
    $('.box:first').show('slow')
    $('.box:eq(1)').show('fast')

    //animate - функция
    $('.box:first').animate({'width': '200px'}, 1000)
    //slideUp -
    $('.box:first').slideUp(1000).slideDown(1000)

// Взаимодействие с Аттрибутами
    // вывод пути к источнику
    alert($('.image-boat').attr('src'));

    // По клику сокрытие картинки и замена источника
    $('.image-boat').click(function () {
        $(this).fadeOut(500, function () {
            $(this).attr('src', 'img/image02.jpg').fadeIn(500);
        });
    });

    //добавление аттрибута и его значения
    $('p.p-lead').attr('data-target', 'text');

// Взаимодействие с класссами
    // добавление класса по клику
    $('p.p-lead').click(function () {
        $('p.p-lead').toggleClass('blue')
    });

    // замена класса по дабл-клику
    $('p.p-lead').dblclick(function () {
        $('p.p-lead').toggleClass('p-lead blue')
    });

// Клонирование, добавление, перемещение элементов

    $('p.lead').click(function () {
        // варианты работы с элементами

        // $(this).text('Свой собственный <em>текст</em>'); // дословно текст
        // $(this).html('Свой собственный <em>текст</em>'); // тест с разметкой
        // $(this).append(' Дополнительный текст');
        // $(this).prepend('Начальный текст. ');
        // $(this).after('<p>Новый абзац</p>');
        // $(this).wrap('<div class="container"></div>');
        // $(this).unwrap('<div class="wrap"></div>');
        // $(this).empty(); // очистить содержимое, тег остается
        // $(this).remove(); // удалить

        // клонирование
        $(this).append('<br>' + $(this).text());

    });
});