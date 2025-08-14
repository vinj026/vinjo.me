---
title: Switching from Hyprland to Labwc
date: 2025-08-14
description: Switching from Hyprland to Labwc and my simple Wayland setup.
tags:
  - wayland
  - labwc
  - hyprland
  - dotfiles
  - workflow
seo:
  title: Switching from Hyprland to Labwc
  description: Switching from Hyprland to Labwc and my simple Wayland setup.
---

# Switching From Hyprland To Labwc page

A few weeks ago, I decided to switch from Hyprland to Labwc. At first, Hyprland felt amazing smooth, beautiful animations, and the tiling WM kept my workspace neat. But over time, I ran into small issues that started to get annoying. For example, when using Packet Tracer or certain apps, popups that should appear in the center would instead show up as regular windows and get tiled. It messed up the whole layout.

To be fair, that’s normal because Hyprland isn’t a stacking WM. You *can* fix it with window rules so the popups behave correctly, but imagine having to set that up every time you try a new app that uses popups, it’s exhausting. I wanted something more “set and forget.”

That’s when I tried Labwc. It felt like going back to something simple and predictable. Popups appeared exactly where they should, the layout stayed intact, and the whole workflow felt calmer.

**My quick setup**

- **OS:** EndeavourOS
- **WM:** Labwc
- **Panel:** Waybar
- **Launcher:** Rofi
- **Terminal:** Kitty
- **Wallpaper:** Swaybg
- **Screenshot:** Grim + Slurp

**Screenshoot**

![preview](/images/blog/preview.png)

**My Dotfiles**

all the configs are in my [GitHub dotfiles](https://github.com/vinj026/.dotfiles). Just clone
