from rest_framework import serializers
from .models import Item, ItemImage, User

class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ['image']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']  # Adjust fields as needed

class ItemSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    tags = serializers.StringRelatedField(many=True)  # or TagSerializer(many=True)
    images = ItemImageSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['id', 'author', 'title', 'description', 'tags', 'images']
