"use client"

import { useRouter } from 'next/navigation'
import Spline from '@splinetool/react-spline'
import { Button } from "@/components/ui/button"

export default function Component() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-sys-surface text-sys-on-surface p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="w-full mx-auto h-60">
        <Spline scene="https://prod.spline.design/f4IzY0054-6HoARK/scene.splinecode" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
          <p className="text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <Button 
          onClick={() => router.push('/')}
          variant="outline"
          className="bg-gray-50 text-gray-950 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
        >
          Go back home
        </Button>
      </div>
    </div>
  )
}