
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulação de login bem-sucedido
      // Em um app real, você faria uma chamada de API aqui
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

  return (
    <div className="flex min-h-screen">
      {/* Seção da imagem (visível apenas em telas médias ou maiores) */}
      <div className="hidden md:flex md:flex-1 bg-gradient-to-tr from-black/60 to-transparent">
        <img 
          src="public/lovable-uploads/fototeste2.png" 
          alt="Naturalmente Magra" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Seção do formulário */}
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
              <button className="py-3 px-4 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="fab fa-google"></i>
                <span>Google</span>
              </button>
              <button className="py-3 px-4 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="fab fa-facebook-f"></i>
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
