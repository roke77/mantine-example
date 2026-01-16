import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ColorSchemeScript, MantineProvider, type MantineColorsTuple } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './index.css'
import App from './App.tsx'
import Demo from './Demo.tsx'
import Catalog from './Catalog.tsx'
import Activity from './Activity.tsx'
import AiCoach from './AiCoach.tsx'

const honePrimary: MantineColorsTuple = ['#f7f5ff', '#ece8ff', '#d9d1ff', '#c4bcff', '#988ef7', '#7367e1', '#5649c2', '#3d3298', '#251f6e', '#110758']
const honePink: MantineColorsTuple = ['#fff0f6', '#ffe4ef', '#ffc6df', '#ffa7cd', '#ff85bb', '#ff65aa', '#f4468e', '#de266e', '#b91352', '#900739']
const honePeach: MantineColorsTuple = ['#fff8f3', '#ffe8de', '#ffd3c3', '#ffbcaa', '#ffa494', '#ff8c81', '#f06b65', '#d6514e', '#b3393b', '#90262b']
const honeSlate: MantineColorsTuple = ['#f7f7fb', '#ececf5', '#dadaea', '#c4c4dc', '#a8a8cb', '#8b8cb6', '#6b6d9c', '#4f527a', '#34365a', '#1d1a3c']

const honeColors = {
  'hone-primary': honePrimary,
  'hone-pink': honePink,
  'hone-peach': honePeach,
  'hone-slate': honeSlate,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorSchemeScript defaultColorScheme="light" />
    <MantineProvider
      defaultColorScheme="light"
      theme={{
        primaryColor: 'hone-primary',
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        defaultRadius: 'md',
        colors: honeColors,
        headings: {
          fontFamily: 'Space Grotesk, "CircularXXTT", Inter, system-ui, sans-serif',
        },
        defaultGradient: { from: '#6C63D4', to: '#FF8FEA', deg: 125 },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route element={<App />}>
            <Route path="/demo" element={<Demo />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/ai-coach" element={<AiCoach />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
