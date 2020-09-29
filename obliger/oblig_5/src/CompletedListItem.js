import React from 'react'

const CompletedListItems = (props) => {
  return <tr>
  <td>{props.title}</td>
  <td>{props.author}</td>
  <td>{props.description}</td>
  <td>{props.completedAt.toLocaleDateString()}</td>
</tr>
}

export default CompletedListItems