<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    function calendar(id, year, month) {
        const monthLastDay = new Date(year, month + 1, 0).getDate();
        const date = new Date(year, month, monthLastDay);
        const lastWeekDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            monthLastDay
        ).getDay();
        const firstWeekDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getDay();
        let calendar = '<tr>';
        const monthNames = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ];
        if (firstWeekDay != 0) {
            for (let i = 1; i < firstWeekDay; i++) calendar += '<td>';
        } else {
            for (let i = 0; i < 6; i++) calendar += '<td>'; // пустые ячейки перед первым числом месяца
        }
        for (let i = 1; i <= monthLastDay; i++) {
            if (
                i == new Date().getDate() &&
                date.getFullYear() == new Date().getFullYear() &&
                date.getMonth() == new Date().getMonth()
            ) {
                calendar += '<td class="today">' + i; // выделение сегодняшнего дня
            } else {
                calendar += '<td>' + i; // заполнение днями
            }
            if (
                new Date(date.getFullYear(), date.getMonth(), i).getDay() == 0
            ) {
                calendar += '<tr>'; // переход на следующую неделю
            }
        }
        for (let i = lastWeekDay; i < 7; i++) calendar += '<td>&nbsp;'; // пустые ячейки после последнего числа месяца
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML =
            monthNames[date.getMonth()] + ' ' + date.getFullYear(); // заполнение выбранного месяца и года
        document.querySelector(
            '#' + id + ' thead td:nth-child(2)'
        ).dataset.month = date.getMonth();
        document.querySelector(
            '#' + id + ' thead td:nth-child(2)'
        ).dataset.year = date.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
            document.querySelector('#' + id + ' tbody').innerHTML +=
                '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
    }
    calendar('calendar', new Date().getFullYear(), new Date().getMonth());

    // предыдущий месяц
    document.querySelector(
        '#calendar thead tr:nth-child(1) td:nth-child(1)'
    ).onclick = function () {
        calendar(
            'calendar',
            document.querySelector('#calendar thead td:nth-child(2)').dataset
                .year,
            parseInt(
                document.querySelector('#calendar thead td:nth-child(2)')
                    .dataset.month
            ) - 1
        );
    };
    // следующий месяц
    document.querySelector(
        '#calendar thead tr:nth-child(1) td:nth-child(3)'
    ).onclick = function () {
        calendar(
            'calendar',
            document.querySelector('#calendar thead td:nth-child(2)').dataset
                .year,
            parseInt(
                document.querySelector('#calendar thead td:nth-child(2)')
                    .dataset.month
            ) + 1
        );
    };
});
</script>

<template>
    <section class="calendar-container">
        <table id="calendar" class="calendar">
            <thead class="calendar__head">
                <tr>
                    <td>&#10094;</td>
                    <td colspan="5"></td>
                    <td>&#10095;</td>
                </tr>
                <tr>
                    <td>Пн</td>
                    <td>Вт</td>
                    <td>Ср</td>
                    <td>Чт</td>
                    <td>Пт</td>
                    <td>Сб</td>
                    <td>Вс</td>
                </tr>
            </thead>
            <tbody class="calendar__body"></tbody>
        </table>
    </section>
</template>
