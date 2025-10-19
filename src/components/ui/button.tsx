
import React from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean, variant?: 'default'|'secondary'|'outline' }
export function Button({ className='', children, asChild=false, variant='default', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';
  const styles = variant === 'secondary' ? 'bg-gray-100 hover:bg-gray-200 text-gray-900'
    : variant === 'outline' ? 'border border-gray-300 hover:bg-gray-50'
    : 'bg-indigo-600 hover:bg-indigo-700 text-white';
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, { className: `${base} rounded-2xl px-4 py-2 ${styles} ${ (children as any).props.className||'' }` })
  }
  return <button className={`${base} rounded-2xl px-4 py-2 ${styles} ${className}`} {...rest}>{children}</button>
}
