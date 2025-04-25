# Vehicle Manager

Una pequeña SPA en React para registrar y visualizar vehículos usando mock data y persistencia en `localStorage`.

---

## 📦 Estructura del proyecto

```text
src/
├── components/
│   ├── FilterBar.tsx            # Barra de filtros y acciones (Volver, Nuevo, Filtrar, Limpiar)
│   ├── VehicleGrid.tsx          # Grid responsive de VehicleCard
│   ├── VehicleCard.tsx          # Tarjeta individual de vehículo
│   ├── VehicleModal.tsx         # Modal de detalle de vehículo (Framer Motion)
│   ├── Pagination.tsx           # Controles de paginación
│   ├── ConfirmModal.tsx         # Modal genérico de confirmación de acción
│   ├── InputField.tsx           # Campo de texto genérico con validación visual
│   ├── PersonSection.tsx        # Sección de datos de persona (propietario, tenedor, conductor)
│   └── VehicleFormButtons.tsx   # Botones de acción en el formulario
├── hooks/
│   ├── useVehicles.ts           # Lógica de listado: carga, orden, filtros, paginación, eliminación
│   └── useVehicleForm.ts        # Lógica de formulario: estado, validaciones, envío, reset
├── pages/
│   ├── LandingPage.tsx          # Hero de bienvenida con navegación
│   ├── VehicleForm.tsx          # Página de registro de vehículo
│   └── VehicleList.tsx          # Página de listado de vehículos
├── types.ts                     # Definición de interfaces `Vehicle` y `Person`
├── App.tsx                      # Configuración de rutas con React Router
├── main.tsx                     # Punto de entrada (Vite / ReactDOM)
└── index.css                    # Estilos globales y configuración de Tailwind
```

---

## 🚀 Tecnologías

- **React** con **Hooks**
- **TypeScript** para tipado seguro
- **Vite** como bundler
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **react-icons** para iconos SVG
- **Framer Motion** para animaciones fluidas
- **React Toastify** para notificaciones emergentes
- **uuid** para generación de identificadores únicos
- **localStorage** para persistencia de datos en el navegador

---

## 🎨 Estilos y UX

- Degradados suaves de fondo (`bg-gradient-to-br from-blue-50 to-indigo-100`)
- Encabezados con `bg-clip-text` y `text-transparent` para texturas de color
- Flexbox y CSS Grid para layouts responsivos
- Cards con `rounded-2xl`, `shadow-lg` y micro-interacciones (`hover:-translate-y-1`, `hover:shadow-2xl`)
- Inputs y selects con `focus:ring`, validación visual de errores (`border-red-500`)
- Modales animados con Framer Motion (scale + fade) y backdrop semi-transparente

---

## 📋 Funcionamiento

1. **Landing Page**
   - Hero con icono de vehículo rebotando (`animate-bounce`)
   - Títulos y subtítulos con degradados y CTA a “Registrar Vehículo” / “Ver Vehículos”

2. **Registrar Vehículo**
   - Formulario gestionado por el hook `useVehicleForm`
   - Validaciones:
     - **Placa**: formato colombiano (3 letras + 3 dígitos, opcional guion)
     - **Año**: número > 1900 y hasta 4 dígitos
     - **Documento**: solo números
     - **Teléfono**: 10 dígitos
     - **Email**: sintaxis válida de correo
     - **Nombre**: solo letras y espacios
   - Al enviar, genera `id` (UUID) y `createdAt` (timestamp ISO), guarda en `localStorage`, muestra toast y resetea el formulario

3. **Listado de Vehículos**
   - Hook `useVehicles` carga y ordena por `createdAt` (más recientes primero)
   - Filtro desplegable hacia abajo (clic en icono) por Año, Marca, Propietario o Tenedor
   - Paginación mostrando 6 vehículos por página
   - Eliminar vehículo con `ConfirmModal`, actualiza `localStorage` y muestra toast
   - Click en tarjeta abre `VehicleModal` con detalle y animaciones

---

## ⚙️ Instalación y scripts

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/safite-vehicle-manager.git
cd safite-vehicle-manager

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Crear build para producción
npm run build

# Previsualizar el build
npm run preview
```

---

## 📂 Personalización

- **Tailwind**: configurar variables y purgado en `tailwind.config.js`
- **Rutas**: editar en `App.tsx`
- **Mock data**: precargar en la consola del navegador mediante
  ```js
  localStorage.setItem('vehiculos', JSON.stringify(exampleVehicles));
  ```

---