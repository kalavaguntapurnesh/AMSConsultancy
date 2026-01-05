const FreeToolsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-100 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our free tools will help you out.
            </h2>
            
            <div className="flex items-center mb-6">
              <span className="text-green-500 mr-2">✨</span>
              <span className="text-lg font-semibold text-green-700">Powered by AI</span>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              A smart algorithm that guides every step of your education journey.
            </p>
          </div>

          {/* Right side - Tools */}
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Loan Eligibility Checker */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full -translate-y-6 -translate-x-6"></div>
                
                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 rounded-full"></div>
                  <div className="absolute top-8 -right-4 w-3 h-3 bg-pink-300 rounded-full"></div>
                  <div className="absolute -bottom-2 left-8 w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Loan Eligibility Checker</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  See your loan options upfront: quick, free, and accurate.
                </p>
                
                <button className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors">
                  Check Eligibility
                </button>
              </div>

              {/* EMI Calculator */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-100 rounded-full -translate-y-12 translate-x-12"></div>
                
                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🧮</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">EMI Calculator</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Determine your EMIs and repayment schedules before committing to a student loan.
                </p>
                
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors">
                  Calculate Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <span className="text-gray-600">←</span>
          </button>
          <button className="w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition-colors">
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeToolsSection;