import React from 'react';

class LifeCycleSample extends React.Component{
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props)
        console.log('contructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if(nextProps.color !== prevState.color){
            return { color: nextProps.color}
        }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        return nextState.number % 10 !== 4
    }
    
    componentWillMount() {
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number +1 
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null;
    }

    render () {
        console.log('render')

        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref} >
                    {this.state.number}
                </h1>
                <p> color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    Add
                </button>
            </div>
        )
    }
}
const Chapter7 = () => {
    return (
        <div>
            <h1> Chapter7 - LifeCycle of Component</h1>
            <LifeCycleSample />
        </div>
    );
};

export default Chapter7;