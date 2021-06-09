import axios from 'axios';
import { API_KEY } from '../config';
export async function fetchRecommendations() {
  const baseUrl =
    'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get';
  const appType = 'desktop';
  const sourceId = '214321562187';
  const sourceUrl = `http://www.site.com/videos/${sourceId}.html`;
  const url = `
  ${baseUrl}?app.type=${appType}&app.apikey=${API_KEY}&count=4&source.type=video&source.id=${sourceId}&source.url=${sourceUrl}`;

  try {
    const response = await axios.get(url);
    const { data } = response;
    return data.list;
  } catch (error) {
    console.log(error);
  }
}
