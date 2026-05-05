import Link from "next/link";
import { FileQuestion, ArrowRight, Home } from "lucide-react";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-background relative overflow-x-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden py-24">
        {/* Background glow matching the theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#a855f7]/10 rounded-full blur-[100px] sm:blur-[120px] -z-10" />

        {/* Content */}
        <div className="max-w-md w-full flex flex-col items-center text-center z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          <div className="inline-flex items-center justify-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-2xl mb-8 relative">
            <div className="absolute inset-0 bg-[#a855f7]/20 blur-xl rounded-2xl" />
            <FileQuestion className="w-10 h-10 sm:w-12 sm:h-12 text-[#a855f7] relative z-10" />
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 mb-4 font-sans">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
            Page not found
          </h2>

          <p className="text-muted-foreground font-mono mb-10 leading-relaxed text-sm sm:text-base max-w-[80%]">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>

          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground transition-all duration-300 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#a855f7] border border-transparent focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </main>
  );
}
