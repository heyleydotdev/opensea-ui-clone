import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'h-fit whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-semibold text-slate-900 focus:outline-none lg:px-6 lg:py-3 lg:text-base',
        className
      )}
      {...rest}
    />
  )
}
