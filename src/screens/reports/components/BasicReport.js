import React, { Component } from 'react';
import { Tabs, Tab } from 'native-base';
import { ScrollView, View, WebView, Text, AsyncStorage, Alert } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
import { WordpressApi } from '../../../../constants/api';
import styles from './styles/BasicReport';
import Colors from '../../../../constants/Colors';

const wordpressApi = new WordpressApi();

class BasicReport extends Component {
  static defaultProps ={
    wordpressApi,
  }
  constructor(props) {
    super(props);
    this.state = {
      is_paid: true,
      code: '',
      priceInfo: {
        price: '--',
        price_change: '--',
        p_change: '--',
        open: '--',
        close: '--',
        max: '--',
        min: '--',
        weekMax: '--',
        weekMin: '--',
      },
      basicInfo: {
        breifInfo: '--',
        industry: '--',
        company: '--',
      },
      stockInfo: {
        turnoverVolume3M: '--',
        pettm: '--',
        floatShare: '--',
        eps: '--',
        basicEps: '--',
        highprice: '--',
        lowprice: '--',
        isin: '--',
        ceo: '--',
        betaHS300: '--',
        employee: '--',
      },
      stockShare: {
        holdSumChangeRate: '--',
        holdSumChange: '--',
        holdSum: '--',
        institutionHoldProp: '--',
        floatShare: '--',
        institutionHolding: '--',
      },
    };
    this.update = this.update.bind(this);
    this.getFixedNumber = this.getFixedNumber.bind(this);
  }

  async componentDidMount() {
    /**
     * 登录时判断此用户是否为付费用户，如果是存储该属性到本地isPaid=true
     */
    // const isPaid = await AsyncStorage.getItem('@isPaid');
    // this.setState({ is_paid: isPaid === undefined ? true : isPaid });
  }


  update() {
    this.setState({
      code: this.props.code,
      priceInfo: this.props.data.price_info,
      basicInfo: this.props.data.basic_info,
      stockInfo: this.props.data.stock_info,
    });
  }

  getFixedNumber(number){
    return parseFloat(number).toFixed(2);
  }
  render() {
    let now = new Date();
    let result = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate() ;
    return (
      <View style={styles.root}>
        <ScrollView style={styles.root} >
          <View style={styles.lineContainer}>
            <View style={styles.lineLeftContainer}>
              <Text style={styles.headerText}>{this.getFixedNumber(this.state.priceInfo.price)}</Text>
            </View>
            <View style={styles.lineRightContainer}>
              {
                this.state.priceInfo.price_change > 0 ?
                  (<Icon type='font-awesome' name='sort-up' color={Colors.$redColor} iconStyle={{ paddingLeft: 20, paddingTop: 20 }} />) :
                  (<Icon type='font-awesome' name='sort-down' color={Colors.$greenColor} iconStyle={{ paddingLeft: 20, paddingBottom: 5}} />)
              }
              <Text style={this.state.priceInfo.price_change > 0 ? styles.headerRedText : styles.headerGreenText}>
                {this.getFixedNumber(this.state.priceInfo.price_change)}
              </Text>
              <Text style={this.state.priceInfo.price_change > 0 ? styles.headerRedText : styles.headerGreenText}>
                {this.getFixedNumber(this.state.priceInfo.p_change*100).concat('%')}
              </Text>
            </View>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.lineLeftContainer}>
              <Text style={styles.headerSubText}>{result}</Text>
            </View>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.lineLeftContainer}>
              <Text style={styles.headerSubText}>成交量:</Text>
            </View>
            <Text style={styles.headerSubText}>{this.getFixedNumber(this.state.priceInfo.price)}</Text>
          </View>
          <Card>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>现价:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.price}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>现价:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.price}</Text>
              </View>
            </View>
            <WebView
              style={styles.chartContainer}
              scrollEnabled={false}
              automaticallyAdjustContentInsets
              source={{ uri: 'http://synebusiness.cn/basic_report_chart.html?code='.concat(this.state.code) }}
            />
            <Button
              rightIcon={{ name: 'add' }}
              backgroundColor='#03A9F4'
              fontSize={14}
              buttonStyle={{ width: 300, height:30, margin: 0, left: 0, top: 5 }}
              title='旋转至横屏查看图表'
            />
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>今开:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.priceInfo.price}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>昨收:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.priceInfo.close}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>今日最高:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.priceInfo.max}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>今日最低:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.priceInfo.min}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>52周最高:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.highprice}</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.label}>52周最低:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.lowprice}</Text>
              </View>
            </View>
          </Card>
          <Card title='公司概况'>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>所属行业:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.basicInfo.industry}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>公司简介:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.labelText}>{this.state.basicInfo.breifInfo}</Text>
              </View>
            </View>
          </Card>
          {
            !this.state.is_paid ?
              (<View>
                <Button
                  title='解锁更多数据'
                  backgroundColor={Colors.$blueBtnBackgroundColor}
                  textStyle={{ color: Colors.$whiteColor }}
                  onPress={() => this.props.nav.navigate('Profile')}
                />
              </View>)
              :
              (<View style={styles.root}>
                <Tabs initialPage={0} locked >
                  <Tab heading='公司概况'>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>ISIN代码</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.isin}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>CEO</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.ceo}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>员工人数</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.employee}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>滚动市盈率</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.pettm}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>流通股</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.floatShare}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>季度每股收益率</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.eps}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>年度每股收益率</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.basicEps}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>Beta值(相对沪深300每年)</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockInfo.betaHS300}</Text>
                      </View>
                    </View>
                  </Tab>
                  <Tab heading='股东'>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>增减幅度</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSumChangeRate}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>持股数量增减(股)</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSumChange}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>持股数</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSum}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>机构持股比例合计(%)</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSum}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>流通股份(股)</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSum}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.label}>机构持股数量合计(股)</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.labelText}>{this.state.stockShare.holdSum}</Text>
                      </View>
                    </View>
                  </Tab>
                </Tabs>
                {/* 
                <Card title='机构持股'>
                  <View style={styles.lineContainer}>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.label}>机构持股比例合计(%):</Text>
                    </View>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.label}>流通股份(股):</Text>
                    </View>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.label}>机构持股数量(股):</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.institutionHoldProp}</Text>
                    </View>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.floatShare}</Text>
                    </View>
                    <View style={styles.narrowColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
                    </View>
                  </View>
                </Card>
                <Card title='大股东介绍'>
                  <View style={styles.lineContainer}>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.label}>大股东地位:</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.label}>大股东名称:</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.label}>更新时间:</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.label}>大股东持股比例:</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.institutionHoldProp}</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.floatShare}</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
                    </View>
                    <View style={styles.normalColumnContainer}>
                      <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
                    </View>
                  </View>
                </Card> */}
              </View>
              )}
        </ScrollView>
      </View>

    );
  }
}

export default BasicReport;
