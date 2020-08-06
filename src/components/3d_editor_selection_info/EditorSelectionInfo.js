import React from "react";

class EditorSelectionInfo extends React.Component {

    render() {
        return (
            <div className="text-left p-t-10">
                <span className="p-l-20">
                    Material Count: {this.props.materials.length}
                </span>
                <span className="p-l-20">
                    Active Material: ({this.props.index+1}) {this.props.materials[this.props.index].name}
                </span>
            </div>
        )
    }
}

EditorSelectionInfo.propTypes = {
    materials: React.PropTypes.array,
    index: React.PropTypes.number
};

EditorSelectionInfo.defaultProps = {
    materials: [],
    index: 0
}

export default EditorSelectionInfo;
