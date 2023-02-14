import React from "react";
import { Checkbox, Form, FormInstance, Input, InputNumber, Select } from "antd";
import { CompileOptions } from "@/App";
import { THEMES } from "@/constant";

function FormComponent(props: {
  form: FormInstance<any>;
  onFinish: () => null;
  onValuesChange: (changedFields: any) => void;
  initialValues: CompileOptions;
  codeMirrorOptions: {
    mode: string;
    lineNumbers: boolean;
    theme: string;
    matchBrackets: boolean;
    lineWrapping: boolean;
  };
}) {
  return (
    <Form
      form={props.form}
      onFinish={props.onFinish}
      onValuesChange={props.onValuesChange}
      initialValues={props.initialValues}
      layout={"inline"}
    >
      <Form.Item valuePropName="checked" name="splitType">
        <Checkbox>Split Object</Checkbox>
      </Form.Item>
      <Form.Item valuePropName="checked" name="parseArray">
        <Checkbox>Parse Array</Checkbox>
      </Form.Item>
      <Form.Item valuePropName="checked" name="optimizeArrayOptional">
        <Checkbox>Optimize Array</Checkbox>
      </Form.Item>
      <Form.Item valuePropName="checked" name="required">
        <Checkbox>Required</Checkbox>
      </Form.Item>
      <Form.Item valuePropName="checked" name="semicolon">
        <Checkbox>Semi</Checkbox>
      </Form.Item>
      <Form.Item name="genType" label="genType">
        <Select
          style={{ width: 120 }}
          options={[
            {
              value: "type",
              label: "type",
            },
            {
              value: "interface",
              label: "interface",
            },
          ]}
        />
      </Form.Item>

      <Form.Item name="typePrefix" label="Prefix">
        <Input />
      </Form.Item>
      <Form.Item name="typeSuffix" label="Suffix">
        <Input />
      </Form.Item>
      <Form.Item name="indent" label="Indent">
        <InputNumber max={4} min={2} />
      </Form.Item>

      <Form.Item name="comment" label="Comment">
        <Select
          style={{ width: 120 }}
          options={[
            {
              value: "inline",
              label: "inline",
            },
            {
              value: "block",
              label: "block",
            },
            {
              value: "false",
              label: "false",
            },
          ]}
        />
      </Form.Item>

      <Form.Item name="theme" label="Theme">
        <Select style={{ width: 120 }} options={THEMES} />
      </Form.Item>
    </Form>
  );
}

export default FormComponent;
