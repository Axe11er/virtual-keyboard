const getElements = () => ({
  body: document.querySelector('body'),
  keyboard: document.querySelector('.keyboard'),
  textarea: document.querySelector('.textarea'),
  buttons: document.querySelectorAll('.button'),
});

export default getElements;
