import { Check, Star } from 'lucide-react'
import { Icons } from './Icons'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Reviews } from './Reviews'

const ValueSection = () => {
  return (
    <section className='bg-slate-100 py-10'>
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
            className='w-24 order-0 lg:order-2'
            alt=''
            aria-hidden='true'
          />
        </div>

        <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
          {/* User Review */}
          <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
            <div className='flex gap-0.5 mb-2'>
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
            </div>
            <div className='text-lg leading-8'>
              <p>
                "The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months not and{' '}
                <span className='p-0.5 bg-slate-800 text-white'>
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into a
                yellow-ish color after a couple weeks. Love it."{' '}
              </p>
            </div>
            <div className='flex gap-4 mt-2'>
              <img
                src='/users/user-1.png'
                className='rounded-full h-12 object-cover'
                alt='user'
              />
              <div className='flex flex-col'>
                <p className='font-semibold'>Johnathan</p>
                <div className='flex gap-1.5 items-center text-zinc-600'>
                  <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                  <p className='text-sm'>Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd user review */}
          <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
            <div className='flex gap-0.5 mb-2'>
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
              <Star className='h-5 w-5 text-green-600 fill-green-600' />
            </div>
            <div className='text-lg leading-8'>
              <p>
                "I usually keep my phone together with my keys in my pockets
                whick lead to some pretty heavy scratchmarks on all of my
                previous phone cases. Besides barely noticeable wear and tear on
                a corner, it{' '}
                <span className='p-0.5 bg-slate-800 text-white'>
                  still looks brand new almost 2 years later
                </span>
                Amazing."{' '}
              </p>
            </div>
            <div className='flex gap-4 mt-2'>
              <img
                src='/users/user-4.jpg'
                className='rounded-full h-12 object-cover'
                alt='user'
              />
              <div className='flex flex-col'>
                <p className='font-semibold'>Danny</p>
                <div className='flex gap-1.5 items-center text-zinc-600'>
                  <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                  <p className='text-sm'>Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className='pt-16'>
        <Reviews />
      </div>
    </section>
  )
}

export default ValueSection
