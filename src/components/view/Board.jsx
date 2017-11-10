import Square from './Square'
class Board extends React.Component {
    renderSquare(i) {
        return (<Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>);
    }
    renderRow(x) {
        return (
            <div className="board-row">
                {this.renderSquare(x)}
                {this.renderSquare(x + 1)}
                {this.renderSquare(x + 2)}
            </div>
        );
    }

    render() {
        return (
            <div>
                {[0, 3, 6].map((i) => {
                    return this.renderRow(i)
                })}
            </div>
        );
    }
}

export default Board