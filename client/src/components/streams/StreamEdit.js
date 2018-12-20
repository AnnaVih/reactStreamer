import _ from 'lodash'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchStream, editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <h3>Edit a stream</h3>
                {/* initialValues - comes from redux-form.
                _.pick - create a new object from the given properties of the original object */}
                <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)