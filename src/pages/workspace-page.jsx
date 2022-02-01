import React from "react";
import { connect } from 'react-redux'

class _WorkspacePage extends React.Component {

    render(){
        return(
            <h1>Workspace page</h1>
        )
    }

}


function mapStateToProps(state) {
    return {
        // boards: state.boardModule.boards
    }
}
const mapDispatchToProps = {

}


export const WorkspacePage = connect(mapStateToProps, mapDispatchToProps)(_WorkspacePage)