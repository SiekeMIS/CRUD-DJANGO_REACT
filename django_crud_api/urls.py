"""
Configuración de URLs para el proyecto django_crud_api.

La lista `urlpatterns` enruta URLs a vistas. Para más información ver:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Ejemplos:
Vistas basadas en funciones
    1. Importar:  from my_app import views
    2. Agregar URL:  path('', views.home, name='home')
Vistas basadas en clases
    1. Importar:  from other_app.views import Home
    2. Agregar URL:  path('', Home.as_view(), name='home')
Incluir otra URLconf
    1. Importar include(): from django.urls import include, path
    2. Agregar URL:  path('blog/', include('blog.urls'))
"""

# Importa el módulo admin de Django para las URLs del panel de administración
from django.contrib import admin

# Importa path e include para el manejo de rutas de URLs
from django.urls import path, include

# Lista principal de patrones de URLs - mapea URLs a funciones de vista
urlpatterns = [
    # URL del sitio de administración (accesible en /admin/)
    path('admin/', admin.site.urls),
    
    # Incluye las URLs de la app 'cachorros' (accesibles en /cachorros/)
    # Todas las URLs definidas en cachorros/urls.py tendrán el prefijo 'cachorros/'
    path('cachorros/', include('cachorros.urls'))
]