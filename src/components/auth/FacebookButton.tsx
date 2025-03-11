
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const FacebookButton = () => {
  const navigate = useNavigate();

  const handleFacebookLogin = () => {
    const facebookAppId = 'YOUR_FACEBOOK_APP_ID';
    const facebookRedirectUri = window.location.origin + '/auth/facebook/callback';
    const facebookScope = 'email,public_profile';
    
    const facebookAuthUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${encodeURIComponent(facebookRedirectUri)}&scope=${encodeURIComponent(facebookScope)}`;
    
    toast.info('Redirecionando para o login do Facebook...');
    
    setTimeout(() => {
      toast.success('Login com Facebook realizado com sucesso!');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <button 
      onClick={handleFacebookLogin}
      className="py-3 px-4 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
      <span>Facebook</span>
    </button>
  );
};

export default FacebookButton;
