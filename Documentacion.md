# Nombre del Proyecto

🔹 **Descripción breve** 
Este es un proyecto CRUD (Create, Read, Update, Delete) para gestión de libros, implementado con una API RESTful usando Laravel 12.19.3 en el backend y Vue.js (@vue/cli 5.0.8) en el frontend. El sistema permite gestionar un catálogo de libros con operaciones completas a través de una interfaz moderna.

## Tecnologías utilizadas para el Backend (API)
- PHP 8.2.12
- Laravel 12.19.3
- Composer 2.8.9
- MySQL 9.3.0
- XAMPP 8.2.12

## Tecnologías utilizadas para el Frontend
- Vue.js 3
- @vue/cli 5.0.8
- Node.js v22.17.0
- npm 10.9.2
- Axios (para consumo de API)

## Requisitos previos para el Backend
- PHP 8.2.x
- Composer 2.x
- MySQL 5.7+ o MariaDB 10.3+
- Extensiones PHP requeridas: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML
## ## Requisitos previos para el Frontend
- Node.js v18+
- npm 9+
- Vue CLI 5.x

## Instalación y Configuración (Configuración del Backend (Laravel API))
1. Clona el repositorio o descarga los archivos: git clone https://github.com/SiekeMIS/LIbreria-Laravel-Vue.js.git
2. Coloca la carpeta del proyecto en el directorio htdocs de XAMPP: C:\xampp\htdocs\PHP-MYSQL-CRUD
3. Entrar al directorio del proyecto (cd api-crud-ph)
4. Instalar dependencias (composer install)
5. Copiar archivo de entorno y configurar (cp .env.example .env)
6. Generar key de aplicación (php artisan key:generate)
7. Configurar variables de base de datos en .env
   - DB_CONNECTION=mysql
   - DB_HOST=127.0.0.1
   - DB_PORT=3306
   - DB_DATABASE=nombre_basedatos
   - DB_USERNAME=usuario
   - DB_PASSWORD=contraseña
8. Ejecutar migraciones y seeders (php artisan migrate --seed)
9. Iniciar servidor de desarrollo (php artisan serve)

## Instalación y Configuración del Frontend (Vue.js)
1. Entrar al directorio del proyecto (cd nombre-proyecto-frontend)
2. Instalar dependencias (npm install)

## Paso a Paso
- abrir xampp y correr apache y mysql
- Abrir terminal ubicado en el proyecto
- usar comando: php artisan serve
- abrir otra terminal (sin cerrar la otra) ubucado en el frontend (api-crud-ph\cliente\mi-proyecto-vue>)
- usar comando npm run serve


## Funcionalidades
- Crear nuevos libros con título, autor, género, año de publicación, etc.
- Visualizar listado completo de libros.
- Editar información de libros existentes
- Eliminar libros del catálogo

# Contribuciones
- Haz un fork del repositorio.
- Crea una rama con tu nueva feature (git checkout -b feature/nueva-feature).
- Haz commit de tus cambios (git commit -am 'Añade nueva feature').
- Haz push a la rama (git push origin feature/nueva-feature).
- Abre un Pull Request.

# Futuras Mejoras
- Mejorar la estetica.
- Sistema de autenticación (JWT)
- Valoraciones y reseñas de libros
- Exportación a PDF/Excel de catálogo
- Integración con APIs externas (Google Books)
- Sistema de préstamos de libros
- Mejoras en UI/UX con animaciones
- Pruebas unitarias y E2E