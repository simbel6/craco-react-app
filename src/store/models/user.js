import api from 'services'

const { queryUserList } = api

export default {
  state: {
    list: [],
    pagination: {}
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async queryList(payload) {
      const params = {
        page: 1,
        size: 5,
        ...payload
      }
      const data = await queryUserList(params)
      if (data && data.success) {
        this.updateState({
          list: data?.data?.list,
          pagination: {
            current: params.page,
            pageSize: params.size,
            total: data.data.total,
            showTotal: total => `共 ${total} 条数据`,
          }
        })
      }
    },
  },
};
