import React from 'react'
import PriceOption from '../../PriceOption/PriceOption'

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 25.99$,
      "features": [
        "Access to all gym equipment",
        "Free water station",
        "Locker room access"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 49.99$,
      "features": [
        "Access to all gym equipment",
        "Group fitness classes",
        "2 personal training sessions",
        "Locker and shower access"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 79.99$,
      "features": [
        "24/7 unlimited access",
        "All group classes included",
        "5 personal training sessions",
        "Sauna and spa access",
        "Free diet and fitness consultation"
      ]
    }
  ];

  return (
    <div>
      <h2 className='text-3xl font-semibold'>Best Price in this Universe</h2>
      <div className='grid grid-cols-3 gap-6'>
      {
        priceOptions.map((option) => (
          <PriceOption
            key={option.id}
            option={option}
          />
        ))
      }
      </div>
    </div>
  )
}

export default PriceOptions;
