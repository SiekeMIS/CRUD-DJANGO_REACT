from rest_framework import viewsets
from .serializer import CachorroSerializer
from .models import Cachorro

class CachorroView(viewsets.ModelViewSet):
    serializer_class = CachorroSerializer
    queryset = Cachorro.objects.all()