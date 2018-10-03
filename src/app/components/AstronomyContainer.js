import React from 'react'
import { connect } from 'react-redux'
import AstronomyCard from './AstronomyCard'
import { fetchData } from '../../redux/actions/fetchData'

class AstronomyContainer extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    const { astronomy } = this.props

    return (
      <AstronomyCard {...astronomy} />
    )
  }
}

const mapStateToProps = state => ({
  astronomy: state.astronomy
})

export default connect(mapStateToProps, { fetchData })(AstronomyContainer)
