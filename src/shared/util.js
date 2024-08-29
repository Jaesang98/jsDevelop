import router from "@/router/routerIndex";
import axios from "axios";


export {
	JSNetwort,
	pageOpen,
	pageClose,
}

// api통신
const JSNetwort = function ({ url, method, header = {}, body = {} }) {
	//데이터 정렬
	const networkData = {
		url: url,
		method: method.toLowerCase(),
		header: header,
		data: body
	}

	return axios(networkData)
		.then(response => response.data)
		.catch(error => {
			console.log(error)
		});
}

// 화면열기
const pageOpen = function (name, params, useState) {
	if (router.hasRoute(name)) {
		if (params) {
			// const store = useStore();
			// store.$patch({ pageParam: params})
		}
		if (useState) {
			router.push({ name, state: params });
		} else {
			router.push({ name, params });
		}
	} else {
		router.push("/");
	}
};

// 화면닫기
const pageClose = function () {
	if (router.options.history.state.back) {
		router.go(-1);
	} else {
		router.replace("/");
	}
}