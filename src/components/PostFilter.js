import React from 'react'
import { connect } from 'react-redux'
import setTextFilter from '../actions/filters'



export class PostFilter extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render() {
        return (
            <div className='content-container'>
                <input
                    className='text-input__filter'
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                    placeholder='Procurar por título...'
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})


const mapStateToProps = (state) => ({
    filters: state.filters
})


export default connect(mapStateToProps, mapDispatchToProps)(PostFilter)
