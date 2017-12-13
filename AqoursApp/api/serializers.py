from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # フィールドは公式参照
        # http://docs.djangoproject.jp/en/latest/topics/auth.html
        model = User
        fields = ('username', 'email', 'is_staff', "last_login", "date_joined")