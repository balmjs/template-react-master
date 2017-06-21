import React from 'react';

const asyncComponent = (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null; // static
      this.mounted = false;
      this.state = {
        Component: AsyncComponent.Component
      };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then(mod => {
          let Component = mod.default || mod;
          AsyncComponent.Component = Component;
          if (this.mounted) {
            this.setState({ Component });
          }
        });
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      let { Component } = this.state;
      return Component
        ? <Component { ...this.props } { ...collection } />
        : null;
    }
  }
);

export {
  asyncComponent
};
