import layouts from './layouts';

const body = document.querySelector('body');
const createWrapper = () => {
  const wrapper = '<div class="wrapper"></div>';
  body.insertAdjacentHTML('afterbegin', wrapper);
};
const createTextarea = (lang) => {
  const wrapper = body.querySelector('.wrapper');
  const textarea = `
   <textarea
   name=""
   id=""
   cols="30"
   rows="10"
   class="textarea ${lang}"
   autofocus
   spellcheck="false"
   ></textarea>`;
  wrapper.insertAdjacentHTML('afterbegin', textarea);
};
const createKeyboard = (layout) => {
  const wrapper = body.querySelector('.wrapper');
  const keyboard = wrapper.querySelector('.keyboard');
  if (keyboard) wrapper.removeChild(keyboard);
  wrapper.insertAdjacentHTML('beforeend', layout);
};
const createDescription = () => {
  const description = `
   <div class="description">
   <p>Клавиатура создана в операционной системе Windows</p>
   <p>Для переключения языка используйте сочетание клавиш Ctrl + Alt</p>
   </div>`;
  const wrapper = body.querySelector('.wrapper');
  wrapper.insertAdjacentHTML('afterbegin', description);
};
createWrapper();
if (localStorage.layout) {
  createTextarea(`textarea--${localStorage.getItem('layout')}`);
  createKeyboard(layouts[localStorage.getItem('layout')]);
} else {
  localStorage.setItem('layout', 'en');
  createTextarea(`textarea--${localStorage.getItem('layout')}`);
  createKeyboard(layouts[localStorage.getItem('layout')]);
}
createDescription();

export default createKeyboard;
