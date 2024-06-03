document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('result').textContent = `Your BMI is ${bmi}`;

        let category = '';
        let suggestion = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            suggestion = 'You should eat more nutritious food and maintain a balanced diet. Consider consulting a healthcare provider for personalized advice.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            suggestion = 'Great job! Maintain your weight by keeping a balanced diet and regular physical activity.';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            suggestion = 'Consider a healthy diet and regular physical activity to lose weight. Consult a healthcare provider for personalized advice.';
        } else {
            category = 'Obesity';
            suggestion = 'It is important to adopt a healthier lifestyle with a balanced diet and regular physical activity. Consult a healthcare provider for personalized advice and support.';
        }

        document.getElementById('result').textContent += ` (${category})`;
        document.getElementById('suggestion').textContent = suggestion;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
        document.getElementById('suggestion').textContent = '';
    }
});
