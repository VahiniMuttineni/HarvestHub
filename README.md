# Harvest Hub

Harvest Hub is a smart crop recommendation application designed to help farmers make informed decisions about crop selection based on their soil type and seasonal conditions. The application provides personalized crop recommendations with detailed information about growth time, yield potential, and soil compatibility.

## Features

- **Smart Crop Recommendations**: Get personalized crop suggestions based on soil type and season
- **Comprehensive Crop Database**: Access information about 120+ different crops including cereals, vegetables, fruits, legumes, nuts, and spices
- **Soil Type Analysis**: Recommendations tailored for different soil types (Sandy, Loamy, Clay, Silty)
- **Seasonal Guidance**: Optimized suggestions for Spring, Summer, Fall, and Winter seasons
- **Detailed Crop Information**: Each crop includes growth time, yield potential, and suitable soil types
- **Responsive Design**: Works seamlessly on desktop and mobile devices

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

1. **Select Soil Type**: Choose from Sandy, Loamy, Clay, or Silty soil options
2. **Choose Season**: Select the appropriate season (Spring, Summer, Fall, Winter)
3. **Get Recommendations**: Click "Get Recommendations" to view personalized crop suggestions
4. **Explore Crops**: Browse through the recommended crops with detailed information about each one

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
harvest-hub-dt/
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx           # Main landing section with soil/season selection
│   │   ├── CropRecommendations.tsx  # Crop recommendation display
│   │   ├── Features.tsx       # Feature highlights
│   │   ├── Community.tsx      # Community section
│   │   └── Footer.tsx         # Footer component
│   ├── pages/          # Page components
│   │   └── Index.tsx          # Main page
│   └── assets/         # Static assets
├── public/             # Public assets
└── package.json       # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
