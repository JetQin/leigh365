import axios from 'axios';

const apiUrl = 'http://synebusiness.cn/reportApi.php';

class ReportApi {
  constructor() {
    this.apiUrl = apiUrl;
  }
  async fetchAnalystName(name) {
    const params = new FormData();
    params.append('type', 'anyalyst_basic');
    params.append('analystName', name);
    const response = await axios.post(this.apiUrl, params);
    return response.data;
  }

  async fetchBasicReport(stockCode) {
    console.log(stockCode);
    const params = new FormData();
    params.append('type', 'basic_report');
    params.append('code', stockCode);
    const response = await axios.post(this.apiUrl, params);
    console.log(response);
    return response.data;
  }

  async fetchStudyReport(stockCode) {
    const params = new FormData();
    params.append('type', 'study_report');
    params.append('code', stockCode);
    const response = await axios.post(this.apiUrl, params);
    console.log(response);
    return response.data;
  }

  async fetchFinancialReport(stockCode) {
    const params = new FormData();
    params.append('type', 'financial_report');
    params.append('code', stockCode);
    const response = await axios.post(this.apiUrl, params);
    console.log(response);
    return response.data;
  }
}
export {
  ReportApi,
};
