import React from 'react'
import PaginatedList from 'App/components/Crud/List'

export default class Stocks extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className="stockTable">
        <PaginatedList title="Stocks" />
      </div>
    )
  }
}
