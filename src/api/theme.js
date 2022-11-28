// 课程分类
import $axios from "@/utils/axios";
export default {
    getClassJson(data) {
        console.log('课程分类222',data);
        const service = {
            method: "get",
            url: "/mock/search/class.json",
        }
        return $axios(service, data)
    }
}