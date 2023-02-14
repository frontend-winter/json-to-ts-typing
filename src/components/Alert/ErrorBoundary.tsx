import React from "react";
import { Button } from "antd";

interface ErrorBoundaryProps {
  message?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

interface ErrorBoundaryStates {
  error?: Error | null;
  info?: {
    componentStack?: string;
  };
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryStates
> {
  state = {
    error: undefined,
    info: {
      componentStack: "",
    },
  };

  componentDidCatch(error: Error | null, info: object) {
    // reference： https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
    this.setState({ error, info });
  }

  render() {
    const { message, description, children } = this.props;
    const { error, info } = this.state;
    const componentStack =
      info && info.componentStack ? info.componentStack : null;
    const errorMessage =
      typeof message === "undefined" ? (error || "").toString() : message;
    const errorDescription =
      typeof description === "undefined" ? componentStack : description;
    if (error) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Button type={"primary"} onClick={() => window.location.reload()}>
            Reload
          </Button>
          <div>
            <span>{errorMessage?.toString()}</span>
            {<pre>{errorDescription}</pre>}
          </div>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
