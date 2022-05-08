const layouts = {
  en: `
   <div class="keyboard">
      <div class="row row-1">
         <button class="button common" id="Backquote">\`</button
         ><button class="button common" id="Digit1">1</button
         ><button class="button common" id="Digit2">2</button
         ><button class="button common" id="Digit3">3</button
         ><button class="button common" id="Digit4">4</button
         ><button class="button common" id="Digit5">5</button
         ><button class="button common" id="Digit6">6</button
         ><button class="button common" id="Digit7">7</button
         ><button class="button common" id="Digit8">8</button
         ><button class="button common" id="Digit9">9</button
         ><button class="button common" id="Digit0">0</button
         ><button class="button common" id="Minus">-</button
         ><button class="button common" id="Equal">=</button
         ><button class="button backspace" id="Backspace">Backspace</button>
      </div>
      <div class="row row-2">
         <button class="button tab" id="Tab">Tab</button
         ><button class="button common" id="KeyQ">q</button
         ><button class="button common" id="KeyW">w</button
         ><button class="button common" id="KeyE">e</button
         ><button class="button common" id="KeyR">r</button
         ><button class="button common" id="KeyT">t</button
         ><button class="button common" id="KeyY">y</button
         ><button class="button common" id="KeyU">u</button
         ><button class="button common" id="KeyI">i</button
         ><button class="button common" id="KeyO">o</button
         ><button class="button common" id="KeyP">p</button
         ><button class="button common" id="BracketLeft">[</button
         ><button class="button common" id="BracketRight">]</button
         ><button class="button common" id="Backslash">\\</button
         ><button class="button del" id="Delete">Del</button>
      </div>
      <div class="row row-3">
         <button class="button capslock" id="CapsLock">CapsLock</button
         ><button class="button common" id="KeyA">a</button
         ><button class="button common" id="KeyS">s</button
         ><button class="button common" id="KeyD">d</button
         ><button class="button common" id="KeyF">f</button
         ><button class="button common" id="KeyG">g</button
         ><button class="button common" id="KeyH">h</button
         ><button class="button common" id="KeyJ">j</button
         ><button class="button common" id="KeyK">k</button
         ><button class="button common" id="KeyL">l</button
         ><button class="button common" id="Semicolon">;</button
         ><button class="button common" id="Quote">'</button
         ><button class="button enter" id="Enter">Enter</button>
      </div>
      <div class="row row-4">
         <button class="button shift" id="ShiftLeft">Shift</button
         ><button class="button common" id="KeyZ">z</button
         ><button class="button common" id="KeyX">x</button
         ><button class="button common" id="KeyC">c</button
         ><button class="button common" id="KeyV">v</button
         ><button class="button common" id="KeyB">b</button
         ><button class="button common" id="KeyN">n</button
         ><button class="button common" id="KeyM">m</button
         ><button class="button common" id="Comma">,</button
         ><button class="button common" id="Period">.</button
         ><button class="button common" id="Slash">/</button
         ><button class="button arrow arrow--up" id="ArrowUp">▲</button
         ><button class="button shift" id="ShiftRight">Shift</button>
      </div>
      <div class="row row-5">
         <button class="button ctrl" id="ControlLeft">Ctrl</button
         ><button class="button win" id="MetaLeft">Win</button
         ><button class="button alt" id="AltLeft">Alt</button
         ><button class="button space" id="Space"> </button
         ><button class="button alt" id="AltRight">Alt</button
         ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
         ><button class="button arrow arrow--down" id="ArrowDown">▼</button
         ><button class="button arrow arrow--right" id="ArrowRight">►</button
         ><button class="button ctrl" id="ControlRight">Ctrl</button>
      </div>
   </div>
`,
  ru: `
      <div class="keyboard">
         <div class="row row-1">
            <button class="button common" id="Backquote">ё</button
            ><button class="button common" id="Digit1">1</button
            ><button class="button common" id="Digit2">2</button
            ><button class="button common" id="Digit3">3</button
            ><button class="button common" id="Digit4">4</button
            ><button class="button common" id="Digit5">5</button
            ><button class="button common" id="Digit6">6</button
            ><button class="button common" id="Digit7">7</button
            ><button class="button common" id="Digit8">8</button
            ><button class="button common" id="Digit9">9</button
            ><button class="button common" id="Digit0">0</button
            ><button class="button common" id="Minus">-</button
            ><button class="button common" id="Equal">=</button
            ><button class="button backspace" id="Backspace">Backspace</button>
         </div>
         <div class="row row-2">
            <button class="button tab" id="Tab">Tab</button
            ><button class="button common" id="KeyQ">й</button
            ><button class="button common" id="KeyW">ц</button
            ><button class="button common" id="KeyE">у</button
            ><button class="button common" id="KeyR">к</button
            ><button class="button common" id="KeyT">е</button
            ><button class="button common" id="KeyY">н</button
            ><button class="button common" id="KeyU">г</button
            ><button class="button common" id="KeyI">ш</button
            ><button class="button common" id="KeyO">щ</button
            ><button class="button common" id="KeyP">з</button
            ><button class="button common" id="BracketLeft">х</button
            ><button class="button common" id="BracketRight">ъ</button
            ><button class="button common" id="Backslash">\\</button
            ><button class="button del" id="Delete">Del</button>
         </div>
         <div class="row row-3">
            <button class="button capslock" id="CapsLock">CapsLock</button
            ><button class="button common" id="KeyA">ф</button
            ><button class="button common" id="KeyS">ы</button
            ><button class="button common" id="KeyD">в</button
            ><button class="button common" id="KeyF">а</button
            ><button class="button common" id="KeyG">п</button
            ><button class="button common" id="KeyH">р</button
            ><button class="button common" id="KeyJ">о</button
            ><button class="button common" id="KeyK">л</button
            ><button class="button common" id="KeyL">д</button
            ><button class="button common" id="Semicolon">ж</button
            ><button class="button common" id="Quote">э</button
            ><button class="button enter" id="Enter">Enter</button>
         </div>
         <div class="row row-4">
            <button class="button shift" id="ShiftLeft">Shift</button
            ><button class="button common" id="KeyZ">я</button
            ><button class="button common" id="KeyX">ч</button
            ><button class="button common" id="KeyC">с</button
            ><button class="button common" id="KeyV">м</button
            ><button class="button common" id="KeyB">и</button
            ><button class="button common" id="KeyN">т</button
            ><button class="button common" id="KeyM">ь</button
            ><button class="button common" id="Comma">б</button
            ><button class="button common" id="Period">ю</button
            ><button class="button common" id="Slash">.</button
            ><button class="button arrow arrow--up" id="ArrowUp">▲</button
            ><button class="button shift" id="ShiftRight">Shift</button>
         </div>
         <div class="row row-5">
            <button class="button ctrl" id="ControlLeft">Ctrl</button
            ><button class="button win" id="MetaLeft">Win</button
            ><button class="button alt" id="AltLeft">Alt</button
            ><button class="button space" id="Space"> </button
            ><button class="button alt" id="AltRight">Alt</button
            ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
            ><button class="button arrow arrow--down" id="ArrowDown">▼</button
            ><button class="button arrow arrow--right" id="ArrowRight">►</button
            ><button class="button ctrl" id="ControlRight">Ctrl</button>
         </div>
      </div>
   `,
  EN: `
      <div class="keyboard">
         <div class="row row-1">
            <button class="button common" id="Backquote">~</button
            ><button class="button common" id="Digit1">!</button
            ><button class="button common" id="Digit2">@</button
            ><button class="button common" id="Digit3">#</button
            ><button class="button common" id="Digit4">$</button
            ><button class="button common" id="Digit5">%</button
            ><button class="button common" id="Digit6">^</button
            ><button class="button common" id="Digit7">&</button
            ><button class="button common" id="Digit8">*</button
            ><button class="button common" id="Digit9">(</button
            ><button class="button common" id="Digit0">)</button
            ><button class="button common" id="Minus">_</button
            ><button class="button common" id="Equal">+</button
            ><button class="button backspace" id="Backspace">Backspace</button>
         </div>
         <div class="row row-2">
            <button class="button tab" id="Tab">Tab</button
            ><button class="button common" id="KeyQ">Q</button
            ><button class="button common" id="KeyW">W</button
            ><button class="button common" id="KeyE">E</button
            ><button class="button common" id="KeyR">R</button
            ><button class="button common" id="KeyT">T</button
            ><button class="button common" id="KeyY">Y</button
            ><button class="button common" id="KeyU">U</button
            ><button class="button common" id="KeyI">I</button
            ><button class="button common" id="KeyO">O</button
            ><button class="button common" id="KeyP">P</button
            ><button class="button common" id="BracketLeft">{</button
            ><button class="button common" id="BracketRight">}</button
            ><button class="button common" id="Backslash">|</button
            ><button class="button del" id="Delete">Del</button>
         </div>
         <div class="row row-3">
            <button class="button capslock id="CapsLock"">CapsLock</button
            ><button class="button common" id="KeyA">A</button
            ><button class="button common" id="KeyS">S</button
            ><button class="button common" id="KeyD">D</button
            ><button class="button common" id="KeyF">F</button
            ><button class="button common" id="KeyG">G</button
            ><button class="button common" id="KeyH">H</button
            ><button class="button common" id="KeyJ">J</button
            ><button class="button common" id="KeyK">K</button
            ><button class="button common" id="KeyL">L</button
            ><button class="button common" id="Semicolon">:</button
            ><button class="button common" id="Quote">"</button
            ><button class="button enter" id="Enter">Enter</button>
         </div>
         <div class="row row-4">
            <button class="button shift" id="ShiftLeft">Shift</button
            ><button class="button common" id="KeyZ">Z</button
            ><button class="button common" id="KeyX">X</button
            ><button class="button common" id="KeyC">C</button
            ><button class="button common" id="KeyV">V</button
            ><button class="button common" id="KeyB">B</button
            ><button class="button common" id="KeyN">N</button
            ><button class="button common" id="KeyM">M</button
            ><button class="button common" id="Comma"><</button
            ><button class="button common" id="Period">></button
            ><button class="button common" id="Slash">?</button
            ><button class="button arrow arrow--up" id="ArrowUp">▲</button
            ><button class="button shift" id="ShiftRight">Shift</button>
         </div>
         <div class="row row-5">
            <button class="button ctrl" id="ControlLeft">Ctrl</button
            ><button class="button win" id="MetaLeft">Win</button
            ><button class="button alt" id="AltLeft">Alt</button
            ><button class="button space" id="Space"> </button
            ><button class="button alt" id="AltRight">Alt</button
            ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
            ><button class="button arrow arrow--down" id="ArrowDown">▼</button
            ><button class="button arrow arrow--right" id="ArrowRight">►</button
            ><button class="button ctrl" id="ControlRight">Ctrl</button>
         </div>
      </div>
   `,
  RU: `
      <div class="keyboard">
         <div class="row row-1">
            <button class="button common" id="Backquote">Ё</button
            ><button class="button common" id="Digit1">!</button
            ><button class="button common" id="Digit2">"</button
            ><button class="button common" id="Digit3">№</button
            ><button class="button common" id="Digit4">;</button
            ><button class="button common" id="Digit5">%</button
            ><button class="button common" id="Digit6">:</button
            ><button class="button common" id="Digit7">?</button
            ><button class="button common" id="Digit8">*</button
            ><button class="button common" id="Digit9">(</button
            ><button class="button common" id="Digit0">)</button
            ><button class="button common" id="Minus">_</button
            ><button class="button common" id="Equal">+</button
            ><button class="button backspace" id="Backspace">Backspace</button>
         </div>
         <div class="row row-2">
            <button class="button tab" id="Tab">Tab</button
            ><button class="button common" id="KeyQ">Й</button
            ><button class="button common" id="KeyW">Ц</button
            ><button class="button common" id="KeyE">У</button
            ><button class="button common" id="KeyR">К</button
            ><button class="button common" id="KeyT">Е</button
            ><button class="button common" id="KeyY">Н</button
            ><button class="button common" id="KeyU">Г</button
            ><button class="button common" id="KeyI">Ш</button
            ><button class="button common" id="KeyO">Щ</button
            ><button class="button common" id="KeyP">З</button
            ><button class="button common" id="BracketLeft">Х</button
            ><button class="button common" id="BracketRight">Ъ</button
            ><button class="button common" id="Backslash">/</button
            ><button class="button del" id="Delete">Del</button>
         </div>
         <div class="row row-3">
            <button class="button capslock" id="CapsLock">CapsLock</button
            ><button class="button common" id="KeyA">Ф</button
            ><button class="button common" id="KeyS">Ы</button
            ><button class="button common" id="KeyD">В</button
            ><button class="button common" id="KeyF">А</button
            ><button class="button common" id="KeyG">П</button
            ><button class="button common" id="KeyH">Р</button
            ><button class="button common" id="KeyJ">О</button
            ><button class="button common" id="KeyK">Л</button
            ><button class="button common" id="KeyL">Д</button
            ><button class="button common" id="Semicolon">Ж</button
            ><button class="button common" id="Quote">Э</button
            ><button class="button enter" id="Enter">Enter</button>
         </div>
         <div class="row row-4">
            <button class="button shift" id="ShiftLeft">Shift</button
            ><button class="button common" id="KeyZ">Я</button
            ><button class="button common" id="KeyX">Ч</button
            ><button class="button common" id="KeyC">С</button
            ><button class="button common" id="KeyV">М</button
            ><button class="button common" id="KeyB">И</button
            ><button class="button common" id="KeyN">Т</button
            ><button class="button common" id="KeyM">Ь</button
            ><button class="button common" id="Comma">Б</button
            ><button class="button common" id="Period">Ю</button
            ><button class="button common" id="Slash">.</button
            ><button class="button arrow arrow--up" id="ArrowUp">▲</button
            ><button class="button shift" id="ShiftRight">Shift</button>
         </div>
         <div class="row row-5">
            <button class="button ctrl" id="ControlLeft">Ctrl</button
            ><button class="button win" id="MetaLeft">Win</button
            ><button class="button alt" id="AltLeft">Alt</button
            ><button class="button space" id="Space"> </button
            ><button class="button alt" id="AllRight">Alt</button
            ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
            ><button class="button arrow arrow--down id="ArrowDown"">▼</button
            ><button class="button arrow arrow--right id="ArrowRight"">►</button
            ><button class="button ctrl id="ControlRight"">Ctrl</button>
         </div>
      </div>
   `,
  CapsEN: `
   <div class="keyboard">
      <div class="row row-1">
         <button class="button common" id="Backquote">\`</button
         ><button class="button common" id="Digit1">1</button
         ><button class="button common" id="Digit2">2</button
         ><button class="button common" id="Digit3">3</button
         ><button class="button common" id="Digit4">4</button
         ><button class="button common" id="Digit5">5</button
         ><button class="button common" id="Digit6">6</button
         ><button class="button common" id="Digit7">7</button
         ><button class="button common" id="Digit8">8</button
         ><button class="button common" id="Digit9">9</button
         ><button class="button common" id="Digit0">0</button
         ><button class="button common" id="Minus">-</button
         ><button class="button common" id="Equal">=</button
         ><button class="button backspace" id="Backspace">Backspace</button>
      </div>
      <div class="row row-2">
         <button class="button tab" id="Tab">Tab</button
         ><button class="button common" id="KeyQ">Q</button
         ><button class="button common" id="KeyW">W</button
         ><button class="button common" id="KeyE">E</button
         ><button class="button common" id="KeyR">R</button
         ><button class="button common" id="KeyT">T</button
         ><button class="button common" id="KeyY">Y</button
         ><button class="button common" id="KeyU">U</button
         ><button class="button common" id="KeyI">I</button
         ><button class="button common" id="KeyO">O</button
         ><button class="button common" id="KeyP">P</button
         ><button class="button common" id="BracketLeft">[</button
         ><button class="button common" id="BracketRight">]</button
         ><button class="button common" id="Backslash">\\</button
         ><button class="button del" id="Delete">Del</button>
      </div>
      <div class="row row-3">
         <button class="button capslock button--active" id="CapsLock">CapsLock</button
         ><button class="button common" id="KeyA">A</button
         ><button class="button common" id="KeyS">S</button
         ><button class="button common" id="KeyD">D</button
         ><button class="button common" id="KeyF">F</button
         ><button class="button common" id="KeyG">G</button
         ><button class="button common" id="KeyH">H</button
         ><button class="button common" id="KeyJ">J</button
         ><button class="button common" id="KeyK">K</button
         ><button class="button common" id="KeyL">L</button
         ><button class="button common" id="Semicolon">;</button
         ><button class="button common" id="Quote">'</button
         ><button class="button enter" id="Enter">Enter</button>
      </div>
      <div class="row row-4">
         <button class="button shift" id="ShiftLeft">Shift</button
         ><button class="button common" id="KeyZ">Z</button
         ><button class="button common" id="KeyX">X</button
         ><button class="button common" id="KeyC">C</button
         ><button class="button common" id="KeyV">V</button
         ><button class="button common" id="KeyB">B</button
         ><button class="button common" id="KeyN">N</button
         ><button class="button common" id="KeyM">M</button
         ><button class="button common" id="Comma">,</button
         ><button class="button common" id="Period">.</button
         ><button class="button common" id="Slash">/</button
         ><button class="button arrow arrow--up" id="ArrowUp">▲</button
         ><button class="button shift" id="ShiftRight">Shift</button>
      </div>
      <div class="row row-5">
         <button class="button ctrl" id="ControlLeft">Ctrl</button
         ><button class="button win" id="MetaLeft">Win</button
         ><button class="button alt" id="AltLeft">Alt</button
         ><button class="button space" id="Space"> </button
         ><button class="button alt" id="AltRight">Alt</button
         ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
         ><button class="button arrow arrow--down" id="ArrowDown">▼</button
         ><button class="button arrow arrow--right" id="ArrowRight">►</button
         ><button class="button ctrl" id="ControlRight">Ctrl</button>
      </div>
   </div>
`,
  CapsRU: `
      <div class="keyboard">
         <div class="row row-1">
            <button class="button common" id="Backquote">Ё</button
            ><button class="button common" id="Digit1">1</button
            ><button class="button common" id="Digit2">2</button
            ><button class="button common" id="Digit3">3</button
            ><button class="button common" id="Digit4">4</button
            ><button class="button common" id="Digit5">5</button
            ><button class="button common" id="Digit6">6</button
            ><button class="button common" id="Digit7">7</button
            ><button class="button common" id="Digit8">8</button
            ><button class="button common" id="Digit9">9</button
            ><button class="button common" id="Digit0">0</button
            ><button class="button common" id="Minus">-</button
            ><button class="button common" id="Equal">=</button
            ><button class="button backspace" id="Backspace">Backspace</button>
         </div>
         <div class="row row-2">
            <button class="button tab" id="Tab">Tab</button
            ><button class="button common" id="KeyQ">Й</button
            ><button class="button common" id="KeyW">Ц</button
            ><button class="button common" id="KeyE">У</button
            ><button class="button common" id="KeyR">К</button
            ><button class="button common" id="KeyT">Е</button
            ><button class="button common" id="KeyY">Н</button
            ><button class="button common" id="KeyU">Г</button
            ><button class="button common" id="KeyI">Ш</button
            ><button class="button common" id="KeyO">Щ</button
            ><button class="button common" id="KeyP">З</button
            ><button class="button common" id="BracketLeft">Х</button
            ><button class="button common" id="BracketRight">Ъ</button
            ><button class="button common" id="Backslash">\\</button
            ><button class="button del" id="Delete">Del</button>
         </div>
         <div class="row row-3">
            <button class="button capslock button--active" id="CapsLock">CapsLock</button
            ><button class="button common" id="KeyA">Ф</button
            ><button class="button common" id="KeyS">Ы</button
            ><button class="button common" id="KeyD">В</button
            ><button class="button common" id="KeyF">А</button
            ><button class="button common" id="KeyG">П</button
            ><button class="button common" id="KeyH">Р</button
            ><button class="button common" id="KeyJ">О</button
            ><button class="button common" id="KeyK">Л</button
            ><button class="button common" id="KeyL">Д</button
            ><button class="button common" id="Semicolon">Ж</button
            ><button class="button common" id="Quote">Э</button
            ><button class="button enter" id="Enter">Enter</button>
         </div>
         <div class="row row-4">
            <button class="button shift" id="ShiftLeft">Shift</button
            ><button class="button common" id="KeyZ">Я</button
            ><button class="button common" id="KeyX">Ч</button
            ><button class="button common" id="KeyC">С</button
            ><button class="button common" id="KeyV">М</button
            ><button class="button common" id="KeyB">И</button
            ><button class="button common" id="KeyN">Т</button
            ><button class="button common" id="KeyM">Ь</button
            ><button class="button common" id="Comma">Б</button
            ><button class="button common" id="Period">Ю</button
            ><button class="button common" id="Slash">.</button
            ><button class="button arrow arrow--up" id="ArrowUp">▲</button
            ><button class="button shift" id="ShiftRight">Shift</button>
         </div>
         <div class="row row-5">
            <button class="button ctrl" id="ControlLeft">Ctrl</button
            ><button class="button win" id="MetaLeft">Win</button
            ><button class="button alt" id="AltLeft">Alt</button
            ><button class="button space" id="Space"> </button
            ><button class="button alt" id="AltRight">Alt</button
            ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
            ><button class="button arrow arrow--down" id="ArrowDown">▼</button
            ><button class="button arrow arrow--right" id="ArrowRight">►</button
            ><button class="button ctrl" id="ControlRight">Ctrl</button>
         </div>
      </div>
   `,
  CapsENShift: `
   <div class="keyboard">
      <div class="row row-1">
         <button class="button common" id="Backquote">~</button
         ><button class="button common" id="Digit1">!</button
         ><button class="button common" id="Digit2">@</button
         ><button class="button common" id="Digit3">#</button
         ><button class="button common" id="Digit4">$</button
         ><button class="button common" id="Digit5">%</button
         ><button class="button common" id="Digit6">^</button
         ><button class="button common" id="Digit7">&</button
         ><button class="button common" id="Digit8">*</button
         ><button class="button common" id="Digit9">(</button
         ><button class="button common" id="Digit0">)</button
         ><button class="button common" id="Minus">_</button
         ><button class="button common" id="Equal">+</button
         ><button class="button backspace" id="Backspace">Backspace</button>
      </div>
      <div class="row row-2">
         <button class="button tab" id="Tab">Tab</button
         ><button class="button common" id="KeyQ">q</button
         ><button class="button common" id="KeyW">w</button
         ><button class="button common" id="KeyE">e</button
         ><button class="button common" id="KeyR">r</button
         ><button class="button common" id="KeyT">t</button
         ><button class="button common" id="KeyY">y</button
         ><button class="button common" id="KeyU">u</button
         ><button class="button common" id="KeyI">i</button
         ><button class="button common" id="KeyO">o</button
         ><button class="button common" id="KeyP">p</button
         ><button class="button common" id="BracketLeft">{</button
         ><button class="button common" id="BracketRight">}</button
         ><button class="button common" id="Backslash">|</button
         ><button class="button del" id="Delete">Del</button>
      </div>
      <div class="row row-3">
         <button class="button capslock button--active" id="CapsLock">CapsLock</button
         ><button class="button common" id="KeyA">a</button
         ><button class="button common" id="KeyS">s</button
         ><button class="button common" id="KeyD">d</button
         ><button class="button common" id="KeyF">f</button
         ><button class="button common" id="KeyG">g</button
         ><button class="button common" id="KeyH">h</button
         ><button class="button common" id="KeyJ">j</button
         ><button class="button common" id="KeyK">k</button
         ><button class="button common" id="KeyL">l</button
         ><button class="button common" id="Semicolon">:</button
         ><button class="button common" id="Quote">"</button
         ><button class="button enter" id="Enter">Enter</button>
      </div>
      <div class="row row-4">
         <button class="button shift" id="ShiftLeft">Shift</button
         ><button class="button common" id="KeyZ">z</button
         ><button class="button common" id="KeyX">x</button
         ><button class="button common" id="KeyC">c</button
         ><button class="button common" id="KeyV">v</button
         ><button class="button common" id="KeyB">b</button
         ><button class="button common" id="KeyN">n</button
         ><button class="button common" id="KeyM">m</button
         ><button class="button common" id="Comma"><</button
         ><button class="button common" id="Period">></button
         ><button class="button common" id="Slash">?</button
         ><button class="button arrow arrow--up" id="ArrowUp">▲</button
         ><button class="button shift" id="ShiftRight">Shift</button>
      </div>
      <div class="row row-5">
         <button class="button ctrl" id="ControlLeft">Ctrl</button
         ><button class="button win" id="MetaLeft">Win</button
         ><button class="button alt" id="AltLeft">Alt</button
         ><button class="button space" id="Space"> </button
         ><button class="button alt" id="AltRight">Alt</button
         ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
         ><button class="button arrow arrow--down" id="ArrowDown">▼</button
         ><button class="button arrow arrow--right" id="ArrowRight">►</button
         ><button class="button ctrl" id="ControlRight">Ctrl</button>
      </div>
   </div>
`,
  CapsRUShift: `
      <div class="keyboard">
         <div class="row row-1">
            <button class="button common" id="Backquote">ё</button
            ><button class="button common" id="Digit1">!</button
            ><button class="button common" id="Digit2">"</button
            ><button class="button common" id="Digit3">№</button
            ><button class="button common" id="Digit4">;</button
            ><button class="button common" id="Digit5">%</button
            ><button class="button common" id="Digit6">:</button
            ><button class="button common" id="Digit7">?</button
            ><button class="button common" id="Digit8">*</button
            ><button class="button common" id="Digit9">(</button
            ><button class="button common" id="Digit0">)</button
            ><button class="button common" id="Minus">_</button
            ><button class="button common" id="Equal">+</button
            ><button class="button backspace" id="Backspace">Backspace</button>
         </div>
         <div class="row row-2">
            <button class="button tab" id="Tab">Tab</button
            ><button class="button common" id="KeyQ">й</button
            ><button class="button common" id="KeyW">ц</button
            ><button class="button common" id="KeyE">у</button
            ><button class="button common" id="KeyR">к</button
            ><button class="button common" id="KeyT">е</button
            ><button class="button common" id="KeyY">н</button
            ><button class="button common" id="KeyU">г</button
            ><button class="button common" id="KeyI">ш</button
            ><button class="button common" id="KeyO">щ</button
            ><button class="button common" id="KeyP">з</button
            ><button class="button common" id="BracketLeft">х</button
            ><button class="button common" id="BracketRight">ъ</button
            ><button class="button common" id="Backslash">/</button
            ><button class="button del" id="Delete">Del</button>
         </div>
         <div class="row row-3">
            <button class="button capslock button--active" id="CapsLock">CapsLock</button
            ><button class="button common" id="KeyA">ф</button
            ><button class="button common" id="KeyS">ы</button
            ><button class="button common" id="KeyD">в</button
            ><button class="button common" id="KeyF">а</button
            ><button class="button common" id="KeyG">п</button
            ><button class="button common" id="KeyH">р</button
            ><button class="button common" id="KeyJ">о</button
            ><button class="button common" id="KeyK">л</button
            ><button class="button common" id="KeyL">д</button
            ><button class="button common" id="Semicolon">ж</button
            ><button class="button common" id="Quote">э</button
            ><button class="button enter" id="Enter">Enter</button>
         </div>
         <div class="row row-4">
            <button class="button shift" id="ShiftLeft">Shift</button
            ><button class="button common" id="KeyZ">я</button
            ><button class="button common" id="KeyX">ч</button
            ><button class="button common" id="KeyC">с</button
            ><button class="button common" id="KeyV">м</button
            ><button class="button common" id="KeyB">и</button
            ><button class="button common" id="KeyN">т</button
            ><button class="button common" id="KeyM">ь</button
            ><button class="button common" id="Comma">б</button
            ><button class="button common" id="Period">ю</button
            ><button class="button common" id="Slash">,</button
            ><button class="button arrow arrow--up" id="ArrowUp">▲</button
            ><button class="button shift" id="ShiftRight">Shift</button>
         </div>
         <div class="row row-5">
            <button class="button ctrl" id="ControlLeft">Ctrl</button
            ><button class="button win" id="MetaLeft">Win</button
            ><button class="button alt" id="AltLeft">Alt</button
            ><button class="button space" id="Space"> </button
            ><button class="button alt" id="AltRight">Alt</button
            ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
            ><button class="button arrow arrow--down" id="ArrowDown">▼</button
            ><button class="button arrow arrow--right" id="ArrowRight">►</button
            ><button class="button ctrl" id="ControlRight">Ctrl</button>
         </div>
      </div>
   `,
};

export default layouts;
