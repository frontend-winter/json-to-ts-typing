import React, { useMemo } from "react";
import { Card, Col, FormInstance, Layout, Row } from "antd";
import ReactCodemirror2 from "@/components/ReactCodemirror2";
import { CompileOptions } from "@/App";
import FormComponent from "./components/FormComponent";
const { Content } = Layout;

function ContentComponent(props: {
  form: FormInstance<any>;
  onFinish: () => null;
  onValuesChange: (changedFields: any) => void;
  initialValues: CompileOptions & { theme: string };
  codeMirrorOptions: {
    mode: string;
    lineNumbers: boolean;
    theme: string;
    matchBrackets: boolean;
    lineWrapping: boolean;
  };
  factory: () => JSX.Element;
  value: any;
}) {
  return (
    <Content
      style={{
        // minHeight: "calc(100vh - 133px)",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <Card>
        <FormComponent
          form={props.form}
          onFinish={props.onFinish}
          onValuesChange={props.onValuesChange}
          initialValues={props.initialValues}
          codeMirrorOptions={props.codeMirrorOptions}
        />
      </Card>
      <Row>
        <Col span={12}>
          <Card>{useMemo(props.factory, [props.codeMirrorOptions.theme])}</Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactCodemirror2
              options={props.codeMirrorOptions}
              value={props.value}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
}

export default ContentComponent;
