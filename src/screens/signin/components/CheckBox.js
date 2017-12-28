import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 16,
    height: 16,
    color: '#1C86EE',
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    lineHeight: 15,
    color: 'gray',
  },
});

class CheckBox extends Component {
    static defaultProps = { label: 'Label',
      labelBefore: false,
      checked: false,
    };
    static propTypes={
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    };
    constructor(props) {
      super(props);
      this.state = { checked: props.checked };
      // this.toggle = this.toggle.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    onChange() {
      this.setState({ checked: !this.state.checked });
    }
    render() {
      let source = 'square-o';
      if (this.state.checked) {
        source = 'check-square-o';
      }

      let container = (
        <View style={styles.container}>
          <Icon type='font-awesome' name={source} size={16} color='#4876FF' underlayColor='#4876FF' />
          <View style={styles.labelContainer}>
            <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
          </View>
        </View>
      );

      if (this.props.labelBefore) {
        container = (
          <View style={styles.container}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
            </View>
            <Icon name={source} size={16} color='#4876FF'  underlayColor='#4876FF'/>>
          </View>
        );
      }

      return (
        <TouchableHighlight onPress={this.onChange} underlayColor='white' style={this.props.checkStyle} >
          {container}
        </TouchableHighlight>
      );
    }
}

export default CheckBox;
