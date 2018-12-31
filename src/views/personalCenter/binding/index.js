import React from 'react';
import { Divider, Button } from 'antd';
// import PropTypes from 'prop-types';
import styles from './binding.less';

export default class Info extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      //   nickName: '冰琉璃2050',
      //   srcImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    };
  }

  render() {
    return (
      <div className={styles.binding_wrapper}>
        <h2 className={`add_h2 ${styles.h2}`}>账号绑定</h2>
        <Divider />
        <div className={styles.binding_line}>
          <div className={styles.binding_line_left}>
            <span>账号名:</span>
            <span>未绑定</span>
          </div>
          <Button type="primary">绑定</Button>
        </div>
        <Divider dashed />
        <div className={styles.binding_line}>
          <div className={styles.binding_line_left}>
            <span>Email:</span>
            <span>未绑定</span>
          </div>
          <Button type="primary">绑定</Button>
        </div>
        <Divider dashed />
        <div className={styles.binding_line}>
          <div className={styles.binding_line_left}>
            <span>手机:</span>
            <span>110</span>
          </div>
          <Button type="primary">解绑</Button>
        </div>
      </div>
    );
  }
}
