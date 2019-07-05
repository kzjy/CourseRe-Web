from rest_framework import routers
from .api import ReminderViewSet, CourseViewSet

router = routers.DefaultRouter()
router.register('api/reminders', ReminderViewSet, 'reminders')
router.register('api/courses', CourseViewSet, 'courses')

urlpatterns = router.urls