import {reqGoodsListInfo} from '@/api'
const state = {
  goodsListInfo:{}
}
const mutations = {
    RECEIVEGOODSLISTINFO(state,goodsListInfo){
        state.goodsListInfo = goodsListInfo
    }
}
const actions = {
    async getGoodsListInfo({commit},searchParmas){
        let result = await reqGoodsListInfo(searchParmas)
        if(result.code === 200){
            commit('RECEIVEGOODSLISTINFO',result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.goodsListInfo.goodsList 
    },
    attrsList(state){
        return state.goodsListInfo.attrsList
    },
    trademarkList(state){
        return state.goodsListInfo.trademarkList
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}