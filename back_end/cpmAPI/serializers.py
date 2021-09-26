from rest_framework import serializers
from cpmAPI.models import Test, Trabajador, Cliente

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('TestId',
                  'TestName')

class TrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = ('trabajador_id',
                  'numero_cedula',
                  'nombre',
                  'apellido',
                  'numero_celular',
                  'contrasena',
                  'cargo',
                  'is_active')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('cliente_id',
                  'numero_nit',
                  'nombre',
                  'apellido',
                  'correo',
                  'direccion',
                  'contrasena',
                  'cargo',
                  'is_active')
