from functools import partial
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer








# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, id):
    comments = Comment.objects.filter(video_id=id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Getting "get() return more than one Comment -- it returned 3 intermediate django 20:30!" 
@api_view(['PATCH'])
def likes(request, id):
    #comments = Comment.objects.filter(video_id=id, likes=0)
    

    type = request.query_params.get('type')
    print(type)


    if type == 'likes':
        comments = Comment.objects.filter(video_id=id)
    
        data = {'likes': comments.likes + int(1)}
        serializer = CommentSerializer(comments, request=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
"""    
    elif type == 'dislikes':
        data = {'dislikes': comments.dislikes - int(1)}
        serializer = CommentSerializer(comments, request=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
"""
