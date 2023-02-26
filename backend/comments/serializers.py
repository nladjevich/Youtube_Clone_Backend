from rest_framework import serializers
from .models import Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1