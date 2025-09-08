import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyComponent } from 'my-package';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyComponent />
  </StrictMode>,
)
