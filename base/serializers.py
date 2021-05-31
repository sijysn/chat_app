from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'password', 'is_staff']

class UserSerializerWithToken(UserSerializer):
  token = serializers.SerializerMethodField(read_only=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'password', 'is_staff', 'token']

  def get_token(self, obj):
    token = RefreshToken.for_user(obj)
    return str(token.access_token)

class MessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Message
    fields = '__all__'