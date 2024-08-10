from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from .serializers import ItemSerializer
from .models import Item
from rest_framework import generics, viewsets

# Create your views here.
class IndexView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def item(request, item_id):
    item = get_object_or_404(Item, pk=item_id)
    return HttpResponse(f"Item ID: {item_id} Item Name: {item.title}, Author: {item.author.username}, Tags: {item.tags} Description: {item.description}")

def detail(request, item_id):
    response = "You're looking at item of id %s."
    return HttpResponse(response % item_id)