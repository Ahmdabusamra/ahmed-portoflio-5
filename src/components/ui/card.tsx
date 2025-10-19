
import React from 'react'
export function Card({ className='', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-white border border-gray-200 ${className}`}>{children}</div>
}
export function CardContent({ className='', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>
}
