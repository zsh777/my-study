/*
按照年级查询
 */

import $axios from '@/utils/axios.js'
export default {
    getByClassJson(data) {
        const service = {
            method: "get",
            url: "/mock/byClass/byClass.json",
        }
        return $axios(service, data)
    },

}

