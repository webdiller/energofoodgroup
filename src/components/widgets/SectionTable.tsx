// TableComponent.tsx
import React from 'react';

// Define TypeScript interfaces
export interface TableRow {
  pos: string;
  sales: number;
  score: number;
}

export interface TableComponentProps {
  data: TableRow[];
  showTotal?: boolean;
}

export const SectionTable: React.FC<TableComponentProps> = ({
  data,
  showTotal = true
}) => {
  // Calculate totals if needed
  const totalSales = showTotal ? data.reduce((sum, row) => sum + row.sales, 0) : 0;
  const totalScore = showTotal ? data.reduce((sum, row) => sum + row.score, 0) : 0;

  return (
    <div className="w-full">
      {/* Totals */}
      {showTotal && (
        <div className="flex space-x-4 mb-4">
          <div className="px-4 py-2 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600">Total Sales</p>
            <p className="text-lg font-bold text-blue-800">{totalSales}</p>
          </div>
          <div className="px-4 py-2 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600">Total Score</p>
            <p className="text-lg font-bold text-green-800">{totalScore}</p>
          </div>
        </div>
      )}

      {/* Table container with horizontal scroll on mobile */}
      <div className="overflow-x-auto -mx-4 sm:mx-0 sm:rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className='[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium [&>th]:text-gray-500 [&>th]uppercase [&>th]tracking-wide'>
              <th scope="col" className="">
                POS
              </th>
              <th scope="col" className="">
                Sales
              </th>
              <th scope="col" className="">
                Score
              </th>
              {showTotal ? <th scope="col" className="">
                Status
              </th> : null}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{row.pos}</div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${row.sales > 0 ? 'text-green-600 font-bold' : 'text-gray-500'}`}>
                    {row.sales}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${row.score > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                    }`}>
                    {row.score}
                  </span>
                </td>
                {!showTotal ? null : (
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {row.sales > 0 ? 'Active' : 'No sales'}
                    </div>
                  </td>
                )}  
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile hint - only shows on small screens */}
      <div className="mt-2 text-xs text-gray-500 text-center sm:hidden">
        ← Scroll horizontally to view all columns →
      </div>
    </div>
  );
};