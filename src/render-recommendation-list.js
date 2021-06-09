import { fetchRecommendations } from './api';
import {
  createAnchorTag,
  createDivTag,
  createTextElement,
  createVisualElement,
} from './elements';

export const renderRecommendationList = async list => {
  try {
    const recList = await fetchRecommendations();

    recList.map(({ url, thumbnail, description, branding, origin }) => {
      const recItem = document.createElement('li');
      const recItemWrapper = createAnchorTag(url, origin);
      const recDescriptionWrapper = createDivTag(
        'rec-description-wrapper fade'
      );
      const recDescription = createTextElement(
        'h1',
        'rec-description',
        description
      );
      const recPublisher = createTextElement('p', 'rec-publisher', branding);
      const recThumbnail = createVisualElement(
        'img',
        'rec-item-thumbnail',
        thumbnail[0].url
      );
      const recVideoThumbnail = createVisualElement(
        'iframe',
        'rec-item-thumbnail',
        thumbnail[0].url
      );

      recDescriptionWrapper.appendChild(recDescription);
      recItemWrapper.appendChild(
        origin === 'video' ? recVideoThumbnail : recThumbnail
      );
      recItemWrapper.appendChild(recDescriptionWrapper);
      recItemWrapper.appendChild(recPublisher);
      recItem.appendChild(recItemWrapper);
      list.appendChild(recItem);
    });
  } catch (err) {
    console.log(err);
  }
};
