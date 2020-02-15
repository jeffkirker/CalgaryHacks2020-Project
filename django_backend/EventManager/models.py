from django.db import models
from django.contrib.postgres.fields import ArrayField

class Events(models.Model):
    title = models.CharField()
    time = models.DateTimeField()
    location = models.CharField()
    description = models.TextField
    picture = models.models.FileField(upload_to="images/")
    registration = models.URLField()
    organizerEmail = models.EmailField()
    deadline = models.DateTimeField()
    tags = models.ArrayField(models.models.CharField())
    faculty = models.CharField()
    onCampus = models.BooleanField()
    hasFood = models.BooleanField()
    isPrice = models.BooleanField()

class Tags(models.Model):
    tag = models.CharField()

class Faculty(models.Model):
    faculty = models.CharField()