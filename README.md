# react-calculator-constructor

Не сделал:
- Компоненты из левой части всегда активны
- Логику сброса стейта после получения результата: если на дисплее есть велью и нажата кнопка операции, то второе значение в памяти не обнулится, а будет прибавляться к старому.

## Стэк:

- TypeScript, React
- redux
- styled-components
- eslint, husky, prettier
- react-dnd

## Правая **часть экрана - холст**

На холст можно бросать компоненты из палитры. Все элементы, брошенные на холст, располагаются вертикально.

При перетаскивании должна подсветиться зона, куда вставится элемент

Элемент удаляется с холста по dblclick

## **Сайдбар с набором компонентов**. Их всего 4:

- дисплей (на холсте он может находиться только в самом верху),
- цифровой блок с кнопками от `0` до `9` и `,` (дробь)
- кнопки операций: `x`, `/`, `+`, `-`
- и отдельно кнопка `=`

Все компоненты одинаковой ширины.

Каждый элемент можно бросить на холст только один раз, затем они становятся неактивными (визуально - opacity 50%).

## **Переключатель** между режимом конструктора и runtime

- в режиме конструктора можно собирать интерфейс, но при нажатии на кнопки, они ничего не делают.
- в режиме runtime перетаскивать ничего нельзя (сайдбар скрывается), но работает калькулятор (или то что собрали). Нажимаем на кнопки и видим результат на дисплее.
- переключение сбрасывает состояние дисплея

## Дополнительно

- собранный калькулятор должен работать по тем же принципам, что и нативный в macOs или windows
