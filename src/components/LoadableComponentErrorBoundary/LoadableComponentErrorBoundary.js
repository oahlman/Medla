import React, { Component } from 'react';

import config from '../../config';

import { LoadableComponentErrorBoundaryPage } from './LoadableComponentErrorBoundaryPage';

// Use ErrorBoyndary to catch ChunkLoadError
// https://reactjs.org/docs/error-boundaries.html
class LoadableComponentErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('error:', error,'errorInfo:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <LoadableComponentErrorBoundaryPage />;
    }

    return this.props.children;
  }
}

// LoadableComponentErrorBoundary helps in situations
// where production build changes in the server and
// long-living client app tries to fetch code chunks that don't exist anymore.
// Note: in development mode with Hot Module Reloading (HMR) in use, this causes error loops.
const UseLoadableErrorBoundaryOnlyInProdutionMode = props => {
  const { children } = props;
  return config.dev ? (
    children
  ) : (
    <LoadableComponentErrorBoundary>{children}</LoadableComponentErrorBoundary>
  );
};

export default UseLoadableErrorBoundaryOnlyInProdutionMode;
