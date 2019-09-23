from rest_framework import serializers, permissions, viewsets
from .serializers import TodoSerializer
from .models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todos.all()
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)