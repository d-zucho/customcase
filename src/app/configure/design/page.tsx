import { db } from '@/db'
import { notFound } from 'next/navigation'
import DesignConfigurator from './DesignConfigurator'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
    // this means that searchParams is an object with keys that
    // are strings and values that are either strings, arrays of strings, or undefined
  }
}

const Page = async ({ searchParams }: PageProps) => {
  // destructure id from searchParams
  const { id } = searchParams

  if (!id || typeof id !== 'string') {
    return notFound() // comes from next/navigation and throws a 404
  }

  // make db call
  // fetch configuration from db and search for id
  const configuration = await db.configuration.findUnique({
    where: { id: id },
  })

  if (!configuration) {
    return notFound()
  }

  const { imageUrl, width, height } = configuration

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  )
}

export default Page
