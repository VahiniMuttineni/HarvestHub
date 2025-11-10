# Harvest Hub

Harvest Hub is a comprehensive smart crop recommendation application designed to help farmers make informed decisions about crop selection based on their soil type and seasonal conditions. The application provides personalized crop recommendations with detailed agricultural insights, financial projections, and sustainable farming practices.

## Features

### 🌾 Smart Crop Recommendations
- **Personalized Suggestions**: Get tailored crop recommendations based on soil type and season
- **Comprehensive Coverage**: Minimum 5 crops available for every soil-season combination
- **Advanced Filtering**: Intelligent matching based on soil nutrients, regional weather, and moisture content

### 📊 Extensive Crop Database
- **150+ Crops**: Complete database covering cereals, vegetables, fruits, legumes, oilseeds, fiber crops, and specialty crops
- **6 Soil Types**: Clay, Sandy, Loamy, Silty, Peaty, and Chalky soil compatibility
- **4 Growing Seasons**: Kharif (Monsoon), Rabi (Winter), Zaid (Summer), and Perennial crops

### 🔍 Detailed Crop Analysis
- **Suitability Assessment**: Soil nutrients, regional weather, and moisture content analysis
- **Raw Materials & Quantities**: Fertilizer, seed, and irrigation requirements per hectare
- **Crop Rotation Plans**: Seasonal rotation recommendations for soil health
- **Risk Management**: Drought/flood resistance, pest control, and insurance guidance
- **Sustainable Practices**: Organic inputs, composting, and efficient irrigation techniques
- **Profit Predictions**: Estimated yield, input costs, market value, and expected profits

### 💻 User Experience
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Interface**: Easy-to-use selection and detailed crop exploration
- **Visual Analytics**: Charts and graphs for profit and yield predictions

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   cd harvest-hub-dt
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4201`

The application will automatically reload when you make changes to the code.

## How to Use

1. **Select Soil Type**: Choose from Clay, Sandy, Loamy, Silty, Peaty, or Chalky soil options
2. **Choose Location**: Select your region (Andhra Pradesh or Telangana)
3. **Select Season**: Choose from Kharif (Monsoon), Rabi (Winter), or Zaid (Summer) seasons
4. **Get Recommendations**: Click "Get Recommendations" to view personalized crop suggestions
5. **View Details**: Click on any crop card to access comprehensive cultivation information including:
   - Soil suitability analysis
   - Raw materials and quantities needed
   - Seasonal crop rotation plans
   - Risk management strategies
   - Sustainable farming practices
   - Profit and yield predictions

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript for better development experience
- **React** - Modern UI library for building interactive interfaces
- **shadcn/ui** - High-quality component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful icon library

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
HarvestHub/
├── src/
│   ├── components/     # React components
│   │   ├── ui/                # Reusable UI components (shadcn/ui)
│   │   ├── Hero.tsx           # Main landing section with soil/season selection
│   │   ├── CropRecommendations.tsx  # Crop recommendation display
│   │   ├── RawMaterialsQuantities.tsx  # Raw materials information
│   │   ├── CropRotationPlan.tsx       # Crop rotation recommendations
│   │   ├── RiskManagementAdvice.tsx   # Risk management strategies
│   │   ├── SustainablePractices.tsx   # Sustainable farming practices
│   │   ├── ProfitYieldPrediction.tsx  # Financial projections
│   │   ├── Features.tsx       # Feature highlights
│   │   ├── Community.tsx      # Community section
│   │   └── Footer.tsx         # Footer component
│   ├── pages/          # Page components
│   │   ├── Index.tsx          # Main page
│   │   ├── CropDetails.tsx    # Detailed crop information page
│   │   └── NotFound.tsx       # 404 error page
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── assets/         # Static assets
├── public/             # Public assets
└── package.json       # Project dependencies and scripts
```

## Crop Database Coverage

- **Cereals & Grains**: Rice, Wheat, Corn, Sorghum, Millets, Barley, Oats
- **Oilseeds**: Groundnut, Sunflower, Sesame, Castor, Safflower
- **Pulses**: Chickpeas, Pigeon Pea, Black Gram, Green Gram, Lentils
- **Vegetables**: Tomatoes, Chillies, Onions, Potatoes, Brinjal, Okra
- **Fruits**: Mango, Banana, Papaya, Guava, Citrus, Pomegranate, Grapes
- **Fiber Crops**: Cotton
- **Sugar Crops**: Sugarcane
- **Specialty Crops**: Herbs, Spices, Medicinal plants, Timber trees
- **Aquatic Crops**: Water spinach, Lotus, Water chestnuts
- **Bog Crops**: Cranberries, Blueberries, Sphagnum moss

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
