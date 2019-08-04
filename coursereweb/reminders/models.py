from django.db import models
from django.contrib.auth.models import User 


# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=40, unique=True, blank=False)
    notes = models.TextField(max_length=1000, editable=True, blank=True)
    info = models.TextField(max_length=100, default="A happy little course", blank=True)
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
    due_date = models.DateTimeField()

    course = models.ForeignKey(Course, related_name="course_reminders", on_delete=models.CASCADE, null=True, blank=True)
    owner = models.ForeignKey(User, related_name="owner_reminders", on_delete=models.CASCADE, null=True)


class Grade(models.Model):
    name = models.CharField(max_length=40, unique=False)
    category = models.CharField(max_length=40, choices=[
        ('Assignment', 'A'),
        ('Test', 'T'),
        ('Other', 'O')
    ], null=True)

    # grade status
    total = models.FloatField(blank=False)
    received = models.FloatField(blank=False)
    weight = models.FloatField(blank=False)

    course = models.ForeignKey(Course, related_name="course_grades", on_delete=models.CASCADE, null=True, blank=True)
    owner = models.ForeignKey(User, related_name="owner_grades", on_delete=models.CASCADE, null=True)