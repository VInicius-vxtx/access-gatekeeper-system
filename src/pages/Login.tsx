import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import LoginLayout from '@/components/auth/LoginLayout';

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
    <LoginLayout 
      title="Bem-vindo ao Sistema"
      subtitle="Faça login para continuar"
    >
      <LoginForm />
      
      <p className="text-center mt-8 text-sistema-text-secondary">
        Não tem uma conta? 
        <Link to="/registro" className="ml-1 text-sistema-accent hover:text-sistema-accent-hover transition-colors">
          Registre-se
        </Link>
      </p>
    </LoginLayout>
  );
};

export default Login;
