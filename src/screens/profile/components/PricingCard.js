import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Button, colors, } from 'react-native-elements';

const PricingCard = props => {
  const {
    containerStyle,
    wrapperStyle,
    title,
    price,
    info,
    button,
    color,
    titleFont,
    pricingFont,
    infoFont,
    onButtonPress,
    ...attributes
  } = props;
  return (
    <View
      {...attributes}
      style={[styles.container, containerStyle && containerStyle]}
    >
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        <Text
          style={[
            styles.pricingTitle,
            { color },
            titleFont && { fontFamily: titleFont },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.pricingPrice,
            pricingFont && { fontFamily: pricingFont },
          ]}
        >
          {price}
        </Text>
        {info.map((item, i) => {
          return (
            <Text
              key={i}
              style={[styles.pricingInfo, infoFont && { fontFamily: infoFont }]}
            >
              {item}
            </Text>
          );
        })}
        <Button
          icon={{ name: button.icon }}
          buttonStyle={[
            styles.button,
            button.buttonStyle,
            { backgroundColor: color },
          ]}
          fontFamily={'Montserrat-Bold'}
          title={button.title}
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  titleFont: PropTypes.string,
  onButtonPress: PropTypes.func,
  pricingFont: PropTypes.string,
  infoFont: PropTypes.string,
  buttonFont: PropTypes.string,
};

PricingCard.defaultProps = {
  color: colors.primary,
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    padding: 2,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  pricingTitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  pricingPrice: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
  },
  pricingInfo: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: colors.grey3,
    fontFamily: 'Montserrat-Regular',
  },
  buttonTitle: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: colors.grey3,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PricingCard;
