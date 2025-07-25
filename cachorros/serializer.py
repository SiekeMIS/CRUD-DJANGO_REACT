from rest_framework import serializers
from .models import Cachorro

class CachorroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cachorro
        fields = '__all__'