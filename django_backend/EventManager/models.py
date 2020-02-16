from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255)
    time = models.DateTimeField()
    location = models.CharField(max_length=255)
# TODO
    picture = models.ImageField(upload_to="images/", null=True) 
    organizerEmail = models.EmailField()

    description = models.TextField(null=True)
    registration = models.URLField(null=True)
    deadline = models.DateTimeField(null=True)
    eventType = models.CharField(max_length=255, null=True)
    faculty = models.CharField(max_length=255, null=True)
    onCampus = models.BooleanField(null=True)
    hasFood = models.BooleanField(null=True)
    isFree = models.BooleanField(null=True)
