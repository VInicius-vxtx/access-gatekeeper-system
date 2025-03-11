
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCredentials = localStorage.getItem('rememberedCredentials');
    
    if (savedCredentials) {
      const { email: savedEmail, password: savedPassword } = JSON.parse(savedCredentials);
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }

    // Load Google OAuth API
    const loadGoogleAuth = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      window.onGoogleLibraryLoad = initializeGoogleAuth;
    };

    loadGoogleAuth();
  }, []);

  // Initialize Google OAuth
  const initializeGoogleAuth = () => {
    if (window.google && !document.getElementById('google-signin-button')) {
      window.google.accounts.id.initialize({
        client_id: '831566781785-r43g9muimsle3tei20o8ptp22lcvf9i9.apps.googleusercontent.com', // Replace with your actual Google Client ID
        callback: handleGoogleResponse,
        auto_select: false,
      });
    }
  };

  // Handle Google OAuth response
  const handleGoogleResponse = (response: any) => {
    setIsLoading(true);
    
    if (response && response.credential) {
      // In a real app, you would send this credential to your backend
      console.log('Google credential:', response.credential);
      
      // Simulate successful authentication
      toast.success('Login com Google realizado com sucesso!');
      setTimeout(() => {
        navigate('/dashboard');
        setIsLoading(false);
      }, 1000);
    } else {
      toast.error('Falha no login com Google.');
      setIsLoading(false);
    }
  };

  const handleLogin = async (loginEmail: string, loginPassword: string) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        toast.success('Login realizado com sucesso!');
        navigate('/dashboard');
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error('Falha no login. Verifique suas credenciais.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (remember) {
      localStorage.setItem('rememberedCredentials', JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem('rememberedCredentials');
    }
    
    handleLogin(email, password);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Render Google One Tap sign-in button
    if (window.google) {
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button') as HTMLElement,
        { 
          type: 'standard',
          theme: 'outline',
          size: 'large',
          width: '100%'
        }
      );
      window.google.accounts.id.prompt();
      setIsLoading(false);
    } else {
      toast.error('Serviço do Google não está disponível no momento.');
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = () => {
    setIsLoading(true);
    
    const facebookAppId = 'YOUR_FACEBOOK_APP_ID';
    const facebookRedirectUri = window.location.origin + '/auth/facebook/callback';
    const facebookScope = 'email,public_profile';
    
    const facebookAuthUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${encodeURIComponent(facebookRedirectUri)}&scope=${encodeURIComponent(facebookScope)}`;
    
    toast.info('Redirecionando para o login do Facebook...');
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login com Facebook realizado com sucesso!');
      navigate('/dashboard');
    }, 1500);
  };

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
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6 floating-input">
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder=" "
                className="focus:border-sistema-accent"
              />
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="mb-6 floating-input">
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder=" "
                className="focus:border-sistema-accent"
              />
              <label htmlFor="password">Senha</label>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sistema-text-secondary">
                <input 
                  type="checkbox" 
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded bg-sistema-input-bg border-sistema-border text-sistema-accent focus:ring-sistema-accent"
                />
                <span>Lembrar de mim</span>
              </label>
              <Link to="/esqueci-senha" className="text-sistema-accent hover:text-sistema-accent-hover transition-colors">
                Esqueceu a senha?
              </Link>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-sistema-accent-important hover:bg-sistema-accent-important/80 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Entrar'}
            </button>
          </form>
          
          <div className="mt-8">
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-sistema-border"></div>
              <span className="px-4 text-sm text-sistema-text-secondary">Ou continue com</span>
              <div className="flex-1 border-t border-sistema-border"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div 
                id="google-signin-button"
                onClick={handleGoogleLogin}
                className="py-3 px-4 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer h-[46px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                <span>Google</span>
              </div>
              <button 
                onClick={handleFacebookLogin}
                disabled={isLoading}
                className="py-3 px-4 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <span>Facebook</span>
              </button>
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
