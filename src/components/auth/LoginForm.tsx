import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LoginForm = () => {
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
  }, []);

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

  return (
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
  );
};

export default LoginForm;
