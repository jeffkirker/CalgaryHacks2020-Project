from rest_framework.decorators import api_view
from django.http import JsonResponse
from eventbrite import Eventbrite
from datetime import datetime
from urllib.parse import urlparse


@api_view(["GET"])
def getEventbrite(request):
    url = urlparse(request.GET["url"])
    eventid = url.path.split('-')[-1]

    eventbrite = Eventbrite('O2P5KMD4L2BGOIFJJRS4')
    event = eventbrite.get_event(eventid, expand='venue,format')

    eventdic = {}
    eventdic['title'] = event["name"]["text"]
    if "start" in event.keys():
        eventdic["time"] = datetime.strptime(
            event["start"]["local"], '%Y-%m-%dT%H:%M:%SZ')
    else:
        eventdic["time"] = None
    try:
        eventdic["location"] = event["venue"]["name"] + \
            " " + event["venue"]["address"]["address_1"]
    except expression as identifier:
        eventdic["location"] = None
    try:
        eventdic["picture"] = event["logo"]["original"]["url"]
    except expression as identifier:
        eventdic["picture"] = None
    if "summary" in event.keys():
        eventdic['description'] = event["summary"]
    else:
        eventdic['description'] = None
    eventdic['registration'] = event["url"]
    if "is_free" in event.keys():
        eventdic['isFree'] = event["is_free"]
    else:
        eventdic['isFree'] = None

    return JsonResponse(eventdic, safe=False)
