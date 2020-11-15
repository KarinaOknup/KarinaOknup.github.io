let clearTimeInterval;
window.addEventListener('load', () => {
    createHtml();
    let curWidth = window.innerWidth;
    if (curWidth < 441) {
        curWidth = 300;
    } else {
        curWidth = 400;
    }
    const puzzle = new Puzzle();
    puzzle.width = curWidth;
    if (localStorage.getItem('puzzle')) {
        puzzle.createSavedGame();
    } else {
        puzzle.create();
    }

    const main = document.getElementById('main');
    const stop = document.getElementById('stop');

    document.getElementById('select').addEventListener('change', () => {
        selectEvent(puzzle, stop, main);
    });

    document.getElementById('start').addEventListener('click', () => {
        startEvent(puzzle, stop, main);
    });

    stop.addEventListener('click', () => {
        stopEvent(puzzle, stop, main);
    });

    document.getElementById('save').addEventListener('click', () => {
        puzzle.saveGame();
    })

    document.getElementById('results').addEventListener('click', () => {
        puzzle.showResults('resultsMessage');
    })
    document.getElementById('sound').addEventListener('click', () => {
        soundState();
    })
    document.getElementById('music').addEventListener('click', () => {
        musicState();
    })
    document.querySelector('#audioMusic').play();
    window.addEventListener('newSize', () => {
        newSizeEvent(puzzle);
    });
    
})

function soundState() {
    if (document.getElementById('sound').className.includes('sound')){
    document.querySelector('.voice').src='./assets/noVoice.svg';
}
else{
    document.querySelector('.voice').src='./assets/Voice.svg';
} 
document.getElementById('sound').classList.toggle('sound');
}

function sound() {
if(document.querySelector('#sound').className.includes('sound')){
const audio=document.querySelector('#audioSound');
audio.currentTime=0;
audio.play();
}
}

function musicState() {
    const audioM=document.querySelector('#audioMusic');
    if (document.getElementById('music').className.includes('music')){
    document.querySelector('.voiceM').src='./assets/nolisten.svg';
    audioM.pause();     
}
else{
    document.querySelector('.voiceM').src='./assets/listen.svg';
    audioM.play();
} 
document.getElementById('music').classList.toggle('music');
}


function newSizeEvent(puzzle) {
    const curWidth = window.innerWidth;
    if (curWidth < 444) {
        puzzle.width = 300;
        puzzle.createSavedGame();
    } else if (curWidth >= 441) {
        puzzle.width = 400;
        puzzle.createSavedGame();
    }
}

function selectEvent(puzzle, stop, main) {
    puzzle.cols = Number(document.getElementById('select').value[0]);
    puzzle.create();
    document.getElementById('steps').innerHTML = 0;
    document.getElementById('time').innerHTML = '00:00';
    puzzle.steps = 0;
    puzzle.timestamp = 0;
    main.style.opacity = 0.5;
    puzzle.stopEvent();
    stop.innerHTML = '<img src="./assets/Stop.svg" >';
    stop.classList.remove('resume');
    if (clearTimeInterval) clearInterval(clearTimeInterval);
}

function startEvent(puzzle, stop, main) {
    main.style.opacity = 1;
    document.getElementById('steps').innerHTML = 0;
    document.getElementById('time').innerHTML = '00:00';
    puzzle.steps = 0;
    puzzle.timestamp = 0;
    puzzle.createEvent();
    puzzle.create();
    stop.innerHTML = '<img src="./assets/Stop.svg" >';
    stop.classList.remove('resume');
    if (clearTimeInterval) clearInterval(clearTimeInterval);
    clearTimeInterval = puzzle.interval('time');
}

function stopEvent(puzzle, stop, main) {
    main.style.opacity = 0.5;
    puzzle.stopEvent();
    stop.classList.toggle('resume');
    if (stop.classList.length > 1) {
        stop.innerHTML = '<img src="./assets/play.svg" >';
        clearInterval(clearTimeInterval);
    } else {
        stop.innerHTML = '<img src="./assets/Stop.svg" >';
        main.style.opacity = 1;
        puzzle.createEvent();
        clearTimeInterval = puzzle.interval('time');
    }
}

