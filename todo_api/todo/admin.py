from django.contrib import admin

from todo.models import Tags, Todo

# Register your models here.
admin.site.register(Todo)
admin.site.register(Tags)