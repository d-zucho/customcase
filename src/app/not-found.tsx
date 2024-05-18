import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const PageNotFound = () => {
  return (
    <div className=''>
      <MaxWidthWrapper className='text-center  w-full min-h-full space-y-12 py-20'>
        <img src='/snake-1.png' alt='' className='w-20 h-28 mx-auto' />
        <h1>404 - Page Not Found</h1>
      </MaxWidthWrapper>
    </div>
  )
}

export default PageNotFound
