from django.urls import path, include
from rest_framework import routers
from .api import TodoViewSet
from . import views


router = routers.DefaultRouter()
router.register('api/todos', TodoViewSet, basename='')

urlpatterns = [
    path('', include(router.urls))
]
