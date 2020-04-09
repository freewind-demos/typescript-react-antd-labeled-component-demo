import {Input, Select, Form} from 'antd';
import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import React from 'react'
import InputLabel from './InputLabel';

export default function Hello() {
  return <Row>
    <Col>
      <InputLabel label={'Hello'}>
        <Input/>
      </InputLabel>
    </Col>
    <Col>
      <InputLabel label={'Hello'}>
        <Select placeholder="Select">
          <Select.Option value="aaa">aaa</Select.Option>
          <Select.Option value="bbb">bbb</Select.Option>
        </Select>
      </InputLabel>
    </Col>
  </Row>
};
