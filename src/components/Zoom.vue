<script setup>
import { ref, onMounted } from 'vue';

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
        console.log(firstTargetNum.value);
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
            console.log(secondTargetNum.value);
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
            console.log(secondTargetNum.value);
        }
    }
}

function imageToggle(num, cont) {
    if (cont === 1) {
        switch (num) {
            case 1:
                return 'https://goo.su/nZ74';
            case 2:
                return 'https://clck.ru/35MQpy';
            case 3:
                return 'https://di1w2o32ai2v6.cloudfront.net/images/detailed/5/2022_iem7-n0.jpg?t=1648174681';
            case 4:
                return 'https://clck.ru/35MQtw';
            case 5:
                return 'https://clck.ru/35MQsi';
            case 6:
                return 'https://clck.ru/35LbaR';
        }
    }
    if (cont === 2) {
        switch (num) {
            case 7:
                return 'https://goo.su/nZ74';
            case 8:
                return 'https://clck.ru/35MQpy';
            case 9:
                return 'https://di1w2o32ai2v6.cloudfront.net/images/detailed/5/2022_iem7-n0.jpg?t=1648174681';
            case 10:
                return 'https://clck.ru/35MQtw';
            case 11:
                return 'https://clck.ru/35MQsi';
            case 12:
                return 'https://clck.ru/35LbaR';
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
});
</script>

<template>
    <section class="zoom">
        <h5 class="review-title" id="zoom">Пример работы зума</h5>
        <div class="text-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic
            neque rerum voluptates accusamus animi? Libero provident maiores
            ducimus quaerat voluptatum eaque dignissimos corporis deserunt
            cumque. A aspernatur vitae eos?
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
                <img :src="imageToggle(firstTargetNum, 1)" alt="Photo" />
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
                <img :src="imageToggle(secondTargetNum, 2)" alt="Photo" />
                <figcaption>
                    Фотографии, сделанные на Canon EOS 90D при разной степени
                    приближения
                </figcaption>
            </figure>
        </div>
        <div class="text-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic
            neque rerum voluptates accusamus animi? Libero provident maiores
            ducimus quaerat voluptatum eaque dignissimos corporis deserunt
            cumque. A aspernatur vitae eos?
        </div>
    </section>
</template>
