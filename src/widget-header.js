const createWidgetHeader = () => {
  const widgetHeader = document.createElement('div');
  widgetHeader.className = 'widget-header';
  widgetHeader.id = 'widget-header';

  const leftContentHeader = document.createElement('h1');
  leftContentHeader.id = 'left-content-header';
  leftContentHeader.className = 'left-content-header';
  leftContentHeader.innerHTML = 'MORE FOR YOU';

  const rightContentHeader = document.createElement('p');
  rightContentHeader.id = 'right-content-header';
  rightContentHeader.className = 'right-content-header';
  rightContentHeader.innerHTML = 'Promoted Links by Taboola';

  widgetHeader.appendChild(leftContentHeader);
  widgetHeader.appendChild(rightContentHeader);

  return widgetHeader;
};

module.exports = { createWidgetHeader };
