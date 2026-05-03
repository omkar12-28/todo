from .models import Todo, Tags
from rest_framework import serializers

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['id', 'name']

class TodoSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'is_completed', 'due_date', 'priority', 'tags']