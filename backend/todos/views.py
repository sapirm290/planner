from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from rest_framework import serializers, permissions, viewsets
from rest_framework.response import Response
from .serializers import TodoSerializer
from .models import Todo
from django.views.generic import TemplateView


class TodoViewSet(viewsets.ViewSet):

    # queryset = Todo.objects.all()
    # serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Todo.objects.filter(user=self.request.user)

    def list(self, request):
        serializer = TodoSerializer(self.get_queryset(), many=True)
        permission_classes = [permissions.IsAuthenticated]
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        Todo = get_object_or_404(self.get_queryset(), pk=pk)
        serializer = TodoSerializer(Todo)
        permission_classes = [permissions.IsAuthenticated]
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@login_required
def index(request):
    print('get to index function')
    return render(request, "index.html")
