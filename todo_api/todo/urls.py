from .views import TodoViewSet, TagsViewSet, TagsDetailViewSet, TodoDetailViewSet
from django.urls import path

urlpatterns = [
    path('todos/', TodoViewSet.as_view(), name='todos'),
    path('tags/', TagsViewSet.as_view(), name='tags'),
    path('todos/<int:id>/', TodoDetailViewSet.as_view(), name='todo-detail'),
    path('tags/<int:id>/', TagsDetailViewSet.as_view(), name='tag-detail'),
]