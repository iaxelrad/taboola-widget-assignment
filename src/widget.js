const { renderRecommendationList } = require('./render-recommendation-list');
const { createWidgetHeader } = require('./widget-header');
const { createDivTag } = require('./elements/create-div-tag');

export const widget = () => {
  const widgetWrapper = createDivTag('widget-container');
  const widgetHeader = createWidgetHeader();
  const listWrapper = createDivTag('list-wrapper');
  const list = document.createElement('ul');

  renderRecommendationList(list);

  listWrapper.appendChild(list);
  widgetWrapper.appendChild(widgetHeader);
  widgetWrapper.appendChild(listWrapper);
  return widgetWrapper;
};
