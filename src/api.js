import axios from 'axios';

export async function fetchRecommendations() {
  const baseUrl =
    'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get';
  const apiKey = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4';
  const appType = 'desktop';
  const sourceId = '214321562187';
  const sourceUrl = `http://www.site.com/videos/${sourceId}.html`;
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
