import { STATS_TABLE } from '@/consts'
import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './Button'
import Container from './Container'

export default function StatsTable() {
  return (
    <Container className="pt-12">
      <div className="flex justify-between border-b">
        <ul className="mt-auto flex gap-x-8 font-poppins  text-base font-semibold lg:text-2xl">
          <li>
            <button className="border-b-2 border-slate-900 pb-4 text-slate-900">Trending</button>
          </li>
          <li>
            <button className="pb-4 transition-colors duration-300 hover:text-slate-900">Top</button>
          </li>
        </ul>
        <div className="flex gap-x-2 pb-2 lg:gap-x-4">
          <div className="hidden sm:flex">
            <DurationButton className="cursor-default rounded-l-xl border-l bg-slate-100 text-slate-900">1h</DurationButton>
            <DurationButton>6h</DurationButton>
            <DurationButton>24h</DurationButton>
            <DurationButton className="rounded-r-xl border-r">7d</DurationButton>
          </div>
          <Button>View All</Button>
        </div>
      </div>
      <div className="gg overflow-auto py-4">
        <div className="flex gap-x-8 md:gap-x-24">
          <StatTable data={STATS_TABLE.slice(0, 5)} indexStart={1} />
          <StatTable data={STATS_TABLE.slice(-5)} indexStart={6} />
        </div>
      </div>
    </Container>
  )
}

function StatTable({ data, indexStart }: { data: typeof STATS_TABLE; indexStart: number }) {
  return (
    <table className="w-full flex-1 whitespace-nowrap">
      <thead>
        <tr className="text-left [&>th]:px-4 [&>th]:pb-4 [&>th]:text-xs [&>th]:font-normal first:[&>th]:pl-2 lg:[&>th]:text-sm">
          <th className="w-1">#</th>
          <th>Collection</th>
          <th className="hidden md:table-cell">Floor price</th>
          <th className="text-right">Volume</th>
        </tr>
      </thead>
      <tbody className="text-left text-sm font-semibold text-black md:text-base">
        {data.map((item, i) => (
          <tr className="cursor-pointer hover:bg-slate-100 [&>td]:px-4 [&>td]:py-3 first:[&>td]:pl-2" key={i + indexStart}>
            <td className="w-1">{i + indexStart}</td>
            <td>
              <div className="flex items-center gap-x-3 pr-6 md:gap-x-6">
                <div className="relative aspect-square w-14 overflow-hidden rounded-xl border lg:w-[4.25rem]">
                  <img src={`/carousel/${item.image}`} className="absolute inset-0 h-full w-full object-cover object-center" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs font-normal text-slate-500 md:hidden">
                    Floor: <span className="font-semibold">{item.floor} ETH</span>
                  </p>
                </div>
              </div>
            </td>
            <td className="hidden md:table-cell">{item.floor} ETH</td>
            <td className="text-right">{item.volume} ETH</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function DurationButton({
  children,
  className,
}: {
  children: ReactNode
  className?: HTMLAttributes<HTMLButtonElement>['className']
}) {
  return (
    <button className={twMerge('h-fit border-y px-3 py-2 text-sm font-semibold lg:px-4 lg:py-3 lg:text-base', className)}>
      {children}
    </button>
  )
}
