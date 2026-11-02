# NEON MAP v0.9.8 (Private)

A third-party UI extension for **SillyTavern**, prepared from the NEON MAP v0.9.7 standalone prototype for personal use.

**Version:** 0.9.8  
**Installation status:** Repository structure and browser mock tests verified; **not yet verified against a live SillyTavern server**.  
**Repo visibility recommendation:** **Private**.

## Features

- Local atlas with four zoom levels: world → place/building → floor → room.
- Place cards, details, pins, a single navigation target, exploration fog, and local tracking based on chat and linked World Info/Lorebook data.
- Local Pixel Art rendering in the browser, with no image-generation API or credits.
- Optional third-party image generation. Paid Pollinations mode is **off by default** and requires confirmations before selecting it, linking a wallet, and submitting a paid generation.
- Per-chat map data stored in SillyTavern chat metadata.

## Files

- `manifest.json`: SillyTavern extension manifest.
- `index.js`: production browser extension script (the demo's fake SillyTavern context was removed).
- `style.css`: scoped UI styles.
- `INSTALL_PRIVATE_TH.md`: complete private GitHub upload + personal installation instructions in Thai.
- `CHANGELOG_TH.md`: change notes.

## Install

Read **[INSTALL_PRIVATE_TH.md](INSTALL_PRIVATE_TH.md)**. In short:

1. Create a **Private** GitHub repository.
2. Upload these **extracted files**, so `manifest.json` is at the repository root. Do **not** upload just the zip file.
3. For a private repository, prefer cloning it while signed in using GitHub Desktop (or Git with configured credentials), then copying the resulting repository folder into your SillyTavern user extension directory.
4. Restart SillyTavern and open a character chat; use the floating **MAP** button.

## Safety and limitations

- Opening the local map and drawing Local Pixel Art does not issue a paid API request or add extra roleplay-model tokens. The local renderer consumes browser CPU/memory, and the chat may already contain its own state tokens from other roleplay components.
- The location geometry is schematic unless confirmed by lore/scene data. The extension should not be treated as an authoritative map of a fictional world.
- When **AI Horde / Pollinations** is intentionally enabled, image prompts may be sent to external providers. Pollinations may cost real credits after confirmation. AI Horde availability and provider terms can change.
- The extension has only been checked through static code validation and browser mock tests. Test on your installed version of SillyTavern and back up important chats before use.
- **Do not add credentials, personal chats, or access tokens to GitHub**. A Private repository still requires good credential hygiene.

This repository intentionally does not include the Standalone Demo or any fabricated demo conversations.

## v0.9.8 Floating Bottom Map UI

- Draggable circular MAP bubble with UI-only saved coordinates.
- Bubble click opens a resizable, bottom-docked window over SillyTavern. No full-screen takeover.
- Window top grab strip / top-left corner for resizing; header +/- controls for height.
- X restores the bubble; mobile Info toggle switches map and sidebar; map zoom continues to work.
- Auto-open is optional and defaults OFF even for older installs.
- Does not add prompt tokens or paid image operations. Private repo installation requires Git authentication.
