import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'
import { db } from '@/db'

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
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
      // ? Whatever is returned here is sent to the clientside `onClientUploadComplete` callback

      const res = await fetch(file.url) // fetch the uploaded file
      const buffer = await res.arrayBuffer() // convert to buffer
      const imgMetadata = await sharp(buffer).metadata() // get image metadata
      const { width, height } = imgMetadata // get width and height

      if (!configId) {
        const configureation = await db.configuration.create({
          // data: {}
        })
      }

      return { configId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
