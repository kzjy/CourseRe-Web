from rest_framework import serializers, fields
from reminders.models import Reminder, Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reminder
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['course'] = CourseSerializer(read_only=True)
        return super().to_representation(instance)

