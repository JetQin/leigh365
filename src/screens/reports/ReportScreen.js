import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, } from 'native-base';
import { Icon, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import { LoadingScreen } from '../../commons';
import { BasicReport, StudyReport, FinancialReport } from './components';
import { ReportApi } from '../../../constants/reportApi';

import headerstyles from '../../commons/styles/HeaderStyle';
import styles from './styles/ReportScreen';

const reportApi = new ReportApi();

class ReportScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerStyle = headerstyles.headerStyle;
    const headerLeft = (
      <View style={headerstyles.headerLeft}>
        {/* <Button onPress={() => navigation.navigate('Setting')}> */}
          <Text style={headerstyles.text}>{params.title}</Text>
        {/* </Button> */}
      </View>
    );

    const headerRight = (
      <View style={headerstyles.headerRight}>
        <TouchableOpacity onPress={params.addToStockList} >
          {/* <View style={styles.headerBtn}>
            <Text style={styles.headerText}>+加入自选行情</Text>
          </View> */}
          <Button
              icon={{ name: 'add' }}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, left: 0, top: 5 }}
              title='加入自选'
            />
        </TouchableOpacity>
      </View>
    );
    return { headerStyle, headerLeft, headerRight };
  };
  static defaultProps = {
    reportApi,
  }

  constructor(props) {
    super(props);
    this.state = {
      stockCode: '',
      loading: false,
      basic_report: {},
      study_report: {},
      financial_report: {},
    };
    this.loadBaicReport = this.loadBaicReport.bind(this);
    this.loadFinancialReport = this.loadFinancialReport.bind(this);
    this.loadStudyReport = this.loadStudyReport.bind(this);
    this.addToStockList = this.addToStockList.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const basic_report_view = this.basic_report_view;
    const study_report_view = this.study_report_view;
    const financial_report_view = this.financial_report_view;

    if (params.code) {
      this.setState({ stockCode: params.code });
      this.props.navigation.setParams({ title: params.name });
      this.props.navigation.setParams({ addToStockList: this.addToStockList });
      this.loadBaicReport(params.code);
    }
  }

  async loadBaicReport(code) {
    const response = await this.props.reportApi.fetchBasicReport(code);
    this.setState({ basic_report: response, loading: true });
    if (this.basic_report_view) {
      this.basic_report_view.update();
    }
  }

  async loadStudyReport() {
    const response = await this.props.reportApi.fetchStudyReport(this.state.stockCode);
    this.setState({ study_report: response });
    this.study_report_view.update();
  }

  async loadFinancialReport() {
    const response = await this.props.reportApi.fetchFinancialReport(this.state.stockCode);
    this.setState({ financial_report: response });
    this.financial_report_view.update();
  }

  addToStockList() {
    console.log('add user stock list');
    console.log(this.state.stockCode);
  }

  changeTab(ref) {
    if (ref.props.heading === '基本信息') {
      this.loadBaicReport();
    }
    if (ref.props.heading === '研报') {
      this.loadStudyReport();
    }
    if (ref.props.heading === '财报') {
      this.loadFinancialReport();
    }
  }

  render() {
    if (!this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <Tabs onChangeTab={({ ref }) => this.changeTab(ref)} >
          <Tab heading='基本信息' textStyle={styles.tabHeading} activeTextStyle={styles.tabHeading}>
            <BasicReport
              ref={(c) => (this.basic_report_view = c)}
              data={this.state.basic_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
          <Tab heading='研报' textStyle={styles.tabHeading} activeTextStyle={styles.tabHeading}>
            <StudyReport
              ref={(c) => (this.study_report_view = c)}
              data={this.state.study_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
          <Tab heading='财报' textStyle={styles.tabHeading} activeTextStyle={styles.tabHeading}>
            <FinancialReport
              ref={(c) => (this.financial_report_view = c)}
              data={this.state.financial_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
        </Tabs>
        <View style={styles.closeBtnContainer}>
          <Button transparent onPress={() => this.props.navigation.goBack()} style={styles.closeBtn}>
            <Icon name="close" type='Ionicons' color={Colors.$whiteColor} size={16}/>
          </Button>
        </View>
      </View>
    );
  }
}

export default ReportScreen;
