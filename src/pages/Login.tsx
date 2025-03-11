import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import GoogleButton from '@/components/auth/GoogleButton';
import FacebookButton from '@/components/auth/FacebookButton';

const Login = () => {
  useEffect(() => {
    const savedCredentials = localStorage.getItem('rememberedCredentials');
    
    if (savedCredentials) {
      const { email: savedEmail, password: savedPassword } = JSON.parse(savedCredentials);
      // This will be handled by LoginForm component
    }

    // Load Google OAuth API
    const loadGoogleAuth = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      window.onGoogleLibraryLoad = () => {
        if (window.google && !document.getElementById('google-signin-button')) {
          window.google.accounts.id.initialize({
            client_id: '831566781785-r43g9muimsle3tei20o8ptp22lcvf9i9.apps.googleusercontent.com',
            callback: () => {},
            auto_select: false,
          });
        }
      };
    };

    loadGoogleAuth();
  }, []);

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
          <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-sistema-accent-important to-sistema-accent-important/80 bg-clip-text text-transparent">
            Bem-vindo ao Sistema
          </h1>
          <p className="text-sistema-text-secondary mb-8">
            Faça login para continuar
          </p>
          
          <LoginForm />
          
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
          
          <p className="text-center mt-8 text-sistema-text-secondary">
            Não tem uma conta? 
            <Link to="/registro" className="ml-1 text-sistema-accent hover:text-sistema-accent-hover transition-colors">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
