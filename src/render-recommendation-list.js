const { fetchRecommendations } = require('./api');
const { createAnchorTag } = require('./elements/create-anchor-tag');
const { createMultiClassDivTag } = require('./elements/create-div-tag');
const { createTextElement } = require('./elements/create-text-element');
const { createVisualElement } = require('./elements/create-visual-element');

const renderRecommendationList = async list => {
  try {
    const recList = await fetchRecommendations();

    recList.map(({ url, thumbnail, description, branding, origin, name }) => {
      const recItem = document.createElement('li');
      recItem.className = 'rec-list-item';

      const recItemWrapper = createAnchorTag(url, origin);
      const recDescriptionWrapper = createMultiClassDivTag(
        'rec-description-wrapper fade'
      );
      const recContent = document.createElement('div');
      const recDescription = createTextElement(
        'h1',
        'rec-description',
        description,
        name
      );
      const recPublisher = createTextElement('p', 'rec-publisher', branding);
      recContent.appendChild(recDescriptionWrapper);
      recContent.appendChild(recPublisher);
      const recThumbnail = createVisualElement(
        'img',
        'rec-item-thumbnail',
        thumbnail[0].url,
        name
      );
      const recVideoThumbnail = createVisualElement(
        'video',
        'rec-item-thumbnail',
        thumbnail[0].url
      );

      recDescriptionWrapper.appendChild(recDescription);
      recItemWrapper.appendChild(
        origin === 'video' ? recVideoThumbnail : recThumbnail
      );
      recItemWrapper.appendChild(recContent);
      recItem.appendChild(recItemWrapper);
      list.appendChild(recItem);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { renderRecommendationList };
