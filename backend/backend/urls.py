from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path("api/", include("api.urls")),
    path('admin/', admin.site.urls),
    path("", include("api.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)