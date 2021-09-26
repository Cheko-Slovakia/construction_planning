from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Test(models.Model):
    class Meta:
        db_table = 'Tests'
    test_id = models.AutoField(primary_key=True)
    test_name = models.CharField(max_length=100)

class Trabajador(models.Model):
    class Meta:
        db_table = 'Trabajadores'
    #user = models.OneToOneField(User, on_delete=models.CASCADE)
    trabajador_id = models.AutoField(primary_key=True)
    numero_cedula = models.CharField(max_length=30)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    numero_celular = models.CharField(max_length=15)
    contrasena = models.CharField(max_length=50)
    cargo = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

class Cliente(models.Model):
    class Meta:
        db_table = 'Clientes'
    cliente_id = models.AutoField(primary_key=True)
    numero_nit = models.CharField(max_length=30)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    correo = models.EmailField()
    direccion = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=50)
    cargo = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)



