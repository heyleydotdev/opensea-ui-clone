import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
}) {
  return <div className={twMerge('mx-auto max-w-8xl px-4 md:px-6 lg:px-8 2xl:px-14', className)}>{children}</div>
}
