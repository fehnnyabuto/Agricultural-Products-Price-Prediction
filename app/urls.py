from django.urls import path
from ..templates import views

urlpatterns = [
    path('', views.index, name='index'),
]


from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('app.urls')), 
]
