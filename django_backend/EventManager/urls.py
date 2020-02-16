from django.urls import path
from . import views, api

urlpatterns = [
    path("getEvents", views.getEvents),
    path("addEvent", views.addEvent),
    path("getEventbrite", api.getEventbrite)
]