function createHtml() {
    const header = document.createElement('header');

    const resultsMessage = document.createElement('div');
    resultsMessage.className = 'results-message';
    resultsMessage.id = 'resultsMessage';
    header.append(resultsMessage);

    const nav = document.createElement('nav');
    nav.className = 'nav';
    const start = document.createElement('button');
    start.className = 'btn-nav';
    start.id = 'start';
    start.innerHTML = '<img src="./assets/start.svg" >';
    nav.append(start);
    const stop = document.createElement('button');
    stop.className = 'btn-nav';
    stop.id = 'stop';
    stop.innerHTML = '<img src="./assets/Stop.svg" >';
    nav.append(stop);
    const save = document.createElement('button');
    save.className = 'btn-nav';
    save.id = 'save';
    save.innerHTML = '<img src="./assets/save.svg" >';
    nav.append(save);
    const results = document.createElement('button');
    results.className = 'btn-nav';
    results.id = 'results';
    results.innerHTML = '<img src="./assets/star.svg" >';
    nav.append(results);
    const select = document.createElement('select');
    select.className = 'btn-select btn-nav';
    select.id = 'select';
    const selectOption = +localStorage.getItem('select') || 4;
    for (let i = 3; i <= 8; i += 1) {
        const option = document.createElement('option');
        option.innerHTML = `${i}x${i}`;
        if (i === selectOption) option.selected = true;
        select.append(option);
    }
    nav.append(select);
    const sound = document.createElement('button');
    sound.className = 'btn-nav sound';
    sound.id = 'sound';
    sound.innerHTML = '<img class="voice" src="./assets/voice.svg">';
    nav.append(sound);
    const music = document.createElement('button');
    music.className = 'btn-nav music';
    music.id = 'music';
    music.innerHTML = '<img class="voiceM" src="./assets/listen.svg">';
    nav.append(music);
    header.append(nav);

    const section = document.createElement('section');
    section.className = 'status';
    let label = document.createElement('label');
    label.className = 'label';
    label.innerHTML = '<img src="./assets/move.svg"><span>:</span>';
    section.append(label);
    label = document.createElement('label');
    label.className = 'time';
    label.id = 'steps';
    label.innerHTML = '0';
    section.append(label);
    label = document.createElement('label');
    label.className = 'label';
    label.innerHTML = '<img src="./assets/time.svg"><span>:</span>';
    section.append(label);
    label = document.createElement('label');
    label.className = 'time';
    label.innerHTML = '00:00';
    label.id = 'time';
    section.append(label);
    

    const main = document.createElement('main');
    main.className = 'main';
    main.id = 'main';
    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    const game = document.createElement('div');
    game.className = 'game';
    game.id = 'game';
    wrap.append(game);
    main.append(wrap);
    const message = document.createElement('p');
    message.className = 'message';
    message.id = 'message';
    main.append(message);

   
    const audio=document.createElement('audio');
    audio.src='./sound/sound.mp3';
    audio.id='audioSound';

    const audioM=document.createElement('audio');
    audioM.src='./music/BND.mp3';
    audioM.loop='loop';
    audioM.id='audioMusic';

    document.body.append(header);
    document.body.append(main);
    document.body.append(section);
    document.body.append(audio);
    document.body.append(audioM);
}


class Puzzle {
    constructor(cols = 4, id = 'game', width = 400, timeId = 'time', stepsId = 'steps', stopId = 'stop') {
        this.cols = cols;
        this.id = id;
        this.width = width;
        this.timestamp = +localStorage.getItem(timeId) || 0;
        this.steps = +localStorage.getItem(stepsId) || 0;
        this.field = localStorage.getItem('puzzle') || 0;
        this.fromStorage(timeId, stepsId, stopId);
    }

