export default function ProductsLoading() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          <div className="h-12 w-64 bg-gray-200 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Filter Bar Skeleton */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex gap-2 overflow-hidden w-full md:w-auto">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
              ))}
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="h-10 w-full sm:w-64 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-10 w-full sm:w-40 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="h-64 w-full bg-gray-200 rounded-xl animate-pulse mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
