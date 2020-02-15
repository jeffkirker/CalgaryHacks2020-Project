from django.shortcuts import render
from .models import *
from .serializers import EventsSerializer
from rest_framework.decorators import api_view
from django.http import JsonResponse
from datetime import datetime, timedelta
# import json


@api_view(["GET"])
def getEvents(request):
    dataModel = Events.objects.filter(time__gt=datetime.now()).filter(deadline__gt=datetime.now()).order_by("time")

    if "skip" in jsonData.keys():
        pass
    if "bring" in jsonData.keys():
        pass
    if "skip" in jsonData.keys():
        pass
    if "skip" in jsonData.keys():
        pass
    if "skip" in jsonData.keys():
        pass
    if "skip" in jsonData.keys():
        pass
    if "skip" in jsonData.keys():
        pass

    serializer = EventsSerializer(dataModel, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(["POST"])
def addEvent(request):
    jsonData = request.POST
    event = Events(
        title=jsonData["title"],
        time=datetime.strptime(jsonData["time"], "%Y-%m-%d %H:%M:%S%z"),
        location=jsonData["location"],
# TODO  # picture=
        organizerEmail=jsonData["organizerEmail"],
        description=jsonData["description"],
        registration=jsonData["registration"],
        deadline=datetime.strptime(jsonData["deadline"], "%Y-%m-%d %H:%M:%S%z"),
        eventType=jsonData["eventType"],
        faculty=jsonData["faculty"],
        onCampus=bool(int(jsonData["onCampus"])),
        hasFood=bool(int(jsonData["hasFood"])),
        isFree=bool(int(jsonData["isFree"]))
    )

    try:
        event.save()
        data = {'status': 'OK'}
    except expression:
        data = {'status': expression}

    return JsonResponse(data)
