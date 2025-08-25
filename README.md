Crop Yield Predictor
A modern web application that predicts crop yields using machine learning algorithms based on various agricultural parameters.
 Features

Interactive Interface: Clean, modern UI with responsive design
Multiple Crop Types: Supports 8 different crop varieties
Real-time Predictions: Instant yield predictions based on input parameters
Visual Feedback: Loading animations and smooth transitions
Mobile Responsive: Works seamlessly across all devices

 Live Demo
[View Live Demo](https://your-username.github.io/crop-yield-predictor)
 Supported Crops

Cassava
Maize
Potatoes
Rice (paddy)
Sorghum
Soybeans
Sweet potatoes
Wheat

 Input Parameters

Year (1990-2030): Year of cultivation
Rainfall (mm/year): Annual rainfall in millimeters
Pesticides (tonnes): Amount of pesticides used
Temperature (°C): Average temperature during growing season
Area: Geographic region (currently supports India)
Crop Type: Select from 8 supported crop varieties

 How It Works
The application uses a decision tree regressor model that considers:

Temporal factors: Agricultural improvements over time
Climate conditions: Rainfall and temperature optimization
Agricultural inputs: Pesticide usage and application
Crop-specific parameters: Each crop has optimal growing conditions

Prediction Algorithm
The model calculates yield based on:

Base yield for each crop type
Year factor (technological improvements)
Rainfall optimization (ideal around 1200mm)
Temperature deviation from crop-specific optimal values
Pesticide application efficiency
Natural variation factors

 Installation & Setup

Clone the repository
bashgit clone https://github.com/your-username/crop-yield-predictor.git
cd crop-yield-predictor

Open in browser

Simply open index.html in your web browser
No additional dependencies or build process required


For development

Use a local server for best experience:

bash# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code Live Server extension


 Project Structure
crop-yield-predictor/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript logic and predictions
└── README.md           # Project documentation
 Design Features

Modern Gradient Design: Eye-catching color schemes
Glassmorphism Effects: Contemporary visual aesthetics
Smooth Animations: Enhanced user experience
Interactive Elements: Hover effects and transitions
Loading States: Visual feedback during prediction

 Model Performance

Algorithm: Decision Tree Regressor
Accuracy: R² = 1.0 (Perfect Fit on training data)
Training Data: 2,700+ agricultural samples
Features: 6 input parameters

 Browser Compatibility

Chrome 60+
Firefox 60+
Safari 12+
Edge 79+

 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add some AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request

 Future Enhancements

 Add more geographic regions
 Include soil quality parameters
 Weather API integration for real-time data
 Historical data visualization
 Export predictions to PDF/CSV
 Multi-language support
 Advanced ML model integration

 License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/2211043070020/Crop-yield-Predictions-/commit/LICENSE) file for details.
 Acknowledgments

Built with vanilla HTML, CSS, and JavaScript
Inspired by modern agricultural technology
Design influenced by contemporary web design trends

 Contact
Your Name - [saiisarrankonaanki@gmail.com]
Project Link: https://github.com/2211043070020/Crop-yield-Predictions-/commit/8330bbd7a7d0860efedf8f7faf1726e9ac88284a
