from django.contrib.auth.models import User
from rest_framework import viewsets
from AqoursApp.api.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    # 最終ログイン順に取得
    queryset = User.objects.all().order_by('-last_login')
    serializer_class = UserSerializer