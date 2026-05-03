from .views import TodoViewSet, TagsViewSet
from django.urls import path

urlpatterns = [
    path('todos/', TodoViewSet.as_view(), name='todos'),
    path('tags/', TagsViewSet.as_view(), name='tags'),
    path('todos/<int:id>/', TodoViewSet.as_view(), name='todo-detail'),
    path('tags/<int:id>/', TagsViewSet.as_view(), name='tag-detail'),
]