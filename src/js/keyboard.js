import getElements from './elements';
import layouts from './layouts';
import createKeyboard from './createKeyboard';

let { keyboard, textarea, buttons } = getElements();

const addText = (text) => {
  const { value } = textarea;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = value.slice(0, start) + text + value.slice(end);
  textarea.selectionStart = start + 1;
  textarea.selectionEnd = start + 1;
};

const renderKeyboard = (layout) => {
  createKeyboard(layout);
  keyboard = document.querySelector('.keyboard');
  buttons = keyboard.querySelectorAll('.button');
  addClickListener(keyboard);
};

const addClickListener = (kb) => {
  kb.addEventListener('mousedown', (evt) => {
    buttons.forEach((button) => {
      if (evt.target.closest('.capslock') === button) {
        textarea.classList.toggle('textarea--caps');
        if (textarea.classList.contains('textarea--caps')) {
          if (textarea.classList.contains('textarea--ru')) {
            renderKeyboard(layouts.CapsRU);
          } else renderKeyboard(layouts.CapsEN);
        } else if (textarea.classList.contains('textarea--ru')) {
          renderKeyboard(layouts.ru);
        } else {
          renderKeyboard(layouts.en);
        }
      }
      if (evt.target.closest('.shift') === button) {
        if (textarea.classList.contains('textarea--ru')) {
          textarea.classList.contains('textarea--caps')
            ? renderKeyboard(layouts.CapsRUShift)
            : renderKeyboard(layouts.RU);
        } else {
          textarea.classList.contains('textarea--caps')
            ? renderKeyboard(layouts.CapsENShift)
            : renderKeyboard(layouts.EN);
        }
      }
      if (evt.target.closest('.backspace') === button) {
        const { value } = textarea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) {
          if (start > 0) {
            textarea.value = value.slice(0, start - 1) + value.slice(end);
            textarea.selectionStart = start - 1;
            textarea.selectionEnd = start - 1;
          }
        } else {
          textarea.value = value.slice(0, start) + value.slice(end);
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
      }
      if (evt.target.closest('.del') === button) {
        const { value } = textarea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value =
          start === end
            ? value.slice(0, start) + value.slice(end + 1)
            : value.slice(0, start) + value.slice(end);
        textarea.selectionStart = start;
        textarea.selectionEnd = start;
      }
      if (evt.target.closest('.enter') === button) addText('\n');
      if (evt.target.closest('.space') === button) addText(' ');
      if (evt.target.closest('.tab') === button) addText('\t');
      if (evt.target.closest('.common') === button) {
        addText(button.innerText);
      }
      if (evt.target.closest('.arrow') === button) addText(button.innerText);
    });
  });
  keyboard.addEventListener('mouseup', (evt) => {
    buttons.forEach((button) => {
      if (evt.target.closest('.shift') === button) {
        if (textarea.classList.contains('textarea--ru')) {
          textarea.classList.contains('textarea--caps')
            ? renderKeyboard(layouts.CapsRU)
            : renderKeyboard(layouts.ru);
        } else {
          textarea.classList.contains('textarea--caps')
            ? renderKeyboard(layouts.CapsEN)
            : renderKeyboard(layouts.en);
        }
      }
      textarea.focus();
    });
  });
};
addClickListener(keyboard);

const keydownHandler = (evt) => {
  textarea.focus();
  buttons.forEach((button) => {
    if (evt.code === button.id) button.classList.add('button--active');
  });
  if (evt.code === 'CapsLock') {
    textarea.classList.toggle('textarea--caps');
    if (textarea.classList.contains('textarea--caps')) {
      if (textarea.classList.contains('textarea--ru')) {
        renderKeyboard(layouts.CapsRU);
      } else renderKeyboard(layouts.CapsEN);
    } else if (textarea.classList.contains('textarea--ru')) {
      renderKeyboard(layouts.ru);
    } else {
      renderKeyboard(layouts.en);
    }
    window.removeEventListener('keydown', keydownHandler);
  }
  if (evt.key === 'Shift') {
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsRUShift)
        : renderKeyboard(layouts.RU);
    } else {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsENShift)
        : renderKeyboard(layouts.EN);
    }

    window.removeEventListener('keydown', keydownHandler);
    evt.code === 'ShiftLeft'
      ? keyboard.querySelector('#ShiftLeft').classList.add('button--active')
      : keyboard.querySelector('#ShiftRight').classList.add('button--active');
  }
  if (evt.key === 'Alt') {
    evt.preventDefault();
    evt.code === 'AltLeft'
      ? keyboard.querySelector('#AltLeft').classList.add('button--active')
      : keyboard.querySelector('#AltRight').classList.add('button--active');
  }
  if (evt.code === 'Tab') {
    evt.preventDefault();
    addText('\t');
  }
  if (evt.ctrlKey && evt.altKey) {
    textarea.classList.toggle('textarea--ru');
    textarea.classList.toggle('textarea--en');
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsRU)
        : renderKeyboard(layouts.ru);
      localStorage.setItem('layout', 'ru');
    } else {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsEN)
        : renderKeyboard(layouts.en);
      localStorage.setItem('layout', 'en');
    }
  }
};
const keyupHandler = (evt) => {
  buttons.forEach((button) => {
    if (evt.code === button.id && button.id !== 'CapsLock') {
      button.classList.remove('button--active');
    }
  });
  if (evt.key === 'Shift') {
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsRU)
        : renderKeyboard(layouts.ru);
    } else {
      textarea.classList.contains('textarea--caps')
        ? renderKeyboard(layouts.CapsEN)
        : renderKeyboard(layouts.en);
    }
  }
  window.addEventListener('keydown', keydownHandler);
};
const keypressHandler = (evt) => {
  evt.preventDefault();
  textarea.focus();
  buttons.forEach((button) => {
    if (evt.code === button.id) {
      if (button.id === 'Enter') addText('\n');
      else if (button.id === 'Space') addText(' ');
      else addText(button.innerText);
    }
  });
};
window.addEventListener('keydown', keydownHandler);

window.addEventListener('keyup', keyupHandler);

window.addEventListener('keypress', keypressHandler);
