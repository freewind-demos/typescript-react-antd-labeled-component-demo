import React from 'react';
import {Input} from 'antd';

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
};

// label height should be hardcoded to 32px, otherwise in compact mode,
// it gets shorter than normal
export default function LabeledInput({label, children}: Props) {
  return (
    <Input.Group>
      <span
        className="ant-input-group-addon"
        style={{
          height: 32,
          width: 'auto',
          verticalAlign: 'middle',
        }}
      >
        {label}
      </span>
      {children}
    </Input.Group>
  );
}
