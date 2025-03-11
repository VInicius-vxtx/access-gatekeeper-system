
import React from 'react';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';

const SocialLogin = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-sistema-border"></div>
        <span className="px-4 text-sm text-sistema-text-secondary">Ou continue com</span>
        <div className="flex-1 border-t border-sistema-border"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <GoogleButton />
        <FacebookButton />
      </div>
    </div>
  );
};

export default SocialLogin;
