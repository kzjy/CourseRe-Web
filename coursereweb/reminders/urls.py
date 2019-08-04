from rest_framework import routers
from .api import ReminderViewSet, CourseViewSet, GradeViewSet

router = routers.DefaultRouter()
router.register('api/reminders', ReminderViewSet, 'reminders')
router.register('api/courses', CourseViewSet, 'courses')
router.register('api/grades', GradeViewSet, 'grades')

urlpatterns = router.urls