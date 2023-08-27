<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['transmitRef']);

const zoomSteps = 6;

const firstTarget = ref();
const firstTargetNum = ref(6);
const secondTarget = ref();
const secondTargetNum = ref(12);

const zoomScaleButtonArray = ref();

function zoomScale(num, event, cont) {
    if (cont === 1) {
        firstTarget.value.classList.remove(
            'image-container__zoom-scale-button_selected'
        );
        firstTarget.value = event.target;
        firstTarget.value.classList.add(
            'image-container__zoom-scale-button_selected'
        );
        firstTargetNum.value = num;
    }

    if (cont === 2) {
        secondTarget.value.classList.remove(
            'image-container__zoom-scale-button_selected'
        );
        secondTarget.value = event.target;
        secondTarget.value.classList.add(
            'image-container__zoom-scale-button_selected'
        );
        secondTargetNum.value = num + 6;
    }
}

function zoomScaleToggle(cont) {
    if (cont === 1) {
        firstTarget.value.classList.remove(
            'image-container__zoom-scale-button_selected'
        );
        firstTarget.value =
            zoomScaleButtonArray.value[firstTargetNum.value - 1];
        firstTarget.value.classList.add(
            'image-container__zoom-scale-button_selected'
        );
    }
    if (cont === 2) {
        secondTarget.value.classList.remove(
            'image-container__zoom-scale-button_selected'
        );
        secondTarget.value =
            zoomScaleButtonArray.value[secondTargetNum.value - 1];
        secondTarget.value.classList.add(
            'image-container__zoom-scale-button_selected'
        );
    }
}

function zoonIn(cont) {
    if (cont === 1) {
        if (firstTargetNum.value > 1) {
            firstTargetNum.value--;
            zoomScaleToggle(cont);
        }
    }
    if (cont === 2) {
        if (secondTargetNum.value > 7) {
            secondTargetNum.value--;
            zoomScaleToggle(cont);
        }
    }
}

function zoomOut(cont) {
    if (cont === 1) {
        if (firstTargetNum.value < 6) {
            firstTargetNum.value++;
            zoomScaleToggle(cont);
        }
    }
    if (cont === 2) {
        if (secondTargetNum.value < 12) {
            secondTargetNum.value++;
            zoomScaleToggle(cont);
        }
    }
}

function imageToggle(num, cont) {
    if (cont === 1) {
        switch (num) {
            case 1:
                return 'zoom/2000D/600.jpg';
            case 2:
                return 'zoom/2000D/400.jpg';
            case 3:
                return 'zoom/2000D/300.jpg';
            case 4:
                return 'zoom/2000D/250.jpg';
            case 5:
                return 'zoom/2000D/200.jpg';
            case 6:
                return 'zoom/2000D/150.jpg';
        }
    }
    if (cont === 2) {
        switch (num) {
            case 7:
                return 'zoom/90D/600.jpg';
            case 8:
                return 'zoom/90D/400.jpg';
            case 9:
                return 'zoom/90D/300.jpg';
            case 10:
                return 'zoom/90D/250.jpg';
            case 11:
                return 'zoom/90D/200.jpg';
            case 12:
                return 'zoom/90D/150.jpg';
        }
    }
}

onMounted(() => {
    zoomScaleButtonArray.value = document.querySelectorAll(
        '.image-container__zoom-scale-button'
    );
    firstTarget.value = zoomScaleButtonArray.value[5];
    secondTarget.value = zoomScaleButtonArray.value[11];
    firstTarget.value.classList.add(
        'image-container__zoom-scale-button_selected'
    );
    secondTarget.value.classList.add(
        'image-container__zoom-scale-button_selected'
    );

    const id = document.getElementById('zoom').id;
    const text = document.getElementById('zoom').innerText;

    emit('transmitRef', id, text);
});
</script>

<template>
    <section class="zoom">
        <h5 class="review-title" id="zoom">Пример работы зума</h5>
        <div class="text-container">
            Зум - это оптическое увеличение фокусного расстояния объектива для
            приближения или отдаления объекта съемки. Работа зума на камере
            заключается в изменении фокусного расстояния, что позволяет менять
            масштаб изображения. На камере обычно есть два типа зума: оптический
            и цифровой. - Оптический зум использует линзы в объективе для
            увеличения или уменьшения масштаба изображения без потери качества.
            Он фактически изменяет фокусное расстояние, чтобы увеличить или
            уменьшить угол зрения. Оптический зум обычно предоставляет лучшее
            качество изображения. - Цифровой зум, с другой стороны, работает
            путем обрезки и масштабирования изображения с помощью программного
            обеспечения. Он не изменяет фокусное расстояние объектива, а просто
            увеличивает участок изображения, что может привести к потере
            качества и появлению шума. При работе с зумом важно учитывать, что
            оптический зум может дать наиболее качественные результаты,
            поскольку не происходит потери деталей изображения. Цифровой зум
            можно использовать в случаях, когда отдаленный объект нужно
            приблизить, но важно помнить, что это может привести к ухудшению
            качества. Какой из зумов использовать, зависит от ваших потребностей
            и целей съемки. Если вам важно сохранить максимальное качество,
            рекомендуется использовать оптический зум. Если же вам нужно
            кратковременно увеличить масштаб, цифровой зум может быть приемлемым
            вариантом.
        </div>
        <div class="image-container">
            <figure class="image-container__image">
                <button class="image-container__zoom-button" @click="zoonIn(1)">
                    +
                </button>
                <template v-for="buttonNum in zoomSteps">
                    <button
                        class="image-container__zoom-scale-button"
                        @click="zoomScale(buttonNum, $event, 1)"
                    ></button>
                </template>
                <button
                    class="image-container__zoom-button"
                    @click="zoomOut(1)"
                >
                    -
                </button>
                <img
                    :src="imageToggle(firstTargetNum, 1)"
                    class="image-container__photo"
                    alt="Photo"
                />
                <figcaption>
                    Фотографии, сделанные на Canon EOS 2000D при разной степени
                    приближения
                </figcaption>
            </figure>
        </div>
        <div class="image-container">
            <figure class="image-container__image">
                <button class="image-container__zoom-button" @click="zoonIn(2)">
                    +
                </button>
                <template v-for="buttonNum in zoomSteps">
                    <button
                        class="image-container__zoom-scale-button"
                        @click="zoomScale(buttonNum, $event, 2)"
                    ></button>
                </template>
                <button
                    class="image-container__zoom-button"
                    @click="zoomOut(2)"
                >
                    -
                </button>
                <img
                    :src="imageToggle(secondTargetNum, 2)"
                    class="image-container__photo"
                    alt="Photo"
                />
                <figcaption>
                    Фотографии, сделанные на Canon EOS 90D при разной степени
                    приближения
                </figcaption>
            </figure>
        </div>
        <div class="text-container">
            Как для Canon EOS 90D, так и для Canon EOS 2000D, работа зума
            осуществляется через объективы, которые вы подключаете к данным
            камерам. У обеих камер есть совместимость с широким спектром
            объективов Canon, включая зум-объективы различных фокусных
            расстояний. Оба этих фотоаппарата имеют оптический зум, что
            означает, что они могут изменять фокусное расстояние объектива для
            приближения или удаления объекта съемки без потери качества
            изображения. Оптический зум - это физическое перестроение линз
            внутри объектива для изменения масштаба. Чтобы использовать зум на
            Canon EOS 90D или Canon EOS 2000D, вам нужно установить или
            подключить совместимый объектив с переменным фокусным расстоянием.
            Обычно на объективе есть кольцо зума, которое можно повернуть в одну
            или другую сторону для увеличения или уменьшения масштаба
            изображения. Количество доступного зума зависит от объектива,
            который вы используете. Широта зума может варьироваться от объектива
            к объективу, и в документации к объективу указывается его оптический
            зум. Важно отметить, что зум-объектив - это отдельный компонент,
            который вы можете приобрести в соответствии с вашими потребностями
            фотосъемки. Обратитесь к документации камеры и объектива для
            получения дополнительной информации о работе зума на конкретных
            моделях Canon EOS 90D и Canon EOS 2000D.
        </div>
    </section>
</template>
