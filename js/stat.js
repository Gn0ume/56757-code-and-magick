'use strict';

var CLOUD = {
  height: 270,
  weidht: 420,
  coordX: 100,
  coordY: 10,
  shadowShift: 10
};

var BAR = {
  heigth: 150,
  weidth: 40,
  paddingTop: 90
};

var TEXT_PADDINGS = {
  left: 145,
  textbarTop: 265,
  scorebarTop: 80,
  barStep: 100,
  mainLine1: 35,
  mainLine2: 55
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD.weidht, CLOUD.height);
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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD.coord_x + CLOUD.shadow_shift, CLOUD.coord_y + CLOUD.shadow_shift, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD.coord_x, CLOUD.coord_y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура! Вы победили!', TEXT_PADDINGS.left, TEXT_PADDINGS.main_line_1);
  ctx.fillText('Список результатов:', TEXT_PADDINGS.left, TEXT_PADDINGS.main_line_2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], TEXT_PADDINGS.left + TEXT_PADDINGS.bar_step * i, TEXT_PADDINGS.textbar_top);
    ctx.fillText(Math.round(times[i]), TEXT_PADDINGS.left + TEXT_PADDINGS.bar_step * i, TEXT_PADDINGS.scorebar_top + BAR.heigth * (1 - times[i] / maxTime));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(TEXT_PADDINGS.left + TEXT_PADDINGS.bar_step * i, BAR.padding_top + BAR.heigth * (1 - times[i] / maxTime), BAR.weidth, (times[i] * BAR.heigth) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(14, 18, 207, ' + Math.random() + ')';
      ctx.fillRect(TEXT_PADDINGS.left + TEXT_PADDINGS.bar_step * i, BAR.padding_top + BAR.heigth * (1 - times[i] / maxTime), BAR.weidth, (times[i] * BAR.heigth) / maxTime);
    }
  }
};

