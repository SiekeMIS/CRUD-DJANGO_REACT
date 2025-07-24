from django.db import models

# Create your models here.
class Cachorro(models.Model):
    name_cachorro = models.CharField(max_length=200)
    description_cachorro = models.TextField(blank=True)
    adoptado = models.BooleanField(default=False)

    def __str__(self):
        return self.name_cachorro