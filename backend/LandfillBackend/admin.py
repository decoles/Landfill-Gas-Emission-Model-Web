from django.contrib import admin
from .models import React

class ReactAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'password')
# Register your models here.

admin.site.register(React, ReactAdmin)
