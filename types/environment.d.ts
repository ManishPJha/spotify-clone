declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_UNSPLASH_APP_ID: string
      NEXT_PUBLIC_ACCESS_KEY: string
      NEXT_PUBLIC_SECRET_KEY: string
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string
      NEXT_PUBLIC_CLOUDINARY_API_KEY: string
      CLOUDINARY_API_SECRET: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
