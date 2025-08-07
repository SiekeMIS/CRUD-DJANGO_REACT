# Importa el módulo 'serializers' de Django REST Framework para crear serializadores
from rest_framework import serializers

# Importa el modelo 'Cachorro' definido en el mismo directorio (archivo models.py)
from .models import Cachorro

# Define un serializador para el modelo 'Cachorro' usando ModelSerializer
class CachorroSerializer(serializers.ModelSerializer):
    # Clase Meta para configurar el comportamiento del serializador
    class Meta:
        # Especifica el modelo que será serializado (Cachorro)
        model = Cachorro
        
        # '__all__' indica que se deben incluir todos los campos del modelo en el serializador
        fields = '__all__'