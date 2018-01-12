import React, { Component } from 'react';
import { ScrollView, View, Text, WebView, AsyncStorage } from 'react-native';
import { Card, Button } from 'react-native-elements';
import StudyReportTable from './StudyReportTable';
import styles from './styles/StudyReport';
import Colors from '../../../../constants/Colors';

class StudyReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_paid: false,
      code: '',
      basic: {
        buy: '--',
        hold: '--',
        sell: '--',
        total: '--',
      },
      chartData: [
        { name: '买入', desc: 'buy', value: 0 },
        { name: '持有', desc: 'hold', value: 0 },
        { name: '卖出', desc: 'sell', value: 0 },
      ],
      basic_rating: [],
      basic_comment: [],
    };
    this.update = this.update.bind(this);
    this.getBuyPercent = this.getBuyPercent.bind(this);
    this.getHoldPercent = this.getHoldPercent.bind(this);
    this.getSellPercent = this.getSellPercent.bind(this);
  }

  async componentDidMount() {
    /**
     * 登录时判断此用户是否为付费用户，如果是存储该属性到本地isPaid=true
     */
    // const isPaid = await AsyncStorage.getItem('@isPaid');
    // this.setState({ is_paid: isPaid === undefined ? false : isPaid });
  }

  update() {
    this.setState({
      basic: this.props.data.basic,
      code: this.props.data.code,
      chartData: [
        { name: '买入', desc: 'buy', value: parseInt(this.props.data.basic.buy, 10) },
        { name: '持有', desc: 'hold', value: parseInt(this.props.data.basic.hold, 10) },
        { name: '卖出', desc: 'sell', value: parseInt(this.props.data.basic.sell, 10) },
      ],
      basic_rating: this.props.data.basic_rating,
      basic_comment: this.props.data.basic_comment,
    });
  }
  
  getBuyPercent(){
    if('--' === this.state.basic.buy || '--' === this.state.basic.total){
      return 0;
    }
    return (parseFloat(this.state.basic.buy)/parseFloat(this.state.basic.total) * 100).toFixed(2);
  }

  getHoldPercent(){
    if('--' === this.state.basic.buy || '--' === this.state.basic.total){
      return 0;
    }
    return (parseFloat(this.state.basic.hold)/parseFloat(this.state.basic.total) * 100).toFixed(2);
  }

  getSellPercent(){
    if('--' === this.state.basic.buy || '--' === this.state.basic.total){
      return 0;
    }
    return (parseFloat(this.state.basic.sell)/parseFloat(this.state.basic.total) * 100).toFixed(2);
  }

  render() {
    let url = 'http://synebusiness.cn/study_report_chart.html?';
    url = url.concat('buy=').concat(this.state.basic.buy);
    url = url.concat('&hold=').concat(this.state.basic.hold);
    url = url.concat('&sell=').concat(this.state.basic.sell);

    const financialTableUrl = 'http://synebusiness.cn/study_report_table.html?code=';
    financialTableUrl.concat(this.state.code);
    return (
      <ScrollView style={styles.root} >
        <View style={styles.rowContainer}>
          <Text style={styles.headerText}>根据{this.state.basic.total}份研报</Text>
        </View>
        <View style={styles.chart} >
          <WebView
            style={styles.chartContainer}
            source={{ uri: url }}
            scrollEnabled={false}
            automaticallyAdjustContentInsets
            contentInset={{ top: 0, left: 0 }}
          />
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.columnContainer}>
            <View style={styles.redDot}/>
            <Text style={styles.label}>{this.state.basic.buy} 买入</Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.grayDot}/>
            <Text style={styles.label}>{this.state.basic.hold} 持有</Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.greenDot}/>
            <Text style={styles.label}>{this.state.basic.sell} 卖出</Text>
          </View>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.columnValueContainer}>
            <Text style={styles.labelValue}>{this.getBuyPercent()} %</Text>
          </View>
          <View style={styles.columnValueContainer}>
            <Text style={styles.labelValue}>{this.getHoldPercent()} %</Text>
          </View>
          <View style={styles.columnValueContainer}>
            <Text style={styles.labelValue}>{this.getSellPercent()} %</Text>
          </View>
        </View>
        {
            this.state.is_paid ?
            (<View>
              <Button
                buttonStyle={{ height:30, margin: 0, top: 5 }}
                backgroundColor={Colors.$unlockBtnBackgroundColor}
                textStyle={{ color: Colors.$whiteColor }}
                title='解锁更多数据' 
                onPress={() => this.props.nav.navigate('Profile')}
              />
            </View>)

            :
            (<View style={styles.chart} >
              <StudyReportTable rating={this.state.basic_rating} comment={this.state.basic_comment} />
            </View>)
        }
      </ScrollView>
    );
  }
}

export default StudyReport;
