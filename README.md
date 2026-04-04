# 🎰 Casino Landing (Monorepo)

Cross-platform casino landing project built with modern monorepo architecture.  
Supports both **Web (React + Vite)** and **Mobile (Expo / React Native)** using shared components and logic.

---

## 🚀 Tech Stack

**Core**
- React
- React Native (Expo)
- TypeScript

**Monorepo & Tooling**
- pnpm (workspaces)
- Tamagui (cross-platform UI)
- Vite

**State & Data**
- Zustand
- React Query

---

## 📁 Project Structure

apps/
  web/        → React (Vite)
  mobile/     → Expo (React Native)

packages/
  shared-ui/   → reusable UI components
  shared-api/  → API layer (React Query)
  config/      → Tamagui config / design system

pnpm-workspace.yaml

---

## ⚙️ Getting Started

### Install dependencies

```bash
pnpm install

run web 
pnpm --filter web dev

run mobile 
pnpm --filter mobile start

Design References:

https://dribbble.com/shots/26782507-Mollybet-Bet-Trading-Interface

https://dribbble.com/shots/26003848-PepperMill-Lobby

https://dribbble.com/shots/26003848-PepperMill-Lobby

