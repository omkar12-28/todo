from django.db import models

# Create your models here.

PRIORITY_CHOICES = [
    ('low', 'Low'),
    ('medium', 'Medium'),
    ('high', 'High'),
]

class Tags(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Todo(models.Model):
    title =  models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)
    due_date = models.DateTimeField(blank=True, null=True)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='low');
    tags = models.ManyToManyField(Tags, blank=True)

    def __str__(self):
        return self.title