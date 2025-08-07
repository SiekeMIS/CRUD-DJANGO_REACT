# Importa viewsets de DRF para crear vistas que manejen operaciones CRUD automáticamente
from rest_framework import viewsets

# Importa el serializador CachorroSerializer del módulo serializer local
from .serializer import CachorroSerializer

# Importa el modelo Cachorro del módulo models local
from .models import Cachorro

# Define una vista basada en ModelViewSet que proveerá todas las operaciones CRUD
class CachorroView(viewsets.ModelViewSet):
    # Especifica qué serializador debe usar para convertir los objetos Cachorro
    serializer_class = CachorroSerializer
    
    # Define el queryset base que se usará para todas las operaciones (todos los cachorros)
    queryset = Cachorro.objects.all()