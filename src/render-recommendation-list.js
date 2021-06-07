import { fetchRecommendations } from './api';

export const renderRecommendationList = async list => {
  const recList = await fetchRecommendations();
  console.log(recList);

  recList.map(({ url, thumbnail, description, branding, origin }) => {
    const recItem = document.createElement('li');

    const recItemWrapper = document.createElement('a');
    recItemWrapper.className = 'rec-item-wrapper';
    recItemWrapper.href = url;
    recItemWrapper.target = origin === 'sponsored' ? '_blank' : null;

    const recDescription = document.createElement('h1');
    recDescription.innerHTML = description;
    recDescription.className = 'rec-description';

    const recPublisher = document.createElement('p');
    recPublisher.innerHTML = branding;
    recPublisher.className = 'rec-publisher';

    const recThumbnail = document.createElement('img');
    recThumbnail.src = thumbnail[0].url;
    recThumbnail.className = 'rec-item-thumbnail';
    recItemWrapper.appendChild(recThumbnail);

    recItemWrapper.appendChild(recDescription);
    recItemWrapper.appendChild(recPublisher);
    recItem.appendChild(recItemWrapper);
    list.appendChild(recItem);
  });
};
