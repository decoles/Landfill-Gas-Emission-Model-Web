from django.shortcuts import render
from .models import *
from . serializer import *

from rest_framework import viewsets
# Create your views here.

class ReactView(viewsets.ModelViewSet):
    queryset = React.objects.all()
    serializer_class = ReactSerializer