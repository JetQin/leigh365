import React, { Component } from 'react';
import { WebView, Platform } from 'react-native';

class ViewHtml extends Component {
  state = {};
  // componentDidMount() {
  //
  //   axios.get(url).then((response) => {
  //     this.setState({ data: response });
  //   });
  // }

  render() {
    const url = this.props.navigation.state.params.uri;
    return (
      Platform.OS === 'ios' ? <WebView source={{ uri: url }} javaScriptEnabled={true} userAgent='ios' /> 
          : <WebView source={{ uri: url }} javaScriptEnabled={true} userAgent='android' /> 
    );
  }
}

export default ViewHtml;
