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
  user = serializers.SerializerMethodField(read_only=True)
  sent_at = serializers.DateTimeField(format="%Y %m %d %H %M")

  class Meta:
    model = Message
    fields = ['id', 'user_id', 'text', 'sent_at', 'user']

  def get_user(self, obj):
    user_detail = UserSerializerWithToken(User.objects.get(id=obj.user_id.id)).data
    return user_detail