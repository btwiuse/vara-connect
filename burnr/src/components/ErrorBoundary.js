import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import { logger } from "@polkadot/util";
import { BURNR_WALLET } from "../utils/constants";
const l = logger(BURNR_WALLET);
class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        l.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return _jsx("h1", { children: "There was an error" });
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JCb3VuZGFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QixNQUFNLE9BQU8sQ0FBQTtBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBVWpELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUU5QixNQUFNLGFBQWMsU0FBUSxTQUF1QjtJQUFuRDs7UUFDUyxVQUFLLEdBQVU7WUFDcEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtJQWtCSCxDQUFDO0lBaEJRLE1BQU0sQ0FBQyx3QkFBd0I7UUFDcEMsNkRBQTZEO1FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEtBQVksRUFBRSxTQUFvQjtRQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsT0FBTyw4Q0FBMkIsQ0FBQTtTQUNuQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztDQUNGO0FBRUQsZUFBZSxhQUFhLENBQUEifQ==