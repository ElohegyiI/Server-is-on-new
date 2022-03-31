function loadEvent() {

const rootElement = document.getElementById('root');

const htmlElement = `<h1>Hello World! It's Codecool!</h1>`


rootElement.insertAdjacentHTML('beforeend', htmlElement);




}window.addEventListener('load', loadEvent)