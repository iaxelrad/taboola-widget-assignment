import { fetchRecommendations } from './api';

export const renderRecommendationList = async list => {
  const recList = await fetchRecommendations();

  recList.map(({ url, thumbnail, description, branding, origin }) => {
    const recItem = document.createElement('li');

    const recItemWrapper = document.createElement('a');
    recItemWrapper.className = 'rec-item-wrapper';
    recItemWrapper.href = url;
    recItemWrapper.target = origin === 'sponsored' ? '_blank' : null;

    const recDescriptionWrapper = document.createElement('div');
    recDescriptionWrapper.classList =
      'rec-description-wrapper truncate-overflow';

    const recDescription = document.createElement('h1');
    recDescription.innerHTML = description;
    recDescription.className = 'rec-description';

    recDescriptionWrapper.appendChild(recDescription);

    const recPublisher = document.createElement('p');
    recPublisher.innerHTML = branding;
    recPublisher.className = 'rec-publisher';

    const recThumbnail = document.createElement('img');
    recThumbnail.src = thumbnail[0].url;
    recThumbnail.className = 'rec-item-thumbnail';

    const recVideoThumbnail = document.createElement('iframe');
    recVideoThumbnail.src = thumbnail[0].url;
    recVideoThumbnail.className = 'rec-item-thumbnail';

    recItemWrapper.appendChild(
      origin === 'video' ? recVideoThumbnail : recThumbnail
    );
    recItemWrapper.appendChild(recDescriptionWrapper);
    recItemWrapper.appendChild(recPublisher);
    recItem.appendChild(recItemWrapper);
    list.appendChild(recItem);
  });
};
