# Тестовое задание для фронтенд-разработчика (React)

В тестовом задании представлены макеты дизайна двух страниц: страницы каталога продуктов и страница корзины. Тестовое задание состоит из нескольких уровней — обязательных (level 1, level 2 и level 3) и необязательный (level 4). В обязательных задачах мы проверяем знания необходимые для прохождения на эту позицию. Необязательные задачи не должны занять много времени, но помогут вам показать себя с лучшей стороны. Вы можете сделать только часть из них, если что-то покажется вам интересным, или не делать их вовсе.

## Level 1

Реализовать список товаров, который можно отфильтровать с помощью расположенного слева списка брендов. Необходимые данные можно подгрузить из JSON-файлов продукты и бренды.

### Добавление товара в корзину

При добавлении в корзину необходимо отображать количество продуктов в корзине рядом с иконкой вверху.

## Level 2

Сделать респонсив начиная от 320px и выше. Использовать фреймворк Bootstrap. Главное, чтобы интерфейс оставался удобным, аккуратным и эстетичным.

## Level 3

Вывести добавленные ранее товары. Добавить поле с возможностью выбора количества и кнопку Удалить для удаления позиции из корзины. Текст с суммой всего заказа должен в реальном времени пересчитывать сумму. Переключение между страницей каталога и корзины реализовать с помощью React Router.

## Level 4

Добавлен новый тип продукта "Настраиваемый" (configurable) . У данного продукта есть опции (configurable_options), в нашем случае пользователь может выбрать цвет и размер товара. Также в информации о продукте присутствует список доступных вариантов товара (variants).

Необходимо реализовать добавление доступных вариантов товаров в корзину и невозможность добавления несуществующих вариантов.
Менять изображение товара при полном соответствии выбранных опций пользователя с одним из вариантов товара
Вывести выбранные опции в корзине (если выполнен level 3)
