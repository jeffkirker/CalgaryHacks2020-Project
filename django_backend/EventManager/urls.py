from django.urls import path
from . import views

urlpatterns = [
    path("getEvents", views.getEvents),
    path("addEvent", views.addEvent),
    #remove this
    path("upload_file", views.upload_file)
]