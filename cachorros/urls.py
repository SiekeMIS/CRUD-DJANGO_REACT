# Importa las funciones 'path' e 'include' de Django para definir rutas URL
from django.urls import path, include

# Importa la función para incluir URLs de documentación automática de DRF
from rest_framework.documentation import include_docs_urls

# Importa el módulo de routers de DRF para crear rutas API automáticas
from rest_framework import routers

# Importa las vistas del módulo 'cachorros'
from cachorros import views

# Crea un router por defecto de DRF (genera URLs para operaciones CRUD)
router = routers.DefaultRouter()

# Registra la vista 'CachorroView' en el router:
# - r'cachorros': prefijo de URL para estas rutas
# - views.CachorroView: vista que manejará las solicitudes
# - 'cachorros': nombre base para generar nombres de URL
router.register(r'cachorros', views.CachorroView, 'cachorros')

# Lista de patrones URL de la aplicación
urlpatterns = [
    # Incluye todas las URLs generadas por el router bajo el prefijo 'api/c1/'
    path("api/c1/", include(router.urls)),
    
    # URL para documentación API (actualmente comentada)
    # path('docs/', include_docs_urls(title= "Cachorros API"))
]