import { Icons } from './Icons'
import MaxWidthWrapper from './MaxWidthWrapper'

const ValueSection = () => {
  return (
    <section className='bg-slate-100'>
      <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
        <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
          <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
            What our
            <span className='relative px-2'>
              customers
              <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
            </span>{' '}
            say
          </h2>
          <img
            src='/snake-2.png'
            className='w-24 order-0 lg:order02'
            alt=''
            aria-hidden='true'
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ValueSection
