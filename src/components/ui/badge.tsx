
import React from 'react'
export function Badge({ className='', children, variant='default' }: any) {
  const styles = variant==='outline' ? 'border border-gray-300 text-gray-700 bg-white'
    : variant==='secondary' ? 'bg-gray-100 text-gray-900'
    : 'bg-indigo-100 text-indigo-900';
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${styles} ${className}`}>{children}</span>
}
