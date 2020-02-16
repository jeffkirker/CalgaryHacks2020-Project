from rest_framework import serializers
from . import models


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = ['title', 'time', 'location', 'picture', 'organizerEmail', 'description',
                  'registration', 'deadline', 'eventType', 'faculty', 'onCampus', 'hasFood', 'isFree']
