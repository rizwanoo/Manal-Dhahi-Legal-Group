import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Intercept third-party extension errors (e.g. MetaMask inpage.js)
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      event.filename?.includes('chrome-extension://') ||
      event.filename?.includes('inpage.js') ||
      event.message?.includes('MetaMask') ||
      event.message?.includes('ethereum')
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const msg = String(typeof reason === 'string' ? reason : reason?.message || '');
    const stack = String(reason?.stack || '');
    if (
      msg.includes('MetaMask') ||
      msg.includes('ethereum') ||
      stack.includes('chrome-extension://') ||
      stack.includes('inpage.js')
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log if not a third-party extension error
    if (!error?.stack?.includes('chrome-extension://')) {
      console.error('Applet Error Caught:', error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-3xl border border-[#E8DFD3] shadow-lg space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#581D2D]">
              Manal Dhahi Legal Group
            </h2>
            <p className="text-xs text-[#6B7280]">
              An unexpected display issue occurred. Please refresh the page to reload.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="py-2.5 px-6 rounded-xl bg-[#581D2D] text-white text-xs font-semibold cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
