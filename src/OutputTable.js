import React from 'react'

class OutputTable extends React.Component {
    render() {
        let arr = this.props.text;
        return (
            <div id={this.props.id}>
                {arr.map(
                    (ln, i) => {
                        return (<p key={i}>{ln}</p>)
                    }
                )}
            </div>
        )
    }
}

export default OutputTable