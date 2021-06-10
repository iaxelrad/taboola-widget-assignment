const { fetchRecommendations } = require('./api');
const { createAnchorTag } = require('./elements/create-anchor-tag');
const { createDivTag } = require('./elements/create-div-tag');
const { createTextElement } = require('./elements/create-text-element');
const { createVisualElement } = require('./elements/create-visual-element');

const renderRecommendationList = async list => {
  try {
    const recList = await fetchRecommendations();

    recList.map(({ url, thumbnail, description, branding, origin, name }) => {
      const recItem = document.createElement('li');
      recItem.className = 'rec-list-item';

      const recItemWrapper = createAnchorTag(url, origin);
      const recDescriptionWrapper = createDivTag(
        'rec-description-wrapper fade'
      );
      const recDescription = createTextElement(
        'h1',
        'rec-description',
        description,
        name
      );
      const recPublisher = createTextElement('p', 'rec-publisher', branding);
      const recThumbnail = createVisualElement(
        'img',
        'rec-item-thumbnail',
        thumbnail[0].url,
        name
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

module.exports = { renderRecommendationList };
