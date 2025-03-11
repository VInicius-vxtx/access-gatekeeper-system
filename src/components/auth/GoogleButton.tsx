
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleGoogleResponse = (response: any) => {
    if (response && response.credential) {
      console.log('Google credential:', response.credential);
      toast.success('Login com Google realizado com sucesso!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      toast.error('Falha no login com Google.');
    }
  };

  const initializeGoogleAuth = () => {
    if (window.google && !document.getElementById('google-signin-button')) {
      window.google.accounts.id.initialize({
        client_id: '831566781785-r43g9muimsle3tei20o8ptp22lcvf9i9.apps.googleusercontent.com',
        callback: handleGoogleResponse,
        auto_select: false,
      });
    }
  };

  const handleGoogleLogin = () => {
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
    } else {
      toast.error('Serviço do Google não está disponível no momento.');
    }
  };

  return (
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
  );
};

export default GoogleButton;
