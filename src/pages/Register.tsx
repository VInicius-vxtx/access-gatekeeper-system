
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }
    
    setIsLoading(true);

    try {
      // Simulação de registro bem-sucedido
      setTimeout(() => {
        toast.success('Conta criada com sucesso!');
        navigate('/login');
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error('Falha ao criar conta. Tente novamente.');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Seção da imagem (visível apenas em telas médias ou maiores) */}
      <div className="hidden md:flex md:flex-1 bg-gradient-to-tr from-black/60 to-transparent">
        <img 
          src="public/lovable-uploads/MockupCelularNew.png" 
          alt="Sistema de Gestão" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Seção do formulário */}
      <div className="flex-1 flex items-center justify-center p-8 bg-sistema-bg-secondary">
        <div className="w-full max-w-md animate-slide-in">
          <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-sistema-accent to-sistema-accent-hover bg-clip-text text-transparent">
            Crie sua Conta
          </h1>
          <p className="text-sistema-text-secondary mb-8">
            Preencha os dados abaixo para se registrar
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6 floating-input">
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                placeholder=" "
                className="focus:border-sistema-accent"
              />
              <label htmlFor="name">Nome completo</label>
            </div>
            
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
            
            <div className="mb-6 floating-input">
              <input 
                type="password" 
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                placeholder=" "
                className="focus:border-sistema-accent"
              />
              <label htmlFor="confirmPassword">Confirmar senha</label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-sistema-accent hover:bg-sistema-accent-hover text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Registrar'}
            </button>
          </form>
          
          <p className="text-center mt-8 text-sistema-text-secondary">
            Já tem uma conta? 
            <Link to="/login" className="ml-1 text-sistema-accent hover:text-sistema-accent-hover transition-colors">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
