'use client'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { COLORS } from '@/validators/option-validator'
import { Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const DesignOptions = () => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number]
  }>({
    color: COLORS[0],
  })

  return (
    <div className='h-[37.5rem] flex flex-col bg-white'>
      <ScrollArea className='relative flex-1 overflow-auto'>
        <div
          aria-hidden='true'
          className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'
        />

        <div className='px-8 pb-12 pt-8'>
          <h2 className='tracking-tight font-bold text-3xl'>
            Customize your case
          </h2>
          {/* Divider */}
          <div className='w-full h-px bg-zinc-200 my-6' />

          <div className='relative mt-4 h-full flex flex-col justify-between'>
            <RadioGroup
              value={options.color}
              onChange={(val) => {
                setOptions((prev) => ({
                  ...prev,
                  color: val,
                }))
              }}
            >
              <Label>Color: {options.color.label}</Label>
              <div className='mt-3 flex items-center space-x-4'>
                {COLORS.map((color) => (
                  <Radio
                    key={color.label}
                    value={color}
                    className={({ checked }) =>
                      cn(
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2',
                        checked ? `border-${color.tw}` : 'border-transparent'
                      )
                    }
                  >
                    {/* <Label>{color.label}</Label> */}
                    <span
                      className={cn(
                        `bg-${color.tw}`,
                        'h-8 w-8 rounded-full border-black border-opacity-10'
                      )}
                    ></span>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default DesignOptions
