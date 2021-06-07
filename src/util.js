import axios from 'axios';

export async function fetchRecommendations() {
  const baseUrl =
    'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get';
  const apiKey = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4';
  const appType = 'desktop';
  const sourceId = '214321562187';
  const sourceUrl = 'http://www.site.com/videos/214321562187.html';
  const url = `
  ${baseUrl}?app.type=${appType}&app.apikey=${apiKey}&count=4&source.type=video&source.id=${sourceId}&source.url=${sourceUrl}`;

  try {
    const response = await axios.get(url);
    const { data } = response;
    return data.list;
  } catch (error) {
    console.log(error);
  }
}

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
