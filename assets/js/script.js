const modal = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");



const openModal = document.querySelector(".open-modal1");
const openModal2 = document.querySelector(".open-modal2");
const openModal3 = document.querySelector(".open-modal3");
const openModal4 = document.querySelector(".open-modal4");

const closeModel1 = document.querySelector(".close-button");
const closeModel2 = document.querySelector(".close-button2");
const closeModel3 = document.querySelector(".close-button3");
const closeModel4 = document.querySelector(".close-button4");



// modal1 in açılış kapanış kodu
openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModel1.addEventListener('click', () => {
    modal.close();
})

// modal2 nin açılış kapanışu
openModal2.addEventListener('click', () => {
    modal2.showModal();
})
closeModel2.addEventListener('click', () => {
    modal2.close();
})

// modal3 ün acılış kapanışu
openModal3.addEventListener('click', () => {
    modal3.showModal();
})
closeModel3.addEventListener('click', () => {
    modal3.close();
})

// modal4 ün açılış kapanışı
openModal4.addEventListener('click', () => {
    modal4.showModal();
})
closeModel4.addEventListener('click', () => {
    modal4.close();
})