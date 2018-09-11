'use strict';

document.querySelector('.setup').classList.remove('hidden');
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

