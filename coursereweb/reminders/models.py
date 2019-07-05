from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=40, unique=True, blank=False)
    notes = models.TextField(max_length=1000, editable=True)
    info = models.TextField(max_length=100, default="A happy little course")

class Reminder(models.Model):

    # reminder fields
    name = models.CharField(max_length=40, unique=True)
    reminder_type = models.CharField(max_length=40, choices=[
        ('A', 'Assignment'),
        ('M', 'Meet up'),
        ('S', 'Study'),
        ('T', 'Test')
    ])
    due_date = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # grade status
    status = models.BooleanField(default=False)
    total = models.FloatField(blank=False, default=100)
    received = models.FloatField(default=0)
    weight = models.FloatField(blank=False, default=100)

    # course
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)



