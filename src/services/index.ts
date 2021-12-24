import axios from 'axios'
import { HomeRecommend } from './types'
export default class Services {
  static init() {
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/e200ea8676a01209d5de4aaa1b515353/yuri/'
  }
  // 推荐列表
  static async getHomeRecommend () {
    this.init()
    // 请求回来的结果 res.data 是 HomeRecommend[] 类型的
    return axios.get<HomeRecommend>('recommend').then(res => res.data)
  }
}