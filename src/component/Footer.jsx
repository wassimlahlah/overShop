import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-primary)] py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* حقوق النشر */}
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} OverShop. All rights reserved.</p>

        {/* روابط */}
        <div className="flex gap-3 sm:gap-6">
          <a href="#" className="text-xs sm:text-sm hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="text-xs sm:text-sm hover:text-blue-400 transition-colors">Contact</a>
          <a href="#" className="text-xs sm:text-sm hover:text-blue-400 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}