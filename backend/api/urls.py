from django.urls import path
from .views import IndexView
from api import views


urlpatterns = [
    path("api/", IndexView.as_view(), name="index"),
    path("api/item/<int:item_id>/", views.item, name="detail"),
    path("api/item/<int:item_id>/details/", views.item, name="detail"),
]
