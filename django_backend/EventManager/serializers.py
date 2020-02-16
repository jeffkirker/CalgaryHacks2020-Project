from rest_framework import serializers
from . import models


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Events
        fields = ['title', 'time', 'location', 'picture', 'organizerEmail', 'description',
                  'registration', 'deadline', 'eventType', 'faculty', 'onCampus', 'hasFood', 'isFree']
