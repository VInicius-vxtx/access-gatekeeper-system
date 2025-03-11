
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { generateVerificationCode } from '../utils/codeGenerator';

type ResetStep = 'email' | 'verification' | 'newPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentStep, setCurrentStep] = useState<ResetStep>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [expectedCode, setExpectedCode] = useState('');

  const handleSendResetEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Generate a new random code
    const newCode = generateVerificationCode();
    setExpectedCode(newCode);
    console.log('Generated verification code:', newCode); // For testing purposes

    // Simulate API call to send reset email
    setTimeout(() => {
      toast.success(`Código de verificação enviado para ${email}`);
      setCurrentStep('verification');
      setIsLoading(false);
    }, 1500);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Verify against the generated code
    setTimeout(() => {
      if (verificationCode === expectedCode) {
        toast.success('Código verificado com sucesso');
        setCurrentStep('newPassword');
      } else {
        toast.error('Código inválido. Tente novamente.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }
    
    setIsLoading(true);

    // Simulate API call to reset password
    setTimeout(() => {
      toast.success('Senha alterada com sucesso!');
      setIsLoading(false);
      // In a real app, you would navigate to login
      window.location.href = '/login';
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
            Recuperação de Senha
          </h1>
          <p className="text-sistema-text-secondary mb-8">
            {currentStep === 'email' && 'Informe seu email para receber um código de verificação'}
            {currentStep === 'verification' && 'Insira o código de verificação enviado para seu email'}
            {currentStep === 'newPassword' && 'Defina sua nova senha'}
          </p>
          
          {currentStep === 'email' && (
            <form onSubmit={handleSendResetEmail}>
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
                ) : 'Enviar Código'}
              </button>
            </form>
          )}
          
          {currentStep === 'verification' && (
            <form onSubmit={handleVerifyCode}>
              <div className="mb-6 floating-input">
                <input 
                  type="text" 
                  id="verificationCode" 
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required 
                  placeholder=" "
                  className="focus:border-sistema-accent"
                />
                <label htmlFor="verificationCode">Código de Verificação</label>
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
                ) : 'Verificar Código'}
              </button>
              
              <p className="text-sm text-center mt-4 text-sistema-text-secondary">
                <span 
                  className="text-sistema-accent hover:text-sistema-accent-hover cursor-pointer transition-colors"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      toast.success(`Novo código enviado para ${email}`);
                      setIsLoading(false);
                    }, 1500);
                  }}
                >
                  Reenviar código
                </span>
              </p>
            </form>
          )}
          
          {currentStep === 'newPassword' && (
            <form onSubmit={handleResetPassword}>
              <div className="mb-6 floating-input">
                <input 
                  type="password" 
                  id="newPassword" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required 
                  placeholder=" "
                  className="focus:border-sistema-accent"
                />
                <label htmlFor="newPassword">Nova Senha</label>
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
                <label htmlFor="confirmPassword">Confirmar Nova Senha</label>
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
                ) : 'Alterar Senha'}
              </button>
            </form>
          )}
          
          <p className="text-center mt-8 text-sistema-text-secondary">
            <Link to="/login" className="text-sistema-accent hover:text-sistema-accent-hover transition-colors">
              Voltar para o login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
