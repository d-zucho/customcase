import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'
import { db } from '@/db'

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
// FileRouter is a type that represents a collection of FileRoutes, or,
//     in other words, a group of routes that handle file uploads.
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      // This code runs on your server before upload

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      const { configId } = metadata.input
      // ? Whatever is returned here is sent to the client side `onClientUploadComplete` callback

      const res = await fetch(file.url) // fetch the uploaded file
      const buffer = await res.arrayBuffer() // convert to buffer
      const imgMetadata = await sharp(buffer).metadata() // get image metadata
      const { width, height } = imgMetadata // get width and height

      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
            croppedImageUrl: '', // when image is uploaded, croppedImageUrl is empty
          },
        })
        return { configId: configuration.id }
      } else {
        // just update the existing configuration
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
            // when image is cropped, update the croppedImageUrl to path
          },
        })

        return { configId: updatedConfiguration.id }
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

// Steps in onUploadComplete:
// 1. Fetch the uploaded file
// 2. Convert the file to a buffer. A buffer is a data structure that stores raw binary data.
// 3. Get the image metadata. This includes information such as the width and height of the image.
// 4. Get the width and height
// 5. If no configId is provided, create a new configuration in the database.
//       5b. configId is a unique identifier for the configuration
// 6. If a configId is provided, update the existing configuration in the database
// 7. Return the updated configuration id
