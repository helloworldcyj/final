import moment from 'moment';

const TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';

//根据 QueryString 参数名称获取值
export function getQueryStringByName(name) {
    let result = window.location.search.match(
      new RegExp('[?&]' + name + '=([^&]+)', 'i'),
    );
    if (result == null || result.length < 1) {
      return '';
    }
    return result[1];
}

export function renderTimestamp(timestamp) {
    return moment.unix(timestamp).format(TIMESTAMP_FORMAT)
} 

export const TEST = 'TEST';