import { LogoIcon } from "@/components/icons/logo-icon"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <LogoIcon className="h-10 w-auto" />
            <span className="text-xl font-black font-redhat">GenieX</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/signup-image.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            filter: 'brightness(0.8) grayscale(0.2)'
          }}
        />
      </div>
    </div>
  )
} 