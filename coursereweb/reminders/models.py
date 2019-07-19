from django.db import models
from django.contrib.auth.models import User 


# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=40, unique=True, blank=False)
    notes = models.TextField(max_length=1000, editable=True)
    info = models.TextField(max_length=100, default="A happy little course")
    owner = models.ForeignKey(User, related_name="owner_courses", on_delete=models.CASCADE, null=True)

class Reminder(models.Model):

    # reminder fields
    name = models.CharField(max_length=40, unique=False)
    reminder_type = models.CharField(max_length=40, choices=[
        ('Assignment', 'A'),
        ('Meet up', 'M'),
        ('Study', 'S'),
        ('Test', 'T')
    ])
    due_date = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # grade status
    status = models.BooleanField(default=False)
    total = models.FloatField(blank=False, default=100)
    received = models.FloatField(default=0)
    weight = models.FloatField(blank=False, default=100)

    # course
    course = models.ForeignKey(Course, related_name="course_reminders", on_delete=models.CASCADE, null=True, blank=True)
    
    # User
    owner = models.ForeignKey(User, related_name="owner_reminders", on_delete=models.CASCADE, null=True)


