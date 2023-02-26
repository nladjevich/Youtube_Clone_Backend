from rest_framework import serializers
from .models import Comments

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'make', 'model', 'year', 'user']
        depth = 1