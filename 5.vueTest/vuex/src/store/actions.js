import * as types from './mutation-types'

export const selectPlay = function({commit}, {list, index}) {  // 提交事务
  commit(types.SET_PLAYING_STATE, list)
  commit(types.SET_FULL_SCREEN, index)
}
