from django.contrib import admin
from .models import Item, ItemImage, Tag

# Register your models here.
# class ProjectImageInLine(admin.TabularInline):
#     model = ProjectImage
#     extra = 1 #Yüklenecek max görsel sayısı

class TagAdmin(admin.ModelAdmin):
    list_display = ("name", )
    search_fields = ("name", )

class ItemImageInLine(admin.TabularInline):
    model = ItemImage
    extra = 1

class ItemAdmin(admin.ModelAdmin):
    list_display = ("title", )
    inlines = [ItemImageInLine]
    search_fields = ("title", "description")
    list_filter = ("tags", )

admin.site.register(Tag, TagAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(ItemImage)