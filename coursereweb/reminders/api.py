from reminders.models import Reminder, Course
from rest_framework import viewsets, permissions
from .serializers import ReminderSerializer, CourseSerializer

# Viewset 
class ReminderViewSet(viewsets.ModelViewSet):
    # queryset = Reminder.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]  
    
    serializer_class = ReminderSerializer


    def get_queryset(self):
        return self.request.user.owner_reminders.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer