import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/clerk-react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined, // keep blank to override manually

        layout: {
          logoPlacement: "none",
          socialButtonsPlacement: "bottom",
          showOptionalFields: true,
          helpPageUrl: null,
          socialButtonsVariant: "iconButton",

        },

        variables: {
          colorBackground: "#ffffff",   // WHITE card
          colorText: "#111827",         // dark text
          colorPrimary: "#111827",      // buttons / links
          colorInputBackground: "#ffffff",
          colorInputText: "#111827",
          borderRadius: "12px",
        },



        elements: {
          socialButtonsBlockButtonText: "text-slate-200",

          // card container
          card: "bg-slate-900/70 backdrop-blur-xl shadow-xl border border-slate-700",

          // header text
          headerTitle: "text-sky-300 text-2xl font-semibold",
          headerSubtitle: "text-slate-400",

          // buttons
          formButtonPrimary:
            "bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold hover:opacity-90",

          // inputs
          formFieldInput:
            "bg-slate-800 text-slate-200 border border-slate-700 focus:ring-sky-300",

          // social buttons
          socialButtonsBlockButton:
            "bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700",

          footerActionLink: "text-sky-400 hover:text-sky-300",
        },
      }}
    >

      {/* <div className="min-h-screen bg-slate-950 flex items-center justify-center"> */}
      <App />
    </ClerkProvider>
  </StrictMode>,
)
