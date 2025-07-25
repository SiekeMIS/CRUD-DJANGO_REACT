from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from cachorros import views

router = routers.DefaultRouter()
router.register(r'cachorros', views.CachorroView, 'cachorros')

urlpatterns = [
    path("api/c1/", include(router.urls)),
    # path('docs/', include_docs_urls(title= "Cachorros API"))
]