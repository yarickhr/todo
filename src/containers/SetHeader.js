import { connect } from 'react-redux'
import Header      from '../components/Header'

const getTextFromArr = ( header ) => {
    let text =  header.text
    return text
}


const mapStateToProps = (state) => ({
  text: getTextFromArr(state.header),
  head: 'LAST TODO'
})


const setHeader = connect(
    mapStateToProps
)(Header)

export default setHeader