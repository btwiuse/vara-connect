import { Component, ErrorInfo, ReactNode } from "react";
interface Props {
    children: ReactNode;
}
interface State {
    hasError: boolean;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | JSX.Element | import("react").ReactFragment | null | undefined;
}
export default ErrorBoundary;
