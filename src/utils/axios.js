/* eslint-disable */
/**
 * 封装axios请求方法
 */
const axios = require("axios");
const qs = require("qs");
import { Notification } from "element-ui";
const elementcss = require("element-ui/lib/theme-chalk/index.css");
const config = window.config; // config配置文件
import router from "@/router/index.js";
var cancel;
var promiseArr = {};

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
		console.log("请求拦截器",config)
		// 系统设置保存之前设置将数据变为[]
		if (config.data) {
			console.log("进入config.data")
			for (let i in config.data) {
				if (i === "updateSetting") {
					let arr = [];
					Object.values(config.data).forEach((e) => {
						arr.push(e);
					});
					arr.pop();
					config.data = arr;
				}
			}
		}
		if (config.method === "get") {
			config.params = {
				_t: Date.parse(new Date()),
				...config.params,
			};
		}
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axios.interceptors.response.use(
	function (response) {
		// console.log('111111111', response)
		// 对响应数据做点什么
		// delete(promiseArr[response.config.url.replace(response.config.baseURL,'')])
		return response;
	},
	function (error) {
		// 对响应错误做点什么
		// 例如用户请求失效，返回登录页什么的
		return Promise.reject(error);
	}
);

function error(response) {
	// console.log('111111111', response)
	// 如果http状态码正常，则直接返回数据
	if (
		response &&
		(response.status === 200 ||
			response.status === 304 ||
			response.status === 400)
	) {
		//  Notification.error({
		//    title: '错误',
		//    message: '网络有误',
		//    position: 'bottom-right',
		//    customClass: 'fontError'
		//  })
		return response;
		// 如果不需要除了data之外的数据，可以直接 return response.data
	} else {
		// 这里做一些提示 根据不同的status  如果需要处理的细致的话
		//  Notification.error({
		//     title: '错误',
		//     message: '网络有误',
		//     position: 'bottom-right',
		//     customClass: 'fontError'
		//  })
	}
}
function success(res) {
	if (!res.data) {
		//  Notification.error({
		//    title: '错误',
		//    message: res.data.message,
		//    position: 'bottom-right',
		//    customClass: 'fontError'
		//  })
	}
}
/* */
const $axios = (opts, data) => {
    console.log('opts.url',opts.url,config)
	let Public = {}; //用于存放公共参数，类似于当前用户id等
	let httpDefaultOpts = {
		//http默认配置
		// baseURL: config.baseUrl,
		timeout: config.timeout,
		method: opts.method,
		url: opts.url,
		responseType: "json", // 一般一个网站的responseType 都是一样的
		withCredentials: true, // 是否允许带cookie这些
		arrayFormat: opts.arrayFormat, //有三个参数 'indices' id[0]=b&id[1]=c  'brackets' 'id[]=b&id[]=c' 'repeat' 'id=b&id=c'
		params: Object.assign(Public, data),
		// data:Object.assign(Public, data),
		//data: opts.hasFile ? data : Object.assign(Public, data),
		data: data,
		headers:
			opts.method === "post" ||
			opts.method === "put" ||
			opts.method === "delete"
				? {
						//  "Content-Type": opts.contentType || "application/x-www-form-urlencoded;charset=UTF-8",
						//  'X-CSRF-TOKEN': localStorage.getItem('Xcsrftoken'),
						//  'X-APP-UACCOUNT':sessionStorage.getItem('account'),
						//  'X-REQUEST-LANGUAGE': 'zh-CN'
				}
				: {
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
						"X-APP-UACCOUNT": sessionStorage.getItem("account"),
						"X-CSRF-TOKEN": localStorage.getItem("Xcsrftoken"),
						"X-REQUEST-LANGUAGE": "zh-CN",
				},
		cancelToken: new axios.CancelToken(function (c) {
			cancel = c; // 记录当前请求的取消方法
		}),
	};
	if (opts.method == "get") {
		httpDefaultOpts.headers["Content-Type"] =
			"application/x-www-form-urlencoded;charset=UTF-8";
		delete httpDefaultOpts.data;
	} else if (opts.method == "delete") {
		delete httpDefaultOpts.data;
	} else if (opts.method == "post") {
	} else {
		//delete httpDefaultOpts.params
		if (!opts.hasFile) {
			//
			httpDefaultOpts.data = qs.stringify(httpDefaultOpts.data, {
				arrayFormat: httpDefaultOpts.arrayFormat || "indices",
			});
		}
	}
	let promise = new Promise(function (resolve, reject) {
		axios(httpDefaultOpts)
			.then((res) => {
				success(res);
				resolve(res.data);
			})
			.catch((response) => {
				error(response);
				reject(response);
			});
	});
	return promise;
};

export default $axios;
