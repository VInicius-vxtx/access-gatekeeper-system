
import React, { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const LoginLayout = ({ children, title, subtitle }: LoginLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex md:flex-1 bg-gradient-to-tr from-black/60 to-transparent">
        <img 
          src="lovable-uploads/fototeste2.png" 
          alt="Naturalmente Magra" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8 bg-sistema-bg-secondary">
        <div className="w-full max-w-md animate-slide-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-[#F2FCE2]">Naturalmente</span>
              <span className="text-[#D946EF]">Magra</span>
            </h1>
          </div>
          
          <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-sistema-accent-important to-sistema-accent-important/80 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-sistema-text-secondary mb-8">
            {subtitle}
          </p>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
