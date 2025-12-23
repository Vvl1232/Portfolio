import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // You can also log to an error tracking service here
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--surface-1)] p-6">
          <div className="max-w-md w-full text-center p-8 rounded-xl border border-red-500/30 bg-[var(--surface-2)]">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Oops! Something went wrong.
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              We're sorry, but we've encountered an unexpected error. 
              The issue has been logged and we're working to fix it.
            </p>
            <div className="bg-red-500/10 p-4 rounded-lg mb-6 text-left">
              <p className="text-sm font-mono text-red-300 break-words">
                {this.state.error?.toString()}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Reload Page
              </button>
              <Link
                to="/"
                className="px-4 py-2 border border-[var(--border-color)] hover:bg-[var(--surface-3)] rounded-lg transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
