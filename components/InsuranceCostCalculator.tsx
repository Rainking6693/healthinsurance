import React, { useState, useEffect } from 'react'
import Button from './Button'
import { AFFILIATE_LINKS } from '@/config/links'

interface CalculatorResult {
  safetyWingMonthly: number
  safetyWingAnnual: number
  marketplaceMonthly: number
  marketplaceAnnual: number
  cobraMonthly: number
  cobraAnnual: number
  savings: number
  recommendation: string
}

const InsuranceCostCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(30)
  const [income, setIncome] = useState<number>(40000)
  const [healthStatus, setHealthStatus] = useState<string>('healthy')
  const [location, setLocation] = useState<string>('average')
  const [results, setResults] = useState<CalculatorResult | null>(null)

  const calculateCosts = () => {
    // SafetyWing pricing based on age
    let safetyWingMonthly = 42.16
    if (age >= 40 && age < 50) safetyWingMonthly = 85
    else if (age >= 50 && age < 60) safetyWingMonthly = 150
    else if (age >= 60) safetyWingMonthly = 220

    // Marketplace pricing estimates (varies significantly by location and income)
    let marketplaceMonthly = 350
    
    // Adjust for income (subsidies)
    if (income < 30000) marketplaceMonthly = 100
    else if (income < 40000) marketplaceMonthly = 180
    else if (income < 50000) marketplaceMonthly = 250
    else if (income < 60000) marketplaceMonthly = 300
    
    // Adjust for age
    if (age >= 50) marketplaceMonthly *= 1.5
    else if (age >= 40) marketplaceMonthly *= 1.2
    
    // Adjust for location
    if (location === 'expensive') marketplaceMonthly *= 1.4
    else if (location === 'cheap') marketplaceMonthly *= 0.8

    // COBRA estimates (typically 102% of employer cost)
    let cobraMonthly = 600
    if (age >= 50) cobraMonthly = 800
    else if (age >= 40) cobraMonthly = 700

    const safetyWingAnnual = safetyWingMonthly * 12
    const marketplaceAnnual = marketplaceMonthly * 12
    const cobraAnnual = cobraMonthly * 12

    const savings = marketplaceAnnual - safetyWingAnnual

    // Generate recommendation
    let recommendation = ''
    if (healthStatus === 'chronic') {
      recommendation = 'Marketplace insurance is recommended due to your health needs'
    } else if (income < 25000) {
      recommendation = 'Check Medicaid eligibility first, then consider marketplace subsidies'
    } else if (savings > 2000) {
      recommendation = 'SafetyWing could save you significant money if you\'re healthy'
    } else {
      recommendation = 'Compare both options carefully based on your specific needs'
    }

    setResults({
      safetyWingMonthly,
      safetyWingAnnual,
      marketplaceMonthly,
      marketplaceAnnual,
      cobraMonthly,
      cobraAnnual,
      savings,
      recommendation
    })
  }

  useEffect(() => {
    calculateCosts()
  }, [age, income, healthStatus, location])

  return (
    <div className="bg-white border-2 border-sw-gray-light rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-sw-navy mb-6 text-center">
        Insurance Cost Calculator
      </h3>
      <p className="text-sw-gray text-center mb-8">
        Get personalized cost estimates based on your situation
      </p>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-sw-navy mb-2">
            Your Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            min="18"
            max="80"
            className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="income" className="block text-sm font-semibold text-sw-navy mb-2">
            Annual Income
          </label>
          <select
            id="income"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none"
          >
            <option value={15000}>Under $20k</option>
            <option value={25000}>$20k - $30k</option>
            <option value={35000}>$30k - $40k</option>
            <option value={45000}>$40k - $50k</option>
            <option value={55000}>$50k - $60k</option>
            <option value={70000}>$60k - $80k</option>
            <option value={90000}>Over $80k</option>
          </select>
        </div>

        <div>
          <label htmlFor="health" className="block text-sm font-semibold text-sw-navy mb-2">
            Health Status
          </label>
          <select
            id="health"
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
            className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none"
          >
            <option value="healthy">Generally healthy</option>
            <option value="occasional">Occasional health issues</option>
            <option value="chronic">Chronic conditions</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-sw-navy mb-2">
            Location Cost
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border-2 border-sw-gray-light rounded-lg focus:border-sw-teal focus:outline-none"
          >
            <option value="cheap">Low-cost area</option>
            <option value="average">Average cost area</option>
            <option value="expensive">High-cost area (NYC, SF, etc.)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-sw-navy text-center mb-6">
            Your Estimated Costs
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SafetyWing */}
            <div className="bg-gradient-to-br from-sw-teal to-sw-mint rounded-xl p-6 text-white">
              <h5 className="text-lg font-bold mb-3">SafetyWing</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly:</span>
                  <span className="font-bold">${results.safetyWingMonthly.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual:</span>
                  <span className="font-bold">${results.safetyWingAnnual.toFixed(0)}</span>
                </div>
                <div className="text-xs mt-3 text-white/80">
                  Emergency coverage, $250 deductible
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <div className="bg-gradient-to-br from-sw-blue to-sw-navy rounded-xl p-6 text-white">
              <h5 className="text-lg font-bold mb-3">Marketplace Plan</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly:</span>
                  <span className="font-bold">${results.marketplaceMonthly.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual:</span>
                  <span className="font-bold">${results.marketplaceAnnual.toFixed(0)}</span>
                </div>
                <div className="text-xs mt-3 text-white/80">
                  Comprehensive coverage, high deductible
                </div>
              </div>
            </div>

            {/* COBRA */}
            <div className="bg-gradient-to-br from-sw-coral to-sw-coral-dark rounded-xl p-6 text-white">
              <h5 className="text-lg font-bold mb-3">COBRA</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly:</span>
                  <span className="font-bold">${results.cobraMonthly.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual:</span>
                  <span className="font-bold">${results.cobraAnnual.toFixed(0)}</span>
                </div>
                <div className="text-xs mt-3 text-white/80">
                  Former employer plan, 18-month limit
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <h5 className="text-xl font-bold text-green-800 mb-2">
              Potential Annual Savings with SafetyWing
            </h5>
            <div className="text-3xl font-bold text-green-600 mb-2">
              ${results.savings.toFixed(0)}
            </div>
            <p className="text-green-700">
              vs. marketplace insurance
            </p>
          </div>

          {/* Recommendation */}
          <div className="bg-sw-purple bg-opacity-10 border-2 border-sw-purple rounded-xl p-6">
            <h5 className="text-lg font-bold text-sw-purple mb-3">
              💡 Our Recommendation
            </h5>
            <p className="text-sw-navy mb-4">{results.recommendation}</p>
            
            {healthStatus === 'healthy' && results.savings > 1000 && (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="primary" 
                  href={AFFILIATE_LINKS.nomadInsurance}
                  isAffiliate
                  className="flex-1"
                >
                  Get SafetyWing Quote
                </Button>
                <Button 
                  variant="secondary" 
                  href="https://www.healthcare.gov"
                  className="flex-1"
                >
                  Compare Marketplace
                </Button>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-sw-gray text-center">
            <p>
              * Estimates based on average costs and may vary significantly by location and specific circumstances. 
              Always get official quotes before making decisions.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default InsuranceCostCalculator