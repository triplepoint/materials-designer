import React from "react";

class EditorSelectionInfo extends React.Component {

    render() {
        return (
            <div className="text-left p-t-10">
                <span className="p-l-20">
                    Material Count: {this.props.materials.length }
                </span>
            </div>
        )
    }
}

EditorSelectionInfo.propTypes = {
    materials: React.PropTypes.array
};

EditorSelectionInfo.defaultProps = {
    materials: []
}

export default EditorSelectionInfo;
