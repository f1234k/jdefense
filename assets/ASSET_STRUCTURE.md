# Asset Structure Guide for JDefense

This guide explains where to place your tower and projectile sprites for the visual enhancements.

## Required Directory Structure

```
web/build/assets/
├── towers/
│   ├── sprites/
│   │   ├── basic_tower_level0.png    # Base tower (first tower in your image)
│   │   ├── basic_tower_level1.png    # After 1 upgrade (second tower)
│   │   ├── basic_tower_level2.png    # After 2 upgrades (third tower)
│   │   ├── basic_tower_level3.png    # After 3 upgrades (first catapult)
│   │   ├── basic_tower_level4.png    # After 4 upgrades (second catapult)
│   │   ├── basic_tower_level5.png    # After 5+ upgrades (third catapult)
│   │   ├── fire_tower_level0.png     # Base fire tower
│   │   ├── fire_tower_level1.png     # Upgraded fire tower
│   │   └── ice_tower_level0.png      # Base ice tower
│   └── icons/
│       ├── basic_tower.png           # Icon for UI button (optional)
│       ├── fire_tower.png            # Icon for UI button (optional)
│       └── ice_tower.png             # Icon for UI button (optional)
└── projectiles/
    ├── physical_projectile.png       # Arrow from your sprite sheet
    ├── fire_projectile.png           # Fireball effect (optional)
    └── ice_projectile.png            # Ice shard effect (optional)
```

## Extracting Sprites from Your Image

Based on your provided sprite sheet:

### Tower Sprites (Top 2 rows, 3 columns each)
1. **Row 1 - Stone Towers:**
   - Left: `basic_tower_level0.png` (initial basic tower)
   - Middle: `basic_tower_level1.png` (slightly upgraded)
   - Right: `basic_tower_level2.png` (fully upgraded stone tower)

2. **Row 2 - Catapult Towers:**
   - Left: `basic_tower_level3.png` (wood catapult)
   - Middle: `basic_tower_level4.png` (dark catapult)
   - Right: `basic_tower_level5.png` (upgraded dark catapult)

### Projectile Sprites (Right side of image)
- The arrows on the right side can be saved as:
  - `physical_projectile.png` - Use any of the arrow sprites

### Optional: Character Sprites for Icons
- The soldier/archer sprites at the bottom can be used as tower icons if desired

## Sprite Requirements

- **Format:** PNG with transparency
- **Recommended Size:** 64x64 to 128x128 pixels per sprite
- **Orientation:** Towers should face forward/upward
- **Projectiles:** Arrows should point right (→) as they'll be rotated automatically

## Fallback Behavior

If sprites are not found, the game will fall back to:
- **Towers:** Colored rectangles (as before)
- **Projectiles:** Colored circles based on damage type

## Testing Your Sprites

1. Place sprites in the correct directories
2. Refresh the browser (Ctrl+F5 or Cmd+Shift+R)
3. Start a mission
4. Place a tower - you should see your sprite with 50% opacity while placing
5. Watch it attack - arrows should rotate toward enemies

## Current Implementation Features

✅ Tower sprites load based on upgrade level
✅ Ghost tower preview with 50% opacity while placing
✅ Red tint on ghost tower when hovering invalid locations
✅ Projectiles (arrows) rotate toward their targets
✅ Smooth transitions between upgrade levels
✅ Fallback to simple shapes if sprites aren't found

## Next Steps

1. Extract the sprites from your image using any image editor
2. Save them to the paths shown above
3. Test in-game
4. Enjoy your enhanced tower defense game!
