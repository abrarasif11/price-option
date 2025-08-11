import React from 'react'
import Features from '../Features/Features'

const PriceOption = ({ option }) => {
  return (
    <section className="py-10 text-gray-800">
      <div className="px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-600 text-gray-50">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">{option.name}</h4>
              <span className="text-6xl font-bold">
                {option.price}
                <span className="text-sm tracking-wide">/month</span>
              </span>
            </div>
            <p className="leading-relaxed">Special Features</p>
            <div className="flex-grow">
              {option.features.map((feature, index) => (
                <Features key={index} feature={feature} />
              ))}
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-violet-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceOption;
