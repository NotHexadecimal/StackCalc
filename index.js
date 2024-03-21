const container = document.querySelector('.container');
const input = document.querySelector('input');

const state = {
  stack: []
};

const render = () => {
  const content = document.createElement('ul');
  state.stack.forEach((value) => {
    const element = document.createElement('li');
    element.innerHTML = String(value);
    if (Number.isNaN(value) || !Number.isFinite(value)) {
      element.classList.add('broken');
    }
    content.appendChild(element);
  });

  container.firstChild?.remove();
  container.appendChild(content);
};

input.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') {
    return;
  }
  switch (input.value) {
    case 'r': {
      state.stack = [];
    } break;
    case 'c': {
      state.stack.pop();
    } break;
    case 'd': {
      const a = state.stack.pop();
      state.stack.push(a);
      state.stack.push(a);
    } break;
    case 's': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(a);
      state.stack.push(b);
    } break;
    // --------
    case '+': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b + a);
    } break;
    case '-': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b - a);
    } break;
    case '*': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b * a);
    } break;
    case '/': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b / a);
    } break;
    case '%': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b % a);
    } break;
    case '^': {
      const a = state.stack.pop();
      const b = state.stack.pop();
      state.stack.push(b ** a);
    } break;
    // --------
    case '_': {
      const a = state.stack.pop();
      state.stack.push(Math.floor(a));
    } break;
    // --------
    case 'p': {
      state.stack.push(Math.PI);
    } break;
    case 't': { // tau
      state.stack.push(Math.PI * 2);
    } break;
    // --------
    default:
      const value = Number(input.value);
      if (!Number.isNaN(value)) {
        state.stack.push(value);
      }
  }
  input.value = '';
  render();
});

render();
