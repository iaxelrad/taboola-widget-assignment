import { renderRecommendationList } from './render-recommendation-list';

export const widget = () => {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'widget-container';
  mainDiv.id = 'widget-container';

  const widgetHeader = document.createElement('div');
  widgetHeader.className = 'widget-header';
  widgetHeader.id = 'widget-header';

  const leftContentHeader = document.createElement('h1');
  leftContentHeader.id = 'left-content-header';
  leftContentHeader.className = 'left-content-header';
  leftContentHeader.innerHTML = 'MORE FOR YOU';

  const widgetSpacer = document.createElement('div');
  widgetSpacer.className = 'widget-spacer';

  const rightContentHeader = document.createElement('p');
  rightContentHeader.id = 'right-content-header';
  rightContentHeader.className = 'right-content-header';
  rightContentHeader.innerHTML = 'Promoted Links by Taboola';

  widgetHeader.appendChild(leftContentHeader);
  widgetHeader.appendChild(widgetSpacer);
  widgetHeader.appendChild(rightContentHeader);

  const listWrapper = document.createElement('div');
  listWrapper.className = 'list-wrapper';

  const list = document.createElement('ul');
  list.id = 'rec-list';
  listWrapper.appendChild(list);

  renderRecommendationList(list);

  mainDiv.appendChild(widgetHeader);
  mainDiv.appendChild(listWrapper);
  return mainDiv;
};
