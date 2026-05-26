from django.shortcuts import render
from .models import Todo, Tags
from .serializers import TodoSerializer, TagsSerializer
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
# Create your views here.

class MyPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class TodoViewSet(APIView):
    def get(self, request):
        todos = Todo.objects.all()
        paginator = MyPagination()
        paginated_queryset = paginator.paginate_queryset(todos, request)
        serializer = TodoSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class TodoDetailViewSet(APIView):
    def get(self, request, id):
        todo = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo)
        return Response(serializer.data, status=200)

    def put(self, request, id):
        try:
            todo = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            return Response({'error': 'Todo not found'}, status=404)
        
        serializer = TodoSerializer(todo, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    def delete(self, request, id):
        try:
            todo = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            return Response({'error': 'Todo not found'}, status=404)
        
        todo.delete()
        return Response(status=204)
class TagsDetailViewSet(APIView):
    def get(self, request, id):
        print(id)
        tag = Tags.objects.get(id=id)
        print(tag)
        serializer = TagsSerializer(tag)
        return Response(serializer.data, status=200)

    def put(self, request, id):
        try:
            tag = Tags.objects.get(id=request.data.get('id'))
        except Tags.DoesNotExist:
            return Response({'error': 'Tag not found'}, status=404)
        
        serializer = TagsSerializer(tag, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class TagsViewSet(APIView):
    def get(self, request):
        tags = Tags.objects.all()
        paginator = MyPagination()
        paginated_queryset = paginator.paginate_queryset(tags, request)
        serializer = TagsSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    def post(self, request):
        serializer = TagsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
