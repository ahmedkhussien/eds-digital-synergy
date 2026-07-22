"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-gray-50">
          <div className="max-w-md space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Critical System Error</h2>
            <p className="text-gray-600 text-sm">
              A critical layout error occurred in the EDS Eco environment. 
            </p>
            <button
              onClick={() => reset()}
              className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg cursor-pointer"
            >
              Reset Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
