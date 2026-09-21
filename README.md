# SENDER · sender-web3

Web corporativa 3D de **SENDER — Tecnología que transmite** (Broadcasting y Telecomunicaciones, Chile).
Stack: **Vite + React + Three.js (@react-three/fiber + drei) + Lenis + Tailwind CSS**, desplegada en GitHub Pages.

## 🚀 Despliegue rápido

1. Crea el repo **público** `sender-web3` en https://github.com/new (sin README).
2. Clona y copia estos archivos dentro:

```bash
git clone https://github.com/TU-USUARIO/sender-web3.git
cd sender-web3
# copia aquí todo el contenido de este proyecto
npm install
npm run dev     # prueba local en http://localhost:5173
```

3. Verifica el build y sube todo (incluye `package-lock.json`, lo necesita `npm ci`):

```bash
npm run build
git add .
git commit -m "feat: sender web 3 ready for deploy"
git push origin main
```

4. En GitHub: **Settings → Pages → Source: "GitHub Actions"**. Espera 2-3 min.
5. Tu web estará en: **https://TU-USUARIO.github.io/sender-web3**

## ✏️ Personaliza tus datos

Abre `src/App.jsx` y edita el bloque `CONTACT` al inicio del archivo:

```js
const CONTACT = {
  phoneDisplay: '+56 9 1234 5678',   // ← tu número visible
  phoneHref: 'tel:+56912345678',     // ← para el botón de llamada
  whatsapp: 'https://wa.me/56912345678?text=...', // ← tu WhatsApp
  email: 'contacto@sender.cl',       // ← tu correo
  location: 'Santiago, Chile',
}
```

## ⚠️ Notas importantes

- `base` en `vite.config.js` **debe coincidir exactamente** con el nombre del repo
  (`/sender-web3/`). Si cambias el nombre del repo, cambia también el `base`.
- El paquete de scroll suave es **`lenis`** (el oficial de darkroomengineering).
  El nombre `@tanstack/react-lenis` no existe en npm y hace fallar `npm install`.
- `npm ci` en el workflow requiere que `package-lock.json` esté commiteado (ya viene incluido).

## 📁 Estructura

```
├── .github/workflows/deploy.yml   # CI/CD → GitHub Pages
├── index.html
├── package.json
├── vite.config.js                 # base: '/sender-web3/'
├── tailwind.config.js
├── postcss.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx                    # toda la web (3D + secciones)
```
