const ENTER_KEYCODE = 13;
const ESC_KEYCODE = 27;
let notification = document.querySelector('.notification');
let notificationBtn = document.querySelector('.notification__btn');
let notificationInput = document.querySelector('.notification__input');
let messages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit quod maxime placeat.',
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor.',
    'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt.',
    'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda es.',
    'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non-recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut.'
];

// LocalStorage
let inputClickHandler = function () {
  localStorage.setItem('display', 'none');
}
notificationInput.addEventListener('click', inputClickHandler);

// отложенный вызов компонента
let showComponent = setTimeout(function () {
  notification.style.display = 'block';
  sliderMessage.textContent = messages[0];

  if (localStorage.getItem('display') !== null) {
    notification.style.display = 'none';
  }
}, 3000);

// обработчики закрытия окна компонентов
let buttonClickHandler = function () {
  notification.style.display = 'none';
  notificationBtn.removeEventListener('click', buttonClickHandler);
}

let enterClickHandler = function(event) {
  if (event.keyCode === ENTER_KEYCODE) {
    notification.style.display = 'none';
    notificationBtn.removeEventListener('keydown', enterClickHandler);
  }
}

let escClickHandler = function(event) {
  if (event.keyCode === ESC_KEYCODE) {
    notification.style.display = 'none';
    document.removeEventListener('keydown', escClickHandler);
  }
}

notificationBtn.addEventListener('click', buttonClickHandler);
notificationBtn.addEventListener('keydown', enterClickHandler);
document.addEventListener('keydown', escClickHandler);

// слайдер
let sliderMessage = document.querySelector('.notification__text');
let prevBtn = document.querySelector('.notification__btn-slider--prev');
let nextBtn = document.querySelector('.notification__btn-slider--next');
let num = 0;

let nextClickHandler = function () {
  num++;
  if (num >= messages.length) {
    num = 0;
  }
  sliderMessage.textContent = messages[num];
}

let prevClickHandler = function () {
  num--;
  if (num < 0) {
    num = messages.length - 1;
  }
  sliderMessage.textContent = messages[num];
}

nextBtn.addEventListener('click', nextClickHandler);
nextBtn.addEventListener('keydown', nextClickHandler);
prevBtn.addEventListener('click', prevClickHandler);
prevBtn.addEventListener('keydown', prevClickHandler);
