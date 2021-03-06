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
    user = models.ForeignKey(User, related_name='todos',
                             on_delete=models.CASCADE, null=True)
# will be added: Topic(in a board)


# class TagName(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=30)
#     color = models.CharField(max_length=30)


# class Tag(models.Model):
#     item_id = models.ForeignKey(
#         Todo, related_name='items', on_delete=models.CASCADE, null=False)
#     tag_id = models.ForeignKey(
#         TagName, related_name='tags', on_delete=models.CASCADE, null=False)