    create() {
        this.field = new Array(this.cols).fill(false).map(elem => elem = new Array(this.cols).fill(false));
        let fontSize = '50px';
        if (this.cols > 5) fontSize = '26px';
        if (this.cols > 5 && this.width < 400) fontSize = '18px';
        const game = document.getElementById(this.id);
        game.innerHTML = '';
        const randomNumbers = [];
        const sizeItem = (this.width - (this.cols + 1) * 10) / this.cols;
        this.margin = sizeItem + 10;
        game.style.height = `${this.margin * this.cols}px`;

        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                if (i === this.cols - 1 && j === this.cols - 1) {
                    this.field[i][j] = [false, false, false, false];
                } else {
                    const item = document.createElement('div');
                    item.className = 'item';
                    const ranNum = this.randomNumber(randomNumbers)
                    randomNumbers.push(ranNum);
                    item.innerHTML = ranNum;
                    item.style.fontSize = fontSize;
                    item.id = ranNum;
                    item.style.width = `${sizeItem}px`;
                    item.style.height = `${sizeItem}px`;
                    item.style.left = `${this.margin * j}px`;
                    item.style.top = `${this.margin * i}px`;
                    game.append(item);
                    this.field[i][j] = [ranNum, false, this.margin * j, this.margin * i];
                }
            }
        }
        this.newDirection();
    }

    createEvent() {
        const game = document.getElementById(this.id);
        game.onclick = this.eventClick.bind(this);

        game.onmousedown = (e) => {
            if (e.target.closest('div').className === 'item' && e.target.id !== this.id) {
                const item = document.getElementById(e.target.id);
                item.style.transition = '0s';
                this.moveItem(item, e);
            }

            game.onmouseup = () => {
                game.onmousemove = null;
                setTimeout(() => {
                    game.onclick = this.eventClick.bind(this);
                }, 0);
            };
        };
        
    }

    moveItem(elem, e) {
        let startX = e.clientX;
        let startY = e.clientY;
        let elemX = elem.offsetLeft;
        let elemY = elem.offsetTop;
        const deltaX = startX - elemX;
        const deltaY = startY - elemY;

        document.onmousemove = moveHandler.bind(this);
        document.onmouseup = upHandler.bind(this);

        let button = [0, 0];
        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                if (this.field[i][j][0] === Number(e.target.id)) {
                    button = this.field[i][j];
                }
            }
        }

        function moveHandler(e) {
            if (button[1]) {
                const moveX = e.clientX - deltaX;
                const moveY = e.clientY - deltaY;
                switch (button[1]) {
                    case 'left':
                        if (moveX < button[2] && moveX > button[2] - this.margin) {
                            elem.style.left = `${moveX}px`;
                        }
                        break;
                    case 'right':
                        if (moveX > button[2] && moveX < button[2] + this.margin) {
                            elem.style.left = `${moveX}px`;
                        }
                        break;
                    case 'up':
                        if (moveY < button[3] && moveY > button[3] - this.margin) {
                            elem.style.top = `${moveY}px`;
                        }
                        break;
                    case 'down':
                        if (moveY > button[3] && moveY < button[3] + this.margin) {
                            elem.style.top = `${moveY}px`;
                        }
                        break;
                }
            }
            sound();
        }

        function upHandler() {
            document.onmousemove = null;
            document.onmouseup = null;
            elem.style.transition = 'all 0.2s linear';
            elem.style.left = `${button[2]}px`;
            elem.style.top = `${button[3]}px`;
            sound();
        }
    }


    stopEvent() {
        const game = document.getElementById(this.id);
        game.onclick = null;
        game.onmousedown = null;
        game.onmousemove = null;
        game.onmouseup = null;
    }

    randomNumber(randomNumbers) {
        if (randomNumbers.length === 0) {
            return 1 + Math.floor(Math.random() * (this.cols * this.cols - 1));
        }

        let ranRes = randomNumbers[0];
        while (randomNumbers.includes(ranRes)) {
            ranRes = 1 + Math.floor(Math.random() * (this.cols * this.cols - 1));
        }
        return ranRes;
    }

    endGame() {
        let count = 0;
        let end = true;
        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                count += 1;
                if (count !== this.field[i][j][0] && count !== this.cols * this.cols) {
                    end = false;
                }
            }
        }
        if (end) {
            clearInterval(clearTimeInterval);
            const time = document.getElementById('time');
            const message = document.getElementById('message');
            message.innerHTML = `You win! Time: ${time.innerHTML} Steps: ${this.steps} `;
            message.classList.add('show');
            setTimeout(() => message.classList.remove('show'), 5000);
            this.stopEvent();

            let getRes = localStorage.getItem('results') || false;
            if (getRes) {
                getRes = getRes.split(',');
                const newRes = [];
                let index = 0;
                const length = Math.floor(getRes.length / 3);
                for (let i = 0; i < length; i += 1) {
                    newRes[i] = [+getRes[index], getRes[index + 1], getRes[index + 2]];
                    index += 3;
                }
                if (Number(newRes[length - 1][0]) > this.steps || length < 10) {
                    newRes.push([this.steps, time.innerHTML, this.cols]);
                    newRes.sort((a, b) => a[0] - b[0]);
                    if (newRes.length > 10) newRes.pop();
                }
                localStorage.setItem('results', newRes);
            } else {
                localStorage.setItem('results', [this.steps, time.innerHTML, this.cols]);
            }
        }
    }

    blockElements() {
        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                this.field[i][j][1] = false;
            }
        }
    }

    newDirection() {
        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                if (this.field[i][j][0] === false) {
                    if (i - 1 >= 0) this.field[i - 1][j][1] = 'down';
                    if (i + 1 < this.cols) this.field[i + 1][j][1] = 'up';
                    if (j - 1 >= 0) this.field[i][j - 1][1] = 'right';
                    if (j + 1 < this.cols) this.field[i][j + 1][1] = 'left';
                }
            }
        }
    }

    eventClick(e) {
        const itemId = e.target.id;
        if (e.target.closest('div').className === 'item' && itemId !== this.id) {
            this.stopEvent();
            setTimeout(() => this.createEvent(), 100);

            const item = document.getElementById(itemId);
            let button = [0, 0];
            const cords = [0, 0];
            for (let i = 0; i < this.cols; i += 1) {
                for (let j = 0; j < this.cols; j += 1) {
                    if (this.field[i][j][0] === Number(itemId)) {
                        button = this.field[i][j];
                        cords[0] = i;
                        cords[1] = j;
                    }
                }
            }
            if (button[1]) {
                this.steps += 1;
                document.getElementById('steps').innerHTML = this.steps;
                switch (button[1]) {
                    case 'left':
                        this.moveLeft(item, button, cords);
                        break;
                    case 'right':
                        this.moveRight(item, button, cords);
                        break;
                    case 'up':
                        this.moveUp(item, button, cords);
                        break;
                    case 'down':
                        this.moveDown(item, button, cords);
                        break;
                }
            }
        }
        this.endGame();
    }

    moveDown(item, button, cords) {
        item.style.top = `${button[3] + this.margin}px`;
        this.field[cords[0]][cords[1]][3] += this.margin;
        this.field[cords[0] + 1][cords[1]] = this.field[cords[0]][cords[1]];
        this.field[cords[0]][cords[1]] = [false, false, false, false];
        this.blockElements();
        this.newDirection();
    }

    moveRight(item, button, cords) {
        item.style.left = `${button[2] + this.margin}px`;
        this.field[cords[0]][cords[1]][2] += this.margin;
        this.field[cords[0]][cords[1] + 1] = this.field[cords[0]][cords[1]];
        this.field[cords[0]][cords[1]] = [false, false, false, false];
        this.blockElements();
        this.newDirection();
    }

    moveUp(item, button, cords) {
        item.style.top = `${button[3] - this.margin}px`;
        this.field[cords[0]][cords[1]][3] -= this.margin;
        this.field[cords[0] - 1][cords[1]] = this.field[cords[0]][cords[1]];
        this.field[cords[0]][cords[1]] = [false, false, false, false];
        this.blockElements();
        this.newDirection();
    }

    moveLeft(item, button, cords) {
        item.style.left = `${button[2] - this.margin}px`;
        this.field[cords[0]][cords[1]][2] -= this.margin;
        this.field[cords[0]][cords[1] - 1] = this.field[cords[0]][cords[1]];
        this.field[cords[0]][cords[1]] = [false, false, false, false];
        this.blockElements();
        this.newDirection();
    }

    saveGame() {
        localStorage.setItem('steps', this.steps);
        localStorage.setItem('time', this.timestamp);
        localStorage.setItem('puzzle', this.field);
        localStorage.setItem('select', this.cols);
    }

    interval(id) {
        const time = document.getElementById(id);
        return setInterval(() => {
            this.timestamp += 1;
            this.parseTime(time);
        }, 1000);
    }

    parseTime(time) {
        let minutes = Math.floor(this.timestamp / 60);
        let seconds = this.timestamp % 60;
        if (seconds < 10) seconds = `0${seconds}`;
        if (minutes < 10) minutes = `0${minutes}`;
        time.innerHTML = `${minutes}:${seconds}`;
    }

    fromStorage(timeId, stepsId, stopId) {
        this.parseTime(document.getElementById(timeId));
        document.getElementById(stepsId).innerHTML = this.steps;
        if (this.steps !== 0 || this.timestamp !== 0) {
            document.getElementById(stopId).classList.add('resume');
            document.getElementById(stopId).innerHTML = '<img src="./assets/play.svg" >';
        }

        if (this.field) {
            const lineField = this.field.split(',');
            this.cols = Math.round(Math.sqrt(lineField.length / 4));
            this.field = new Array(this.cols).fill(false).map(elem => elem = new Array(this.cols).fill(false));
            let n = 0;
            for (let i = 0; i < this.cols; i += 1) {
                for (let j = 0; j < this.cols; j += 1) {
                    const id = (lineField[n] === 'false') ? false : +lineField[n];
                    const direction = (lineField[n + 1] === 'false') ? false : lineField[n + 1];
                    const left = (lineField[n + 2] === 'false') ? false : +lineField[n + 2];
                    const top = (lineField[n + 3] === 'false') ? false : +lineField[n + 3];
                    this.field[i][j] = [id, direction, left, top];
                    n += 4;
                }
            }
        }
    }

    createSavedGame() {
        let fontSize = '50px';
        if (this.cols > 5) fontSize = '30px';
        const game = document.getElementById(this.id);
        game.innerHTML = '';
        const sizeItem = (this.width - (this.cols + 1) * 10) / this.cols;
        this.margin = sizeItem + 10;
        game.style.height = `${this.margin * this.cols}px`;

        for (let i = 0; i < this.cols; i += 1) {
            for (let j = 0; j < this.cols; j += 1) {
                if (this.field[i][j][0] !== false) {
                    const item = document.createElement('div');
                    item.className = 'item';
                    const id = this.field[i][j][0];
                    item.innerHTML = id;
                    item.style.fontSize = fontSize;
                    item.id = id;
                    item.style.width = `${sizeItem}px`;
                    item.style.height = `${sizeItem}px`;
                    item.style.left = `${this.margin * j}px`;
                    item.style.top = `${this.margin * i}px`;
                    this.field[i][j][2] = this.margin * j;
                    this.field[i][j][3] = this.margin * i;
                    game.append(item);
                }
            }
        }
    }

    showResults(id) {
        document.getElementById(id).classList.toggle('show');
        const message = localStorage.getItem('results') || '';
        if (message) {
            const getRes = message.split(',');
            const newRes = [];
            let index = 0;
            const length = Math.floor(getRes.length / 3);
            for (let i = 0; i < length; i += 1) {
                newRes[i] = `<div>${i + 1}) steps: ${getRes[index]}, time: ${getRes[index + 1]}, cols: ${getRes[index + 2]}</div>`
                index += 3;
            }
            document.getElementById(id).innerHTML = newRes.join('');
        } else {
            document.getElementById(id).innerHTML = message;
        }
    }
}

