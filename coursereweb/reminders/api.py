from reminders.models import Reminder, Course
from rest_framework import viewsets, permissions
from .serializers import ReminderSerializer, CourseSerializer

# Viewset 
class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ReminderSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer