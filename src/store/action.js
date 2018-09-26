import axios from 'axios'
console.log(axios)

export const CLICK_LOGIN = 'CLICK_LOGIN'

export const clickLogin = id => {
    return {
        type: CLICK_LOGIN,
        text: '987654'
    }
}

export const FETCH_BANNER = 'FETCH_BANNER'

export const fetchBanner = () => dispatch => {
    return axios
        .get(
            'https://mf-fat.wolaidai.com/lease/api/v1/goods/banner/index?channelId=SELF'
        )
        .then(
            res => {
                dispatch(bannerList(res.data.result))
            },
            err => {
                console.log(err)
            }
        )
}

export const BANNER_LIST = 'BANNER_LIST'

export const bannerList = list => {
    return {
        type: BANNER_LIST,
        list
    }
}
