from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200, null=False)
    description = models.CharField(max_length=500, null=True)
    # time_created = models.DateTimeField(defauly=now())
    # user = models.CharField(max_length=200, null=False)
# class Category(models.Model):
#     name = models.CharField(max_length = 40, null=False)