'use strict';

document.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var mantleColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyeColor = ['black', 'red', 'blue', 'yellow', 'green'];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createName = function (nameArr, surnameArr) {
  return getRandomElement(nameArr) + ' ' + getRandomElement(surnameArr);
};

var wizardsListLength = 4;
var wizards = [];

for (var i = 0; i < wizardsListLength; i++) {
  wizards[i] = {
    name: createName(names, surnames),
    coatColor: getRandomElement(mantleColor),
    eyesColor: getRandomElement(eyeColor)
  };
}

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);

//  module3-task1
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var windowSetup = document.querySelector('.setup');
var mentle = document.querySelector('.wizard-coat');
var eyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var userNameInput = windowSetup.querySelector('.setup-user-name');
var submitButton = document.querySelector('.setup-submit');
var enterKeyCode = 13;
var escKeyCode = 27;

var openPopup = function () {
  windowSetup.classList.remove('hidden');
};

var closePopup = function () {
  windowSetup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterKeyCode) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterKeyCode) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === escKeyCode && userNameInput !== document.activeElement) {
    closePopup();
  }
});

mentle.addEventListener('click', function () {
  mentle.style.fill = getRandomElement(mantleColor);
  document.querySelector('input[name="coat-color"]').value = mentle.style.fill;
});

eyes.addEventListener('click', function () {
  eyes.style.fill = getRandomElement(eyeColor);
  document.querySelector('input[name="eyes-color"]').value = eyes.style.fill;
});

fireball.addEventListener('click', function () {
  document.querySelector('input[name="fireball-color"]').value = getRandomElement(fireballColor);
  fireball.style.background = document.querySelector('input[name="fireball-color"]').value;
});

submitButton.addEventListener('click', function () {
  if (userNameInput.validity.valid === true) {
    document.querySelector('.setup-wizard-form').submit();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterKeyCode) {
    evt.preventDefault();
    document.activeElement.blur();
  }
});
