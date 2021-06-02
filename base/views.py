from django.shortcuts import render
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

from base.models import *
from base.serializers import *

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  def validate(self, attrs):
    data = super().validate(attrs)

    serializer = UserSerializerWithToken(self.user).data

    for k, v in serializer.items():
      data[k] = v

    return data


class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
  data = request.data

  is_registered = User.objects.filter(username=data['username']).exists()
  if is_registered:
    content = {'detail': 'このユーザーは既に存在しています'}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)

  user = User.objects.create(
    username = data['username'],
    password = make_password(data['password']),
  )

  serializer = UserSerializer(user, many=False)
  return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sendMessage(request):
  user = request.user
  data = request.data

  message = Message.objects.create(
    user_id = user,
    text = data['text']
  )

  serializer = MessageSerializer(message, many=False)
  return Response(serializer.data)


@api_view(['GET'])
def getMessages(request):
  messages = Message.objects.all()
  serializer = MessageSerializer(messages, many=True)
  return Response(sorted(serializer.data, key=lambda x: x['sent_at']))


