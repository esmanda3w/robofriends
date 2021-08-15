import React, {Component} from 'react';
import { HighlightSpanKind } from 'typescript';

class ErrorBoundary extends Component {
    // allow access to this.props in the constructor
    // (ended up not needing)
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;