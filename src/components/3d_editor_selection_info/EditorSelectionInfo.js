import React from "react";

class EditorSelectionInfo extends React.Component {

    render() {
        return (
            <div className="text-left p-t-10">
                <span className="p-l-20">
                    Material Count: {this.props.material_count }
                </span>
            </div>
        )
    }
}

EditorSelectionInfo.propTypes = {
    material_count: React.PropTypes.number
};

EditorSelectionInfo.defaultProps = {
    material_count: 1
}

export default EditorSelectionInfo;
