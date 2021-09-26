from django.conf.urls import url
from cpmAPI import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^tests/$', views.testApi),
    url(r'^tests/([0-9]+)$', views.testApi),

    url(r'^SaveFile$', views.SaveFile),

    #Trabajadores
    url(r'^trabajadores/$', views.trabajadorAPI),
    url(r'^trabajadores/([0-9]+)$', views.trabajadorAPI),
    url(r'^trabajadores/([A-Za-z]+)$', views.trabajadorAPI),

    url(r'^clientes/$', views.clienteAPI),
    url(r'^clientes/([0-9]+)$', views.clienteAPI),
    url(r'^clientes/([A-Za-z]+)$', views.clienteAPI),



              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)