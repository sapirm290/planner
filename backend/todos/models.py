from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200, null=False)
    description = models.CharField(max_length=500)
    time_added = models.DateTimeField(default=timezone.now)
    deadline = models.DateTimeField(default=timezone.now)
    is_archived = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
# will be added: Topic(in a board)

# class Category(models.Model):
#     name = models.CharField(max_length = 40, null=False)
