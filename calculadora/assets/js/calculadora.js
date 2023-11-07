const panel = document.querySelector('.panel');
const keys = panel.querySelector('.keyboard');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if(e.target.matches('button')){
        console.log(e.target.textContent);
        console.log(displayedNum);
    }
    
    if(!action){
        if(displayedNum === '0'){
        display.textContent = keyContent;
        }else{
            display.textContent = displayedNum+keyContent;
        }
    }

    if(action === 'add' || action === 'subtract' ||
       action === 'multiply' || action === 'divide'){
        key.classList.add('is_depressed');
    }

    if(action === 'button_decimal'){
        display.textContent = displayedNum+'.';
    }

    if(action === 'calculate'){
        console.log(e.target.textContent);
    }

    if(action === 'button_clear'){
        display.textContent = '0';
    }
});