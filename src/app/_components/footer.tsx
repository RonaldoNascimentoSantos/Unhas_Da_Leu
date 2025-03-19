export function Footer() {
  return (
    <section>
      <footer className="bg-fuchsia-50 text-fuchsia-900">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Grid principal - se reorganiza em diferentes breakpoints */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* Logo e descrição */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h2 className="text-2xl font-bold text-fuchsia-500 mb-4">Unhas da Leu</h2>
              <p className="text-sm">Seu espaço de beleza e cuidados para unhas perfeitas. Qualidade e profissionalismo em cada detalhe.</p>
            </div>
            
            {/* Links rápidos */}
            <div className="col-span-1">
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-fuchsia-500 transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-fuchsia-500 transition-colors">Agendamento</a></li>
                <li><a href="#" className="hover:text-fuchsia-500 transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            
            {/* Contato */}
            <div className="col-span-1">
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (71) 98613-0010
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Atendimento com antecedência e hora marcada em domicílio
                </li>
              </ul>
            </div>
            
            {/* Horário e Redes Sociais */}
            <div className="col-span-1">
              <h3 className="font-semibold text-lg mb-4">Horário de Funcionamento</h3>
              <p className="mb-4">Segunda a Sábado: 9h às 19h</p>
              
              <h3 className="font-semibold text-lg mb-2">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/unhas_da_leu/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-900 hover:text-fuchsia-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://api.whatsapp.com/message/VSFXTHMFB52NJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-fuchsia-900 hover:text-fuchsia-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.677.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Divisor */}
          <div className="border-t border-fuchsia-200 my-6"></div>
          
          {/* Copyright */}
          <div className="text-center text-sm">
            <p>&copy; 2025 Unhas da Leleu - @Ronaldo Nascimento - Todos os direitos reservados</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-fuchsia-500 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-fuchsia-500 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}