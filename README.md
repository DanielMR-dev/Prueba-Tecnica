# Safite Vehicle Manager

Una pequeña SPA en React para registrar y visualizar vehículos usando mock data y persistencia en `localStorage`.

---

## 📦 Estructura del proyecto
src/ ├── components/ │ ├── FilterBar.tsx # Barra de filtros y acciones (Volver, Nuevo, Filtrar, Limpiar) │ ├── VehicleGrid.tsx # Grid responsive de VehicleCard │ ├── VehicleCard.tsx # Tarjeta individual de vehículo │ ├── VehicleModal.tsx # Modal de detalle de vehículo (Framer Motion) │ ├── Pagination.tsx # Controles de paginación │ ├── ConfirmModal.tsx # Modal genérico de confirmación de acción │ ├── InputField.tsx # Campo de texto genérico con validación visual │ ├── PersonSection.tsx # Sección de datos de persona (propietario, tenedor, conductor) │ └── VehicleFormButtons.tsx# Botones de acción en el formulario │ ├── hooks/ │ ├── useVehicles.ts # Lógica de listado: carga, orden, filtros, paginación, eliminación │ └── useVehicleForm.ts # Lógica de formulario: state, validaciones, submit, reset │ ├── pages/ │ ├── LandingPage.tsx # Hero de bienvenida con navegación │ ├── VehicleForm.tsx # Página de registro de vehículo │ └── VehicleList.tsx # Página de listado de vehículos │ ├── types.ts # Definición de interfaces Vehicle y Person ├── App.tsx # Rutas con React Router ├── main.tsx # Entrada (Vite / ReactDOM) └── index.css # Tailwind base + custom


---

## 🚀 Tecnologías

- **React** con **Hooks**  
- **TypeScript** para tipado seguro  
- **Vite** como bundler  
- **React Router** para navegación  
- **Tailwind CSS** para estilos  
- **react-icons**  
- **Framer Motion** para animaciones  
- **React Toastify** para notificaciones  
- **uuid** para generar IDs  
- **localStorage** para persistencia de datos  

---

## 🎨 Estilos y UX

- Degradados suaves de fondo  
- Encabezados con `bg-clip-text` y `text-transparent`  
- Flexbox y CSS Grid para layouts responsivos  
- Cards con `rounded-2xl`, `shadow-lg` y micro-interacciones  
- Form controls con `focus:ring` y validación visual (`border-red-500`)  
- Modales animados (scale + fade) y backdrop semi-transparente  

---

## 📋 Funcionamiento

1. **Landing Page**  
   - Hero con icono animado y links a “Registrar Vehículo” y “Ver Vehículos”.

2. **Registrar Vehículo**  
   - Formulario controlado por `useVehicleForm`.  
   - Validaciones de placa (formato colombiano), año, ID, teléfono, email y nombre.  
   - Al enviar genera `id` (UUID) y `createdAt`, guarda en `localStorage`, muestra toast y limpia form.

3. **Listado de Vehículos**  
   - Carga y ordena por `createdAt` (más recientes primero).  
   - Filtro desplegable por Año, Marca, Propietario o Tenedor.  
   - Paginación (6 ítems/página).  
   - Eliminar con confirmación y toast; detalle en modal animado.

---

## ⚙️ Instalación y scripts

```bash
# Clonar repo
git clone https://github.com/tu-usuario/safite-vehicle-manager.git
cd safite-vehicle-manager

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build producción
npm run build

# Previsualizar build
npm run preview

