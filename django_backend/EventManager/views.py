from django.shortcuts import render
from .models import *
from .serializers import EventSerializer
from rest_framework.decorators import api_view
from django.http import JsonResponse
from datetime import datetime


@api_view(["GET"])
def getEvents(request):
    jsonData = request.GET

    dataModel = Event.objects.filter(time__gt=datetime.now()).exclude(deadline__lt=datetime.now()).order_by("time")
    
    if "skip" in jsonData.keys():
        dataModel = dataModel.all()[int(jsonData["skip"]):]
    if "bring" in jsonData.keys():
        dataModel = dataModel.all()[:int(jsonData["bring"])+1]
    if "onCampus" in jsonData.keys():
        dataModel = dataModel.filter(onCampus=bool(int(jsonData["onCampus"])))
    if "hasFood" in jsonData.keys():
        dataModel = dataModel.filter(hasFood=bool(int(jsonData["hasFood"])))
    if "isFree" in jsonData.keys():
        dataModel = dataModel.filter(isFree=bool(int(jsonData["isFree"])))
    if "eventType" in jsonData.keys():
        dataModel = dataModel.filter(eventType=jsonData["eventType"])
    if "faculty" in jsonData.keys():
        dataModel = dataModel.filter(faculty=jsonData["faculty"])

    serializer = EventSerializer(dataModel, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(["POST"])
def addEvent(request):
    jsonData = request.POST
    print(jsonData)
    if jsonData.get("deadline"):
        deadline = datetime.strptime(jsonData.get("deadline"), "%Y-%m-%d %H:%M:%S")
    else:
        deadline = None
    
    if jsonData.get("onCampus"):
        onCampus = bool(int(jsonData.get("onCampus")))
    else:
        onCampus = None

    if jsonData.get("hasFood"):
        hasFood = bool(int(jsonData.get("hasFood")))
    else:
        hasFood = None

    if jsonData.get("isFree"):
        isFree = bool(int(jsonData.get("isFree")))
    else:
        isFree = None

    event = Event(
        title=jsonData["title"],
        time=datetime.strptime(jsonData["time"], "%Y-%m-%d %H:%M:%S"),
        location=jsonData.get("location"),
# TODO  # picture=
        organizerEmail=jsonData.get("organizerEmail"),
        description=jsonData.get("description"),
        registration=jsonData.get("registration"),
        deadline=deadline,
        eventType=jsonData.get("eventType"),
        faculty=jsonData.get("faculty"),
        onCampus=onCampus,
        hasFood=hasFood,
        isFree=isFree
    )

    # try:
    event.save()
    data = {'status': 'OK'}
    # except expression as I:
    #     data = {'status': I}

    return JsonResponse(data)
