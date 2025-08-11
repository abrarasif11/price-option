import React from 'react'
import { LineChart as LChart , Line, XAxis  } from 'recharts';
const LineChart = () => {
    const mathMark =  [
        
            { "id": 1, "name": "Ayesha", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 82 },
            { "id": 2, "name": "Rafi", "math_marks": 78, "physics_marks": 72, "chemistry_marks": 75 },
            { "id": 3, "name": "Tuhin", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 91 },
            { "id": 4, "name": "Meem", "math_marks": 88, "physics_marks": 85, "chemistry_marks": 89 },
            { "id": 5, "name": "Sabbir", "math_marks": 74, "physics_marks": 70, "chemistry_marks": 73 },
            { "id": 6, "name": "Farzana", "math_marks": 95, "physics_marks": 90, "chemistry_marks": 94 },
            { "id": 7, "name": "Nayeem", "math_marks": 81, "physics_marks": 79, "chemistry_marks": 80 },
            { "id": 8, "name": "Priya", "math_marks": 69, "physics_marks": 65, "chemistry_marks": 68 },
            { "id": 9, "name": "Jihan", "math_marks": 90, "physics_marks": 86, "chemistry_marks": 88 },
            { "id": 10, "name": "Tanvir", "math_marks": 76, "physics_marks": 73, "chemistry_marks": 75 }
          
      ];
  return (
    <div>
      <LChart width={800} height={400}data={mathMark}>
      <XAxis dataKey="name" />
      <yAxis dataKey="physics_marks" />
        <Line dataKey="math_marks" stroke='red'></Line>
        <Line dataKey="physics_marks" stroke='blue'></Line>
      </LChart>
    </div>
  )
}

export default LineChart
