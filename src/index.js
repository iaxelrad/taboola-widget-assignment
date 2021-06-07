import './style.css';
import { renderRecommendationList } from './util';

const mainDiv = document.createElement('div');
mainDiv.className = 'widget-container';

const widgetHeader = document.createElement('div');
widgetHeader.className = 'widget-header';

const leftContentHeader = document.createElement('h1');
leftContentHeader.innerHTML = 'MORE FOR YOU';

const rightContentHeader = document.createElement('p');
rightContentHeader.innerHTML = 'Promoted Links by Taboola';

widgetHeader.appendChild(leftContentHeader);
widgetHeader.appendChild(rightContentHeader);

const listWrapper = document.createElement('div');
listWrapper.className = 'list-wrapper';

const list = document.createElement('ul');
listWrapper.appendChild(list);

renderRecommendationList(list);

mainDiv.appendChild(widgetHeader);
mainDiv.appendChild(listWrapper);
document.body.appendChild(mainDiv);
