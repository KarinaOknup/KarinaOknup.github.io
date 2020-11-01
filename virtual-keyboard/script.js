const textArea = document.querySelector('.use-keyboard-input');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const Keyboard = {
    elements: {
        main: null,
        keyContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        caretStart: 0,
        caretEnd: 0,
        capsLock: false,
        shift: false,
        lang: 'en',
        mic: false,
        rec: new SpeechRecognition(),
    },

    init() {
        //Create main elements
        this.elements.main = document.createElement('div');
        this.elements.keyContainer = document.createElement('div');

        //setup
        this.elements.main.classList.add('keyboard', 'keyboard--hidden');
        this.elements.keyContainer.classList.add('keyboard__keys');
        this.elements.keyContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');

        //add to DOM

        this.elements.main.appendChild(this.elements.keyContainer);
        document.body.appendChild(this.elements.main);

        this.properties.rec.lang = this.properties.lang === 'en' ? 'en-Us' : 'ru-RU';
        this.properties.rec.interimResults = false;

        textArea.addEventListener('focus', () => {
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
                textArea.selectionStart = this.properties.caretStart;
                textArea.selectionEnd = this.properties.caretEnd;
                textArea.focus();
            });
        });

        document.addEventListener('keyup', (event) => {

            const code = event.code.toLowerCase();
            const key = event.key.toLowerCase();
            switch (key) {
                case 'backspace':
                case 'space':
                case 'enter':
                case 'arrowleft':
                case 'arrowright':
                case 'shift':
                case 'capslock':
                    document.getElementById(key).classList.add('active-press');
                    document.getElementById(key).click();
                    break;
                default:
                    break;
            }
            Keyboard.elements.keys.forEach(element => {
                if (element.textContent === event.key) {
                    element.classList.add('active-press');
                    element.click();
                }
            }, false);


            Keyboard.elements.keys.forEach(element => {
                setTimeout(() => {
                    element.classList.remove('active-press')
                }, 500);
            });
        });

        textArea.addEventListener('click', () => {
            this.properties.caretStart = textArea.selectionStart;
            this.properties.caretEnd = textArea.selectionEnd;
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "caps", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
            "shift", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
            "done", "en", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
            "=)", "arrow back", "space", "arrow forward", "mic"
        ];
        const keyLayoutRu = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "caps", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
            "shift", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "done", "ru", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
            "=)", "arrow back", "space", "arrow forward", "mic"
        ];
        const keyLayoutShift = [
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "backspace",
            "caps", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|",
            "shift", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", '"', "enter",
            "done", "en", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?",
            "=)", "arrow back", "space", "arrow forward", "mic"
        ];
        const keyLayoutRuShift = [
            "ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "backspace",
            "caps", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/",
            "shift", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "done", "ru", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",",
            "=)", "arrow back", "space", "arrow forward", "mic"
        ];

        let mainLayout;
        let breakLayout;

        if (this.properties.lang === 'en') {
            if (this.properties.shift) {
                mainLayout = keyLayoutShift;
                breakLayout = ['backspace', '|', 'enter', '?'];
            } else {
                mainLayout = keyLayout;
                breakLayout = ['backspace', '\\', 'enter', '/'];
            }
        } else {
            if (this.properties.shift) {
                mainLayout = keyLayoutRuShift;
                breakLayout = ['backspace', '/', 'enter', ','];
            } else {
                mainLayout = keyLayoutRu;
                breakLayout = ['backspace', '\\', 'enter', '.'];
            }
        }

        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        mainLayout.forEach(key => {
            const keyElement = document.createElement('button');
            const insertLineBreak = breakLayout.indexOf(key) !== -1;

            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');

            switch (key) {
                case '=)':{
                  keyElement.classList.add('empty');
                }
                case 'backspace': {
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerHTML = createIconHTML('backspace');
                    keyElement.setAttribute('id', 'backspace');

                    keyElement.addEventListener('click', () => {
                  
                        if (this.properties.caretStart === this.properties.value.length) {
                            this.properties.value = this.properties.value.substr(0, this.properties.value.length - 1);
                            this.properties.caretStart = this.properties.caretStart === 0 ? 0 : this.properties.caretStart - 1;
                            this.properties.caretEnd = this.properties.caretStart;
                            this._triggerEvent('oninput');
                        } else {
                            this.properties.value = this.properties.value.substr(0, this.properties.caretStart - 1) +
                            this.properties.value.substr(this.properties.caretEnd, this.properties.value.length);
                            this.properties.caretStart = this.properties.caretStart === 0 ? 0 : this.properties.caretStart - 1;
                            this.properties.caretEnd = this.properties.caretStart;
                            this._triggerEvent('oninput');
                        }



                    });

                    break;
                }
                case 'caps': {
                     keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
                    keyElement.setAttribute('id', 'capslock');
                    keyElement.innerHTML = createIconHTML('keyboard_capslock');

                    keyElement.addEventListener('click', () => {
                        
                        this._toggleCapsLock();
                        keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
                    });

                    break;
                }
                case 'shift': {
                    if (this.properties.shift) {
                        keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable', 'keyboard__key--active');
                    } else {
                        keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
                    }
                    keyElement.innerHTML = createIconHTML('input');
                    keyElement.setAttribute('id', 'shift');

                    keyElement.addEventListener('click', () => {   
                        keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
                        
                        this._toggleShift();
                    });

                    break;
                }
                case 'enter': {
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerHTML = createIconHTML('keyboard_return');
                    keyElement.setAttribute('id', 'enter');
                    keyElement.addEventListener('click', () => {
                        
                        this.properties.value += '\n';
                        this.properties.caretStart += 1;
                        this.properties.caretEnd = this.properties.caretStart;
                        this._triggerEvent('oninput');
                    });


                    break;
                }
                case 'space': {
                    keyElement.classList.add('keyboard__key--extra-wide');
                    keyElement.innerHTML = createIconHTML('space_bar');
                    keyElement.setAttribute('id', 'space');
                    keyElement.addEventListener('click', () => {
                        
                        this.properties.value = this.properties.value.substr(0, this.properties.caretStart) + ' ' +
                        this.properties.value.substr(this.properties.caretStart, this.properties.value.length);
                        this.properties.caretStart += 1;
                        this.properties.caretEnd = this.properties.caretStart;
                        this._triggerEvent('oninput');
                    }, false);

                    break;
                }
                case 'done': {
                    keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
                    keyElement.innerHTML = createIconHTML('check_circle');

                    keyElement.addEventListener('click', () => {
                        
                        this.close();
                        this._triggerEvent('onclose');
                    });

                    break;
                }
                case 'arrow back': {
                    keyElement.innerHTML = createIconHTML('arrow_back');
                    keyElement.setAttribute('id', 'arrowleft');

                    keyElement.addEventListener('click', () => {
                        
                        this.properties.caretStart = this.properties.caretStart === 0 ? 0 : this.properties.caretStart - 1;
                        this.properties.caretEnd = this.properties.caretStart;
                        this._triggerEvent('oninput');
                    });

                    break;
                }
                case 'arrow forward': {
                    keyElement.innerHTML = createIconHTML('arrow_forward');
                    keyElement.setAttribute('id', 'arrowright');
                    keyElement.addEventListener('click', () => {
                        
                        this.properties.caretStart = this.properties.caretStart === this.properties.value.length ? this.properties.value.length 
                        : this.properties.caretStart + 1;
                        this.properties.caretEnd = this.properties.caretStart;
                        this._triggerEvent('oninput');
                    });

                    break;
                }

                case 'en':
                case 'ru': {
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener('click', () => {
                        
                        this._toggleLang();
                    });

                    break;
                }
                case 'mic': {
                    keyElement.innerHTML = createIconHTML('mic_none');
                    keyElement.setAttribute('id', 'mic');
                    keyElement.classList.add('keyboard__key--activatable', 'keyboard__key--wide');
                    
                    keyElement.addEventListener('click', () => {
                        keyElement.classList.toggle('keyboard__key--active-red');

                        this._toggleMic();

                        this.properties.rec.addEventListener('result', e => {
                            const transcript = Array.from(e.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join('');
                      
                            const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
                            
                            if (e.results[0].isFinal) {
                                this.properties.value = this.properties.value.substr(0, this.properties.caretStart) + poopScript + ' ' +
                                this.properties.value.substr(this.properties.caretStart, this.properties.value.length);
                                this.properties.caretStart = this.properties.caretStart + poopScript.length + 1;
                                this.properties.caretEnd = this.properties.caretStart;
                                textArea.selectionStart = this.properties.caretStart;
                                textArea.selectionEnd = this.properties.caretStart;
                                this._triggerEvent('oninput');
                              }
                        }, false);

                              if (this.properties.mic) {
                                this.properties.rec.start();
                                this.properties.rec.addEventListener('end', this.properties.rec.start, false);

                              } else {
                                this.properties.rec.removeEventListener('end', this.properties.rec.start, false);
                                this.properties.rec.stop();
                                this.properties.rec = new SpeechRecognition();
                                this.properties.rec.lang = this.properties.lang === 'en' ? 'en-Us' : 'ru-RU';
                                this.properties.rec.interimResults = false;
                              }
                              
                          
                    }, false);
                    break;
                }

                default: {
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener('click', () => {
                        let char;
                        if ((this.properties.capsLock && !this.properties.shift) ||
                            (!this.properties.capsLock && this.properties.shift) && (key !== 'ru' && key !== 'en')) {
                            char = key.toUpperCase();
                        } else {
                            char = key.toLowerCase();
                        }

                        

                        this.properties.value = this.properties.value.substr(0, this.properties.caretStart) + char +
                        this.properties.value.substr(this.properties.caretStart, this.properties.value.length);
                        this.properties.caretStart += 1;
                        this.properties.caretEnd = this.properties.caretStart;
                        this._triggerEvent('oninput');
                    }, false);
                    break;
                }
            }
            fragment.appendChild(keyElement);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        })

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == 'function') {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleMic() {
        this.properties.mic = !this.properties.mic;
        if (this.properties.mic) {
            document.querySelector('#mic > i').innerHTML = 'mic';
        } else {
            document.querySelector('#mic > i').innerHTML = 'mic_none';

        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0 && (key.textContent !== 'ru' && key.textContent !== 'en')) {
                if ((this.properties.capsLock && !this.properties.shift) ||
                    (!this.properties.capsLock && this.properties.shift)) {
                    key.textContent = key.textContent.toUpperCase();
                } else {
                    key.textContent = key.textContent.toLowerCase();
                }
            }
        }

    },

    _swapLayout() {
        this.elements.keyContainer.innerHTML = '';
        this.elements.keyContainer.appendChild(this._createKeys());
        this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');
    },

    _toggleShift() {
        this.properties.shift = !this.properties.shift;
        this._swapLayout();

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0 && (key.textContent !== 'ru' && key.textContent !== 'en')) {
                if ((this.properties.capsLock && !this.properties.shift) ||
                    (!this.properties.capsLock && this.properties.shift)) {
                    key.textContent = key.textContent.toUpperCase();
                } else {
                    key.textContent = key.textContent.toLowerCase();
                }
            }
        }
    },

    _toggleLang() {
        this.properties.lang = this.properties.lang === 'en' ? 'ru' : 'en';
        this.properties.rec.lang = this.properties.lang === 'en' ? 'en-Us' : 'ru-RU';
        this._swapLayout();
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove('keyboard--hidden');
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add('keyboard--hidden');
    }
}

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

//.active-press 