
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-sistema-bg-primary">
      <header className="bg-sistema-bg-secondary border-b border-sistema-border py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-sistema-accent to-sistema-accent-hover bg-clip-text text-transparent">
          Sistema de Gestão
        </h1>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-sistema-input-bg hover:bg-sistema-bg-primary border border-sistema-border rounded-lg transition-all duration-300 text-sistema-text-primary"
        >
          Sair
        </button>
      </header>
      
      <main className="container mx-auto p-6">
        <div className="bg-sistema-bg-secondary border border-sistema-border rounded-lg p-6 animate-slide-in">
          <h2 className="text-xl font-semibold mb-4">Bem-vindo ao Dashboard</h2>
          <p className="text-sistema-text-secondary">
            Esta é uma página de demonstração do dashboard. Em um sistema real, você encontraria aqui informações e estatísticas relevantes.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
