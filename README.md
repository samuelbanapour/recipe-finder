# Recipe Finder

Find recipes based on the ingredients you have. Filter by dietary preference, meal type, cooking time, and difficulty.

## Platforms

| Platform | Format | Build Command |
|----------|--------|---------------|
| macOS | `.dmg`, `.zip` | `npm run dist:mac` |
| Windows | `.exe` (NSIS), `.appx` (Store) | `npm run dist:win` |
| Linux | `.AppImage`, `.deb` | `npm run dist:linux` |
| Android | `.apk` | `npm run android:debug` |
| iOS / iPad | Xcode project | `npm run ios:prepare` |

## Quick Start

```bash
npm install
npm start
```

## Desktop Builds

### macOS
```bash
npm run dist:mac
# Output: dist/Recipe Finder-1.0.0-universal.dmg
```

### Windows
```bash
npm run dist:win
# Output: dist/Recipe Finder Setup 1.0.0.exe
# Windows Store: dist/Recipe Finder-1.0.0-x64.appx
```

### Linux
```bash
npm run dist:linux
# Output: dist/Recipe Finder-1.0.0.AppImage
```

## Mobile Builds

### Android (.apk)
Requires Android SDK installed.

```bash
npm run android:debug
# Output: android/app/build/outputs/apk/debug/app-debug.apk

npm run android:release
# Output: android/app/build/outputs/apk/release/app-release.apk
```

### iOS / iPad
Requires Xcode and macOS.

```bash
npm run ios:prepare
# Then open ios/App/App.xcworkspace in Xcode
# Build and run from Xcode, or archive for App Store
```

## Features

- **60+ recipes** across breakfast, lunch, dinner, snacks, and desserts
- **Autocomplete ingredient picker** with categorized suggestions
- **Smart matching** — shows exactly which ingredients you have vs. need
- **Sort by**: Best Match, Cook Time, Name, or Difficulty
- **Filter by**: Dietary (Vegetarian, Vegan, Gluten-Free, Dairy-Free, Low-Carb), Meal Type, Difficulty
- **"What Can I Make Now?"** — instantly find recipes you can cook
- **Expandable recipe cards** with full step-by-step instructions
- **Responsive design** — works on all screen sizes

## Tech Stack

- Electron (desktop)
- Capacitor (mobile)
- Pure HTML/CSS/JavaScript (no frameworks)
