import React, { PureComponent } from 'react'
import { Table, Button } from 'antd'
import styles from './List.module.less'

class List extends PureComponent {

  render() {
    const { ...tableProps } = this.props

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'CreateTime',
        dataIndex: 'create_time',
      },
    ]

    return (
      <>
        <div className={styles.bar}>
          <Button type='primary'>新建</Button>
        </div> 
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        />
        </>
    )
  }
}

export default List
