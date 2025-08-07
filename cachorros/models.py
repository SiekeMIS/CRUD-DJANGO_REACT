# Importa el módulo 'models' de Django, necesario para definir modelos de bases de datos
from django.db import models

# Create your models here.

# Define la clase 'Cachorro', que representa un modelo de base de datos en Django
class Cachorro(models.Model):
    # Campo para el nombre del cachorro: texto con máximo 200 caracteres (CharField)
    name_cachorro = models.CharField(max_length=200)
    
    # Campo para la descripción del cachorro: texto largo opcional (TextField con blank=True)
    description_cachorro = models.TextField(blank=True)
    
    # Campo booleano que indica si el cachorro está adoptado (False por defecto)
    adoptado = models.BooleanField(default=False)

    # Método que define cómo se muestra el objeto en formato string (devuelve el nombre)
    def __str__(self):
        return self.name_cachorro