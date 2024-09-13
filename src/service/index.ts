import HYRequest from "./request";
import {localCache} from "@/utils/cache";
import {LOGIN_TOKEN} from "@/global/constants";

// @ts-ignore
const hyRequest = new HYRequest({
  // baseURL: BASE_URL,
  // timeout: TIME_OUT
	interceptors: {
		requestSuccessFn: (config) => {
			// 每一个请求都自动携带token
			const token = localCache.getCache(LOGIN_TOKEN)
			if (config.headers && token) {
				// 类型缩小
				config.headers.Authorization = 'Bearer ' + token
			}
			return config
		}
	}
})

// @ts-ignore
export const hyRequest2 = new HYRequest({
  // baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default hyRequest
