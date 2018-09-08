'use strict';

var CLOUD = {
  height: 270,
  width: 420,
  coordX: 100,
  coordY: 10,
  shadowShift: 10
};

var BAR = {
  height: 150,
  width: 40,
  paddingTop: 90
};

var TEXT_PADDINGS = {
  left: 155,
  textbarTop: 265,
  scorebarTop: 80,
  barStep: 90,
  mainLine1: 35,
  mainLine2: 55
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD.width, CLOUD.height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var calculateBarHeight = function (time, maxElement) {
  var barHeight = time * BAR.height / maxElement;
  return barHeight;
};



window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD.coordX + CLOUD.shadowShift, CLOUD.coordY + CLOUD.shadowShift, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD.coordX, CLOUD.coordY, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура! Вы победили!', TEXT_PADDINGS.left, TEXT_PADDINGS.mainLine1);
  ctx.fillText('Список результатов:', TEXT_PADDINGS.left, TEXT_PADDINGS.mainLine2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var step = TEXT_PADDINGS.left + TEXT_PADDINGS.barStep * i;
    var indent = BAR.height - calculateBarHeight(times[i], maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], step, TEXT_PADDINGS.textbarTop);
    ctx.fillText(Math.round(times[i]), step, TEXT_PADDINGS.scorebarTop + indent);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(step, BAR.paddingTop + indent, BAR.width, calculateBarHeight(times[i], maxTime));
    } else {
      ctx.fillStyle = 'rgba(14, 18, 207, ' + (Math.random()*0.9 + 0.1) + ')';
      ctx.fillRect(step, BAR.paddingTop + indent, BAR.width, calculateBarHeight(times[i], maxTime));
    }
  }
};

