from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(many=True, queryset=Todos.objects.all())
    user = serializers.ReadOnlyField(source='user.username')
    # tags = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Todo.tags.all())

    class Meta:
        model = Todo
        fields = ['user', 'id', 'title', 'description',
                  'time_added', 'deadline', 'is_archived']
