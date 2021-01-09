// ホテル検索様のAPIを叩くファイル
import axios from 'axios'
import {API_KEY, BASE_URL} from 'rakuten/config';

// 非同期処理を使う際の戻り値は必ず Promise<○○> になる
export const searchHotels = async (keyword: string): Promise<void> => {
  try {
    const res = await axios.get(BASE_URL + '&applicationId=' + API_KEY + '&keyword=' + keyword)
    if(res.status === 200) {
      console.log(res.data.hotels)
    }
  } catch(e) {
    console.error(e)
  }
}