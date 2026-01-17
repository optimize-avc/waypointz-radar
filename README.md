# WayPointz - The Radar 🌌

> A 3D augmented reality map with game mechanics powered by Next.js, React, Cesium, and Google Photorealistic 3D Tiles.

## 🎮 Overview

WayPointz - The Radar is an immersive 3D augmented reality map application that combines cutting-edge geospatial technology with engaging game mechanics. Experience the world through a user-centered "Radar" interface with real-time gameplay elements.

## ✨ Core Features

### 🎯 Radar Positioning
- **User-Centered View**: The user is always at the fixed center of the radar
- **Dynamic Camera**: Smooth camera transitions following user movement
- **High-Precision Tracking**: Real-time geolocation with high accuracy

### 🗺️ H3 Geospatial System
- **Districts (L8)**: Large-scale regional hexagonal zones
- **Interaction Zones (L12)**: Fine-grained gameplay hexes
- **Real-time Hex Rendering**: Dynamic H3 overlay on 3D terrain

### 🎨 Visual Effects
- **Glassmorphism UI**: Blur(16px) with holographic borders
- **Path Awakening**: Animated route lines with physics-based movement
- **Glowing Waypoints**: Amber orbs with particle trails
- **Rotating Hotspots**: Red ellipses indicating 2x XP zones
- **Clock Barrens**: Monochrome tiles for stale data with 50m color bloom

### 🔥 Gameplay Mechanics
- **The Snap**: Auto-snap to locations within 50m, unsnap at >80m
- **Hotspots**: Rotating red zones with 2x XP multiplier (refreshes every 5min)
- **XP System**: Progressive rewards for exploration
- **The Office HQ**: Command center interface displaying district info, XP multipliers, and radar lock status

### 💾 Shadow Cache System
- **Firestore First**: Query local cache before external APIs
- **30-Day TTL**: Automatic cache expiration
- **Hybrid Fallback**: Falls back to Google APIs when cache misses

## 🎨 Color Palette (STRICT)

```css
--background: #1D2D44  /* Deep Navy */
--paths-tech: #64FFDA  /* Electric Cyan */
--loot-waypoints: #FFC65C  /* Warm Amber */
--magic: #D946EF  /* Nexus Fuchsia */
```

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 + React 18
- **3D Rendering**: Cesium (via Resium for React)
- **Map Tiles**: Google Maps Platform Photorealistic 3D Tiles
- **Geospatial**: H3 Hierarchical Hexagonal Indexing
- **Database**: Firebase/Firestore (Shadow Cache)
- **Animations**: GSAP + Framer Motion
- **Styling**: CSS-in-JS with Glassmorphism effects

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Google Maps API Key with 3D Tiles enabled
- Firebase project with Firestore enabled

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/optimize-avc/waypointz-radar.git
cd waypointz-radar
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-app
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. **Download Cesium assets**

Copy Cesium static assets to `public/cesium/`:
```bash
cp -r node_modules/cesium/Build/Cesium/* public/cesium/
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
waypointz-radar/
├── package.json
├── next.config.js
├── .env.local
├── public/
│   └── cesium/
│       ├── Cesium.js
│       └── Widgets/
│           └── widgets.css
├── src/
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── lib/
│   │   ├── firebase.ts
│   │   ├── shadowCache.ts
│   │   ├── h3Utils.ts
│   │   └── radarLogic.ts
│   ├── components/
│   │   ├── layout/
│   │   │   └── HUDShell.tsx
│   │   ├── radar/
│   │   │   ├── RadarViewport.tsx
│   │   │   ├── RadarCesiumScene.tsx
│   │   │   ├── H3HexLayer.tsx
│   │   │   ├── WaypointsLayer.tsx
│   │   │   ├── HotspotsLayer.tsx
│   │   │   └── PathAwakeningLayer.tsx
│   │   └── ui/
│   │       ├── GlassPanel.tsx
│   │       ├── HolographicBorder.tsx
│   │       └── OfficeHQPanel.tsx
│   └── styles.css
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🔧 Configuration

### Google Maps 3D Tiles

Enable the following APIs in your Google Cloud Console:
- Map Tiles API
- Maps JavaScript API

### Firebase/Firestore

1. Create a Firestore database
2. Create a collection named `shadowCache`
3. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /shadowCache/{document=**} {
      allow read, write: if true; // Adjust based on your auth needs
    }
  }
}
```

## 🎮 Game Mechanics

### The Snap
Automatically snap to waypoints when within 50 meters. Unsnaps when distance exceeds 80 meters, creating a smooth engagement zone.

### Hotspots
Rotating red ellipses that appear every 5 minutes, offering 2x XP multipliers for activities within their radius.

### Clock Barrens
Areas with data older than 6 months appear in monochrome. A 50-meter color bloom effect activates around the user in these zones.

### Path Awakening
Your movement history is rendered as glowing cyan paths with physics-based animations, creating a visual trail of exploration.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Cesium](https://cesium.com/) for the incredible 3D geospatial platform
- [Google Maps Platform](https://developers.google.com/maps) for Photorealistic 3D Tiles
- [Uber H3](https://h3geo.org/) for hexagonal hierarchical geospatial indexing
- [Firebase](https://firebase.google.com/) for real-time database and hosting

## 📞 Support

For questions and support, please open an issue in the GitHub repository.

---

**Built with ❤️ by the WayPointz Team**
