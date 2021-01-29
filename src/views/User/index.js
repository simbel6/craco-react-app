import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'

class User extends PureComponent {

  componentDidMount() {
    this.handleRefresh()
  }

  handleRefresh = newQuery => {
    const { location, queryList } = this.props
    const { query } = location
    queryList({
      ...query,
      ...newQuery,
    })
  }


  get listProps() {
    const {
      list,
      pagination,
      loading,
    } = this.props
    return {
      dataSource: list,
      loading: loading > 0,
      pagination,
      onChange: page => {
        this.handleRefresh({
          page: page.current,
          size: page.pageSize,
        })
      },
    }
  }

  render() {
    return (
        <List {...this.listProps} />
    )
  }
}

export default connect(
  ({ user, loading }) => {
    return {
      ...user,
      loading: loading.effects.user.queryList,
    }
  },
  ({ user }) => ({ ...user })
)(User)
