import router from "@/router/routerIndex";


export {
	pageOpen,
	pageClose,
}

// 화면열기
const pageOpen = function(name, params, useState) {
	if(router.hasRoute(name)) {
		if(params) {
			// const store = useStore();
			// store.$patch({ pageParam: params})
		}
		if(useState) {
			router.push({name, state : params});
		} else {
			router.push({name, params});
		}
	} else {
		router.push("/");
	}
};

// 화면닫기
const pageClose = function() {
	if(router.options.history.state.back) {
		router.go(-1);
	} else {
		router.replace("/");
	}
}