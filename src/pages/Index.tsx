
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sistema-bg-primary">
      <div className="text-center animate-slide-in p-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sistema-accent to-sistema-accent-hover bg-clip-text text-transparent">
          Sistema de Gestão
        </h1>
        <p className="text-xl text-sistema-text-secondary mb-8">
          Uma plataforma moderna e eficiente para gerenciar seus recursos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/login" 
            className="px-6 py-3 bg-sistema-accent hover:bg-sistema-accent-hover text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Entrar no Sistema
          </Link>
          <Link 
            to="/registro" 
            className="px-6 py-3 bg-sistema-input-bg hover:bg-sistema-bg-secondary border border-sistema-border text-sistema-text-primary rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
