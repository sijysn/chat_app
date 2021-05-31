from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
  def __str__(self):
    return str(self.username)

class Message(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.SET_NULL, related_name="user_id", null=True)
  text = models.TextField(null=True, blank=True)
  sent_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.text)


